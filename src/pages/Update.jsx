import React from 'react'
import { Button ,InputGroup,FormControl,FormSelect} from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'


const Update = () => {


const navi = useNavigate()
const {id}= useParams()

  return (
    <div>
      <Button onClick={()=>navi(`/detail/${id}`)}> Go to product</Button>
      <InputGroup className='w-75' style={{margin:'150px  auto'}}>
      <InputGroup.Text>Name</InputGroup.Text>
      <FormControl name='name' type='text' />
      <InputGroup.Text>Price</InputGroup.Text>
      <FormControl  name='price' type='number' />
      <FormSelect  name='category' style={{width:'20%'}}>
        <option >Select menu</option>
        <option value='fruit'>Fruit</option>
        <option value='vege'>Vege</option>
        <option value='dairy'>Dairy</option>

      </FormSelect>
      <Button >Add</Button>
      </InputGroup>



    </div>
  )
}

export default Update