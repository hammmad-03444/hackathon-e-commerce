import React from 'react'
import { Card } from './HappyCustomers'
import ReviewCard from './ReviewCard'
const ProductCollection = ({cards}:{cards:Card[]}) => {
  
  
  
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-96 mx-auto gap-6 max-w-7xl '>
      {cards.map((card,index)=>(
        <ReviewCard 
          name={card.name}
          review={card.review}
          text={card.text}
          key={index}
          />
      ))}
<div>

</div>
    </div>
  )
}
export default ProductCollection