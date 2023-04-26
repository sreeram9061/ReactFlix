import React from "react";
import { Appcontext } from "../context/Appcontext";
import { useContext } from "react";

function Pagination() {
  let  [{page},dispath]=useContext(Appcontext)

  const handleNextPage = () => {
    dispath({
      type:"NEXT_PAGE",
     

    })
  };
  const handlePrevPage = () => {
    dispath({
      type:"PREV_PAGE",
      
    })
  };
  return (
    
    <div className="pagination">
      <button  disabled={page <= 1} onClick={handlePrevPage}>Prev</button>
      <p>Page {page}</p>
      <button onClick={handleNextPage}>Next</button>
    </div>
  );
}

export default Pagination;
