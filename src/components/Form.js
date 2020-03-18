import React, { useState } from 'react';

const Form = () => {

    /** Hook: Define State */
    const
        [ searchTerms, setSearchTerms ] = useState({
            artist: '',
            track: ''
        }),
        [ error, setError ] = useState( false );

    const { artist, track } = searchTerms;      // Destructuring State

    /** Update State when you change the value of the field in the form  */
    const updateState = event => {
        setSearchTerms({
            ...searchTerms,
            [ event .target .name ]: event .target .value
        });
    }

    /** Update State when you change the value of the field in the form  */
    const onSubmitSearch = event => {
        event .preventDefault();

        /** Validate */
        if( artist .trim() === '' || track .trim() === '' ) {
            setError( true );
            return;
        }
        setError( false );

        /** Send data to the main Component */

    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
            <a className="navbar-brand" href="#">Letras de canciones</a>
        
            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarTogglerDemo02">
                
                <form 
                    className="form-inline my-2 my-lg-0"
                    onSubmit={ onSubmitSearch }
                >
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
                        type="submit"
                        className="btn btn-outline-primary my-2 my-sm-0" 
                    >Buscar</button>
                    { error
                        ?   <p className="alert alert-danger alert-custom text-center p-2">Todos los campos son obligatorios</p>
                        :   null
                    }
                </form>
            </div>
        
        </nav>
    );
}

export default Form;