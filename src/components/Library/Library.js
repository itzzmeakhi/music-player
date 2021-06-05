import React, { useState } from 'react';
import PropTypes from 'prop-types';

import LibrarySong from './../LibrarySong/LibrarySong';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import './Library.scss';

const Library = ({ songs, setSongs, libraryStatus, setLibraryStatus, favorites }) => {
    const [songsAccordionStatus, setSongsAccordionStatus] = useState(true);
    const [favoritesAccordionStatus, setFavoritesAccordionStatus] = useState(false);
    const favoriteSongs = songs.filter(song => favorites.some(fav => fav.favoriteId === song.id));
    const setActiveSong = (id) => {
        const updatedSongs = songs.map(song => {
            return {...song, active: song.id === id ? true : false}
        });
        setSongs([...updatedSongs]);
    };
    return (
        <div className={`library ${libraryStatus ? 'active' : ''}`}>

            <div className="library-songs">
                <div className="library-accordions" onClick={() => setSongsAccordionStatus(!songsAccordionStatus)}>
                    <h2>Songs</h2>
                    <FontAwesomeIcon
                        icon={songsAccordionStatus ? faChevronUp : faChevronDown} />
                </div>

                {songsAccordionStatus && songs.map(song => (
                    <LibrarySong 
                        key={song.id} 
                        song={song}
                        setActiveSong={setActiveSong}
                        libraryStatus={libraryStatus}
                        setLibraryStatus={setLibraryStatus} />
                ))}
            </div>

            <div className="library-songs" onClick={() => setFavoritesAccordionStatus(!favoritesAccordionStatus)}>
                <div className="library-accordions">
                    <h2>Favorites</h2>
                    <FontAwesomeIcon
                        icon={favoritesAccordionStatus ? faChevronUp : faChevronDown} />
                </div>
                {favoritesAccordionStatus && favoriteSongs.map(song => (
                    <LibrarySong 
                        key={song.id} 
                        song={song}
                        setActiveSong={setActiveSong}
                        libraryStatus={libraryStatus}
                        setLibraryStatus={setLibraryStatus} />
                ))}
            </div>

        </div>
    )
}

Library.propTypes = {
    songs: PropTypes.array,
    setSongs: PropTypes.func,
    libraryStatus: PropTypes.bool,
    setLibraryStatus: PropTypes.func,
    favorites: PropTypes.array
};

export default Library;