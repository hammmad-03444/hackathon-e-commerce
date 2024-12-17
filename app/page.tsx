import Brands from "@/components/Brands";
import HomePage from "@/components/HomePage";

import ProductSection from "@/components/Product-Section";
import { Product } from "@/components/Product-Section";
import DressStyle from "@/components/DressStyle";
import HappyCustomers, { Card } from "@/components/HappyCustomers";
import Footer from "@/components/Footer";

export const newArrivalsData: Product[] = [
  {
    id: 1,
    name: "T-shirt with Tape Details",
    image: "/images/pic1.png",
    // gallery: ["/images/pic1.png", "/images/pic10.png", "/images/pic11.png"],
    price: 120,
    // discount:160,
    // discountPercentage:5,
    rating: {
      rate: 4.5,
      count: 10,
    }
  },
  {
    id: 2,
    name: "Skinny Fit Jeans",
    image: "/images/pic2.png",
    // gallery: ["/images/pic2.png"],
    price: 240,
     discount:260,
    discountPercentage:20,
    rating:{
      rate:3.5
      ,count:20
    }
  },
  {
    id: 3,
    name: "Chechered Shirt",
    image: "/images/pic3.png",
    // gallery: ["/images/pic3.png"],
    price: 180,
     // discount:160,
    // discountPercentage:5,
    rating:{
      rate:4.5,
      count:20
    }
  },
  {
    id: 4,
    name: "Sleeve Striped T-shirt",
    image: "/images/pic4.png",
    // gallery: ["/images/pic4.png", "/images/pic10.png", "/images/pic11.png"],
    price: 130,
     discount:160,
    discountPercentage:30,
    rating: {
      rate: 4.5,
      count: 10,
    }
  },
];

export const reviewsData:Card[] = [
  {
    
    name: "Alex K.",
    text:
      '"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”',
    review: 5,
    date: "August 14, 2023",
  },
  {
    
    name: "Sarah M.",
    text: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
    review: 5,
    date: "August 15, 2023",
  },
  {
    
    name: "James L.",
    text: `
"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”"`,
    review: 5,
    date: "August 16, 2023",
  },
  
  
  
]


export default function Home() {
  return (
    <section>
      <HomePage/>
      <Brands/>
      <ProductSection heading="NEW ARRIVALS"  products={ newArrivalsData} isCarousel={false}/>
      <DressStyle/>
      <HappyCustomers cards={reviewsData}/>
      <Footer/>
    </section>
  )
}




// import Brands from "@/components/Brands";
// import HomePage from "@/components/HomePage";

// import ProductSection from "@/components/Product-Section";

// import { Product } from "@/components/Product-Section";
// import DressStyle from "@/components/DressStyle";
// import HappyCustomers, { Card } from "@/components/HappyCustomers";

// import Footer from "@/components/Footer";

// export const newArrivalsData: Product[] = [
//   {
//     id: 1,
//     name: "T-shirt with Tape Details",
//     image: "/images/pic1.png",
//     price: 120,
//     rating: {
//       rate: 4.5,
//       count: 10,
//     },
//   },
//   {
//     id: 2,
//     name: "Skinny Fit Jeans",
//     image: "/images/pic2.png",
//     price: 240,
//     discount: 260,
//     discountPercentage: 20,
//     rating: {
//       rate: 3.5,
//       count: 20,
//     },
//   },
//   {
//     id: 3,
//     name: "Chechered Shirt",
//     image: "/images/pic3.png",
//     price: 180,
//     rating: {
//       rate: 4.5,
//       count: 20,
//     },
//   },
//   {
//     id: 4,
//     name: "Sleeve Striped T-shirt",
//     image: "/images/pic4.png",
//     price: 130,
//     discount: 160,
//     discountPercentage: 30,
//     rating: {
//       rate: 4.5,
//       count: 10,
//     },
//   },
// ];

// export const reviewsData: Card[] = [
//   {
//     name: "Alex K.",
//     text: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable."`,
//     review: 5,
//     date: "August 14, 2023",
//   },
//   {
//     name: "Sarah M.",
//     text: `"I'm blown away by the quality and style of the clothes I received from Shop.co. Every piece I've bought has exceeded my expectations."`,
//     review: 5,
//     date: "August 15, 2023",
//   },
//   {
//     name: "James L.",
//     text: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection is diverse and on-trend."`,
//     review: 5,
//     date: "August 16, 2023",
//   },
// ];

// export default function Home() {
//   return (
//     <section>
//       <HomePage />
//       <Brands />
//       <ProductSection heading="NEW ARRIVALS" products={newArrivalsData} isCarousel={false} />
//       <DressStyle />
//       <HappyCustomers cards={reviewsData} />
//       <Footer />
//     </section>
//   );
// }
