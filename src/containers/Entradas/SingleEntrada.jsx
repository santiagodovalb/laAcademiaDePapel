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
                    <div key={entrada.id} className='entrada'>
                        <h5>{date(entrada.createdAt)}</h5>
                        <h1>{entrada.titulo}</h1>
                        <p>{entrada.contenido}</p>
                    </div>
                )
            })}
        </div>
    )
}
