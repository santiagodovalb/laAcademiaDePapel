import React from 'react'
import './Entradas.css'

export default function SingleEntrada({ entradas }) {

    const date = (fecha) => {
        let dia = fecha.slice(0, 10);
        let fechaCorrecta = `${dia.slice(8, 10)}/${dia.slice(
          5,
          7
        )}/${dia.slice(0, 4)}`;
        return fechaCorrecta;
      };

    return (
        <div>
            {entradas.map(entrada => {
                return (
                    <div className='entradas'>
                        <div key={entrada.id} className='singleEntrada'>
                            <img src={entrada.imagen || 'https://i.stack.imgur.com/y9DpT.jpg'} alt='placeholder' />
                            <div className='entradaContent'>
                                <h1>{entrada.titulo}</h1>
                                <h3>29/09/2021</h3>
                                <p>{entrada.contenido}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
