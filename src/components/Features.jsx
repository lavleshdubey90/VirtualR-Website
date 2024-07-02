import React from 'react';
import { features } from '../constants';

const Features = () => {
    return (
        <div className="relative mt-40 border-b border-neutral-800 min-h-[800px]">
            <div className="text-center">
                <span className="bg-neutral-900 rounded-full themeColor h-6 text-sm font-medium px-2 py-1 uppercase">Features</span>
                <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 tracking-wide'>Easily build <span className='gradientColor text-transparent bg-clip-text'>your code</span></h2>
            </div>

            <div className="flex flex-wrap mt-20 lg:mt-40">
                {features.map((item, index) => (
                    <div key={index} className='w-full sm:w-1/2 lg:w-1/3'>
                        <div className="flex">
                            <div className='mr-6 rounded-full h-10 w-10 gradientColor p-2 bg-neutral-900 grid place-content-center'>
                                {item.icon}
                            </div>
                            <div>
                                <h5 className='mt-1 mb-5 sm:text-xl'>{item.text}</h5>
                                <p className='text-md text-sm p-2 mb-10 sm:mb-20 text-neutral-500'>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Features;