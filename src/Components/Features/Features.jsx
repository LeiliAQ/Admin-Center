// import React from 'react'
// import './Features.css'
// import { FaArrowDown } from "react-icons/fa";
// import { FaArrowUp } from "react-icons/fa";
// export default function Features() {
//   return (
//     <div className='Features '>
//         <div className="Features__item ">
//             <span className="Feature__title">Revenue</span>
//             <div className="Feature__details">
//                 <span className="Feature__money">2450$</span>
//                 <span className="Feature__rate">
//                     -11.4
//                     <FaArrowDown className='Feature__icon negative'/>
//                     </span>
//             </div>
//             <span className='Feature__sub'>Compared to last month</span>
//         </div>
//         <div className="Features__item ">
//             <span className="Feature__title">Sales</span>
//             <div className="Feature__details">
//                 <span className="Feature__money">4415$</span>
//                 <span className="Feature__rate">
//                     -11.4
//                     <FaArrowDown className='Feature__icon negative'/>
//                     </span>
//             </div>
//             <span className='Feature__sub'>Compared to last month</span>
//         </div>
//         <div className="Features__item ">
//             <span className="Feature__title">Costs</span>
//             <div className="Feature__details">
//                 <span className="Feature__money">2410$</span>
//                 <span className="Feature__rate">
//                     +2.4
//                     <FaArrowUp className='Feature__icon'/>
//                     </span>
//             </div>
//             <span className='Feature__sub'>Compared to last month</span>
//         </div>
      
//     </div>
//   )
// }

import React from 'react';
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function Features() {
  return (
    <div className='w-full flex flex-col lg:flex-row justify-around items-start p-2 md:p-5'>
      <div className="w-full lg:w-1/3 m-2 md:m-5 p-2 md:p-4 rounded-lg cursor-pointer flex flex-col justify-center items-center shadow-lg">
        <span className="text-sm md:text-md font-medium">Revenue</span>
        <div className="flex items-center my-1 md:my-2">
          <span className="text-xl md:text-2xl font-semibold">2450$</span>
          <span className="flex items-center ml-2 md:ml-3 text-red-600">
            -11.4
            <FaArrowDown className='ml-1 text-base md:text-lg' />
          </span>
        </div>
        <span className='text-gray-500 text-xs md:text-sm'>Compared to last month</span>
      </div>
      <div className="w-full lg:w-1/3 m-2 md:m-5 p-2 md:p-4 rounded-lg cursor-pointer flex flex-col justify-center items-center shadow-lg">
        <span className="text-sm md:text-md font-medium">Sales</span>
        <div className="flex items-center my-1 md:my-2">
          <span className="text-xl md:text-2xl font-semibold">4415$</span>
          <span className="flex items-center ml-2 md:ml-3 text-red-600">
            -11.4
            <FaArrowDown className='ml-1 text-base md:text-lg' />
          </span>
        </div>
        <span className='text-gray-500 text-xs md:text-sm'>Compared to last month</span>
      </div>
      <div className="w-full lg:w-1/3 m-2 md:m-5 p-2 md:p-4 rounded-lg cursor-pointer flex flex-col justify-center items-center shadow-lg">
        <span className="text-sm md:text-md font-medium">Costs</span>
        <div className="flex items-center my-1 md:my-2">
          <span className="text-xl md:text-2xl font-semibold">2410$</span>
          <span className="flex items-center ml-2 md:ml-3 text-green-600">
            +2.4
            <FaArrowUp className='ml-1 text-base md:text-lg' />
          </span>
        </div>
        <span className='text-gray-500 text-xs md:text-sm'>Compared to last month</span>
      </div>
    </div>
  );
}

