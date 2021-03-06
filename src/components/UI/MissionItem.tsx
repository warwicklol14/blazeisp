import React from 'react'

export function MissionItem(props:NavItemProps) {
    return (
    <li className="flex justify-between items-center mt-4">
        {props.text}
        <img className="ml-2 block md:inline-block" src={props.imgSrc} alt="Connect People"></img>
    </li>
    );
}

interface NavItemProps {
    text:string;
    imgSrc:any;
}