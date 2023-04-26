import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/react-splide/css';
import { useFetch } from "../Hocks/useFetch";
import { Link } from "react-router-dom";


const Splider=()=>{
    
    let [{results}]=useFetch('movie/now_playing')

    let splideOptions = {
        heightRatio: 0.5,
        pagination: false,
        speed: 500,
        cover: true,
        padding: "15vw",
        breakpoints: {
          640: {
            heightRatio: 0.54,
            arrows: false,
            pagination: true,
            padding: "0",
          },
        },
      };

    return(
        <div className="movieSlider">
               <Splide options={splideOptions} >
                    {results?.map(movie=>
                       <SplideSlide key={movie.id}>
                        <Link to={`Movie/${movie.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`} alt="" />
                           <div className="slideCaption">
                             <h2>{movie.title}</h2>
                           </div>
                        </Link>
                       </SplideSlide>
                   )}

                </Splide>
        </div>
    )
}
export default Splider