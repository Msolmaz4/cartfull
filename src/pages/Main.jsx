
import { useContext } from 'react'
import { ProductContect } from '../context/Product'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import ProductCard from '../components/ProductCard'


const Main = () => {

const { product } =useContext(ProductContect)
//console.log(product)
const navi =useNavigate()


  return (
    <div>
      <Button onClick={()=>navi('/add')}> Add  Product</Button>
      <div className='pro-cont'>
        {
          product?.map((el,idx)=>(
            <ProductCard 
          
            id ={el.id}/>
          ))
        }


  

        
     


        
      </div>


    </div>
  )
}

export default Main