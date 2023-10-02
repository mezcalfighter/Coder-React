import React from 'react'
import ProductCard from '../../common/productCard/ProductCard'

function ItemList({nombre,items}){
  return (
    <section style={{backgroundColor:"peru", display:"flex", justifyContent:"center", padding:"1rem"}}>
      {items.map((i)=>{
        return <ProductCard i={i} key={i?.id}/>
      })}
    </section>
  )
}


export default ItemList