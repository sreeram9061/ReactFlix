import { useFetch } from "../Hocks/useFetch";
import Wrapper from "../Components/Wrapper";
import Splider from "../Components/Splider";
import MovieCard from "../Components/MovieCard";
import Pagination from "../Components/Pagination";
import { Appcontext } from "../context/Appcontext";
import { useContext } from "react";


const Home=()=>{
    let [{page},]=useContext(Appcontext)

    let [data,loading,error]=useFetch('movie/popular',{page})
    const{results,total_pages}=data
    return(
        <>
        {loading && <p style={{textAlign:'center'}}>loading...</p>}
       {error && <p style={{textAlign:'center'}} >{error}</p>}
       {!error && !loading &&(
             <>
                 <div className="movieSlider">
                   <Splider />
                 </div>
                 <Wrapper>
                   <h2 className="sectionTitle">Popular Movies</h2>
                   <div className="gallery">
                      {results?.map((movie) => 
                        <MovieCard key={movie.id} movie={movie} />
                      )}
                   </div>
                    <Pagination /> 
                 </Wrapper>
             </>
     
           
           ) } 
     </>
    )
}
export default Home