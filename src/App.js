import React, { Fragment, useState, useEffect } from 'react';

/** Components */
import Form from './components/Form';
import ShowLyrics from './components/ShowLyrics';

function App() {

  /** Hook: Define State */
  const 
    [ searchSongLyrics, setSearchSongLyrics ] = useState( {} ),
    [ lyrics, setLyrics ] = useState( '' ),
    [ artist, setArtist ] = useState( {} );

  /** Hook: Traking State 'searchTerms' */
  useEffect( () => {

    const getDataApiLyrics = async () => {

        /** Validate */
        if( Object .keys( searchSongLyrics ) .length === 0 ) {
          return;
        }

        const { artist, track } = searchSongLyrics;   // Destructuring State 'searchSongLyrics'

        const   /** Multiple Requests with Promise.all & async/await */
          [ responseLyric, responseArtist ] = await Promise .all([
            await fetch(`https://api.lyrics.ovh/v1/${ artist }/${ track }`),
            await fetch(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${ artist }`)
          ]); 

          /** Validate */
          if( responseLyric .status == '404' ) {
            console .log( 'Error API Lyrics.ovh' );
            return;
          }
          if( responseArtist .status == '404' ) {
            console .log( 'Error API TheAudioDB' );
            return;
          }

          const 
            dataLyric = await responseLyric .json(),
            dataArtist = await responseArtist .json();

        console .log( 'Lyric', dataLyric, 'Artist', dataArtist );
        
        /** Update State */
        setLyrics( dataLyric .lyrics );         // State 'lyrics'
        setArtist( dataArtist .artists[ 0 ] );  // State 'artist'

    }
    getDataApiLyrics();

  }, [ searchSongLyrics ] );

  return (
    <Fragment>
      <Form
        setSearchSongLyrics={ setSearchSongLyrics }
      />

      <ShowLyrics 
        lyrics={ lyrics }
      />
    </Fragment>
  );
}

export default App;
