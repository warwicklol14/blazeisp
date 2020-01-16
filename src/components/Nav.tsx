import React, { useState } from 'react'
import logo from '../img/Logo.png'
import {NavItem} from "./UI"

export function Nav(props:NavProps) {
    const [show,setShow] = useState<boolean>(false);
    const toggleMenu = () => {
        setShow(!show);
    }
    return (
    <nav className="flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 text-red-400 mr-6">
            <span className="font-semibold text-4xl tracking-tight mr-4">Blaze</span>
            <img src={logo} alt="Blaze" className="h-8"/>
        </div>
        <div className="block lg:hidden">
            <button onClick={e => toggleMenu()} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div className={"w-full "+ (show ? " " : "hidden") + " lg:block lg:flex lg:items-center lg:w-auto"}>
            <div className="text-sm lg:flex-grow">
                <NavItem href="#mission" text="Mission"></NavItem>
                <NavItem href="#features" text="Features"></NavItem>
                <NavItem href="#testimonials" text="Testimonials"></NavItem>
                <NavItem href="#plans" text="Plans"></NavItem>
                <NavItem href="#contact" text="Contact Us"></NavItem>
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