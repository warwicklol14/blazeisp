import React from 'react'
import { Nav,Landing } from '../components'

export function Hero(props:HeroProps) {
    return (
        <>
            <Nav></Nav>
            <Landing></Landing>
        </>
    );
}

interface HeroProps {

}