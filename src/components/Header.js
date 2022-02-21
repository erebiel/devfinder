import React from "react";

export default function Header(props) {
    return(
        <header>
          <h3 className="header--title">devfinder</h3>
          <button className="header--mode" onClick={props.toggleDarkMode}>
            {props.darkMode ? "Light" : "Dark"} {props.darkMode ? <img src='./assets/icon-sun.svg'/> : <img src='./assets/icon-moon.svg'/>}
          </button>
        </header>
    )
}