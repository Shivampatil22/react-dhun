import React, { useEffect, useRef } from 'react'
import "./Nav.css"
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";
import img from "./img/img4.jpg"
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useMusic } from '../../control/MainControl';
const Nav = () => {
  const [data, setdata] = useState();
  const input=useRef();
  const MusicControl=useMusic();
  const navigate=useNavigate();
  let username=localStorage.getItem("user");
  let temp=username
  username=username.toUpperCase();
  const GetHistory = async () => {
    let result = await fetch(`http://localhost:9090/gethistory/${temp}`, {
      headers: { authorization: localStorage.getItem("token") }
    });
    result = await result.json();
   
    setdata(result);
  }
  useEffect(()=>{
    GetHistory();
  },[])
  const Search=()=>{
    if (input.current.value){
      MusicControl.searcher(input.current.value);
      GetHistory();
      MusicControl.addSearch(input.current.value);
      navigate("/musicapp/search")
    }
     
  }
  const logOut=()=>{
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");

  }
  return (
    <div className='Nav'>
      <span className='page'>
        <button><GrFormPrevious /></button>
        <button><GrFormNext /></button>
      </span>
      <span className='search'>
         <button 
         className='px-3'
         onClick={Search}><BsSearch/></button>
         <input placeholder='Search' ref={input}></input>   
      </span>
      <span className='profile'>
        <span className='imgcontain '><img src={img}></img></span>
        <span className='text-xl font-serif ml-[-10%]'>{username}</span>
      </span>
      <button 
      className='bg-slate-100  ml-7 px-4 py-1 rounded-lg'
      onClick={()=>{logOut()}}>
        LogOut
      </button>
    </div>
  )
}

export default Nav
