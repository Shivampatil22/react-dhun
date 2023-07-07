// import 'bootstrap/dist/css/bootstrap.min.css';
import { BiPlayCircle } from "react-icons/bi";
import {  AiOutlineHeart  } from "react-icons/ai";
import "./SongTitle.css"
import { useMusic } from "../../../control/MainControl";

function SongTitle({data}) {
    const control=useMusic();
   const { artistName, trackName, artworkUrl100, previewUrl }=data
    return (
        <li className="songItem w-full h-20">
         
            <img src={artworkUrl100} alt=""></img>
            <h5>{trackName} <br></br>
                <div className="subtitle">{artistName}</div>
            </h5>
            <div className='icons'>
            <BiPlayCircle className='PlayIcon' onClick={()=>{control.PlaySearch(data)}}  />
            <AiOutlineHeart className='AiOutlineHeart' onClick={()=>{control.LikeSearch(data)}}/>
            </div>
        </li>
    );
}
export default SongTitle;   