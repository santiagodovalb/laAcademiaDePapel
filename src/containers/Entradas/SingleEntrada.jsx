import React from 'react'
import { Link } from 'react-router-dom'
import './Entradas.css'

export default function SingleEntrada({ entradas }) {

    const data = entradas.map(doc => doc.data())
    const ids = entradas.map(doc => doc.id)

    return (
        <div>
            {data.map((data, index) => {
                return (
                    <div key={ids[index]} className='entradas'>
                        <div className='singleEntrada'>
                            <img src={data.imagen || 'https://i.stack.imgur.com/y9DpT.jpg'} alt='placeholder' />
                            <div className='entradaContent'>
                                <Link to={`/newsletter/${ids[index]}`}>
                                    <h1>{data.titulo}</h1>
                                </Link>
                                <h3>{data.fecha}</h3>
                                <Link to={`/newsletter/${ids[index]}`}>
                                    <p dangerouslySetInnerHTML={{ __html: `${data.contenido.slice(0, 200)} ...`}}></p>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
