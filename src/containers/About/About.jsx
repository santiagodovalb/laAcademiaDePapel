import React from "react";
import './About.css'
import antu from '../../assets/antu.png'
import juli from '../../assets/juli.png'
import lu from '../../assets/lu.png'

export default function About() {
  return (
    <div>
      <div className="persona">
        <div className="header">
          <img src={antu} alt="foto antonio" className="fotos" />
          <h1>Antonio Doval Borthagaray</h1>
        </div>
        <p>
          Soy <strong>Profesor de Antropología</strong> (UBA). Estoy en proceso de elaboración de
          mi <strong>tesis de licenciatura</strong> sobre experiencias formativas de estudiantes
          migrantes latinoamericanos de posgrado. Soy estudiante adscripto en la
          materia Sistemática 1 cátedra Novaro/Manzano (Cs. Antropológicas,
          FFyL-UBA) y trabajo como <strong>docente</strong> de antropología, historia y ciencias
          sociales en nivel medio. Trabajé también en contextos de educación
          no-formal y educación popular de jóvenes y adultos. Participé de
          diversos proyectos en <strong>medios digitales</strong>, incluyendo un programa de
          radio y una revista digital. Los domingos me encuentran en la plaza
          del barrio tocando murga, candombe o alguna otra música popular
          latinoamericana.
        </p>
      </div>

      <div className="persona">
        <div className="header">
          <img src={juli} alt="foto antonio" className="fotos" />
          <h1>Julieta Ferreiro</h1>
        </div>
        <p>
          Estoy finalizando el <strong>profesorado y la licenciatura en Antropología</strong> la
          Facultad de Filosofía y Letras de la UBA. Formo parte de un equipo de
          investigación del Programa de Antropología de la Educación de la misma
          facultad. Obtuve una <strong>beca de investigación</strong> de grado en donde me enfoco
          en el estudio de cuestiones vinculadas a la migración, la identidad y
          la interculturalidad. Además, soy adscripta en la materia Antropología
          Sistemática 1 cátedra Novaro-Manzano (Cs. Antropológicas, FFyL-UBA).
          Trabajé en diversos ámbitos de la educación: el equipo de educación
          del <strong>Museo Nacional del Hombre (INAPL)</strong>, asociaciones civiles, programas
          socioeducativos del Ministerio de Cultura de la Nación y también para
          la Organización de Estados Iberoamericanos en conjunto con el
          Ministerio de Cultura de la Nación
        </p>
      </div>

      <div className="persona">
        <div className="header">
          <img src={lu} alt="foto antonio" className="fotos" />
          <h1>Lucila Marina Pequeño</h1>
        </div>
        <p>
          Estoy terminando el <strong>profesorado y la licenciatura de Antropología</strong> en
          la Facultad de Filosofía y Letras de la UBA y trabajo como <strong>jardinera</strong>.
          Estudié <strong>música</strong> en las orquestas infantiles y juveniles de la ciudad y
          en espacios de formación popular y doy clases particulares de
          instrumentos hace algunos años. Soy adscripta en la materia
          Antropología Sistemática 1 cátedra Novaro-Manzano (Cs. Antropológicas,
          FFyL-UBA), participo de distintos espacios de <strong>extensión</strong> de la
          universidad y estoy realizando mi <strong>tesis</strong> en el área de la antropología
          y educación en una política socioeducativa de la Ciudad de Buenos
          Aires, en torno a la inclusión y las construcciones de futuro de lxs
          jóvenes y sus familias.{" "}
        </p>
      </div>
    </div>
  );
}
