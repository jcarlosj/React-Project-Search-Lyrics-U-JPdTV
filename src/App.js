import React, { Fragment, useState, useEffect } from 'react';

/** Components */
import Form from './components/Form';
import ShowLyrics from './components/ShowLyrics';
import ShowBioArtists from './components/ShowBioArtists';

function App() {

  /** Hook: Define State */
  const 
    [ searchSongLyrics, setSearchSongLyrics ] = useState( {} ),
    [ lyrics, setLyrics ] = useState( '' ),
    [ artist, setArtist ] = useState( {} ),
    [ errorLyrics, setErrorLyrics ] = useState( false ),
    [ errorArtist, setErrorArtist ] = useState( false );

  /** Hook: Traking State 'searchTerms' */
  useEffect( () => {

    const getDataApiLyrics = async () => {

        /** Validate */
        if( Object .keys( searchSongLyrics ) .length === 0 ) {
          return;
        }

        setLyrics( '' );  // State 'lyrics'
        setArtist( {} );  // State 'artist'

        const { artist, track } = searchSongLyrics;   // Destructuring State 'searchSongLyrics'

        const   /** Multiple Requests with Promise.all & async/await */
          [ responseLyric, responseArtist ] = await Promise .all([
            await fetch(`https://api.lyrics.ovh/v1/${ artist }/${ track }`),
            await fetch(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${ artist }`)
          ]); 

          /** Validate that you have not obtained API data */
          if( responseLyric .status == '404' ) {
            setErrorLyrics( true );
            setArtist( '' );
            console .log( 'Error API Lyrics.ovh' );
          }
          if( responseArtist .status == '404' ) {
            console .log( 'Error API TheAudioDB' );
            return;
          }

          const 
            dataLyric = await responseLyric .json(),
            dataArtist = await responseArtist .json();

        /** Validate that you have not obtained API data */
        if ( dataArtist .artists === null ) {
          setErrorArtist( true );
          setArtist( {} );  // State 'artist'
        }
        else {
          setErrorArtist( false );
          setArtist( dataArtist .artists[ 0 ] );  // State 'artist'
        }

        setErrorLyrics( false );
        setLyrics( dataLyric .lyrics );         // State 'lyrics'

    }
    getDataApiLyrics();

  }, [ searchSongLyrics ] );

  return (
    <Fragment>
      <Form
        setSearchSongLyrics={ setSearchSongLyrics }
      />
      <div className="container">
      { errorArtist
          ?   <div className="alert alert-danger m-5" role="alert">
                  No hay datos biograficos del artista disponibles
              </div>
          :   null
      }
      { errorLyrics
          ?   <div className="alert alert-danger m-5" role="alert">
                  No hay datos disponibles sobre la canción consultada
              </div>
          :   null
      }
        <div className="row mt-5 mb-5">
          <div className="col col-md-4">
            <ShowLyrics 
              lyrics={ lyrics }
              title={ searchSongLyrics .track }
            />
          </div>
          <div className="col col-md-8">
            <ShowBioArtists 
              artist={ artist }
            />
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
