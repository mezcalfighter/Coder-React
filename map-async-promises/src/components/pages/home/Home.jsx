//exportacion nombrar
import { useState } from "react"

export const Home = () => {
    const [counter, funcionCounter] = useState(0) // [variable, funcion] = useState(valor inicial)
    
    const [darkMode, setDarkMode] = useState(false)
    console.log(darkMode)


    const sumar = () => {
        funcionCounter(counter+1)
    }

    const reset = () => {
        funcionCounter(0)
    }

    const switchMode = () => {
        setDarkMode(!darkMode)
    }
    
    return (
        <div>
            <h4>{counter}</h4>
            <button onClick={sumar}>Sumar</button>
            <br />
            <br />
            <button onClick={reset}>Reset</button>
            <br />
            <br />
            <button onClick={switchMode}>Change Mode</button>
        </div>
    )
}

//exportacion por defecto
// const Home = () => {
//     return <h1>Estoy en el home</h1>
// }

// export default Home