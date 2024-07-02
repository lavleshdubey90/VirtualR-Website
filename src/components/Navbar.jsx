import React, { useState } from 'react';
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    const toogle = () => {
        setMenu(!menu);
        console.log(menu);
    }

    return (
        <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex items-center justify-between">
                    <div className="flex-shrink-0 flex items-center">
                        <img src={logo} width={40} height={40} alt="logo" className='mr-2' />
                        <span className='text-xl tracking-tight'>VirtualR</span>
                    </div>

                    <ul className='hidden lg:flex space-x-12 ml-14 items-center'>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>

                    <div className="hidden lg:flex justify-center space-x-6 items-center">
                        <a href="#" className='py-2 px-3 border rounded-md'>Sign In</a>
                        <a href="#" className='gradientColor py-2 px-3 rounded-md'>Create an Account</a>
                    </div>

                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toogle}>
                            {!menu ? <Menu /> : <X />}
                        </button>
                    </div>
                </div>
                {menu && (
                    <div className="lg:hidden rounded-lg right-5 md:right-10 fixed z-20 w-fit bg-neutral-900 flex justify-center items-center flex-col">
                        <ul className='p-5 rounded-lg'>
                            {navItems.map((item, index) => (
                                <li key={index} className='px-4 py-2 hover:bg-neutral-700/80 cursor-pointer group  rounded-lg'>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                            <a href="#" className='py-2 mt-3 block px-3 text-center border rounded-md'>Sign In</a>
                            <a href="#" className='gradientColor block mt-3 py-2 px-3 rounded-md'>Create an Account</a>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;