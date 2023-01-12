import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

//JSX -> JS & XML -> Parecido a HTML pero no HTML
//Componente es: una funcion que comienza con mayuscula (funcion constructora) y retorna elementos jsx
function App() {
  const [count, setCount] = useState(0)

// Sugar Syntax - fachera simplificar - mas legible
let i = 0
i = i + 1  // sugar syntax i++ i+=1

// ej: class Persona {} molde para crear -> objetos
//Ejemplo con codigo

const condition = true;
// let resultado = ""
// if(condition){
//   resultado = "Verdadero"
// }else{
//   resultado = "Falso"
// }
// console.log("El resultado es: ", + resultado + ". todo bien")
//if(condition) else -> condicion ? :
// if(condition) condition && action
console.log(`El resultado es ${condition ? "verdadero" : "falso"}. Todo bien`);
console.log(`El resultado es ${condition && "verdadero"}  Todo bien`)

//spread operator ...
// Array, obj
const array = [2,3,4,5]
let uno = 1
const newArray = [uno, ...array] // push
console.log(newArray);


//Propiedades dinamicas
let campo = "edad"
const objPersona = {
  nombre: "Emanuel",
  apellido : "Camarena",
  [campo]:25
}
console.log(objPersona);

// deep maching

//destructurización
const {nombre:name,apellido,edad} = objPersona;
console.log(name);

//Pollify

//webpack 

//transpiling
const style={
  backgroundColor: "red",
  fontSize: "14px"
}

  return (
    <div className="App" onClick={()=> console.log("Hola")} style= {style}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
          <input type="button" value='Click me'/>
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
