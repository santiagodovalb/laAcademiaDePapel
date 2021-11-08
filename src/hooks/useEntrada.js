import {useState} from 'react'


export default function useEntrada(divId) {

    const [entrada, setEntrada] = useState({})

    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            let contenido = document.getElementById(divId)
            contenido.value += '</br>'
            setEntrada({...entrada, contenido: contenido.value})
        }
      }

    const handleChange = (e) => {
        setEntrada({...entrada, [e.target.name]: e.target.value})
    }


    const handleClick = (e) => {
        let contenido = document.getElementById(divId)
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

    return {handleClick, handleChange, handleKeyPress, setEntrada, entrada}
}
