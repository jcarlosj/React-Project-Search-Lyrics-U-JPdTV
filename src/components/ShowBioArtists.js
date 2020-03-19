import React from 'react';

const ShowBioArtists = ({ artist }) => {            // Destructuring Props

    if( Object .keys( artist ) .length === 0 ) return null;

    const { 
        strArtist, strArtistThumb, strGenre, strBiographyES, 
        strFacebook, strTwitter, strLastFMChart
    } = artist;          // Destructuring API data

    return (
        <div className="card mb-3">
            <img src={ strArtistThumb } className="card-img-top" alt="..." />
            <div className="card-body">
                <h2 className="card-title">{ strArtist }</h2>
                <p className="card-text">Género { strGenre }</p>
                <p className="card-text">{ strBiographyES }</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
            <div className="card-footer">
                <a href={`https://${ strFacebook }`} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href={`https://${ strTwitter }`} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href={`${ strLastFMChart }`} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-lastfm"></i>
                </a>
            </div>
        </div>
    );
}

export default ShowBioArtists;