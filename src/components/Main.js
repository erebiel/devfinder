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
            <div>
                <img src="./assets/defaulticon.png" alt="The Octocat" className="user--icon"/>
            </div>
            <div className="main--content">
                <div className="content--header">
                    <div>
                        <h3>The Octocat</h3>
                        <a href="#">@octocat</a>
                        <p>This profile has no bio</p>
                    </div>
                    <div>Joined 25 Jan 2011</div> 
                </div>
                
                <div className="stats">
                    <div className="stats--stat">
                        <p>Repos</p>
                        <p className="stats--nb">8</p>
                    </div>
                    <div className="stats--stat">
                        <p>Followers</p>
                        <p className="stats--nb">3938</p>
                    </div>
                    <div className="stats--stat">
                        <p>Following</p>
                        <p className="stats--nb">9</p>
                    </div>
                </div>
                <div className="infos">
                    <div className="infos--info">
                        <img src="./assets/icon-location.svg" alt="Location" /> San Francisco
                    </div>
                    <div className="infos--info">
                        <img src="./assets/icon-twitter.svg" alt="Twitter" /> Not Available
                    </div>
                    <div className="infos--info">
                        <img src="./assets/icon-website.svg" alt="Website" /> https://github.blog
                    </div>
                    <div className="infos--info">
                        <img src="./assets/icon-company.svg" alt="Company" /> @github
                    </div>
                </div>
            </div>
        </main>
    )
}