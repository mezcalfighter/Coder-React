import { useState, useEffect } from "react"
import Counter from "./Counter"

function CounterContainer(props) {

    const {stock} = props
    const [counter, setCounter] = useState(1)
    const [nombre, setNombre] = useState("Emanuel")

    const sumar = ()=>{
        if(counter < stock){
            setCounter(counter + 1)
        }else{
            alert("Cantidad maxima")
        }
    }

    const restar = ()=>{
        if(counter > 1){
            setCounter(counter - 1)
        }
    }

    //UseEffect - Va a renderizar al inicio de ejecución pero no despues
    // useEffect(FUNCION A EJECUTAR,[DEPENDENCIAS])
    // Nota: Las dependencias funcionan para ejecutar cuando hay cambios
    useEffect(()=>{
        console.log("Ejecute useEffect")
    },[nombre])

  return <Counter sumar={sumar} restar={restar} counter={counter} nombre={nombre} setCounter={setCounter} setNombre={setNombre}/>
}

export default CounterContainer