import React from 'react';
import PropTypes from 'prop-types';

import './Song.scss';

const Song = ({ currentSong }) => {
    return (
        <div className="song-container">
            <img src={currentSong.cover} alt={currentSong.name} />
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    )
}

Song.propTypes = {
    currentSong: PropTypes.object
};

export default Song;