import React from 'react'
import "./productList.css"
import Product from "../product/Product"
import {products} from "../../data"



const ProductList = () => {
let productlist=products.map(item=>{
   return (<Product key={item.id} img={item.img} link={item.link}/>)
})

  return (
    <div className='pl' id="products">
        <div className='pl-texts'>
            <h1 className='pl-title'>
             Work and  Projects 

            </h1>
            <p className='pl-desc'>
                Building projects is fun and we can learn and build our network while contributing to projects through online.

            </p>
        </div>
        <div className="pl-list">
            {productlist}
        </div>

        </div>
  )
}

export default ProductList