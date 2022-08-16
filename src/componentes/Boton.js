import React from 'react';
import '../hojas-de-estilo/Boton.css';

function Boton({ texto, esBotoDeClic, manejarClic }) {
    return (
        <button className={esBotoDeClic ? 'boton-clic' : 'boton-reiniciar'}
            onClick={manejarClic}>
            {texto}
        </button>
    );
}

export default Boton;