import { useState, useEffect } from 'react'

// Promise -> Simulación API
// Pendiente -> Hasta que nos devuelve la plata
// Rechazado/ Reject -> No te puedo devolver la plata
// Completada / Fullfilled -> Nos devolvió la plata

let task = new Promise(( resolve, reject)=>{
    // Acciones
    //reject('Rechazado')
    resolve('Fullfilled')
})

let productos = [
    {id:'1',name:'Taza',description:'useless example',stock:4},
    {id:'1',name:'Arroz',description:'useless example',stock:4},
    {id:'1',name:'Café',description:'useless example',stock:4},
    {id:'1',name:'Pan',description:'useless example',stock:4},
    {id:'1',name:'Agua',description:'useless example',stock:4}
  ]
  
  let gFetch = new Promise((resolved,rejected)=>{
    setTimeout(()=>{
      resolved(productos)
      //rejected('Not Found')
    },3000)
  })

export const ItemListContainer = ({saludo}) => {
    task
        .then(respuesta => console.log(respuesta))
        .catch(reject => console.log(reject))
    gFetch
        .then(respuesta => console.log(respuesta))
        .catch(reject => console.log(reject))
    return(
        <>

            <h2>{saludo}</h2>
        </>
    )
}