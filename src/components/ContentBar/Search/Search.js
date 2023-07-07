import React, { useEffect, useState } from 'react'
import { useMusic } from '../../../control/MainControl'
import SongTitle from '../../shivComp/sharecomponent/SongTitle';
const Search = () => {
  const [Searchdata,setdata]=useState([])
  const control=useMusic();
  let data=control.showSearch();
  
  useEffect(()=>{

    setdata(data.results);
  },[data]);
 
  return (
    
     
      <div className='bg-red-200 h-full w-full flex flex-col overflow-y-scroll'>
        <div>
          {Searchdata&&"Results:"}
        </div>
        {Searchdata && Searchdata.map((curr) => {
          return (
            <SongTitle data={curr} />
          )

        })}
      </div>
   
   
  )
}

export default Search
