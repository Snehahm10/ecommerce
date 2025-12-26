import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {

    const {products}=useContext(ShopContext);
    const [bestSeller,setBestSeller]=useState([]);

    useEffect(()=>{

        const bestProduct=products.filter((item)=>(item.bestseller))
        setBestSeller(bestProduct.slice(0,5))
    },[products])
  return (
    <div className='my-10 '>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className='w:3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Our bestsellers are customer favorites, known for their exceptional quality and style. These top-rated products have been tried and tested by many, making them reliable choices for anyone looking to enhance their collection.
            </p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {bestSeller.map((item,index)=>(
            <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>))}
      </div>

      
    </div>
  )
}

export default BestSeller
