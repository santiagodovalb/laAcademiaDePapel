import React, { useEffect } from 'react'
import { collection, addDoc } from "firebase/firestore";
import db from '../../firebase/firebasedb';
import "./NuevaEntrada.css"
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import useEntrada from '../../hooks/useEntrada';

export default function Admin() {

    const history = useHistory()

    const {handleClick, handleChange, handleKeyPress, entrada} = useEntrada('contenidoTA')

    const user = useSelector(state => state.user)

    useEffect(() => {
    }, [user])

    const handleSubmit = (e) => {
        e.preventDefault()
        addDoc(collection(db, "entradas"), {...entrada, timestamp: Date.now()})
        .then(() => {
            alert('Entrada creada')
            history.push('/newsletter')})
    }

    return (
        <div id='nuevaEntrada'>
            {user.email && <h1>NUEVA ENTRADA</h1>}
            {user.email ? <form onSubmit={handleSubmit}>
                <label for="titulo">TITULO</label>
                <input onChange={handleChange} type="text" name="titulo" />
                <label for="titulo">AUTORX</label>
                <input onChange={handleChange} type="text" name="autor" />
                <label for="titulo">FECHA</label>
                <input onChange={handleChange} type="text" name="fecha" />
                <label for="titulo">URL IMAGEN</label>
                <input onChange={handleChange} type="text" name="imagen" />
                <label for="contenido">CONTENIDO</label>
                <div id='editButtons'>
                    <button type='button' id='negrita' onClick={handleClick} className='editText'><strong>B</strong></button>
                    <button type='button' id='italica' onClick={handleClick} className='editText'><em>i</em></button>
                    <button type='button' id='link' onClick={handleClick} className='editText'>🔗</button>
                </div>
                <textarea onChange={handleChange} onKeyPress={handleKeyPress} id='contenidoTA' name="contenido" rows="20" cols="120" />
                <button type='submit' id='submit'>ENVIAR </button>
            </form> : <h1>NO AUTORIZADO</h1>}
        </div>
    )
}
