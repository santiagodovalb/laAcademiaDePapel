import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { doc, getDoc } from "firebase/firestore";
import db from "../../firebase/firebasedb";
import './Entrada.css'
import { useSelector } from "react-redux";

export default function Entrada() {
  const [entrada, setEntrada] = useState({})

  const location = useLocation();
  const id = location.pathname.slice(12);
  const user = useSelector(state => state.user)
  const history = useHistory()

  useEffect(() => {
    const docRef = doc(db, "entradas", id);
    getDoc(docRef).then((entrada) => setEntrada(entrada.data()));
  }, []);

  const handleClick = () => {
    history.push(`/edit/${id}`)
  }

  return (
    <div id='vistaEntrada'>
      <div id="bandaEntrada">
        <h1>{entrada.titulo}</h1>
      </div>
      <div id='entradaContent'>
      {user.email && <button type='button' onClick={handleClick}>EDITAR ENTRADA</button>}
        <h3>{entrada.fecha}</h3>
        <h3>Por {entrada.autor}</h3>
        <p>{entrada.contenido}</p>
      </div>
    </div>
  );
}
