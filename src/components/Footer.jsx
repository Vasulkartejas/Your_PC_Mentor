import React from 'react'
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <div className="bottom-0 h-auto flex flex-col items-center justify-center gap-2 border-t-2 p-4 border-black">
            <div className='w-full flex items-center justify-center gap-4'>
                <a href="https://www.linkedin.com/in/akkkshattt/" target='_blank' rel="noreferrer" >
                    <div className='w-10 h-10 rounded-full bg-black flex items-center justify-center' >
                        <AiFillLinkedin className='text-white' />
                    </div>
                </a>
                <a href="https://github.com/Akkkshattt" target='_blank' rel="noreferrer" >
                    <div className='w-10 h-10 rounded-full bg-black flex items-center justify-center' >
                        <AiOutlineGithub className='text-white' />
                    </div>
                </a>
            </div>
           <p className='text-base tracking-normal'> &#169; Copyright . All Rights Reserved</p>
        </div>
        



/* <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
    </span>
    <ul class="flex  items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
</footer> */


    )
}

export default Footer