import React from 'react'
import "../css/Style.css"
import Laptop from '../images/laptop.jpg'
import Desktop from '../images/desktop.jpg'
import Customer from '../images/custompc.jpg'
import BackGround from '../images/background.jpg'
import { Link } from 'react-router-dom'
import Custompc1 from "../images/custompc.jpeg";
import Custompc2 from "../images/custompc2.jpeg";
// import Service1 from "../images/service1.jpeg";
// import Service2 from "../images/service2.jpeg";
import { motion } from 'framer-motion'

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

          <p className="mt-1 py-2 text-[2rem] md:text-[3rem] lg:text-[4rem] font-semibold md:font-bold tracking-wide">
            The most affordable PC service and Custom Pcs builder in <span className="text-[2.5rem] md:text-[3.5rem] lg:text-[5rem] font-bold text-orange-500">YOUR CITY !</span>
          </p>

          <p className="text-left md:text-left md:w-[80%] text-xl">
            With our intuitive platform, customers can easily submit service requests and track their status in real-time. Technicians can manage their assignments and record services performed with ease. And administrators can generate reports, manage customers and technicians, and optimize their operations.
          </p>
          <Link to={"/about"}>
            <button
              type="button"
              className="m-auto p-4 bg-orange-300 hover:bg-orange-500 hover:font-semibold border-2 hover:border-black w-full rounded-lg py-2 mt-2 md:mt-5 transition-all duration-100 ease-in-out">
              Click here to know more About us
            </button>
          </Link>

        </div>
        {/* -top-0 relative flex flex-col items-center justify-center */}
        <section className='grid grid-cols-1'>
          <img className='h-550' src={BackGround} alt="" />
        </section>
        <div whileTap={{ scale: 0.6 }} className='grid grid-cols-2 absolute top-20 right-10'>
          <img    src={Custompc1} alt="" className='cursor-pointer relative h-300 w-300 -top-24 right-24 rounded-md' />
          <img src={Custompc2} alt="" className='relative h-300 w-300 -top-24 right-3 rounded-md' />
          {/* <img src={Custompc1} alt="" className='relative -top-10 right-72'/> */}
        </div>
        <div className='grid grid-cols-2 absolute top-20 right-10'>
          <img src={Custompc1} alt="" className='relative h-300 w-300 top-52 right-24 rounded-md' />
          <img src={Custompc2} alt="" className='relative h-300 w-300 top-52 right-3 rounded-md' />
        </div>
      </section>

      <section class="features">
        <h2 className="text-2xl mb-2">Our Services</h2>
        <div class="feature-grid">
          <Link to={"/Pcservice"}>
            <div class="feature">
              <img
                src={Laptop}
                alt="Laptop"
                class="feature-image"
              />
              <h3>Laptop Repair</h3>
              <p>From cracked screens to faulty keyboards, we fix it all.</p>
            </div>
          </Link>

          <Link to={"/Pcservice"}>
            <div class="feature">
              <img
                src={Desktop}
                alt="Desktop"
                class="feature-image"
              />
              <h3>Desktop Repair</h3>
              <p>
                Get your desktop up and running with our expert repair services.
              </p>
            </div>
          </Link>

          <Link to={"/customPc"}>
            <div class="feature">
              <img
                src={Customer}
                alt="Desktop"
                class="feature-image"
              />
              <i class="fas fa-cogs"></i>
              <h3>Custom PC Builds</h3>
              <p>Let us build a custom PC that meets your specific needs.</p>
            </div>
          </Link>
        </div>


      </section>
      <section class="testimonials">
        <h2 className='text-2xl mb-2'>Few of our customers feedback</h2>
        <div class="testimonial-grid">
          <div class="testimonial">
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
          </div>
        </div>
      </section>

      <section class="testimonials">
        <h2 className='text-2xl mb-2'>Urgent Laptop Repair Service</h2>
        <div class="testimonial-grid1">
          <div class="testimonial">
            <p>
              Fastest Laptop Issue Resolution: We understand the importance of computer and PC in your profession. Thus, we have trained our technical team to understand the issue and resolve the problem for laptop repair at home Pune in shortest time and immediately.

              Our Urgent laptop repair service near you is just affordable with costing you can review our price list placed on online. During repairing process we ask for your approval at every stage. We have committed SLA towards customer - Major and critical issue gets resolved before 72 Hours. We cover and offer services across in city hence your query related to laptop repair shop near me now will help to find our nearest store to you.

              Laptop repair charges may vary based on its problem, however, you can go with our fix costing which will save your spending. It’s not always possible to give you a exact repair price while you wait in our store. In most cases, if you’re willing to sit & chill – we’ll open the machine and tell you what’s wrong right then and there to fix the issue. If you are looking for online laptop service center then you must try our interative services.
            </p>
            {/* <span>- Sumit Parise</span> */}
          </div>
          {/* <div class="testimonial">
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
        </div> */}
        </div>
      </section>
    </>
  )
}
