import React from "react";

export default function Header(props) {
    return(
        <header>
          <h1>devfinder</h1>
          <button className="header--mode" onClick={props.toggleDarkMode}>
            {props.darkMode ? "Light" : "Dark"} {props.darkMode ? <img src='./assets/icon-sun.svg'/> : <img src='./assets/icon-moon.svg'/>}
          </button>
        </header>
    )
}