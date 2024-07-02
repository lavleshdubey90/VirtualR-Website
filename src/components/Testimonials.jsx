import React from 'react';
import { testimonials } from '../constants';

const Testimonials = () => {

    // console.log(testimonials);
    return (
        <div className='mt-20 md:mt-40'>
            <h2 className='text-3xl sm:text-5xl mt-6 mb-20 tracking-wide lg:text-6xl text-center'>What people are<span className='gradientColor bg-clip-text text-transparent'> saying</span></h2>

            <div className='flex flex-wrap justify-center'>
                {testimonials.map((item, index) => (
                    <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                        <div className="bg-neutral rounded-md p-6 border border-neutral-800 font-light text-neutral-400">
                            <p className='min-h-40 text-sm md:text-base'>{item.text}</p>
                            <div className='flex mt-8 items-start'>
                                <img src={item.image} alt={item.user} className='w-12 h-12 mr-6 rounded-full' />
                                <div>
                                    <h6 className=''>{item.user}</h6>
                                    <span className='text-xs font-normal italic'>{item.company}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials;