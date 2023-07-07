import './trending.css'
import playbtn from '../Images/play-button.png'
import { useMusic } from '../../control/MainControl';
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { BsPlayCircle } from "react-icons/bs";
import { useState } from 'react';
const MusicCard = ({data}) => {
 
  const { song_name, id, artist_name, img, audio } = data;
  const username = localStorage.getItem("user");
  const control = useMusic();
  const [like,setLike]=useState(false)
  // console.log({
  //   "title": song_name,
  //   "audioSrc": audio,
  //   "username": username,
  //   "imgSrc": img,
  //   "artist": artist_name
  // })

  const Handlelike=()=>{
      if(like){
        // Liked();
      }

    setLike(!like);
  }
  const Liked = async () => {

    let data = JSON.stringify({
      "title": song_name,
      "audioSrc": audio,
      "username": username,
      "imgSrc": img,
      "artist": artist_name
    });
    let result = await fetch("http://localhost:9090/song", {
      method: 'post',
      body: data,
      headers: {
        'Content-Type': 'application/json',
        headers: { authorization: localStorage.getItem("token") }

      },
    })
    console.log("liked")
  }

  return (
    <>

      <div className="outer">
        <div>
          <img className="song" src={img} alt="Image" />
          <button onClick={() => { control.playSong(id) }}><BsPlayCircle className="playbtn absolute top-16 left-[5rem] animi "  /></button>
        </div>
     
        <div className='flex py-4'>
          <div>
            <div className="songname">{song_name}</div>
            <div className="singername">{artist_name}</div>
          </div>

          <div className='flex items-center justify-center w-full flex-col'>
          
            <button onClick={() => { Handlelike() }}>{like ?<AiFillHeart className='heart'/> :<AiOutlineHeart className='heart' />  }</button>
          </div>
        </div>
      </div>

    </>
  );
};
export default MusicCard;
