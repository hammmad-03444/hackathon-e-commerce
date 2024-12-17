import React from 'react'
import SectionHeader from './SectionHeader'
import ProductCollection from './Product-Collection'
export interface Product{
  id:number,
  name:string,
  image:string,
  price:number,
  discount?:number,
  discountPercentage?:number,
  rating:{
    rate:number,
    count:number,
    
  }

}

interface ProductSectionProps{
  heading: string,
  action?:React.ReactNode,
  products:Product[],
  isCarousel:boolean,
    ctaText?:string

  
}

const ProductSection = ({heading,action,products,isCarousel}:ProductSectionProps) => {
  return (
    <div className='flex flex-col mx-auto justify-center min-h-screen '>
      {/* header */}
      <div className='mx-auto'>
        <SectionHeader heading={heading}/>
        {action}
      </div>
      {/* poducts */}
<div className='mt-10 '>
<ProductCollection products={products} isCarousel={isCarousel}/>
</div>


    </div>
  )
}

export default ProductSection