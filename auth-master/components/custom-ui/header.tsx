'use client';

import { useState, useEffect } from 'react';

import Link from 'next/link';
import MobileMenu from './mobile-menu';

export default function Header() {

    const [top, setTop] = useState<boolean>(true)

    // detect whether user has scrolled the page down by 10px
    const scrollHandler = () => {
        window.scrollY > 10 ? setTop(false) : setTop(true)
    }

    useEffect(() => {
        scrollHandler()
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [top])

    return (
        <header className={`fixed w-full md:bg-opacity-90 transition duration-300 ease-in-out z-30 ${!top ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2" >
                <div className="pl-4 flex items-center">
                    <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                        CLASHY
                    </a>
                </div>

                <nav className="hidden md:flex md:grow">
                    <ul className="flex grow justify-end flex-wrap items-center">
                        <li className="mr-3">
                            <Link href="/signin" className="font-medium text-black no-underline hover:text-gray-900 px-5 py-3 flex items-center focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                Analytics
                            </Link>
                        </li>

                        <li className="mr-3">
                            <Link href="/signin" className="font-medium text-black no-underline hover:text-gray-900 px-5 py-3 flex items-center focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                Clans
                            </Link>
                        </li>

                        <li className="mr-3">
                            <Link href="/signin" className="font-medium  text-black no-underline hover:text-gray-900 px-5 py-3 flex items-center focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                Players
                            </Link>
                        </li>
                    </ul>
                    <button
                        className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                    >
                        Global Chat
                    </button>
                </nav>

                <MobileMenu />

            </div >

            <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
        </header >
    )
}