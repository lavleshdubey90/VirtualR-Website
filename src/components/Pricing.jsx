import React from 'react';
import { Check, CheckCircle2 } from 'lucide-react';
import { pricingOptions } from '../constants';

const Pricing = () => {
    return (
        <div className='mt-20 md:mt-40'>
            <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide'>Pricing</h2>

            <div className='flex flex-wrap'>
                {pricingOptions.map((item, index) => (
                    <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                        <div className='p-5 md:p-10 border border-neutral-700 rounded-xl'>
                            <p className='text-4xl mb-8'>
                                {item.title}
                                {item.title === "Pro" && (
                                    <span className='gradientColor bg-clip-text text-transparent text-base mb-4 ml-2'>(Most Popular)</span>
                                )}
                            </p>

                            <p className='mb-8 '>
                                <span className='text-5xl mt-8 mr-2'>{item.price}</span>
                                <span className='text-neutral-400 '>/Month</span>
                            </p>

                            <ul>
                                {item.features.map((feature, index) => (
                                    <li key={index} className='mt-8 flex items-center'>
                                        <CheckCircle2 />
                                        <span className='ml-2'>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <div class="w-full block rounded-lg p-[1px] gradientColor mt-20">
                                <a href="#" class="grid place-content-center w-full h-12 p-5 rounded-lg text-lg bg-neutral-900 hover:gradientColor transition-all duration-300 ease-in-out bg-clip-padding">Subscribe</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pricing;