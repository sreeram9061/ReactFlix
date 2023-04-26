import { useContext } from "react"
import { Appcontext } from "../context/Appcontext.jsx"
import HeartFill from "../assets/heart-filled.svg";
import HeartLine from "../assets/heart-lined.svg";
const FavoriteButton=({movie})=>{
    let [state,dispath]=useContext(Appcontext)
    let favorite=state.favoriteItems.some((faMovie)=> faMovie.id===movie.id)

    const handlMovie=()=>{
        favorite
        ?  dispath({
            type:'REMOVE_FAVORITE',
            payload:movie.id
           })

        : dispath({
            type:'ADD_FAVORITE',
            payload:movie
         })
    }
    
    return(
        <div className="favButton" onClick={handlMovie}>
            {favorite?
             <img src={HeartFill} alt="" />
             : <img src={HeartLine} alt="" />
            }
        </div>
    )
}
export default FavoriteButton