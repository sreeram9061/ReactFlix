const MovieDetails=({data,items,name,uniqeu,leftTitle})=>{
    return(
       
          <div className="movieDetailsItem">
           <h3>{leftTitle}</h3>
            <div>{data[items]?.map(lang=>
                <span key={lang[uniqeu] }>{lang[name]}</span>)}
                
           </div> 
          </div>
    )
}
export default MovieDetails