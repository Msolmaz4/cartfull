import React, {useContext,useEffect,useState } from 'react'
import { Button ,InputGroup,FormControl,FormSelect} from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductContect } from '../context/Product'


const Update = () => {


const navi = useNavigate()
const { id } = useParams()

const [inputs ,setInputs] = useState({
  name:'',
  price:'',
  category:''
})

const { product,updateProduct} = useContext(ProductContect)




const handleChange =(e)=>{
  const name =e.target.name;
  const value = e.target.value
  setInputs({...inputs ,[name]: value})


}

const updateItem = () =>{

   const {name,price,category} = inputs
   updateProduct(name,price,category)
  navi(`/detail/${id}`)

}




useEffect(()=>{
  //const currentProduct = product.filter((el )=> el.id === id)
  const currentProduct = product.find((el )=> el.id === id)
  setInputs(currentProduct)


  //console.log(currentProduct)
  //const {name,price,category} = currentProduct[0];
 // console.log(name,price,category)
 // inputRef.current.name = name
 //inputRef.current.price = price
//inputRef.current.category = category 
}, [])




  return (
    <div>
      <Button onClick={()=>navi(`/detail/${id}`)}> Go to product</Button>
      <InputGroup className='w-75' style={{margin:'150px  auto'}}>
      <InputGroup.Text>Name</InputGroup.Text>
      <FormControl  onChange={handleChange} value={inputs.name} name='name' type='text' />
      <InputGroup.Text>Price</InputGroup.Text>
      <FormControl onChange={handleChange} value={inputs.price} name='price' type='number' />
      <FormSelect onChange={handleChange} value={inputs.category}  name='category' style={{width:'20%'}}>
        <option >Select menu</option>
        <option value='fruit'>Fruit</option>
        <option value='vege'>Vege</option>
        <option value='dairy'>Dairy</option>

      </FormSelect>
      <Button onClick={updateItem}>Add</Button>
      </InputGroup>



    </div>
  )
}

export default Update