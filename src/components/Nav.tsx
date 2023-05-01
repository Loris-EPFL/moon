import DesktopOnly from './DesktopOnly';
import moon_logo from "../images/moon_logo.svg";

import MobileOnly from './MobileOnly';
import Image from "next/image";
import { useState } from 'react'






export default function Nav () {
    const [show, setShow] = useState(false)
    

    
    return(
        <div>
            <header className="fixed h-14 top-0 z-10 bg-opacity-80 backdrop-blur-sm	 bg-slate-300 dark:bg-slate-600 w-full  dark:border-gray-700">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <div className="absolute left-0 top-0 flex items-center justify-start  py-2 px-4 mr-8">
                        <Image
                            className="flex h-10 w-auto left-0 "
                            src={moon_logo}
                            alt="Eclypse"
                        />
                    </div>
                    </div> 

                
                <DesktopOnly>
                    <div className="w-full md:block md:w-auto" id="navbar-default">
                        <ul className="relative justify-end  bg-opacity-50	 flex flex-col  border border-gray-50 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0   dark:border-gray-700">
                            <li>
                            <a href="/vaults" className="block justify-center pl-4 pr-4 p-4 mt-4 text-black  rounded  hover:text-white md:bg-transparent md:p-0" aria-current="page">Vaults</a>
                            </li>
                            <li>
                            <a href="/dashboard" className="block justify-center pl-4 pr-4 p-4 mt-4 text-black  rounded  hover:text-white md:bg-transparent md:p-0">Dashboard</a>
                            </li>  
                            <div className=" p-2">
                     
                            </div>
                            
                        </ul>
                    </div>
                </DesktopOnly>
                

                <MobileOnly>
                    <button data-collapse-toggle="navbar-hamburger" type="button" onClick={() => setShow(!show)} className="absolute top-0 right-0  p-4 rounded-sm text-sm text-gray-500  hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800" aria-controls="navbar-hamburger" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                    {show && <div className="w-full" id="navbar-hamburger">
                        <ul className="text-center relative flex flex-col p-4 mt-14 border border-gray-100  rounded-b-xl  md:flex-row  md:mt-0 md:text-sm md:font-medium md:border-0 bg-slate-200 dark:bg-slate-400  dark:border-gray-700">
                        <li>
                        <a href="/dashboard" className="block hover:bg-slate-300 justify-center pl-4 pr-4 p-4 mt-4 text-black  rounded  hover:text-white md:bg-transparent md:p-0" aria-current="page">Dashboard</a>
                        </li>
                        <li>
                        <a href="/vaults" className="block hover:bg-slate-300 justify-center pl-4 pr-4 p-4 mt-4 text-black  rounded  hover:text-white md:bg-transparent md:p-0">Vaults</a>
                        </li>  
                        <li>
                        <div className="relative right-0 mt-2 py-2 pl-3 pr-4 text-gray-700 rounded md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white  dark:hover:text-white md:dark:hover:bg-transparent">
                       
                        </div>
                        </li> 
                        </ul>
                    </div>}
                    
                </MobileOnly>

                



            </header>
        </div>

    );
}