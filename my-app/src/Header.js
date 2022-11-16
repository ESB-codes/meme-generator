import React from "react"

export default function Header(){
    return(
        <header className="header">
            <img src="./troll.svg" className="header--image" />
            <h2 className="header--title">Meme Generator</h2>
            <h3 className="header--title2">React project</h3>
        </header>
    )
}