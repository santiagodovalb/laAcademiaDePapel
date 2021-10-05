import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import userReducer from "../../state/user";
import userEvent from "@testing-library/user-event";
import { useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { useHistory } from "react-router";

export default function Navbar() {
  
  const location = useLocation();
  const user = useSelector(state => state.user)
  const auth = getAuth();
  const history = useHistory()

  const handleSignout = () => {
    signOut(auth).then(() => {
      alert('Sign out exitoso')
      history.push('/')
    }).catch((error) => {
      alert('Hubo un error')
    });
  }

  return (
    <div>
      <div class="topnav">
        <Link to='/'>
            <img src={logo} alt="logo" id="logo" />
        </Link>
        <div className="links">
          <Link className={location.pathname === "/nosotres" ? "active" : ""} to="/nosotres">
            
            NOSOTR3S
          </Link>
          <a
            href="/#aportes"
          >
            APORTES
          </a>

          <a
            href="https://la-academia-de-papel.flashcookie.com/" target="_blank"
          >
           
            COMPRAS
          </a>

          <Link
            className={location.pathname === "/bancanos" ? "active" : ""}
            to="/newsletter"
          >
           
            NEWSLETTER
          </Link>

          <Link
            className={location.pathname === "/about" ? "active" : ""}
            to="/contacto"
          >
          
            CONTACTO
          </Link>
          {user.email && <Link
            className={location.pathname === "/about" ? "active" : ""}
            to="/nuevaentrada"
          >
          
            NUEVA ENTRADA
          </Link>}
        </div>
        {user.email && <button type='button' onClick={handleSignout}>DESLOGEAR ADMIN</button>}
      </div>
    </div>
  );
}
