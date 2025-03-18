import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <div className='min-h-screen w-full bg-cover bg-center flex items-center overflow-hidden' style={{backgroundImage: "url('/header_img.png')"}} id='Header'>
        <Navbar />

        <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
            <h2 className='text-5xl sm:text-6xl md:text-[83px] inline-block max-w-3xl font-semibold pt-20'>Explore homes that fit your dreams</h2>
            <div className='space-x-6 mt-16'>
                <a href="" className='border border-white px-8 py-3 rounded hover:bg-blue-500 hover:border-transparent'>Projects</a>
                <a href="" className='bg-blue-500 px-8 py-3 rounded hover:bg-transparent hover:border-white hover:border'>Contact Us</a>
            </div>
        </div>
    </div>
  )
}

export default Header