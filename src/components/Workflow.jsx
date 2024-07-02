import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import codeImg from "../assets/code.jpg";
import { checklistItems } from '../constants';

const Workflow = () => {
    return (
        <div className="mt-20">
            <h2 className='text-3xl sm:text-5xl mt-6 mb-20 tracking-wide lg:text-6xl text-center'>Accelerate your <span className='gradientColor bg-clip-text text-transparent'>coding workflow.</span></h2>

            <div className='flex flex-wrap justify-center'>
                <div className="p-2 w-full lg:w-1/2">
                    <img src={codeImg} alt="code" />
                </div>
                <div className='pt-12 w-full lg:w-1/2 '>
                    {
                        checklistItems.map((item, index) => (
                            <div key={index} className='flex mb-12 '>
                                <div className='gradientColor ml-0 lg:ml-6 mr-6 bg-neutral-900 h-10 w-10 p-2 grid place-content-center rounded-full'>
                                    <CheckCircle2 />
                                </div>

                                <div>
                                    <h5 className='mt-1 mb-2 text-base md:text-xl'>{item.title}</h5>
                                    <p className='text-sm text-neutral-500'>{item.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Workflow;