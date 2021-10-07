import React, { useEffect, useState } from 'react'
import './EditEntrada.css'
import { useHistory } from 'react-router'
import { useLocation } from 'react-router'
import { doc, setDoc, getDoc } from "firebase/firestore";
import db from "../../firebase/firebasedb";
import { useSelector } from 'react-redux';

export default function EditEntrada() {

    const history = useHistory()
    const location = useLocation();
    const id = location.pathname.slice(6);
    const [entrada, setEntrada] = useState({})
    const user = useSelector(state => state.user)

    useEffect(() => {
        const docRef = doc(db, "entradas", id);
        getDoc(docRef).then((entrada) => setEntrada(entrada.data()));
      }, [user, id]);

    const handleChange = (e) => {
        setEntrada({...entrada, [e.target.name]: e.target.value})
    }

    const handleSumbit = (e) => {
        e.preventDefault()
        const ref = doc(db, 'entradas', id);
        setDoc(ref, entrada, { merge: true })
        .then(() => {
            alert('Entrada editada')
            history.push('/newsletter')
        })
    }

    const handleClick = (e) => {
        let contenido = document.getElementById('contenidoEdit')
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

    return (
            <div id='nuevaEntrada'>
                {console.log(id)}
            {user.email && <h1>EDITAR ENTRADA</h1>}
            {user.email ? <form onSubmit={handleSumbit}>
                <label for="titulo">TITULO</label>
                <input onChange={handleChange} type="text" name="titulo" defaultValue={entrada.titulo}/>
                <label for="titulo">AUTORX</label>
                <input onChange={handleChange} type="text" name="autor" defaultValue={entrada.autor}/>
                <label for="titulo">FECHA</label>
                <input onChange={handleChange} type="text" name="fecha" defaultValue={entrada.fecha}/>
                <label for="titulo">URL IMAGEN</label>
                <input onChange={handleChange} type="text" name="imagen" defaultValue={entrada.imagen}/>
                <label for="contenido">CONTENIDO</label>
                <div id='editButtons'>
                    <button type='button' id='negrita' onClick={handleClick} className='editText'><strong>B</strong></button>
                    <button type='button' id='italica' onClick={handleClick} className='editText'><em>i</em></button>
                    <button type='button' id='link' onClick={handleClick} className='editText'>🔗</button>
                </div>
                <textarea onChange={handleChange} id='contenidoEdit' name="contenido" rows="20" cols="120" defaultValue={entrada.contenido}/>
                <button type='submit' id='submit'>ENVIAR </button>
            </form> : <h1>NO AUTORIZADO</h1>}
        </div>
    )
}
