import React from 'react';
import PropTypes from 'prop-types';

import LibrarySection from './../LibrarySection/LibrarySection';
import { SECTION_SONGS, SECTION_FAVORITES, SECTION_LIBRARY } from './../../utils/constants';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './Library.scss';

const Library = ({ 
    songs, 
    setSongs, 
    libraryStatus, 
    setLibraryStatus, 
    setIsInFavorites,
    favoriteSongs }) => {
    return (
        <div className={`library ${libraryStatus ? 'active' : ''}`}>

            <div className="library-header">
                <h2>{SECTION_LIBRARY}</h2>
                <FontAwesomeIcon
                    onClick={() => setLibraryStatus(!setLibraryStatus)}
                    icon={faTimes}
                    size="1x" />
            </div>

            <LibrarySection
                name={SECTION_SONGS}
                songs={songs}
                favoriteSongs={favoriteSongs}
                libraryStatus={libraryStatus}
                setLibraryStatus={setLibraryStatus}
                defaultAccordionStatus={true}
                setSongs={setSongs}
                isFavorites={false}
                setIsInFavorites={setIsInFavorites} />

            <LibrarySection
                name={SECTION_FAVORITES}
                songs={songs}
                favoriteSongs={favoriteSongs}
                libraryStatus={libraryStatus}
                setLibraryStatus={setLibraryStatus}
                defaultAccordionStatus={false}
                setSongs={setSongs}
                isFavorites={true}
                setIsInFavorites={setIsInFavorites} />

        </div>
    )
}

Library.propTypes = {
    songs: PropTypes.array,
    setSongs: PropTypes.func,
    libraryStatus: PropTypes.bool,
    setLibraryStatus: PropTypes.func,
    setIsInFavorites: PropTypes.func,
    favoriteSongs: PropTypes.array
};

export default Library;