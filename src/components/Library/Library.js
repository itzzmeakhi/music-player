import React from 'react';
import PropTypes from 'prop-types';

import LibrarySection from './../LibrarySection/LibrarySection';
import { SECTION_SONGS, SECTION_FAVORITES } from './../../utils/constants';

import './Library.scss';

const Library = ({ 
    songs, 
    setSongs, 
    libraryStatus, 
    setLibraryStatus, 
    setIsInFavorites }) => {
    return (
        <div className={`library ${libraryStatus ? 'active' : ''}`}>

            <LibrarySection
                name={SECTION_SONGS}
                songs={songs}
                libraryStatus={libraryStatus}
                setLibraryStatus={setLibraryStatus}
                defaultAccordionStatus={true}
                setSongs={setSongs}
                isFavorites={false}
                setIsInFavorites={setIsInFavorites} />

            <LibrarySection
                name={SECTION_FAVORITES}
                songs={songs}
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
    setIsInFavorites: PropTypes.func
};

export default Library;