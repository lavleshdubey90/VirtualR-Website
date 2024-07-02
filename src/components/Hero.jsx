import React from 'react';
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Hero = () => {
    return (
        <div>
            <div className="flex flex-col items-center mt-6 lg:mt-20">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                    VirtualR build tools <span className='gradientColor bg-clip-text text-transparent'> for developers</span>
                </h1>

                <p className='mt-10 text-sm sm:text-lg text-center text-neutral-500 max-w-4xl'>
                    Empower your creativity and bring your VR app ideas to life with our
                    intuitive development tools. Get started today and turn your imagination
                    into immersive reality!</p>

                <div className="flex justify-center flex-wrap gap-2 my-10">
                    <a href="#" className='gradientColor text-sm sm:text-base py-3 px-4 min-w-36 text-center rounded-md'>Start for Free</a>
                    <a href="#" className='py-3 px-4 text-sm sm:text-base rounded-md min-w-36 border'>Documentation</a>
                </div>

                <div className='flex flex-row gap-2 mt-10 justify-center'>
                    <video autoPlay muted loop className='rounded-lg p-[1px] bg-gradient-to-tr from-indigo-600 to-pink-600 w-full sm:w-1/2 sm:mx-2 my-2'>
                        <source src={video1} type='video/mp4' />
                        Your browser doesn't support the video tag.
                    </video>
                    <video autoPlay muted loop className='rounded-lg p-[1px] bg-gradient-to-tr from-indigo-600 to-pink-600 w-full sm:w-1/2 sm:mx-2 my-2'>
                        <source src={video2} type='video/mp4' />
                        Your browser doesn't support the video tag.
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Hero;