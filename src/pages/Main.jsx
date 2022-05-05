import React from 'react'
import { useContext } from 'react'
import { ProductContect } from '../context/Product'

const Main = () => {

const context =useContext(ProductContect)
console.log(context)

  return (
    <div>Main</div>
  )
}

export default Main