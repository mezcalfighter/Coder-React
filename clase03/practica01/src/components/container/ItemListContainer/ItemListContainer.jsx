import { useState, useEffect } from 'react'

export const ItemListContainer = ({saludo}) => {
    //estado y funcion para cambiar el estado
    // muchos estados
    // no tiene que haber creación de estados dentoro de alguna condición o estructura de datos
    const [contador, setContador ] = useState(0); // hook
    const [boolean, setBoolean] = useState(false);
    
    //Ejecuta todo lo que está acá después del rendering
    useEffect(()=>{
        // Acciones despues del rendering
        console.log("window.addEeventListener")
        return () => {
            console.log("window.removeEventListener")
        }
    })

    // Solo se va a ejecutar una sola vez
    useEffect(()=>{
        console.log("Llamando a la API 2")
    },[])

    // Solo se va a ejecutar una vez y luego cada que se ejecute boolean
    useEffect(()=>{
        console.log("Cambio de boolean")
    },[boolean])
    //js imperativo - ejecución tipo cascada
    // const manejoContador = () => {
    //     setContador(contador+1) // - 0 + 1 / 1 + 1
    // }
    console.log('Antes del rendering de ItemListContainer2');
    
    const manejadorBooleano = () =>{
        setBoolean(!boolean)
    }

    return(
        <>
            <h2>Renderizado 3</h2>
            <p>Click: {contador}</p>
            <button onClick={()=>setContador(contador+1)}>Sumar</button>
            <br />
            <br />
            <button onClick={manejadorBooleano}>Cambiar Estado Boleano</button>
            <br />
            <br />
            {saludo}
        </>
    )
}

//Reglas -> No bloquear el rendering de un componente
//props
//estados
//ciclo de vida (como se comparta el componente)
    //La primer vez que se ejecuta componente (ItemListContainer) - primer render - Montado del componente
    // desde el segundo render -> llama: re-render o actualización

// 3 cosas que disparan un nuevo render(re-render)
    // 1- Un evento
    // 2- Cambio en un estado
    // 3- Cambio en una prop