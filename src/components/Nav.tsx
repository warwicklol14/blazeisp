import React from 'react'
import logo from '../img/Logo.png'

export function Nav(props:NavProps) {
    return (
    <nav className="flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 text-red-400 mr-6">
            <span className="font-semibold text-4xl tracking-tight mr-4">Blaze</span>
            <img src={logo} alt="Blaze" className="h-8"/>
        </div>
        <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div className="w-full block lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
                <span className="block mt-4 lg:inline-block lg:mt-0 text-white text-xl hover:text-red-200 mr-10">
                    Features
                </span>
                <span className="block mt-4 lg:inline-block lg:mt-0 text-white text-xl hover:text-red-200 mr-10">
                    Testimonials
                </span>
                <span className="block mt-4 lg:inline-block lg:mt-0 text-white text-xl hover:text-red-200 mr-10">
                    Plans
                </span>
                <span className="block mt-4 lg:inline-block lg:mt-0 text-white text-xl hover:text-red-200 mr-10">
                    Contact Us
                </span>
                <span className="inline-block text-sm px-4 py-2 leading-none shadow text-xl bg-red-400 rounded text-white hover:bg-red-300 mt-4 mr-10 lg:mt-0">
                    Login
                </span>
            </div>
        </div>
    </nav>
    );
}

interface NavProps {

}