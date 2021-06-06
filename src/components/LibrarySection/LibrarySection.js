import React, { useState } from 'react';
import PropTypes from 'prop-types';

import LibrarySong from './../LibrarySong/LibrarySong';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import './LibrarySection.scss';

const LibrarySection = ({ 
        name, 
        songs, 
        libraryStatus, 
        setLibraryStatus, 
        setSongs, 
        defaultAccordionStatus,
        favorites,
        isFavorites }) => {
    const [accordionStatus, setAccordionStatus] = useState(defaultAccordionStatus);
    const favoriteSongs = isFavorites && songs.filter(song => favorites.some(fav => fav.favoriteId === song.id));
    const setActiveSong = (id) => {
        const updatedSongs = songs.map(song => {
            return {...song, active: song.id === id ? true : false}
        });
        setSongs([...updatedSongs]);
    };
    const songsList = isFavorites ? [...favoriteSongs] : [...songs];
    return (
        <div className="library-section">
            <div 
                className="library-accordions" 
                onClick={() =>setAccordionStatus(!accordionStatus)}>
                <h2>{name}</h2>
                <FontAwesomeIcon
                    icon={accordionStatus ? faChevronUp : faChevronDown} />
            </div>

            {accordionStatus && songsList.map(song => (
                <LibrarySong 
                    key={song.id} 
                    song={song}
                    setActiveSong={setActiveSong}
                    libraryStatus={libraryStatus}
                    setLibraryStatus={setLibraryStatus} />
            ))}
        </div>
    );
}

LibrarySection.propTypes = {
    name: PropTypes.string,
    songs: PropTypes.array,
    libraryStatus: PropTypes.bool,
    setLibraryStatus: PropTypes.func,
    setSongs: PropTypes.func,
    defaultAccordionStatus: PropTypes.bool,
    favorites: PropTypes.array,
    isFavorites: PropTypes.bool
};

export default LibrarySection;