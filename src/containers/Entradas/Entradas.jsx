import React, { useEffect, useState } from "react";
import db from "../../firebase/firebasedb";
import { query, orderBy, collection, getDocs } from "firebase/firestore";
import SingleEntrada from "./SingleEntrada";
import Loader from "react-loader-spinner";
import { AutoComplete } from "antd";

export default function Entradas() {
  const [loading, setLoading] = useState(true);
  const [entradas, setEntradas] = useState([]);

  useEffect(() => {
    const entradas = collection(db, "entradas");
    const q = query(entradas, orderBy("timestamp", "desc"));
    getDocs(q)
      .then((entradas) => entradas.docs)
      .then(setEntradas)
      .then(setLoading(false));
  }, []);

  return (
    <div id="newsletter">
      <div className="banda3">
        <h1>Newsletter</h1>
      </div>
      <form
        id="suscribite"
        action="https://laacademiadepapel.us10.list-manage.com/subscribe/post?u=107533eb3904e7d375ad53dc9&amp;id=2ce0cce12f"
        method="post"
        target="_blank"
      >
        <input
          name="EMAIL"
          type="email"
          placeholder="tu e-mail..."
          id="emailInput"
        />
        <ul style={{ display: "none" }}>
          <li>
            <input
              type="checkbox"
              value="1"
              name="group[184013][1]"
              id="mce-group[184013]-184013-0"
              defaultChecked
            />
            <label htmlFor="mce-group[184013]-184013-0">todos</label>
          </li>
        </ul>
        <button type="submit">suscribite!</button>
      </form>
      <div id='loader'>
        <Loader
          type="ThreeDots"
          color="#b24443"
          height={100}
          width={100}
          timeout={1200}
          radius={1000}
        />
      </div>
      <SingleEntrada entradas={entradas} />
    </div>
  );
}
