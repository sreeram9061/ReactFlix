import React, { useContext } from "react";
import Wrapper from "./Wrapper";
import logo from "../assets/logo.svg"
import { Link } from "react-router-dom";
import Searchbox from "./Searchbox";
import { Appcontext } from "../context/Appcontext";

function Header() {
  let [state,]=useContext(Appcontext)
  return (
    <header>
      <Wrapper>
        <div className="appHeader">
          <div className="headerLeft">
            <Link to={'/'}>
            <img src={logo} alt="" />
            </Link>
            <Link to={'/Favorite'} className="favCount" >
              <span className="count">{state.favoriteItems.length}</span>
              <p>Favorite</p>
            </Link>
          </div>
          < Searchbox/>
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
