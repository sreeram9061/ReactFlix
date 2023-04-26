import Wrapper from "../Components/Wrapper"
import { useContext } from "react"
import { Appcontext } from "../context/Appcontext"
import MovieCard from "../Components/MovieCard"

const Favorite=()=>{
    let [state,]=useContext(Appcontext)
    return(
        
        <Wrapper>
            <h2 className="sectionTitle">Favorite Movies</h2>
            <div className="gallery">
            {state.favoriteItems?.map((movie) => 
                        <MovieCard key={movie.id} movie={movie} />
                )}
            </div>
        </Wrapper>
    )
}
export default Favorite