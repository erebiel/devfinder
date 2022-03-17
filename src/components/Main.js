import React from "react";

export default function Main(props) {

    const styles = props.darkMode ? {
        backgroundColor: '#1E2A47'
      } : {
        backgroundColor: '#FEFEFE',
        boxShadow: '0px 16px 30px -10px rgba(70, 96, 187, 0.2)'
      }

    return (
        <main style={styles}>
            <img src="./assets/defaulticon.png" alt="The Octocat" className="user-icon"/>

            <div className="user-username">
                <h3>The Octocat</h3>
                <a href="#">@octocat</a>
            </div>
            <div className="user-joined">Joined 25 Jan 2011</div> 
            <div className="user-bio">This profile has no bio</div>
            
            <div className="user-stats">
                <div>
                    <p>Repos</p>
                    <h3>8</h3>
                </div>
                <div>
                    <p>Followers</p>
                    <h3>3938</h3>
                </div>
                <div>
                    <p>Following</p>
                    <h3>9</h3>
                </div>
            </div>

            <div className="user-location">
                <img src="./assets/icon-location.svg" alt="Location" /> San Francisco
            </div>
            <div className="user-twitter">
                <img src="./assets/icon-twitter.svg" alt="Twitter" /> Not Available
            </div>
            <div className="user-website">
                <img src="./assets/icon-website.svg" alt="Website" /> https://github.blog
            </div>
            <div className="user-comapny">
                <img src="./assets/icon-company.svg" alt="Company" /> @github
            </div>        
        </main>
    )
}