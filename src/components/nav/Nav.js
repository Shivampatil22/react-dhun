import React from 'react'
import "./Nav.css"
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";
import img from "./img/img4.jpg"
const Nav = () => {
  return (
    <div className='Nav'>
      <span className='page'>
        <button><GrFormPrevious /></button>
        <button><GrFormNext /></button>
      </span>
      <span className='search'>
         <button className='px-3'><BsSearch/></button>
         <input placeholder='Search'></input>   
      </span>
      <span className='profile'>
        <span className='imgcontain'><img src={img}></img></span>
        <span>Shiv pandey</span>
      </span>
    </div>
  )
}

export default Nav
