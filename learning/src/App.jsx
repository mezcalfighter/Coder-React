import {Footer} from "./Footer"
import Navbar from "./Navbar"
import {Home} from "./Home"

function App() {
  // Codigo JS
  let nombre = "Emanuel"

  const sumar = ()=>{

  }

  let estilos = {
    padding:50,
    color:"red"
  }

  // Codigo HTML
  return (
    // llamar las variables 
    <div>
      <Navbar/>
      <h1 style={estilos}>Hola {nombre}</h1>
      <h1 style={{padding:30,color:"orange",fontSize:"2rem"}}>Hola {nombre}</h1>
      <Home/>
      <button onClick={sumar}>Sumar</button>
      <Footer/>
    </div>
  )
}

export default App
