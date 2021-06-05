import React from 'react';
import PropTypes from 'prop-types';

import LibrarySong from './../LibrarySong/LibrarySong';

import './Library.scss';

const Library = ({ songs, setSongs, libraryStatus, setLibraryStatus }) => {
    const setActiveSong = (id) => {
        const updatedSongs = songs.map(song => {
            return {...song, active: song.id === id ? true : false}
        });
        setSongs([...updatedSongs]);
    };
    return (
        <div className={`library ${libraryStatus ? 'active' : ''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song => (
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
    setLibraryStatus: PropTypes.func
};

export default Library;