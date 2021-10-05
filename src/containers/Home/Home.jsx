import React, { useState, useEffect } from "react";
import "./Home.css";
import Logo from "../../assets/logo.png";
import Patreon from "../../assets/patreon_logo.svg";
import Cafecito from "../../assets/cafecito_logo.svg";
import "animate.css"

export default function Home() {

  const handleClick = (e) => {
    if (e.target.id === 'cafecito') window.open(`https://cafecito.app/laacademiadepapel`, "_blank");
    if (e.target.id === 'patreon') window.open(`https://www.patreon.com/LaAcademiaDePapel`, "_blank");
    if (e.target.id === 'youtube') window.open(`https://www.youtube.com/channel/UCH08pslY37XMeJU3_fSyN1A`, "_blank")
  };

  return (
    <div>
      <div className="bandaLogo">
        <img src={Logo} alt="logo" className='roll-in-left'/>
      </div>
      <div className="home">
        <p>Esto es La Academia de Papel, un canal de <br/> videos sobre antropología, historia y ciencias <br/> sociales. Si sos docente, estudiante o simplemente <br/> un apasionado del mundo y sus alrededores (?), <br/> te va a gustar lo que hacemos.</p>
        <div id='youtube' onClick={handleClick} style={{cursor: 'pointer'}}>
          <h2>ir al canal de YouTube</h2>
        </div>
      </div>
      <div className="bandaAportes">
        <h1>APORTES</h1>
      </div>
      <div id="aportes">
        <div className='cajaAportes'>
            <div className="opcionAporte" id='cafecito' style={{cursor: 'pointer'}} onClick={(e) => handleClick(e)}>
                <img src={Cafecito} />
                <h1>Cafecito</h1>
            </div>
            <h4>desde argentina</h4>
        </div>
        <div className='cajaAportes' style={{textAlign: 'end'}}>
            <div className="opcionAporte" id='patreon' style={{cursor: 'pointer'}} onClick={handleClick}>
                <img src={Patreon} />
                <h1>Patreon</h1>
            </div>
            <h4>desde cualquier parte</h4>
            </div>
      </div>
    </div>
  );
}