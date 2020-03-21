import React, { Fragment } from 'react';

const ShowLyrics = ({ lyrics, title }) => {    // Destructuring Props

    /** Validate */    
    if( ! lyrics )  return null;

    return (
        <Fragment>
            <h2>{ title } </h2>
            <p className="lyrics">{ lyrics }</p>
        </Fragment>
    );
}

export default ShowLyrics;