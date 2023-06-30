import React, { useState } from 'react'
import "./bottom.css"
import img1 from './imgs/img7.jpg';
import audio1 from './imgs/1.mp3';
import { FaPlay } from "react-icons/fa";
import { BsFillPauseFill } from "react-icons/bs";
import { AiFillStepBackward } from "react-icons/ai";
import { AiFillStepForward } from "react-icons/ai";
import { BiShuffle } from "react-icons/bi";
import { BsFillVolumeUpFill } from "react-icons/bs";
import { CiRepeat } from "react-icons/ci";
const MusicBar = () => {
 
  const music =new Audio(audio1);
 
  const handleplay=()=>{
        if(music.paused||music.currentTime<=0){
          music.play();
          
        }
        else{
          music.pause();

        }
    
  }

  return (
    <div className="flex bg-blue-400 h-full">
      <span className="Song_info">
        <span className="img_box">
          <img src={img1} alt="titlaae" />
        </span>
        <span className="song_details">
          <span>Song</span>
          <span>Title</span>
        </span>
      </span>
      <div className='control'>
        <span className="icons">
          <button > <CiRepeat className='icony' /></button>
          <button> <AiFillStepBackward className='icony' /></button>
          <button onClick={() => handleplay()} id='masterPlay'> {music.paused ? <FaPlay className='iconys' /> : <BsFillPauseFill className='icony' />}</button>
          <button> <AiFillStepForward className='icony' /></button>
          <button> <BiShuffle className='icony' /></button>
        </span>
        <span className="progress_bar">
          <span> 0:0</span>
          <input type='range'></input>
          <span> 4:30</span>
        </span>
      </div>
      
      <span className="volume">
        <BsFillVolumeUpFill className='vol' />
        <input type='range' height={"3"}></input>
      </span>
    </div>
  );
}

export default MusicBar
