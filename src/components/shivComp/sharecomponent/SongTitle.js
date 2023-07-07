// import 'bootstrap/dist/css/bootstrap.min.css';
import { BiPlayCircle } from "react-icons/bi";
import {  AiOutlineHeart  } from "react-icons/ai";
import "./SongTitle.css"

function SongTitle({data}) {
   const { artistName, trackName, artworkUrl100, previewUrl }=data
    console.log(artistName);
    return (
        <li className="songItem w-full h-20">
         
            <img src={artworkUrl100} alt=""></img>
            <h5>{trackName} <br></br>
                <div className="subtitle">{artistName}</div>
            </h5>
            <div className='icons'>
            <BiPlayCircle className='PlayIcon' />
            <AiOutlineHeart className='AiOutlineHeart' />
            </div>
        </li>
    );
}
export default SongTitle;   