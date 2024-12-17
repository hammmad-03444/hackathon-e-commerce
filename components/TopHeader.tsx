'use client'
import React from 'react'



import { X } from 'lucide-react';
  

const TopHeader = () => {

  return (
    <div>
        
        <div className="bg-black  text-white  flex lg:justify-between items-center md:px-4 py-2 w-full text-sm">
      {/* Promotional Message */}
      <div className='mx-auto md:max-w-7xl max-w-xl '>
        <span className="sm:mr-2 sm:text-xl text-xs">Singup and get 20% off to your first order</span>
        <a
          href="/shop"
          className="text-purple-500 underline hover:text-purple-300 transition"
        >
          Singup
        </a>
      </div>

      {/* Language Dropdown */}
      <div className="relative sm:gap-2 md:mr-6">
      <X/>
        </div>
        </div>
        </div>
    
  )
}

export default TopHeader

















