import React from 'react'
import { FcShop } from "react-icons/fc";
import { FaFacebook, FaInstagram, FaTwitter, FaTelegram } from "react-icons/fa";

import TextRevealButton from "../Animation/TextRevealButton";
export const Contact = () => {


   return (
      <div className="w-full sm:w-[95%] lg:w-[90%] mx-auto px-4 sm:px-0">
         <div className="h-[56vh] sm:h-[60vh] md:h-[55vh] lg:h-[30vh] w-full 
        bg-gradient-to-r from-blue-300 to-green-300 
        mt-4 rounded-2xl flex flex-col items-center pt-5">

            <h4 className="font-black bg-gradient-to-r from-yellow-800 to-black bg-clip-text text-transparent mb-4">
               CONTACT US
            </h4>

            <p className="text-emerald-700 font-bold w-[70%] text-center mb-6" style={{ fontSize: '24px' }}>
               Contact us to easily order any food or juice and get some special promotions. We’ll get back to you quickly.
            </p>

            {/* Input + Subscribe Button */}
            <div className="flex w-[400px]">
               <input
                  type="email"
                  placeholder="Freshfood3455@gmail.com"
                  className="placeholder-gray-300 flex-1 h-[50px]  px-4 rounded-l-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
               />
               <button className="bg-gradient-to-r from-green-600 to-blue-400 bg-green-500 bg-linear-to-r hover:from-red-700 to-green-400 text-black font-bold px-6 rounded-r-lg ">
                  Subscribe
               </button>
            </div>
         </div>
         <div className=" flex gap-3 w-full h-[30vh] md:mt-20 ">
            <h1 className="text-2xl font-bold  items-center gap-2 p-4">
               <span className="text-4xl flex">
                  <FcShop className="cursor-pointer" />
                  <h5 className='bg-gradient-to-r from-green-600 to-blue-400 bg-clip-text text-transparent font-extralight pt-3 ' style={{ fontSize: '20px' }}>KHMER FRESH</h5>
               </span>

               <div className="flex gap-4 items-center mt-10">
                  <a href="https://www.facebook.com/"><FaFacebook className="text-blue-600 cursor-pointer text-[20px]" /></a>
                  <a href="https://www.instagram.com/"><FaInstagram className="bg-linear-to-b from-pink-500 to-orange-400 text-amber-50 rounded-[3px] cursor-pointer text-[20px]" /></a>
                  <a href="https://x.com/"><FaTwitter className="text-blue-400 cursor-pointer text-[20px]" /></a>
                  <a href="https://desktop.telegram.org/9o"><FaTelegram className="text-cyan-500 cursor-pointer text-[20px]" /></a>
               </div>
            </h1>



            <div className=' ml-40 mt-5.5 '>
               <h3 className='font-bold' style={{ fontSize: '20px' }}>Our services</h3>
               <ul className='mt-4' style={{ fontSize: '13px' }}>
                  <li>Pricing</li>
                  <li className='pt-1'>Tracking</li>
                  <li className='pt-1'>Report a Bug</li>
                  <li className='pt-1'>Terms of service</li>
               </ul>
            </div>
            <div className=' ml-50 mt-5.5 '>
               <h3 className='font-bold' style={{ fontSize: '20px' }}>Our Company</h3>
               <ul className='mt-4' style={{ fontSize: '13px' }}>

                  <li className='pt-1'>Reporting</li>
                  <li className='pt-1'>Get in Touch</li>
                  <li className='pt-1'>Management</li>
               </ul>
            </div>
            <div className=' ml-50 mt-5.5 '>
               <h3 className='font-bold' style={{ fontSize: '20px' }}>Address</h3>
               <ul className='mt-4' style={{ fontSize: '13px' }}>

                  <li className='pt-1'>371 Steung mean chey</li>
                  <li className='pt-1'>897-234-3445</li>
                  <li className='pt-1'>Freshfood3455@gmail.com</li>
               </ul>
            </div>
         </div>

      </div>
   )
}


export default Contact
