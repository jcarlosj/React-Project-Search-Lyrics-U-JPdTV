import React, { Fragment, useState } from 'react';
import Form from './components/Form';

function App() {

  /** Hook: Define State */
  const 
    [ searchSongLyrics, setSearchSongLyrics ] = useState({});

  return (
    <Fragment>
      <Form
        setSearchSongLyrics={ setSearchSongLyrics }
      />
    </Fragment>
  );
}

export default App;
