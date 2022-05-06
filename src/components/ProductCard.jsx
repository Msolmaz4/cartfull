import React from 'react'
import {Card ,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const ProductCard = ({id, productNmae}) => {
  return (
    <div>  
        <Card className='pro-card' style={{width:'250px'}}>
            <Card.Img variant='top'  src='frut.jpg'/>
            <Card.Body>
                <Card.Title>{productNmae} </Card.Title>
                <Card.Text>fresh</Card.Text>
                <Button style={{dispaly:'block',margin:'auto'}}>
                    <Link to={`/detail/${id}`} style={{color:'white',textDecoration:'none'}}>
detail
                    </Link>
                    </Button>

            </Card.Body>
        </Card>

    </div>
  )
}

export default ProductCard