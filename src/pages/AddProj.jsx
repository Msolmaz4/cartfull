import React, { useContext, useRef } from 'react'
import  {Form,InputGroup,FormControl,Button, FormSelect} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ProductContect } from '../context/Product'



const AddProj = () => {


  const {add} = useContext(ProductContect)

const navi =useNavigate()
const inputRef= useRef({
  name:'',
  price:'',
  category:','
})

const handle =(e)=>{
  const name=e.target.name
  inputRef.current[name] =e.target.value
}

const addItem =()=>{
  const {name ,price, category} = inputRef.current
  add(name,price,category)
  navi('/')

}

  return (
    <div>
      <Button onClick={()=>navi('/')}>Goto </Button>
      <InputGroup className='w-75' style={{margin:'150px  auto'}}>
      <InputGroup.Text>Name</InputGroup.Text>
      <FormControl onClick={handle} name='name' type='text' />
      <InputGroup.Text>Price</InputGroup.Text>
      <FormControl onClick={handle} name='price' type='number' />
      <FormSelect onClick={handle} name='category' style={{width:'20%'}}>
        <option >Select menu</option>
        <option value='fruit'>Fruit</option>
        <option value='vege'>Vege</option>
        <option value='dairy'>Dairy</option>

      </FormSelect>
      <Button onClick={addItem}>Add</Button>
      </InputGroup>


    </div>
  )
}

export default AddProj