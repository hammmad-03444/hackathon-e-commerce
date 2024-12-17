
export interface ReviewCardProps{
    review:number,
    name:string,
    text:string,
    isDate?:boolean,
    date?:string,
}
    
import { IoIosCheckmarkCircle } from 'react-icons/io';

import { cn } from '@/lib/utils'
import React from 'react'
import Image from 'next/image';


const ReviewCard = ({review,name,text,isDate=false,date}:ReviewCardProps) => {
    const renderStars = (review: number) => {
       const fullStars = Math.floor(review); // Full stars
       const hasHalfStar = review % 1 !== 0; // Check for a half star
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
    <div className={cn([
        "relative bg-white flex flex-col items-start aspect-auto border border-black/10 rounded-[20px] p-6 sm:px-8 sm:py-7 lg:w-[400]  overflow-hidden",'h-full'])}>
            <div className="flex items-center mb-3 sm:mb-4">
        {renderStars(review)}
      </div>
<div className="w-full flex items-center mb-3 sm:mb-4">

           
        <strong className="text-black sm:text-xl mr-1">{name}</strong>
        <IoIosCheckmarkCircle className="text-[#01AB31] text-xl sm:text-2xl" />
      </div>
      <div className="flex items-center mb-2 sm:mb-3">
      <p className="text-sm sm:text-base text-black/60">{text}</p>
      {isDate && (
        <p className="text-black/60 text-sm font-medium mt-4 sm:mt-6">
          Posted on {date}
        </p>
      )}
    </div>
</div>
        
  )
}

export default ReviewCard