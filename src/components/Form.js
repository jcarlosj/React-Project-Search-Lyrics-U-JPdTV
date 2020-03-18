import React from 'react';

const Form = () => {
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
                    />
                    <input 
                        type="text" 
                        name="track"
                        placeholder="Nombre de la canción" 
                        className="form-control mr-sm-2" 
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