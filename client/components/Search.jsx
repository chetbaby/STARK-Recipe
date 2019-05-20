import React from "react";


const Search = props => {
  return (
    <div id="searchheader">
      {/* <div id="logo">Blissey Recipe Finder</div> */}
      <div id="searchbox">
        <input
          type="text"
          name="searchbar"
          id="searchbar"
          value={props.searchStr}
          placeholder="Find the best recipes from across the web!"
          onChange={(e) => {props.updateSearchStr(e.target.value)}}
        />
        <button id="searchBtn" onClick={() => props.callSearchStr(props.searchStr)}>
          {" "}
          Search{" "}
        </button>
      </div>
   
      <div className="rightLogo">
        <img src="https://img.icons8.com/ios-glyphs/42/FFFFFF/user.png"/>
        <img src="https://img.icons8.com/material-sharp/42/FFFFFF/smiling-face-with-heart.png"/>
        <img src="https://img.icons8.com/ios/42/FFFFFF/bell-filled.png"></img>
      </div>
    </div>
  );
};

export default Search;
