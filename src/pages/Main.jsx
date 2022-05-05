import React from 'react'
import { useContext } from 'react'
import { ProductContect } from '../context/Product'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Main = () => {

const {product} =useContext(ProductContect)
const navi =useNavigate()


  return (
    <div>
      <Button onClick={()=>navi('/add')}> Add  Product</Button>
      


    </div>
  )
}

export default Main