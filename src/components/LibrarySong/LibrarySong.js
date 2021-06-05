import React from 'react';
import PropTypes from 'prop-types';

import './LibrarySong.scss';

const LibrarySong = ({ song, setActiveSong }) => {
    return (
        <div className={`library-song ${song.active ? 'selected' : ''}`} onClick={() => setActiveSong(song.id)}>
            <img src={song.cover} alt={song.name} />
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

LibrarySong.propTypes = {
    song: PropTypes.object,
    setActiveSong: PropTypes.func
};

export default LibrarySong;