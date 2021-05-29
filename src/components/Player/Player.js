import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faPlay } from '@fortawesome/free-solid-svg-icons';

import './Player.scss';

const Player = () => {
    return ( 
        <div className="player-container">
            <div className="time-controls">
                <p>Start time</p>
                <input type="range" />
                <p>End time</p>
            </div>
            <div className = "player-controls">
                <FontAwesomeIcon icon={faAngleLeft} />
                <FontAwesomeIcon icon={faPlay} />
                <FontAwesomeIcon icon={faAngleRight} />
            </div>
        </div>
        
    )
}

export default Player;