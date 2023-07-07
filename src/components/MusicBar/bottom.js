import React, { useRef, useState,useEffect } from 'react';
import "./bottom.css";
import img1 from './imgs/img7.jpg';
import { FaPlay } from "react-icons/fa";
import { BsFillPauseFill } from "react-icons/bs";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { BiShuffle } from "react-icons/bi";
import { BsFillVolumeUpFill } from "react-icons/bs";
import { CiRepeat } from "react-icons/ci";
import { useMusic } from '../../control/MainControl';

const MusicBar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const seek = useRef();
  // Import custom hook
  const musicControl = useMusic();
 

  const handle = () => {
    musicControl.handlePlay(); // Call handlePlay method from the custom hook
    setIsPlaying(!isPlaying); // Toggle isPlaying state
  };

 


  return (
    <div className="flex bg-blue-400 h-full w-full">
      {/* Song Info */}
      <span className="flex py-[1%] px-[2%] w-72  ">
        <span className="img_box">
          <img src={img1} alt="titlaae" className='h' />
        </span>
        <span className="song_details">
          <span>Song</span>
          <span>Title</span>
        </span>
      </span>

      {/* Music Controls */}
      <div className='control'>
        <span className="icons">
          {/* Repeat Button */}
          <button>
            <CiRepeat className='icony' />
          </button>

          {/* Previous Button */}
          <button>
            <AiFillStepBackward className='icony' onClick={() => musicControl.handlePreviousSong()} />
          </button>

          {/* Play/Pause Button */}
          <button onClick={() => { handle() }} id='masterPlay'>
            {!isPlaying ? <FaPlay className='iconys' /> : <BsFillPauseFill className='icony' />}
          </button>

          {/* Next Button */}
          <button>
            <AiFillStepForward className='icony' onClick={() => musicControl.handleNextSong()} />
          </button>

          {/* Shuffle Button */}
          <button>
            <BiShuffle className='icony' />
          </button>
        </span>

        {/* Progress Bar */}
        <span className="progress_bar">
          <span> 0:0</span>
          <input 
            type="range"
             
           />
          <span> 4:30</span>
        </span>
      </div>

      {/* Volume Controls */}
      <span className="volume">
        <BsFillVolumeUpFill className='vol' />
        <input type='range' height={"3"}></input>
      </span>
    </div>
  );
}

export default MusicBar;
