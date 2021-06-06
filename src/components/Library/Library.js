import React from 'react';
import PropTypes from 'prop-types';

import LibrarySection from './../LibrarySection/LibrarySection';
import { SECTION_SONGS, SECTION_FAVORITES } from './../../utils/constants';

import './Library.scss';

const Library = ({ songs, setSongs, libraryStatus, setLibraryStatus, favorites }) => {
    const favoriteSongs = songs.filter(song => favorites.some(fav => fav.favoriteId === song.id));

    return (
        <div className={`library ${libraryStatus ? 'active' : ''}`}>

            <LibrarySection
                name={SECTION_SONGS}
                songs={songs}
                libraryStatus={libraryStatus}
                setLibraryStatus={setLibraryStatus}
                setSongs={setSongs} />

            <LibrarySection
                name={SECTION_FAVORITES}
                songs={favoriteSongs}
                libraryStatus={libraryStatus}
                setLibraryStatus={setLibraryStatus}
                setSongs={setSongs} />

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