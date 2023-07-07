import React from 'react'


import "./mainscreen.css"
import  ArtistSwiper from './artistSwiper'
import TrendingSwiper from './muicsSwiper'
const MainScreen = () => {
  return (
    <div className=' w-full h-full overflow-y-scroll scroll-smooth'>
      <div className="w-full flex flex-col my-7 ">
        <div className="font-medium text-3xl text-slate-300 leading-8">
          Fav Artists
        </div>
        <ArtistSwiper/>
       
      </div>
      <div className="w-full flex flex-col my-10 ">
        <div className="font-medium text-3xl text-slate-300 leading-8 mb-3">
          Trending Music
        </div>
       <TrendingSwiper/>   
       
        
      </div>

 
    </div>
  )
}

export default MainScreen
