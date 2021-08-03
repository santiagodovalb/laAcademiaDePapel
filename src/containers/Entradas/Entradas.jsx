import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SingleEntrada from './SingleEntrada'

export default function Entradas() {

    const [entradas, setEntradas] = useState([])

    useEffect(() => {
        axios.get('/api/entradas')
        .then(res => res.data)
        .then(entradas => setEntradas(entradas))
    }, [])

    return (
        <div>
            <SingleEntrada entradas={entradas} />
        </div>
    )
}
