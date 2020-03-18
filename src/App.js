import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';

function App() {

  /** Hook: Define State */
  const 
    [ searchSongLyrics, setSearchSongLyrics ] = useState( {} ),
    [ lyrics, setLyrics ] = useState( '' );

  /** Hook: Traking State 'searchTerms' */
  useEffect( () => {

    const getDataApiLyrics = async () => {

        /** Validate */
        if( Object .keys( searchSongLyrics ) .length === 0 ) {
          return;
        }

        const 
          { artist, track } = searchSongLyrics,                       // Destructuring State

          url = `https://api.lyrics.ovh/v1/${ artist }/${ track }`,
          resolve = await fetch( url ),
          data = await resolve .json();

        console .log( 'lyricsovh', data );
        setLyrics( data .lyrics );      // Update State 'lyrics'
        
    }
    getDataApiLyrics();

  }, [ searchSongLyrics ] );

  return (
    <Fragment>
      <Form
        setSearchSongLyrics={ setSearchSongLyrics }
      />
    </Fragment>
  );
}

export default App;
