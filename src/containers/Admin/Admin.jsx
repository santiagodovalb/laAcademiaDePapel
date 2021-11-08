import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./Admin.css"
import { useDispatch } from 'react-redux';
import { setUser } from '../../state/user';
import { useHistory } from 'react-router';

export default function Admin() {

    const [login, setLogin] = useState()
    const dispatch = useDispatch()
    const auth = getAuth();
    const history = useHistory()

    const handleChange = (e) => {
        setLogin({...login, [e.target.name]: e.target.value})
    }

    const handleSumbit = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, login.email, login.password)
          .then(user => {
            dispatch(setUser({email: user.user.email}))
            history.push('/nuevaentrada')
          })
          .catch((error) => {
            alert('Hubo un error')
            console.log(error)
          });
        
    }

    return (
        <div id='admin'>

            <h1>ADMIN LOGIN</h1>
            <form onSubmit={handleSumbit}>
                <label htmlFor="username">EMAIL</label>
                <input onChange={handleChange} type="text" name="email" />
                <label htmlFor="password">CONTRASEÑA</label>
                <input onChange={handleChange} type="password" name="password" />
                <button type='submit'>ENVIAR </button>
            </form>
        </div>
    )
}
