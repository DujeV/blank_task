import React from "react";
import "./index.scss";
import { SearchIcon } from "../../assets/icons";

const Searchbar = ({ term, setTerm }) => {
  console.log(term);
  return (
    <div className="searchbar-container">
      <form>
        <div className="field">
          <label>Search Marvel's characters</label>
          <div className="search-box">
            <input
              className="search-txt"
              type="text"
              value={term}
              placeholder="Starting with A or B"
              onChange={(e) => setTerm(e.target.value)}
            />
            <a className="search-btn" href="#">
              {/* <i class="fa fa-search"></i> */}
              <SearchIcon />
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
