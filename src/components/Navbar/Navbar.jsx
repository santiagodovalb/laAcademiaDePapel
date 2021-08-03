import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { BsSearch } from "react-icons/bs";
import logo from "../../assets/logo.png";
import youtube from "../../assets/youtube.png";
import donate from "../../assets/donate.png";
import people from "../../assets/people.png";
import compu from "../../assets/compu.png";
import home from '../../assets/home.png'

export default function Navbar() {
  const location = useLocation();
  return (
    <div>
      <div class="topnav">
        <Link to='/'>
            <img src={logo} alt="logo" id="logo" />
        </Link>
        <div className="links">
          <Link className={location.pathname === "/" ? "active" : ""} to="/">
            <img src={home} alt="home" />
            Home
          </Link>
          <Link
            className={location.pathname === "/blog" ? "active" : ""}
            to="/blog"
          >
            <img src={compu} alt="compu" />
            Entradas
          </Link>

          <Link
            className={location.pathname === "/videos" ? "active" : ""}
            to="/videos"
          >
            <img src={youtube} alt="youtubeLogo" />
            Videos
          </Link>

          <Link
            className={location.pathname === "/bancanos" ? "active" : ""}
            to="/bancanos"
          >
            <img src={donate} alt="donate" />
            Bancanos
          </Link>

          <Link
            className={location.pathname === "/about" ? "active" : ""}
            to="/about"
          >
            <img src={people} alt="people" />
            ¿Quiénes somos?
          </Link>
        </div>
        <div className="search">
          <BsSearch />
          <input type="text"></input>
        </div>
      </div>
    </div>
  );
}
