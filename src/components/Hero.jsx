import React from 'react'
import Form from './Form'

const Hero = () => {
    return (
        <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 pt-24 md:pt-0 text-white bg-[url("/src/assets/heroImage.png")] bg-no-repeat bg-cover bg-center min-h-screen'>

            <p className='bg-blue-500/50 rounded-full px-3.5 py-1 text-sm md:text-base mt-6 md:mt-20'>
                The Ultimate Hotel Experience
            </p>

            <h1 className='font-playfair text-3xl md:text-[56px] md:leading-[56px] leading-tight font-bold md:font-extrabold max-w-xl mt-3'>
                Discover Your Perfect Gateway Destination
            </h1>

            <p className='max-w-xl mt-3 text-base md:text-xl'>
                Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. Start your journey today.
            </p>

            <div className='mt-6 md:mt-8 w-full'>
                <Form />
            </div>

        </div>
    )
}

export default Hero