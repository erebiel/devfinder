import React from "react";

export default function SearchBar(props) {

    const styles = props.darkMode ? {
        backgroundColor: '#1E2A47'
      } : {
        backgroundColor: '#FEFEFE',
        boxShadow: '0px 16px 30px -10px rgba(70, 96, 187, 0.2)'
      }

      const inputstyles = props.darkMode ? {
          color: '#FFFFFF'
      } : {
          color: '#4B6A9B'
      }

    return(
        <div className="searchbar" style={styles}>
          <img src="./assets/icon-search.svg" alt="Search icon" />
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Search GitHub username..."
            className="search--input"
            style={inputstyles}
          />
          <button className="search--btn">Search</button>
        </div>
    )
}