import React, { useEffect, useState } from 'react'
import SwipeArt from '../mainscreen/artistSwiper'

import { useMusic } from '../../../control/MainControl';
import Trending from '../../trending';

const Librarypage = () => {
  const [data, setdata] = useState([]);
  const MusicControl=useMusic();

  useEffect(()=>{
    let temp= MusicControl.getLiked();
    setdata(temp);
  },[])


  return (
    <div className='w-full flex '>
      <div>
        Library
      </div>
    </div>
  )
}

export default Librarypage
