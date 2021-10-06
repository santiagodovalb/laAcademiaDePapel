import React, { useEffect, useState } from 'react'
import db from '../../firebase/firebasedb';
import { collection, getDocs } from 'firebase/firestore';
import SingleEntrada from './SingleEntrada'

export default function Entradas() {

    const [entradas, setEntradas] = useState([])

    useEffect(() => {
        const entradas = collection(db, 'entradas');
        const entradas2 =  getDocs(entradas)
        .then(entradas => entradas.docs)
        .then(setEntradas)
    }, [])

    const handleClick = () => {
        
        alert("éxito!");
    }

    return (
        <div id='newsletter'>
            <div className="banda3">
                <h1>Newsletter</h1>
            </div>
            <form id='suscribite' action='https://laacademiadepapel.us10.list-manage.com/subscribe/post?u=107533eb3904e7d375ad53dc9&amp;id=2ce0cce12f' method="post" target="_blank">
                <input name='EMAIL' type='email' placeholder='tu e-mail...' id='emailInput'/>
                <ul style={{display: 'none'}}>
                    <li>
                        <input type="checkbox" value="1" name="group[184013][1]" id="mce-group[184013]-184013-0"  checked/>
                        <label for="mce-group[184013]-184013-0" checked>todos</label>
                    </li>
                </ul>
                <button type='submit'>suscribite!</button>
            </form>
            <SingleEntrada entradas={entradas} />
        </div>
    )
}
