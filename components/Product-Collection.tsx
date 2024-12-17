import React from 'react'
import {Product} from './Product-Section'
import ProductCard from './Product-Card'
const ProductCollection = ({products,isCarousel}:{products:Product[],isCarousel:boolean}) => {
  if(isCarousel){
    return(
      <div>
        <h1>Carousel</h1>
      </div>
    )
  }
  
  
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl px-4 gap-6 mx-auto'>
      {products.map((product,index)=>(
        <ProductCard 
          name={product.name}
          image={product.image}
          price={product.price}
          discount={product.discount}
          discountPercentage={product.discountPercentage}
          key={index}
          rating={product.rating}
          review={product.rating.count} isNew={false}/>
      ))}
<div>

</div>
    </div>
  )
}
export default ProductCollection