import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { asyncAddSong, quickLoading } from '../../actions';

export default function SongForm({artist}) {
  const [ formData, setFormData ] = useState({ songName: "", releaseDate: "", coverArt: "" })

    const dispatch = useDispatch();

    function handleInput(e) {
      const { name, value } = e.target;
      setFormData({...formData, [name]: value });
    }

    function handleSubmit(e, artist) {
      e.preventDefault()
      dispatch(quickLoading())
      dispatch(asyncAddSong(formData, artist))
    }

  return (
    <div>
        <form onSubmit={(e) => {
        handleSubmit(e, artist)
        }}>
        <input type="text" placeholder="Song name" name="songName" value={formData.songName} onChange={handleInput}></input>
        <input type="text" placeholder="Release date" name="releaseDate" value={formData.releaseDate} onChange={handleInput}></input>
        <input type="text" placeholder="Cover art image address" name="coverArt" value={formData.coverArt} onChange={handleInput}></input>
        <input type="submit"></input>
        </form>
    </div>
  )
}
