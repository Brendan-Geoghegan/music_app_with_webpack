import React from "react";
import { NavLink, Outlet } from 'react-router-dom'
import { useSelector } from "react-redux";

import './style.css'


const ArtistPage = () => {

    const artists = useSelector(state => state.artists)

    const activeClass = ({isActive}) => isActive ? "current-two" : undefined

    const linkArtistNames = () => {
        return artists.map(artist =>
            <>
                <li><NavLink className={activeClass} to={artist.name}>{artist.name}</NavLink></li>
            </>
            )
    }

    return(
        <>
        <ul className="artistsNav">
            {linkArtistNames()}
        </ul>
        <Outlet/>
        </>
    )
}

export default ArtistPage
