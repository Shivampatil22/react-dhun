import React from 'react'
import "./SideBar.css"
import { AiFillHome } from 'react-icons/ai';
import { ImSearch } from 'react-icons/im';
import { BiLibrary } from 'react-icons/bi';
import RecentSongs from '../RecentSongs';
import { Link } from 'react-router-dom';
const SideBar = () => {
  return (
    <div className='main-side'>
      <h1 className='greet'>Good Morning</h1>
      <div className='nav_link'>
      
        <span><Link className='lin' to='/musicapp'><AiFillHome className='icon' />Home</Link></span>
        <span><Link className='lin' to='/musicapp/search'><ImSearch />Search</Link> </span>
        <span><Link className='lin' to='/musicapp/library'> <BiLibrary className='icon' />Library</Link></span>
      </div>
    
   
    </div>
  )
}

export default SideBar
