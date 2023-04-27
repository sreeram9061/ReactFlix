import { useState } from "react"
import { useFetch } from "../Hocks/useFetch"
import { useStringminimize } from "../Hocks/useStringMinimize"
import { useNavigate } from "react-router-dom"

const Searchbox=()=>{
    let [query,setQuery]=useState('')
    let [data]= useFetch('search/movie',{query})
    let navigate=useNavigate()

    const hadleMovie=(movieId)=>{
      navigate(`Movie/${movieId}`)
      setQuery('')
    }


    return(
      <div className="searchBox">
        <input className="searchField" value={query} type="search" placeholder="Search"
         onChange={(e)=>setQuery(e.target.value)} />
         <div className="resultBox">
            <ul>
                {data?.results?.map(movie=>
                           <li key={movie.id} onClick={()=>{ hadleMovie(movie.id)}}>
                                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                                  <div key={movie.id} className="discreption">
                                     <h4>{movie.title}</h4>
                                     <p>{useStringminimize(movie.release_date,0,4)}</p>
                                  </div>
                           </li>
                        )}
            </ul>
         </div>
      </div>
    )
}
export default Searchbox