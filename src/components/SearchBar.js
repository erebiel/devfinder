import React from "react";

export default function SearchBar(props) {

    const styles = props.darkMode ? {
        backgroundColor: '#1E2A47'
      } : {
        backgroundColor: '#FEFEFE',
        boxShadow: '0px 16px 30px -10px rgba(70, 96, 187, 0.2)'
      }

    return(
        <div className="searchbar" style={styles}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Search GitHub username..."
          />
          <button>Search</button>
        </div>
    )
}