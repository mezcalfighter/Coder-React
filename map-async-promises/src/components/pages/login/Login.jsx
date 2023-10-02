// rafc ->  react arrow function - import default
// rafce -> importa la function

import { useState } from "react"

const Login = () => {
  // inicialmente pepe
  // luego de cambiar el nombre
  // quiero que se llame juan
  const [nombre, setNombre] = useState("Pepe")

  const changeName = () => {
    if (nombre == "Pepe") {
      setNombre("Juan");
    } else {
      setNombre("Pepe")
    }
  }

  return (
    <div>
      <h2>{nombre}</h2>
      <button onClick={changeName}>Cambiar Nombre</button>
    </div>
  );
}

export default Login