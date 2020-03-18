import React, { Fragment } from 'react';

const ShowLyrics = ({ lyrics }) => {    // Destructuring Props

    /** Validate */
    if( lyrics .length === 0 )  return null;

    return (
        <Fragment>
            <h2>Letra de la Cancion</h2>
            <p className="lyrics">{ lyrics }</p>
        </Fragment>
    );
}

export default ShowLyrics;