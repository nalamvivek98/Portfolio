import React from 'react'
import "./productList.css"
import Product from "../product/Product"
const ProductList = () => {
  return (
    <div className='pl'>
        <div className='pl-texts'>
            <h1 className='pl-title'>
                Create & inspire.Its Vivek

            </h1>
            <p className='pl-desc'>
                puzzle is a game which helps users to play,enjoy and relax.

            </p>
        </div>
        <div className="pl-list">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>

        </div>
  )
}

export default ProductList