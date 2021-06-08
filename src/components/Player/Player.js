import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { SKIP_BACK, SKIP_FORWARD } from './../../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faPlay, faPause, faHeart, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import './Player.scss';

const Player = ({ 
    currentSong, 
    isPlaying, 
    setIsPlaying, 
    songs, 
    setSongs, 
    favorites, 
    setFavorites,
    isInFavorites,
    favoriteSongs }) => {
    const songRef = useRef(null);
    const songInFavorites = favorites.some(fav => fav.favoriteId === currentSong.id);
    const [songTimeInfo, setSongTimeInfo] = useState(
        {
            currentTime: 0,
            duration: 0,
            percentAnimation: 0
        }
    );

    const getTime = (time) => {
        return(
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    };

    const playSongHandler = () => {
        if(isPlaying) {
            songRef.current.pause();
        } else {
            songRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const songTimeHandler = (event) => {
        const { currentTime, duration } = event.target;
        const percentAnimation = Math.round((Math.round(currentTime) / Math.round(duration))*100);
        setSongTimeInfo({
            ...songTimeInfo,
            currentTime,
            duration,
            percentAnimation
        });
    };

    const songAutoPlayHandler = () => {
        if(isPlaying) {
            songRef.current.play();
        }
    };

    const dragHandler = (event) => {
        const { value } = event.target;
        songRef.current.currentTime = value;
        setSongTimeInfo({
            ...songTimeInfo,
            currentTime: value
        });
    };

    const songSkipHandler = (direction) => {
        let songsList = [...songs];
        if(isInFavorites && favoriteSongs.length > 0) {
            songsList = [...favoriteSongs];
        }
        const currentSongIndex = songsList.findIndex(song => song.id === currentSong.id);
        let newSongIndex = currentSongIndex;
        if(direction === SKIP_FORWARD) {
            newSongIndex = (currentSongIndex + 1) % songsList.length;
        } else if(direction === SKIP_BACK) {
            newSongIndex = (currentSongIndex - 1) % songsList.length;
            if(newSongIndex === -1) newSongIndex = songsList.length - 1;
        }
        const nextSong = songsList[newSongIndex];
        const updatedSongs = songs.map(song => {return {...song, active: song.id === nextSong.id ? true: false}});
        setSongs([
            ...updatedSongs
        ]);
    };

    const songEndedHandler = () => {
        let songsList = [...songs];
        if(isInFavorites && favoriteSongs.length > 0) {
            songsList = [...favoriteSongs];
        }
        const currentSongIndex = songsList.findIndex(song => song.id === currentSong.id);
        const newSongIndex = (currentSongIndex + 1) % songsList.length;
        const nextSong = songsList[newSongIndex];
        const updatedSongs = songs.map(song => {return {...song, active: song.id === nextSong.id ? true: false}});
        setSongs([
            ...updatedSongs
        ]);
    };

    const addToFavorite = () => {
        const favoriteId = currentSong.id;
        if(!songInFavorites) {
            setFavorites([
                ...favorites,
                { 'favoriteId': favoriteId }
            ]);
        } else {
            const updatedFavorites = favorites.filter(fav => fav.favoriteId !== currentSong.id);
            setFavorites([
                ...updatedFavorites
            ]);
        }
    };

    const trackAnim = {
        transform: `translateX(${songTimeInfo.percentAnimation}%)`
    };

    return ( 
        <div className="player-container">

            <div className="favorite-controls">
                <FontAwesomeIcon
                    size="1x"
                    icon={faEllipsisV} />
                <FontAwesomeIcon 
                    size="1x"
                    style={{color: `${songInFavorites ? '#ee5253' : '#000'}`}}
                    onClick={addToFavorite}
                    icon={faHeart} />
            </div>

            <div className="time-controls">
                <p>{getTime(songTimeInfo.currentTime)}</p>
                <div className="track" style={{
                    background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`
                }}>
                    <input 
                        min={0}
                        max={songTimeInfo.duration || 0}
                        value={songTimeInfo.currentTime}
                        onChange={dragHandler}
                        type="range" />
                    <div className="animate-track" style={trackAnim}></div>
                </div>
                <p>{songTimeInfo.duration ? getTime(songTimeInfo.duration) : '0.00'}</p>
            </div>

            <div className = "player-controls">
                <FontAwesomeIcon 
                    size="2x"
                    onClick={() => songSkipHandler(SKIP_BACK)} 
                    icon={faAngleLeft} />
                <FontAwesomeIcon 
                    size="2x"
                    onClick={playSongHandler} 
                    icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon 
                    size="2x"
                    onClick={() => songSkipHandler(SKIP_FORWARD)} 
                    icon={faAngleRight} />
            </div>

            <audio 
                preload="auto"
                onLoadedData={songAutoPlayHandler}
                onLoadedMetadata={songTimeHandler}
                onTimeUpdate={songTimeHandler} 
                onEnded={songEndedHandler}
                src={currentSong.audio} 
                ref={songRef}>
            </audio>

        </div>
        
    )
}

Player.propTypes = {
    currentSong: PropTypes.object,
    isPlaying: PropTypes.bool,
    setIsPlaying: PropTypes.func,
    songs: PropTypes.array,
    favoriteSongs: PropTypes.array,
    setSongs: PropTypes.func,
    favorites: PropTypes.array,
    isInFavorites: PropTypes.bool,
    setFavorites: PropTypes.func
};

export default Player;