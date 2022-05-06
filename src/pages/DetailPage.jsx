import React,{useContext, useEffect, useState}from 'react'
import { ProductContect } from '../context/Product'
import { useNavigate, useParams } from 'react-router-dom'
import { Button,Card } from 'react-bootstrap'

const DetailPage = () => {

const {product} = useContext(ProductContect)
const {id} =useParams()
const [data ,setData]= useState()
const navi =useNavigate()


useEffect(()=>{

  const currentdata = product.filter(el => el.id === id)
  setData(currentdata[0])
},[])


  return (
    <div>
      <Button onClick={()=>navi('/')}>Go to Product</Button>
      <Card style={{width:'40rem',height:'4orem',margin:'100px auto'}}>
        <Card.Img  variant='top' src='/frut.jpg'/>


      </Card>



    </div>
  )
}

export default DetailPage