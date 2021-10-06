import React, { useEffect, useState } from 'react'
import { collection, addDoc } from "firebase/firestore";
import db from '../../firebase/firebasedb';
import "./NuevaEntrada.css"
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

export default function Admin() {

    const history = useHistory()

    const [entrada, setEntrada] = useState({})

    const user = useSelector(state => state.user)

    useEffect(() => {}, [user])

    const handleChange = (e) => {
        setEntrada({...entrada, [e.target.name]: e.target.value})
    }

    const handleSumbit = (e) => {
        e.preventDefault()
        addDoc(collection(db, "entradas"), entrada)
        .then(() => history.push('/'))
    }

    return (
        <div id='nuevaEntrada'>
            {user.email && <h1>NUEVA ENTRADA</h1>}
            {user.email ? <form onSubmit={handleSumbit}>
                <label for="titulo">TITULO</label>
                <input onChange={handleChange} type="text" name="titulo" />
                <label for="titulo">AUTORX</label>
                <input onChange={handleChange} type="text" name="autor" />
                <label for="titulo">FECHA</label>
                <input onChange={handleChange} type="text" name="fecha" />
                <label for="titulo">URL IMAGEN</label>
                <input onChange={handleChange} type="text" name="imagen" />
                <label for="contenido">CONTENIDO</label>
                <textarea onChange={handleChange} name="contenido" rows="20" cols="120" />
                <button type='submit'>ENVIAR </button>
            </form> : <h1>NO AUTORIZADO</h1>}
        </div>
    )
}
