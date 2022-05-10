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


const deleteP =(id)=>{
    const newPro =product.filter(el => el.id !==id)
    setProduct(newPro)

}


const updateProduct = (name,price,category,id) =>{
    const currentProduct = product.find(el =>el.id ===id )
    currentProduct.name = name;
    currentProduct.price = price;
    currentProduct.category = category;
    setProduct(product)


}


return(
    <ProductContect.Provider value={{product,add,deleteP,updateProduct}}> 
        {props.children}
        
    </ProductContect.Provider>
)
}
export default ProductContectProvider
