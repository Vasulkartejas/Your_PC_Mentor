import React from 'react'

export default function Services() {
  return (
    <section className="relative top-10 mb-20 flex flex-row items-start ml-0 md:grid-cols-2 gap-2 md:gap-4 w-full">
    <main>
    <h1>Desktop/Laptop Service</h1>
    <p>We offer a range of services for desktops and laptops, including:</p>
    <ul>
      <li>Hardware upgrades and repairs</li>
      <li>Software installation and troubleshooting</li>
      <li>Virus removal and malware protection</li>
      <li>Data recovery and backup</li>
    </ul>
    
    <button
            type="button"
            className="m-auto p-4 bg-orange-300 hover:bg-orange-500 hover:font-semibold border-2 hover:border-black w-full rounded-lg py-2 mt-2 md:mt-5 transition-all duration-100 ease-in-out">
            Get our services
        </button>
  </main>
  </section>
  )
}
