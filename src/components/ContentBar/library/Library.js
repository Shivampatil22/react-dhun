import React, { useEffect, useState } from 'react'
import SwipeArt from '../mainscreen/artistSwiper'

import { useMusic } from '../../../control/MainControl';
import SongTitle from '../../shivComp/sharecomponent/SongTitle';
import LibCard from '../../shivComp/sharecomponent/libcard';

const Librarypage = () => {
  const [datas, setdata] = useState([]);
  const MusicControl=useMusic();
 
  
  useEffect(()=>{
    MusicControl.getLiked();
    let likedata = MusicControl.SendLike();
    console.log(likedata)
    setdata(likedata);
  },[])


  return (
    <div className='w-full flex flex-col '>
      <div>
        Library
      </div>
      <div className='flex flex-col h-full overflow-y-scroll scroll-smooth'>
        {
        datas.map((item)=>{
          return(
            <LibCard data={item}/>
          )
         
        })
         
          
          }
      </div>
    </div>
  )
}

export default Librarypage
