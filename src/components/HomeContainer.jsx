import React from 'react'
import "../css/Style.css"
import Laptop from '../images/laptop.jpg'
import Desktop from '../images/desktop.jpg'
import Customer from '../images/custompc.jpg'
import BackGround from '../images/background.jpg'
import { Link } from 'react-router-dom'
import Custompc1 from "../images/custompc.jpeg";
import Custompc2 from "../images/custompc2.jpeg";
import Service1 from "../images/service1.jpeg";
import Service2 from "../images/service2.jpeg";
import { motion } from 'framer-motion'
import Button from './Button'
import "../css/card.css"
import hm1 from "../images/hm1.jpg"
import hm2 from "../images/hm2.jpg"
import hm4 from "../images/hm4.jpg"

export default function HomeContainer() {
  return (
    <>
      <section className="relative top-10 mb-20  grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 w-full" id="Home">
        <div className=" flex flex-col items-start  justify-center gap-2">

          {/* <div className="flex items-center justify-center gap-2 bg-orange-200 px-3 md:px-6 py-2 rounded-full">
            <p className="text-base font-semibold">Bike Delivery</p>
            <div className="w-10 h-10 mt-2 bg-white rounded-full overflow-hidden drop-shadow-xl">
                <img src="" alt="Delivery Boy" className="w-full h-full" />
            </div>
        </div> */}

          <p className="mt-1 py-2 text-[2rem] md:text-[3rem] lg:text-[3rem] font-semibold md:font-bold tracking-wide">
            <span className='block text-3xl'>Unify Your Tech Experience:</span>
            Expert<span className='font-bold text-textColor1'> Repair </span>  Services,
            <span className="font-bold text-textColor1"> Custom </span>PC Builds , and
            Comprehensive <span className='font-bold text-textColor1'> Support </span> on One Platform!
          </p>

          <p className="text-left md:text-left md:w-[80%] text-xl">
            Your PC Mentor is a revolutionary online platform that connects clients with expert technicians for on-demand PC and laptop repair services, as well as custom-built PCs tailored to their specific needs and budget.
          </p>
          {/* <Link to={"/about"}>
            <button
              type="button"
              className="m-auto p-4 bg-orange-300 hover:bg-orange-500 hover:font-semibold border-2 hover:border-black w-full rounded-lg py-2 mt-2 md:mt-5 transition-all duration-100 ease-in-out">
              Click here to know more About us
            </button>
          </Link> */}
          <Link to={"/about"}>
            <Button><p>Click here to know more About us</p></Button>
          </Link>
        </div>
        {/* -top-0 relative flex flex-col items-center justify-center */}
        <section className='grid grid-cols-1'>
          {/* <img className='h-550' src={BackGround} alt="" /> */}
        </section>
        <div whileTap={{ scale: 0.6 }} className='grid grid-cols-2 absolute top-20 right-10'>
          <motion.img whileHover={{ scale: 1.1 }} src={hm1} alt="" className='cursor-pointer relative h-300 w-300 z-20 overflow-auto -top-24 right-24 rounded-md' />
          {/* <motion.img whileHover={{ scale: 1.1 }} src={Custompc2} alt="" className='cursor-pointer  relative h-300 w-300 -top-24 right-3 rounded-md' /> */}
          {/* <img src={Custompc1} alt="" className='relative -top-10 right-72'/> */}
        </div>
        <div className='grid grid-cols-2 absolute top-28 right-10'>
          <motion.img whileHover={{ scale: 1.1 }} src={hm2} alt="" className='cursor-pointer  relative h-300 w-300 top-52 z-20 overflow-auto right-20 rounded-md' />
          <motion.img whileHover={{ scale: 1.1 }} src={hm4} alt="" className='cursor-pointer  relative h-300 w-300 top-24 z-20 overflow-auto right-14 rounded-md' />
        </div>
      </section>

      <section class="features">
        <h2 className="text-2xl mb-2">Our Services</h2>
        <div class="feature-grid">
          <Link to={"/login"}>
            <motion.div whileHover={{ scale: 1.1 }} class="feature">
              <img
                src={Laptop}
                alt="Laptop"
                class="feature-image"
              />
              <h3>Laptop Repair</h3>
              <p>From cracked screens to faulty keyboards, we fix it all.</p>
            </motion.div>
          </Link>

          <Link to={"/login"}>
            <motion.div whileHover={{ scale: 1.1 }} class="feature">
              <img
                src={Desktop}
                alt="Desktop"
                class="feature-image"
              />
              <h3>Desktop Repair</h3>
              <p>
                Get your desktop up and running with our expert repair services.
              </p>
            </motion.div>
          </Link>

          <Link to={"/login"}>
            <motion.div whileHover={{ scale: 1.1 }} class="feature">
              <img
                src={Customer}
                alt="Desktop"
                class="feature-image"
              />
              <i class="fas fa-cogs"></i>
              <h3>Custom PC Builds</h3>
              <p>Let us build a custom PC that meets your specific needs.</p>
            </motion.div>
          </Link>
        </div>


      </section>
      <section class="testimonials">

        <h2 className='text-2xl mb-2'>Few of our customers feedback</h2>
        <div class="testimonial-grid">
          <div class="card">
            <a class="card1" href="#">
              <p>- Rohan</p>
              <p class="small"> "I was impressed with the quick turnaround time and the quality of
                the repair."</p>
              <div class="go-corner" href="#">
                <div class="go-arrow">
                  →
                </div>
              </div>
            </a>
          </div>
          <div class="card">
            <a class="card1" href="#">
              <p>- Rahul</p>
              <p class="small"> "The technician was very knowledgeable and friendly. I would highly
                recommend this service."</p>
              <div class="go-corner" href="#">
                <div class="go-arrow">
                  →
                </div>
              </div>
            </a>
          </div>
          <div class="card">
            <a class="card1" href="#">
              <p>- Exion</p>
              <p class="small"> "I was able to get my laptop fixed for a fraction of the cost of
                buying a new one."</p>
              <div class="go-corner" href="#">
                <div class="go-arrow">
                  →
                </div>
              </div>
            </a>
          </div>

          {/* <div class="testimonial">
            <p>
              "I was impressed with the quick turnaround time and the quality of
              the repair."
            </p>
            <span>- Sumit Parise</span>
          </div>
          <div class="testimonial">
            <p>
              "The technician was very knowledgeable and friendly. I would highly
              recommend this service."
            </p>
            <span>- Ashwin Patil</span>
          </div>
          <div class="testimonial">
            <p>
              "I was able to get my laptop fixed for a fraction of the cost of
              buying a new one."
            </p>
            <span>- Ajju Gamer</span>
          </div>*/}
        </div>
      </section>

      <section class="testimonials">
        <h2 className='text-2xl mb-2'>FAQS</h2>
        <div class="testimonial-grid1">
          <div class="testimonial">
            <p>
              <p className='font-bold block text-2xl'>Some of the most frequently asked questions:</p>
              <p className='font-semibold'>General</p>
              <span className='block text-2xl font-semibold'>1. Q: What services do you offer? </span>
              <span className='text-xl'>
                A: We offer a range of services, including tech support, custom PC builds, laptop and desktop repairs, and more.
              </span>

              <span className='block text-2xl font-semibold'>
                2. Q: What areas do you serve?
              </span>
              <span className='text-xl'>
                A: We serve [insert areas/cities/regions] and offer pickup and delivery services for your convenience.
              </span>
              <span className='block text-2xl font-semibold'>
                3. Q: What are your business hours?
              </span>

              <span className='text-xl'>
                A: Our business hours are [insert hours], but we also offer emergency support services outside of regular hours.
              </span>

            </p>

          </div>

        </div>
      </section>
    </>
  )
}
