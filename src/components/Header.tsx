import DesktopOnly from './DesktopOnly';
import eclypse_logo from "../images/eclipse_logo.svg";
import logo from "../images/logo/logo_header.svg";
import moon_logo from "../images/moon_logo_no_bg.svg";
import MobileOnly from './MobileOnly';
import Image from "next/image";
import { useState } from 'react'
import dynamic from "next/dynamic"

import { HeaderButton } from './ComponentBank';

export default function Nav () {
    const [show, setShow] = useState(false)
    
    return(
        <div className="bg-[#F6F1D5] h-[90px] bg-opacity-20 z-50 top-0 flex flex-row items-center justify-around w-full">
            <div className="flex flex-row w-11/12 items-center justify-center">
                <div className="w-1/4 h-20 flex justify-start">
                    <Image src={moon_logo} alt="moon"/>
                </div>
                <div className="flex flex-row items-center justify-around w-2/4">
                    <HeaderButton
                    target=""
                    text="About"
                    href="#about"/>
                    <HeaderButton
                    target=""
                    text="Buy"
                    href="#buy"/>
                    <HeaderButton
                    target=""
                    text="Roadmap"
                    href="#roadmap"/>
                </div>
                <div className="w-1/4 flex justify-end">
                  Socials
                </div>
            </div>
        </div>

    );
}