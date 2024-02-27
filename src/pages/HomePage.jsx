import React from 'react'
import { Fade } from "react-awesome-reveal";
import CustomImage from '../app/components/CustomImage';
import logo from "../assets/main logo (3) (Custom).png"
export default function HomePage2() {
    return (
        <Fade>
            <h1 className="mb-8 text-center text-4xl font-bold tracking-tight lg:mb-8 lg:text-center lg:text-6xl lg:font-extrabold lg:leading-none">
                <span className="text-[#3a55b4] dark:text-[#4967d0]">12th</span>{" "}
                IEEE Tunisian Students & Young Professionals Congress
            </h1>
            <CustomImage className="mx-auto mb-8 " src={logo} />
            <p className='text-center'>I will gently appear as I enter the viewport</p>
            <Fade cascade damping={1} >
                <p>I enter first...</p>
                <p>...then comes my turn...</p>
                <p>...and finally you see me!</p>
            </Fade>
            <Fade triggerOnce>
                <p>I enter first...</p>
                <p>...then comes my turn...</p>
                <p>...and finally you see me!</p>
            </Fade>
        </Fade>
    )
}
