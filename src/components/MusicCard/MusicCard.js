import './trending.css'
import playbtn from '../Images/play-button.png'
import { useMusic } from '../../control/MainControl';

const MusicCard = ({data}) => {
  console.log(data);
  const { song_name, id, artist_name, img, audio } = data;
  const username = localStorage.getItem("user");
  const control = useMusic();
  // console.log({
  //   "title": song_name,
  //   "audioSrc": audio,
  //   "username": username,
  //   "imgSrc": img,
  //   "artist": artist_name
  // })
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
        headers: { authorization: JSON.parse(localStorage.getItem("token")) }

      },
    })
  }

  return (
    <>

      <div className="outer">
        <img className="song" src={img} alt="Image" />
        <div className='flex py-4'>
          <div>
            <div className="songname">{song_name}</div>
            <div className="singername">{artist_name}</div>
          </div>

          <div className='flex items-center justify-center w-full'>
            <button onClick={() => { control.playSong(id) }}><img className="playbtn" src={playbtn} alt="Play button image" /></button>
          </div>
        </div>
      </div>

    </>
  );
};
export default MusicCard;
