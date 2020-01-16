import React from 'react'
import communication from "../img/communication.png"
import connect from "../img/connect.png"
import quality from "../img/quality.png"
import customer from "../img/customer.png"

export function Landing(props:LandingProps) {
    return (
        <div className="flex mx-8 justify-between px-20">
            <div>
                <h1 className="text-6xl text-red-400 text-center mb-8">
                    Our Mission
                </h1>
                <ul className="text-white text-4xl">
                    <li className="mt-4">
                        Connect People 
                        <img className="ml-8 inline-block" src={connect} alt="Connect People"></img>
                    </li>
                    <li className="mt-4">
                        Customer Satisfaction
                        <img className="ml-8 inline-block" src={customer} alt="Customer Satisfaction"></img>
                    </li>
                    <li className="mt-4">
                        Quality Service 
                        <img className="ml-8 inline-block" src={quality} alt="Quality Service"></img>
                    </li>
                </ul>
            </div>
            <img src={communication} alt="Communication"/>
        </div>
    );
}

interface LandingProps {

}