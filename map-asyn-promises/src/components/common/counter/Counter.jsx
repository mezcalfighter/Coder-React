import React from 'react'

function Counter({sumar, restar, counter, nombre,setCounter, setNombre}) {
  return (
    <div>
        <button onClick={sumar}>Sumar</button>
        <button onClick={()=>{setCounter(counter + 1)}}>Sumar uno tambien</button>
        <h4>{counter}</h4>
        <button onClick={restar}>Restar</button>
        <h4>{nombre}</h4>
        <button onClick={()=>{setNombre("Cristian")}}>Cambiar nombre</button>
    </div>
  )
}

export default Counter