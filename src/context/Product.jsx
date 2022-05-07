import { createContext, useState } from "react";

export const ProductContect = createContext()

const ProductContectProvider =(props) =>{


const [product,setProduct] =useState([
    {
        name:'alex',
        price:25,
        category:'fruit',
        id:Math.ceil(Math.random()*500)


    },
    {
        name:'Organic',
        price:2,
        category:'vega',
        id:Math.ceil(Math.random()*500)


    },
    {
        name:'Orange',
        price:6,
        category:'fruit',
        id:Math.ceil(Math.random()*500)


    },
    {
        name:'cholate',
        price:8,
        category:'fruit',
        id:Math.ceil(Math.random()*500)

    },
    {
        name:'clery',
        price:25,
        category:'fruit',
        id:Math.ceil(Math.random()*500)


    }





])


const add =(name,price,category)=>{
    product.push({
        name:name,
        price:price,
        category:category,
        id:Math.ceil(Math.random()*500)
    })
    setProduct(product)

}


return(
    <ProductContect.Provider value={{product , add}}> 
        {props.children}
        
    </ProductContect.Provider>
)
}
export default ProductContectProvider
