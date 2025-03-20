import React from 'react'
import { assets } from '../assets/assets'

function About() {
  return (
    <div className='flex justify-center items-center flex-col container mx-auto p-14 md:p-20 lg:p-32 w-full overflow-hidden' id='About'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
        <p className='max-w-80 text-gray-500 text-center mb-8'>Passionate About Properties, Dedicated To Yout Vision</p>

        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
            <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg'/>
            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28 mt-5'>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>10+</p>
                        <p>Years of Excellence</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>12+</p>
                        <p>Years of Excellence</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>20+</p>
                        <p>Years of Excellence</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>25+</p>
                        <p>Years of Excellence</p>
                    </div>
                </div>
                <p className='my-10 max-w-lg '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas perferendis id, quod enim quas voluptatum nisi dolore. Assumenda voluptate expedita qui ipsa nihil, voluptatibus totam itaque dolores soluta reiciendis deleniti sunt harum distinctio numquam rerum delectus tempora hic. Possimus excepturi ut repudiandae aspernatur id enim?</p>
                <button className='bg-blue-600 text-white px-8 py-2 rounded cursor-pointer'>Learn more</button>
            </div>
        </div>
    </div>
  )
}

export default About