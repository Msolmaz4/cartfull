import React from 'react'
import  {Form,InputGroup,FormControl,Button, FormSelect} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'



const AddProj = () => {

const navi =useNavigate()

  return (
    <div>
      <Button onClick={()=>navi('/')}>Goto </Button>
      <InputGroup className='w-75' style={{margin:'150px  auto'}}>
      <InputGroup.Text>Name</InputGroup.Text>
      <FormControl name='name' type='text' />
      <InputGroup.Text>Price</InputGroup.Text>
      <FormControl name='price' type='number' />
      <FormSelect name='category' style={{width:'20%'}}>
        <option >Select menu</option>
        <option value='fruit'>Fruit</option>
        <option value='vege'>Vege</option>
        <option value='dairy'>Dairy</option>

      </FormSelect>
      </InputGroup>


    </div>
  )
}

export default AddProj