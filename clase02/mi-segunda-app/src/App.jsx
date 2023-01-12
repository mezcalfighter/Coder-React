import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

//JSX -> JS & XML -> Parecido a HTML pero no HTML
//Componente es: una funcion que comienza con mayuscula (funcion constructora) y retorna elementos jsx

const Contactenos = (saludar) => {
  const tituloContactenos = "Soy titulo de Contactenos";
  const subTituloCont = "Soy subtitulo de Contactenos";
  return (
    <section>
      <h2>Titulo de Form</h2>
      <Titulo
        titulo = {tituloContactenos}
        subTitulo = {subTituloCont}
      />
      <form>
        <label>Ingrese el nombre</label><br />
        <input type='email' placeholder='Ingrese su nombre' />
      </form>
    </section>
  )
}

//props: la manera de pasar datos de un componente padre a un hijo

//parametros:

const Titulo = (obj) => {
  const {titulo='titulo', subTitulo='subtitulo',saludo} = obj
  return (
    <>
      <h1>{titulo}</h1>
      <h3>{subTitulo}</h3>
      <button onClick={saludo}>Saludar</button>
    </>
  )
}

function App() {
  const tituloApp = "Soy titulo de App"
  const saludar = () => console.log("Saludando") // estado

  return (
    <div>
      <Titulo
       titulo={tituloApp}
       subTitulo = "Soy subtitulo de app" //estados = Variables
       saludo = {saludar}
      />
      <p>"hola como están"</p>
      <Contactenos 
      />
    </div>
  )
}

export default App