import React, { useState } from 'react';

import Player from './components/Player/Player';
import Song from './components/Song/Song';
import Library from './components/Library/Library';
import Nav from './components/Nav/Nav';

import musicData from './utils/data';

import './App.scss';

const App = () => {
    const [songs, setSongs] = useState(musicData().map((song, index) => {return {...song, active: index === 0 ? true : false}}));
    const [isPlaying, setIsPlaying] = useState(false);
    const [libraryStatus, setLibraryStatus] = useState(false);
    const [favorites, setFavorites] = useState([]);
    const [isInFavorites, setIsInFavorites] = useState(false);
    const currentSong = songs[songs.findIndex(song => song.active)];
    const favoriteSongs = isInFavorites && favorites.length > 0 && songs.filter(song => favorites.some(fav => fav.favoriteId === song.id));
    const songsList = isInFavorites ? [...favoriteSongs] : [...songs];
    return (
        < >
            <Nav 
                libraryStatus={libraryStatus}
                setLibraryStatus={setLibraryStatus} />
            <Song 
                currentSong={currentSong} />
            <Player 
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                currentSong={currentSong} 
                songs={songsList}
                setSongs={setSongs}
                favorites={favorites}
                isInFavorites={isInFavorites}
                setFavorites={setFavorites} />
            <Library 
                songs={songsList} 
                setSongs={setSongs}
                libraryStatus={libraryStatus}
                favorites={favorites}
                setIsInFavorites={setIsInFavorites}
                setLibraryStatus={setLibraryStatus} />
        </ >
    )
}

export default App;
