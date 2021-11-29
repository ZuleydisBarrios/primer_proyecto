const persona = {"nombre": "Zuleydis", "edad": 34}
/* Crearemos una funcion mayor de edad que pregunta si es mayor a 18 */
const mayorDeEdad = edad => edad > 18

const Cursos = () =>(

<article className="card">
  <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
    <img src="https://ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Fbig%2F69017329-98f5-4975-9bd7-91165a45822b.png&w=1200&q=75" alt="poster del curso"/>
  </div>
  <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
    <h3 className="t5 s-mb-2 s-center">
     {/* De esta manera podemos usar Strings y llamar a las variables */}
     {`Mi nombre es ${ persona.nombre} tengo ${persona.edad}`}
     <br/>    
     
     {/* Con eso preguntamos si la función mayorDeEdad es verdad si es asi devuelve un true */}
     { mayorDeEdad(persona.edad) ?  " Soy mayor de edad ": "Soy menor de edad "}
   
    {/* Controlar el render de las etiquetas si es menor o mayor de edad es */}
    { mayorDeEdad(persona.edad) ? <h3> Soy Mayor de edad</h3> : <p> Soy Menor</p>   }
    
    {/* Organicemos el codigo y la estructura del operador ternario */}
    { mayorDeEdad(persona.edad)
      ?
        <div>
          <h1>
            <span>
                Hola Soy Mayor
            </span>
          </h1>
        </div>
      : <p> Soy Menor </p>    
    }

   
    </h3>
    <div className="s-mb-2 s-main-center">
      <div className="card__teacher s-cross-center">
        <div className="card__avatar s-mr-1">
          <div className="circle img-container">
            <img src="https://lh3.googleusercontent.com/a-/AOh14Gg-kNb3aw4-A-_ezIANcwyeew_eRp6hThAOA4lJDjM" alt="profesor"/>
          </div>
        </div>
        <span className="small">Alexys Lozada</span>
      </div>
    </div>
    <div className="s-main-center">
      <a className="button--ghost-alert button--tiny" href="none">$ 20USD</a>
    </div>
  </div>
</article>
)
export default Cursos;