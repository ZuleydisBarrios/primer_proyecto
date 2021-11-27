//import './App.css';
//reemplazarlo por este nuevo estilo que creamos en la carpeta styles
import { Fragment } from 'react';
import './styles/styles.scss'

const App = () => (
  <fragment>
  <div>
    <h1>Hola Mundo</h1>
    <p>Hola, saludando desde el componente</p>
  </div>
  <div>
    <h2>Hola mundo soy un h2</h2>
    <p>Hola, saludando desde mi componente h2</p>
  </div>
  <div>
    <img src="https://www.dzoom.org.es/wp-content/uploads/2010/09/mirada-ojos-encuadre-primer-plano-sexy-810x540.jpg" />
    </div>
  </fragment>
)

export default App;

//Reglas JSX
//1: Toda etiqueta debe cerrarse
//2: Los componentes deben devolver UN solo elemento padre
//3: Apoyarse de los fragment cuando necesito devolver 2 elementos
//4: Fragment => <> hijos </>
//5: img siempre se cierra
//6: 
