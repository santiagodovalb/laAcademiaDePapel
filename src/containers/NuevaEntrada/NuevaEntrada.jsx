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

    useEffect(() => {
    }, [user])

    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            let contenido = document.getElementById('contenidoTA')
            contenido.value += '</br>'
            setEntrada({...entrada, contenido: contenido.value})
        }
      }

    const handleClick = (e) => {
        let contenido = document.getElementById('contenidoTA')
        let text = contenido.value
        let tag, endTag
        if (e.target.id === 'negrita') {
            tag = '<b>'
            endTag = '</b>'
        }
        if (e.target.id === 'italica') {
            tag = '<i>'
            endTag = '</i>'
        }
        if (e.target.id === 'link') {
            let link = prompt('Ingresar link')
            tag = `<a href=${link} target='_blank'>`
            endTag = '</a>'
        }
        contenido.value = text.slice(0, contenido.selectionStart) + tag + text.slice(contenido.selectionStart, contenido.selectionEnd) + endTag + text.slice(contenido.selectionEnd)
        setEntrada({...entrada, contenido: contenido.value})
    }

    const handleChange = (e) => {
        setEntrada({...entrada, [e.target.name]: e.target.value})
    }

    const handleSumbit = (e) => {
        e.preventDefault()
        addDoc(collection(db, "entradas"), {...entrada, timestamp: Date.now()})
        .then(() => {
            alert('Entrada creada')
            history.push('/newsletter')})
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
