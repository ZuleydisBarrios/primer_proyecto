//import './App.css';
//reemplazarlo por este nuevo estilo que creamos en la carpeta styles
import { Fragment } from 'react';
import './styles/styles.scss'
import Cursos from './componentes/Cursos.js';

const App = () => (
  <>
 <div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" alt= "banner" src="https://media.tacdn.com/media/attractions-content--1x-1/0b/2d/dc/c2.jpg"/>
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Cursos de Edteam</p>
        <p> Tu futuro te esta esperando</p>
        <a href="none" className="button">Suscribirse</a>
      </div>
    </div>
  </div>
</div>
<div className="ed-grid m-grid-3">
  <Cursos />
  <Cursos />
  <Cursos />
  <Cursos />
  <Cursos />
  <Cursos />
  <Cursos />
  <Cursos />
  <Cursos />
</div>
</>
)

export default App;

//Reglas JSX
//1: Toda etiqueta debe cerrarse
//2: Los componentes deben devolver UN solo elemento padre
//3: Apoyarse de los fragment cuando necesito devolver 2 elementos
//4: Fragment => <> hijos </>
//5: img siempre se cierra
//6: class pasa a ser className
//7: for pasa a ser htmlFor
//8: No se puede usar if, else, while, se deben recurrir a otras practicas
