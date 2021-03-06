import React from 'react'
import { MissionItem } from "./UI"
import communication from "../img/communication.png"
import connect from "../img/connect.png"
import quality from "../img/quality.png"
import customer from "../img/customer.png"

export function Landing(props:LandingProps) {
    return (
        <div className="flex mx-1 lg:mx-8 justify-center xl:px-20" id="mission">
            <div>
                <h1 className="md:text-6xl text-5xl text-red-400 text-center mb-8">
                    Our Mission
                </h1>
                <ul className="text-white text-2xl md:text-4xl">
                    <MissionItem text="Connect People" imgSrc={connect}></MissionItem>
                    <MissionItem text="Customer Satisfaction" imgSrc={customer}></MissionItem>
                    <MissionItem text="Quality Service " imgSrc={quality}></MissionItem>
                </ul>
            </div>
            <img className="ml-10 hidden lg:block" src={communication} alt="Communication"/>
        </div>
    );
}

interface LandingProps {

}