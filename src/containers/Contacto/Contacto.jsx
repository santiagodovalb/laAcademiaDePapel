import React, { useState } from 'react'
import { useHistory } from 'react-router'
import emailjs from 'emailjs-com'
import './Contacto.css'
const { USER_ID, TEMPLATE_ID} = process.env

export default function Contacto() {

    const history = useHistory()

    const [contacto, setContacto] = useState({})

    const handleChange = (e) => {
        setContacto({...contacto, [e.target.name]: e.target.value})
    }

    const handleSumbit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_vxcqpl8', "template_9j6dcjg", e.target, "user_7eLZl2OVI5XFLpYjSdZIp")
        .then(() => {
            alert('Enviado con éxito!')
            history.push('/')
        })
        .catch((err) => {
            console.log(err)
            alert('Hubo un error')
        })
    }

    return (
        <div id='contacto'>
            <div className="bandaContacto">
                <h1>Contacto</h1>
            </div>
            <form onSubmit={handleSumbit}>
                <input onChange={handleChange} type="text" name="email" placeholder="tu e-mail..."/>
                <input onChange={handleChange} type="text" name="asunto" placeholder="asunto..."/>
                <textarea onChange={handleChange} name="contenido" placeholder="tu comentario..."/>
                <button type='submit' style={{float: 'left'}}>ENVIAR </button>
            </form>
        </div>
    )
}
