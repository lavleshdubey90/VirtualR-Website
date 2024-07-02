import React from 'react';
import { resourcesLinks, platformLinks, communityLinks } from '../constants';
import logo from "../assets/logo.png";

const Footer = () => {

    const year = new Date().getFullYear();
    return (
        <footer className='mt-40 border-t pt-10 border-neutral-700'>
            <div className='flex px-5 md:px-10 pb-5 max-w-7xl mx-auto justify-evenly gap-20'>

                {/* <div className='flex max-w-fit items-center justify-start'>
                    <img src={logo} alt="logo" className='max-w-24 max-h-24' />
                    <span className='text-5xl'>VirtualR</span>
                </div> */}

                <div className='flex flex-wrap gap-5 sm:gap-20'>
                    <div className=''>
                        <h3>Resources</h3>
                        <div className="font-semibold mb-4 "></div>
                        <ul className='space-y-2 text-sm text-neutral-400'>
                            {resourcesLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className='hover:text-white hover:underline transition-all duration-200'>{link.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='w-fit'>
                        <h3>Platforms</h3>
                        <div className="font-semibold mb-4 "></div>
                        <ul className='space-y-2 text-sm text-neutral-400'>
                            {platformLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className='hover:text-white hover:underline transition-all duration-200'>{link.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='w-fit'>
                        <h3>Community</h3>
                        <div className="font-semibold mb-4 "></div>
                        <ul className='space-y-2 text-sm text-neutral-400'>
                            {communityLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className='hover:text-white hover:underline transition-all duration-200'>{link.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <p className='text-xs py-2 border-t border-neutral-700 text-neutral-400 text-center'>Copyright &copy; {year} || All Rights Reserved</p>

        </footer>
    )
}

export default Footer;