import { useParams } from "react-router-dom"
import { useFetch } from "../Hocks/useFetch"
import Wrapper from "../Components/Wrapper"
import MovieDetails from "./MovieDetails"
const Movieinform=()=>{
    let {id}=useParams()
    let [data]=useFetch(`movie/${id}`)
    const backDrop={
        backgroundImage:`url(https://image.tmdb.org/t/p/w1280/${data?.backdrop_path})`

    }
    return(
       <div className="moviePage" style={backDrop}>
        <Wrapper>
            <div className="movieContent">
                <div className="moviePoster">
                    <img src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}  alt="" />
                </div>
                <div className="movieInfo">
                    <div className="movieTitle">
                        <h1>{data?.title}</h1>
                        <h3>{data?.tagline}</h3>
                    </div>
                    <div className="moviePlot">{data?.overview}</div>

                    <div className="movieDetails"  >
                         <MovieDetails {...{data,items:'spoken_languages', name:'english_name',uniqeu:'iso_639_1',leftTitle:'Language'}} />
                         <MovieDetails {...{data,items:'genres', name:'name',uniqeu:'id',leftTitle:'genres'}} />
                         <div className="movieDetailsItem">
                           <h3>Runtime</h3>
                            <div><p>{data.runtime}</p></div>
                        </div> 
                         <div className="movieDetailsItem">
                           <h3>Rating</h3>
                            <div><p>{data.vote_average}</p></div>
                        </div> 
                    </div>
                </div>
            </div>

        </Wrapper>
       </div>
    )
}
export default Movieinform