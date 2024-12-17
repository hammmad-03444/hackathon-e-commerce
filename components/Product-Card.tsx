// import React from 'react'
// import { Product } from './Product-Section'
// import { Card, CardContent } from './ui/card'
// import Image from 'next/image'
// import { Star, StarIcon } from 'lucide-react'
// // import { g } from 'framer-motion/client'
 export interface ProductCardProps{
  name:string,
  image:string,
  price:number,
  discountPercentage?:number,
  discount?:number,
  rating:{
    rate:number,
    count:number
  }
  review:number,
  isNew:boolean
}
// const ProductCard = ({image,name,discounted,price,originalPrice,rating,review,isNew}:ProductCardProps) => {
//   return (
//     <Card className='group relative overflow-hidden'>
//         <CardContent className='p-0 '>
//             <div className='relative aspect-square rounded-lg'>
//             <Image className='w-full h-full object-cover'
//             src={image}
//             width={100}
//             height={100}
//             alt={name}/>
//             </div>
//             <div className='mt-2 flex flex-col p-4'>
//                 <h1 className='font-bold text-xl '>{name}</h1>
//                 <div className='flex'>
//                   {[...Array(5)].map((g,i)=>(
//                     <span key={i} className={i < Math.floor(rating.rate) ? 'text-yellow-400 fill-yellow-400 ' : 'text-gray-300 fill-gray-300 bg-gray-100'}>★</span>
//                   ))}
//                   <span>{rating.rate}/{review}</span>
//                 </div>
//             </div>
            
//         </CardContent>
//     </Card>

    
//   )
// }

// export default ProductCard









import React from 'react';
// import { ProductCardProps } from './ProductCardProps'; // Assuming you're exporting the interface from a separate file
import { Card, CardContent } from './ui/card';
import Image from 'next/image';


const ProductCard = ({
  image,
  name,
  discount,
  discountPercentage,
  price,
  rating,
  review,
  
}: ProductCardProps) => {
  const renderStars = (rate: number) => {
    const fullStars = Math.floor(rate); // Full stars
    const hasHalfStar = rate % 1 !== 0; // Check for a half star
    const totalStars = 5;

    return (
      <div className="flex items-center">
        {/* Render full stars */}
        {Array(fullStars)
          .fill(0)
          .map((_, index) => (
            <span key={`full-${index}`} className="text-yellow-400 "><Image src="/Star 3.svg" alt='star' width={18} height={18}/></span>
          ))}
        {/* Render half star */}
        {hasHalfStar && <span className=""><Image src="/Star 5.svg" height={10} width={10} alt="stars" /></span>}
        {/* Render empty stars */}
        {Array(totalStars - fullStars - (hasHalfStar ? 1 : 0))
          .fill(0)
          .map((_, index) => (
            <span key={`empty-${index}`} className="text-gray-300 text-xl">★</span>
          ))}
      </div>
    );
  };

  return (
    <Card className="group relative overflow-hidden border-none">
      <CardContent className="p-0 border-none">
        <div className="relative aspect-square rounded-lg">
          <Image
            className="w-full h-full object-cover rounded-xl"
            src={image}
            width={100}
            height={100}
            alt={name}
          />
        </div>
        <div className="mt-2 flex flex-col p-4 border-none">
          <h1 className="font-bold text-xl">{name}</h1>
          <div className="flex items-center">
            {renderStars(rating.rate)}
            <span className="ml-2 text-sm font-normal">
              {rating.rate}/<span className='text-muted-foreground'>{review }</span>
            </span>
            
          </div>
          <div className="flex items-center">
            <span className="text-xl font-bold">${price}</span>
            {/* <span className="ml-2 text-sm text-muted-foreground line-through">
              ${discount}
            </span>
            <span className="ml-2 text-sm text-green-500">{discountPercentage}</span> */}
            {discount && discountPercentage ? (
  <>
    <span className="ml-3 text-xl text-muted-foreground line-through">
      ${discount.toFixed(2)}
    </span>
    <span className="ml-3 text-xs text-green-500 bg-gray-300 rounded-xl px-2 py-1" >
      -{discountPercentage}% 
    </span>
  </>
) : null}

          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
