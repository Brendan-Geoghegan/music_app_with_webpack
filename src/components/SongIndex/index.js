import React, { useState, useEffect } from "react";
import axios from "axios";


const SongIndex = ({songName, releaseDate, coverArt}) => {

    const [like, setLike] = useState("Like");
    const [color, setColor] = useState("black")
    const [lyrics, setLyrics] = useState("")

    const likeOrUnlike = () => {
        setLike(prev => prev === "Like" ? "Liked" : "Like")
        setColor(prev => prev === "black" ? "blue" : "black")
    }


    async function getLyrics() {
        const lyricsApi = `https://api.kanye.rest/text`
        try {
            const apiData = await axios.get(lyricsApi);
            setLyrics(apiData.data)
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            getLyrics()
        }, 5000)

        return () => {
            clearInterval(timer)
        }
    }, [])


return(
    <>
    <h2>Song: {songName}</h2>
    <p role="figure">Release date: {releaseDate}</p>
    <img src={coverArt} alt={songName}/>
    <br/>
    <button style={{color: color}} onClick={() => likeOrUnlike()}>{like}</button>
    <h3>Lyrics</h3>
    <p role="article">{lyrics}</p>
    </>
)
}

export default SongIndex
