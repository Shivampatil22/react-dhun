
import SideBar from "../sidebar/SideBar"
import Nav from "../nav/Nav"
import MusicBar from "../MusicBar/bottom"
import PrivateCom from "../PrivateCom"
import { Outlet } from "react-router-dom"
const Home = () => {
   
    return (
        <div className="bg-red-200 max-w-screen h-screen">
            <div className="bg-blue-100 h-[88%] w-full flex">
                <div className="bg-green-200 min-w-[20%] h-full">
                    <SideBar/>
                </div>
                <div className="w-[80%] h-full flex flex-col ">
                    <div className="flex  bg-slate-400 h-[3rem] w-full">
                        <Nav />
                    </div>
                    <div className="bg-green-400 h-full ">
                        <Outlet/>
                    </div>
                </div>
            </div>
            <div>
            <MusicBar   />
            </div>

        </div>
    )
}

export default Home
