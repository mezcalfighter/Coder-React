import ItemList from "./ItemList.jsx"
import {products} from "../../../productsMock.js"
import { useEffect, useState } from "react"

export const ItemListContainer = ({nombre}) => {

  const [items, setItems] = useState([])
  
  useEffect(()=>{
    const tarea = new Promise((res,rej)=>{
      res(products)
    })
  
    tarea
      .then((res)=>{setItems(res)})
      .catch((rej)=>{console.log("falle")})
    
      

  },[])
  
 
  //const tarea2 = fetch("api")

  return <ItemList nombre={nombre} items={items}/>
}