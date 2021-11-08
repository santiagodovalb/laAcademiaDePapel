import React from "react";
import "./Home.css";
import Logo from "../../assets/bandaLogoHome.png";
import Patreon from "../../assets/patreon_logo.svg";
import Cafecito from "../../assets/cafecito_logo.svg";
import fondoTransparente from "../../assets/fondoTransparente.png";
import "animate.css";

export default function Home() {

  const handleClick = (e) => {
    if (e.target.id === "cafecito")
      window.open(`https://cafecito.app/laacademiadepapel`, "_blank");
    if (e.target.id === "patreon")
      window.open(`https://www.patreon.com/LaAcademiaDePapel`, "_blank");
    if (e.target.id === "youtube")
      window.open(
        `https://www.youtube.com/channel/UCH08pslY37XMeJU3_fSyN1A`,
        "_blank"
      );
  };

  return (
    <div>
      <div className="bandaLogo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="home">
        <p>
        Un espacio donde divagamos sobre antropología, historia y ciencias sociales. Si te apasiona todo lo que es el mundo social y sus alrededores, te va a gustar lo que hacemos :)
        </p>
          <a href="https://www.youtube.com/channel/UCH08pslY37XMeJU3_fSyN1A" target='_blank' rel="noreferrer">
          <button type='button' id='youtube'>ir al canal de YouTube</button>
          </a>
          <img src={fondoTransparente} alt='dibujos' />
      </div>
      <div className="bandaAportes">
        <h1>APORTES</h1>
      </div>
      <div id="aportes">
        <div className="cajaAportes">
          <div
            className="opcionAporte"
            id="cafecito"
            style={{ cursor: "pointer" }}
            onClick={(e) => handleClick(e)}
          >
            <a href='https://cafecito.app/laacademiadepapel' target='_blank' rel="noreferrer">
            <img src={Cafecito} alt='cafecito'/>
            <h1>Cafecito</h1>
            </a>
          </div>
          <h4>desde argentina</h4>
        </div>
        <div className="cajaAportes">
          <div
            className="opcionAporte"
            id="patreon"
            style={{ cursor: "pointer" }}
            onClick={handleClick}
          >
            <a href='https://www.patreon.com/LaAcademiaDePapel' target='_blank' rel="noreferrer">
            <img src={Patreon} alt='patreon'/>
            <h1>Patreon</h1>
            </a>
          </div>
          <h4>desde cualquier parte</h4>
        </div>
      </div>
    </div>
  );
}
