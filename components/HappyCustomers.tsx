import React from 'react'
import SectionHeader from './SectionHeader'
import {  ArrowLeft, ArrowRight } from 'lucide-react'
import ReviewCollection from './ReviewCollection'

export interface Card {
  name:string,
  review:number,
  text:string,
  date?:string,
  isDate?:boolean
}

interface ProductSectionProps{
  cards:Card[]
}

const HappyCustomers = ({cards}:ProductSectionProps) => {
  return (
    <div className='max-w-7xl mx-auto max-w-frame '>
        <div className='flex justify-between items-end py-5 mx-auto'>
            <SectionHeader heading='OUR HAPPY CUSTOMERS'/>
<div className='flex gap-2'>
    <ArrowLeft/>
    <ArrowRight/>

</div>
        </div>
        <div >
          <ReviewCollection cards={cards}/>
        </div>

    </div>
  )
}

export default HappyCustomers