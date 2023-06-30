import "./FavArt.css"
import img1 from "../../image/1.jpg"
const FavArt =()=>{
 
    return(
        <div className="bg-slate-100 h-full w-36 p-3 rounded-xl mx-8 min-w-32">
            <img className="h-[7rem] w-full rounded-[50%] bg-contain" alt="title" src={img1}></img>
            <div className="flex w-full justify-center text-xl font-thin pt-2">Doja Art</div>
        </div>
    );

    
}
export default FavArt;