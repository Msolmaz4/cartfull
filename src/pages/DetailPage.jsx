import React, { useContext, useEffect, useState } from "react";
import { ProductContect } from "../context/Product";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

const DetailPage = () => {
  const { product ,deleteP} = useContext(ProductContect);
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navi = useNavigate();


  const deleteItem =()=>{
    deleteP(id)
    navi('/')
  }

  useEffect(() => {
    const currentdata = product.filter((el) => el.id == id);
    setData(currentdata[0]);
  }, []);

  return (
    <React.Fragment>
      <Button onClick={() => navi("/")}>Go to Product</Button>
      <Card style={{ width: "40rem", height: "4orem", margin: "100px auto" }}>
        <Card.Img variant="top" src="/frut.jpg" />
        <Card.Body>
          <Card.Title>dene</Card.Title>
          <Card.Text>Price: {data.price}</Card.Text>
          <Card.Text>cate:{data.category}</Card.Text>
        </Card.Body>
        <Card.Body style={{ display: "flex", justifyContent: "center" }}>
          <Button style={{ marginRight: "10px" }}>
            <Link style={{ color: "white" }} to={`/update/${data.id}`}>
              Updata
            </Link>
          </Button>
          <Button onClick={deleteItem} style={{ marginLeft: "10px" }}>delete</Button>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default DetailPage;
