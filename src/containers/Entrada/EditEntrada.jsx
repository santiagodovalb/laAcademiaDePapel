import React, { useEffect } from "react";
import "./EditEntrada.css";
import { useLocation, useHistory } from "react-router";
import { doc, getDoc, setDoc } from "firebase/firestore";
import db from "../../firebase/firebasedb";
import { useSelector } from "react-redux";
import useEntrada from "../../hooks/useEntrada";

export default function EditEntrada() {

  const location = useLocation();
  const history = useHistory()

  const id = location.pathname.slice(6);
  const user = useSelector((state) => state.user);

  const { handleClick, handleChange, handleKeyPress, setEntrada, entrada } =
    useEntrada("contenidoEdit");

  useEffect(() => {
    const docRef = doc(db, "entradas", id);
    getDoc(docRef).then((entrada) => setEntrada(entrada.data()));
  }, [user, id, setEntrada]);

  const handleSubmit = (e) => {
    e.preventDefault()
    const ref = doc(db, 'entradas', id);
    setDoc(ref, entrada, { merge: true })
    .then(() => {
        alert('Entrada editada')
        history.push('/newsletter')
    })
}


  return (
    <div id="nuevaEntrada">
      {user.email && <h1>EDITAR ENTRADA</h1>}
      {user.email ? (
        <form onSubmit={handleSubmit}>
          <label for="titulo">TITULO</label>
          <input
            onChange={handleChange}
            type="text"
            name="titulo"
            defaultValue={entrada.titulo}
          />
          <label for="titulo">AUTORX</label>
          <input
            onChange={handleChange}
            type="text"
            name="autor"
            defaultValue={entrada.autor}
          />
          <label for="titulo">FECHA</label>
          <input
            onChange={handleChange}
            type="text"
            name="fecha"
            defaultValue={entrada.fecha}
          />
          <label for="titulo">URL IMAGEN</label>
          <input
            onChange={handleChange}
            type="text"
            name="imagen"
            defaultValue={entrada.imagen}
          />
          <label for="contenido">CONTENIDO</label>
          <div id="editButtons">
            <button
              type="button"
              id="negrita"
              onClick={handleClick}
              className="editText"
            >
              <strong>B</strong>
            </button>
            <button
              type="button"
              id="italica"
              onClick={handleClick}
              className="editText"
            >
              <em>i</em>
            </button>
            <button
              type="button"
              id="link"
              onClick={handleClick}
              className="editText"
            >
              🔗
            </button>
          </div>
          <textarea
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            id="contenidoEdit"
            name="contenido"
            rows="20"
            cols="120"
            defaultValue={entrada.contenido}
          />
          <button type="submit" id="submit">
            ENVIAR{" "}
          </button>
        </form>
      ) : (
        <h1>NO AUTORIZADO</h1>
      )}
    </div>
  );
}
