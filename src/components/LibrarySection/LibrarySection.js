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
    isFavorites,
    setIsInFavorites }) => {
    const [accordionStatus, setAccordionStatus] = useState(defaultAccordionStatus);
    const setActiveSong = (id) => {
        const updatedSongs = songs.map(song => {
            return {...song, active: song.id === id ? true : false}
        });
        setSongs([...updatedSongs]);
    };
    return (
        <div className="library-section" onClick={() => setIsInFavorites(isFavorites)}>
            <div 
                className="library-accordions" 
                onClick={() =>setAccordionStatus(!accordionStatus)}>
                <h2>{name}</h2>
                <FontAwesomeIcon
                    icon={accordionStatus ? faChevronUp : faChevronDown} />
            </div>

            {accordionStatus && songs.map(song => (
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
    isFavorites: PropTypes.bool,
    setIsInFavorites: PropTypes.func
};

export default LibrarySection;