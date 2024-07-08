import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className='relative top-10 mb-9 flex items-center justify-center'>
      <p className='text-3xl font-bold'>We are currently working on this page</p>
      <motion.img
                  whileTap={{ scale: 0.6 }}
                  src="" alt="User Profile"
                  className="w-9 h-9 min-w-[30px] min-h-[30px]: cursor-pointer rounded-full"
                 
               />
    </section>
  )
}
