import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

import { ArtistIndex, SongIndex, SongForm, LoadingSpinner } from '../../components';


export default function IndividualArtist() {

    const artists = useSelector(state => state.artists)
    const loading = useSelector(state => state.loading)


    const [filteredArtist, setFilteredArtist] = useState([{songs: [{}]}])

    const params = useParams();

    const renderSongs = (songs) => {
      return songs.map(song => 
      <>
      <SongIndex songName={song.songName} releaseDate={song.releaseDate} coverArt={song.coverArt}/>
      </>
      )
  }
    
    useEffect(() => {
        const findArtist = () => {
          setFilteredArtist(artists.filter((artist) => artist.name === params.name));
        }
        
        findArtist()
    }, [params, artists])


  return (
    <>
    <ArtistIndex name={filteredArtist[0].name} genre={filteredArtist[0].genre} intro={filteredArtist[0].intro}/>
    {renderSongs(filteredArtist[0].songs)}
    {loading ? <LoadingSpinner /> :  <SongForm artist={filteredArtist[0]}/>}
    </>
  )
}
