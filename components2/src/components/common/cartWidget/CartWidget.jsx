import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../../layout/navbar/Navbar';
import React from 'react'

const CartWidget = ()=>{
  return (
    <>
      <Badge badgeContent={0} color="primary" showZero position="fixed">
        <ShoppingCartIcon />
      </Badge>
    </>
  )
}
export default CartWidget
