import React from 'react'

export function MissionItem(props:NavItemProps) {
    return (
    <li className="flex items-center mt-4">
        {props.text}
        <img className="block ml-8 md:inline-block" src={props.imgSrc} alt="Connect People"></img>
    </li>
    );
}

interface NavItemProps {
    text:string;
    imgSrc:any;
}