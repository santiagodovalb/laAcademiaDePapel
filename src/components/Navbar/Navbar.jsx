import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { setUser } from "../../state/user";

export default function Navbar() {
  
  const location = useLocation();
  const user = useSelector(state => state.user)
  const auth = getAuth();
  const history = useHistory()
  const dispatch = useDispatch()

  const handleSignout = () => {
    signOut(auth).then(() => {
      alert('Sign out exitoso')
      dispatch(setUser({}))
      history.push('/')
    }).catch((error) => {
      alert('Hubo un error')
    });
  }

  const handleLinks = () => {
    const sidebar = document.getElementById('sidebar')
    sidebar.className = 'closed'
  }

  const handleClick = () => {
    const sidebar = document.getElementById('sidebar')
    sidebar.className = sidebar.className === 'closed' ? 'open' : 'closed'
    console.log(sidebar.className)
  }

  return (
    <div>
      <div className="topnav">
        <div id="logo">
          <Link to='/'>
              <img src={logo} alt="logo"  />
          </Link>
        </div>
        <div id='mobileNav' onClick={handleClick}>
          <h1>☰</h1>
        </div>
        <div id='sidebar' className='closed'>
        
          <a
            href="/#aportes"
            onClick={handleLinks}
          >
            APORTES
          </a>

          {/* <a
            href="https://la-academia-de-papel.flashcookie.com/" target="_blank" rel="noreferrer"
            onClick={handleLinks}
          >
           
            TIENDA
          </a> */}

          <Link
            className={location.pathname === "/newsletter" ? "active" : ""}
            to="/newsletter"
            id='linkNews'
            onClick={handleLinks}
          >
           
            NEWSLETTER
          </Link>

          <Link
            className={location.pathname === "/contacto" ? "active" : ""}
            to="/contacto"
            onClick={handleLinks}
          >
          
            CONTACTO
          </Link>
          <Link className={location.pathname === "/nosotres" ? "active" : ""} to="/nosotres" onClick={handleLinks}>
            
            NOSOTRES
          </Link>
          {user.email && <Link
            className={location.pathname === "/about" ? "active" : ""}
            to="/nuevaentrada"
          >
          
            NUEVA ENTRADA
          </Link>}
        </div>
        <div className="links">
          
          <a
            href="/#aportes"
            onClick={handleLinks}
          >
            APORTES
          </a>
{/* 
          <a
            href="https://la-academia-de-papel.flashcookie.com/" target="_blank" rel="noreferrer"
          >
           
            TIENDA
          </a> */}

          <Link
            className={location.pathname === "/newsletter" ? "active" : ""}
            to="/newsletter"
            id='linkNews'
          >
           
            NEWSLETTER
          </Link>

          <Link
            className={location.pathname === "/contacto" ? "active" : ""}
            to="/contacto"
          >
          
            CONTACTO
          </Link>
          <Link className={location.pathname === "/nosotres" ? "active" : ""} to="/nosotres">
            
            NOSOTRES
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
