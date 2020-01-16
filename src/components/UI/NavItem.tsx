import React from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link';

export function NavItem(props:NavItemProps) {
    return (
        <NavLink to={props.href} className="block mt-4 lg:inline-block lg:mt-0 text-white text-xl hover:text-red-200 mr-10">
            {props.text}
        </NavLink>
    );
}

interface NavItemProps {
    text:string;
    href:string;
}