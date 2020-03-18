import React, { useState } from 'react';

const Form = () => {

    /** Hook: Define State */
    const
        [ searchTerms, setSearchTerms ] = useState({
            artist: '',
            track: ''
        });

    const { artist, track } = searchTerms;      // Destructuring State

    /** Update State when you change the value of the field in the form  */
    const updateState = event => {
        setSearchTerms({
            ...searchTerms,
            [ event .target .name ]: event .target .value
        });
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
            <a className="navbar-brand" href="#">Letras de canciones</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarTogglerDemo02">
                
                <form className="form-inline my-2 my-lg-0">
                    <input
                        type="text" 
                        name="artist"
                        placeholder="Nombre Artísta" 
                        className="form-control mr-sm-2" 
                        value={ artist }
                        onChange={ updateState }
                    />
                    <input 
                        type="text" 
                        name="track"
                        placeholder="Nombre de la canción" 
                        className="form-control mr-sm-2" 
                        value={ track }
                        onChange={ updateState }
                    />
                    <button 
                        type="button"
                        className="btn btn-outline-primary my-2 my-sm-0" 
                    >Buscar</button>
                </form>
            </div>
        
        </nav>
    );
}

export default Form;