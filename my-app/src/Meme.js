import React from "react"

export default function Meme(){




    let [meme, setMeme]=React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 

    })

    let [allMeme, setAllMeme]=React.useState([])


    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMeme(data.data.memes))
    }, [])


    function handler(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }


    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMeme.length)
        let url=allMeme[randomNumber].url
        setMeme(prev=>{
            return{
                ...prev,
                randomImage: url
            }
        })
        
    }


    return(
        <main>
            <div className="form">
                <input type="text"
                className="form--input"
                placeholder="Top Text" 
                name= "topText"
                onChange={handler} 
                value={meme.topText}
                 />
                <input type="text"  
                className="form--input"
                placeholder="Bottom Text"
                name= "bottomText"
                onChange={handler} 
                value={meme.bottomText}
                />
                <button 
                onClick={getMemeImage}
                className="form--button">Get a new Meme image
                </button>
            </div>

            <div className="meme">
                <img src={meme.randomImage} className="meme--image"></img>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>

            </div>

        </main>
    )

}

