// import Image from 'next/image'
// import React from 'react'

// const HomePage = () => {
//   return (
//     <section className='overflow-hidden relative'>
//         <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col-reverse md:flex-row items-center justify-between h-[calc(100vh-80px)]">
//         {/* Left Column */}
//         <div className="text-center md:text-left max-w-lg space-y-6">
//           <h1 className="text-5xl font-extrabold tracking-tight leading-tight">
//             FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
//           </h1>
//           <p className="text-lg text-gray-500">
//             Browse through our diverse range of meticulously crafted garments,
//             designed to bring out your individuality and cater to your sense of style.
//           </p>
//           <button className="bg-black text-white px-6 py-3 rounded-md text-lg hover:bg-gray-800 transition">
//             Shop Now
//           </button>
//           {/* Statistics */}
//           <div className="flex justify-center md:justify-start gap-10 pt-4">
//             <div className="text-center">
//               <h3 className="text-2xl font-bold">200+</h3>
//               <p className="text-gray-500 text-sm">International Brands</p>
//             </div>
//             <div className="text-center">
//               <h3 className="text-2xl font-bold">2,000+</h3>
//               <p className="text-gray-500 text-sm">High-Quality Products</p>
//             </div>
//             <div className="text-center">
//               <h3 className="text-2xl font-bold">30,000+</h3>
//               <p className="text-gray-500 text-sm">Happy Customers</p>
//             </div>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="relative overflow-hidden lg:mt-40">
//           {/* Main Image */}
//           <Image
//             src="/all/header-homepage.png" // Replace with the actual path to your models' image
//             alt="Models"
//             width={500}
//             height={600}
//             objectFit="contain"
//             className=''
//           />
//           {/* Vectors */}
//           <Image
//             src="/all/vector (1).png"
//             alt="Vector 1"
//             className="absolute top-10 right-5 w-15"
//             width={80}
//             height={90}
//           />
//           <Image
//             src="/all/Vector.png"
//             alt="Vector 2"
//             className="absolute top-60 left-5 w-10"
//             width={40}
//             height={40}
//           />
//         </div>
//       </div>

//     </section>
//   )
// }

// export default HomePage

import AnimatedCounter from "./ui/AnimatedCounter";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";
import { integralCF } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as motion from "framer-motion/client";

const HomePage = () => {
  return (
    <header className="bg-[#F2F0F1] pt-10 md:pt-24 overflow-hidden">
      <div className="md:max-w-frame mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <section className="max-w-frame px-4">
          <motion.h2
            initial={{ y: "100px", opacity: 0, rotate: 10 }}
            whileInView={{ y: "0", opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={cn([
              integralCF.className,
              "text-4xl lg:text-[64px] lg:leading-[64px] mb-5 lg:mb-8",
            ])}
          >
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </motion.h2>
          <motion.p
            initial={{ y: "100px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-black/60 text-sm lg:text-base mb-6 lg:mb-8 max-w-[545px]"
          >
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </motion.p>
          <motion.div
            initial={{ y: "100px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Link
              href="/shop"
              className="w-full md:w-52 mb-5 md:mb-12 inline-block text-center bg-black hover:bg-black/80 transition-all text-white px-14 py-4 rounded-full hover:animate-pulse"
            >
              Shop Now
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: "100px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex md:h-full md:max-h-11 lg:max-h-[52px] xl:max-h-[68px] items-center justify-center md:justify-start flex-wrap sm:flex-nowrap md:space-x-3 lg:space-x-6 xl:space-x-8 md:mb-[116px]"
          >
            <div className="flex flex-col">
              <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
                <AnimatedCounter from={0} to={200} />+
              </span>
              <span className="text-xs xl:text-base text-black/60 text-nowrap">
                International Brands
              </span>
            </div>
            <Separator      
              className="ml-6 md:ml-0 h-12 md:h-full bg-black/10"
              orientation="vertical"
            />
            <div className="flex flex-col ml-6 md:ml-0">
              <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
                <AnimatedCounter from={0} to={2000} />+
              </span>
              <span className="text-xs xl:text-base text-black/60 text-nowrap">
                High-Quality Products
              </span>
            </div>
            <Separator
              className="hidden sm:block sm:h-12 md:h-full ml-6 md:ml-0 bg-black/10"
              orientation="vertical"
            />
            <div className="flex flex-col w-full text-center sm:w-auto sm:text-left mt-3 sm:mt-0 sm:ml-6 md:ml-0">
              <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
                <AnimatedCounter from={0} to={3000} />+
              </span>
              <span className="text-xs xl:text-base text-black/60 text-nowrap">
                Happy Customers
              </span>
            </div>
          </motion.div>
        </section>
        <motion.section
          initial={{ y: "100px", opacity: 0, rotate: 10 }}
          whileInView={{ y: "0", opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2.3, duration: 0.8 }}
          className="relative md:px-4 min-h-[448px] md:min-h-[428px] bg-cover bg-top xl:bg-[center_top_-1.6rem] bg-no-repeat bg-[url('/all/header-res-homepage.png')] md:bg-[url('/all/header-homepage.png')]"
        >
          <Image
            priority
            src="/all/Vector.png"
            height={104}
            width={104}
            alt="big star"
            className="absolute right-7 xl:right-0 top-12 max-w-[76px] max-h-[76px] lg:max-w-24 lg:max-h-max-w-24 xl:max-w-[104px] xl:max-h-[104px] animate-[spin_4s_infinite]"
          />
          <Image
            priority
            src="/all/Vector (1).png"
            height={56}
            width={56}
            alt="small star"
            className="absolute left-7 md:left-0 top-36 sm:top-64 md:top-44 lg:top-56 max-w-11 max-h-11 md:max-w-14 md:max-h-14 animate-[spin_3s_infinite]"
          />
        </motion.section>
      </div>
    </header>
  );
};

export default HomePage;