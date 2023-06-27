import React from "react";
import { useRouter } from 'next/router';
import Image from 'next/image';
import PokeLogo from "../public/poke-logo.png"
import { useAppSelector, useAppDispatch } from "../redux/hooks/hooks";
import { setUserLogged } from "../redux/store/login";
import Link from "next/link";

const Navbar = () => {

    const router = useRouter();
    const dispatch = useAppDispatch();
    const email = useAppSelector((state)=>state.UserLogged.userLogged.email);
    const name = useAppSelector((state)=>state.UserLogged.userLogged.name);
    const lastName = useAppSelector((state)=>state.UserLogged.userLogged.lastName);
    const urlPhoto = useAppSelector((state)=>state.UserLogged.userLogged.photo)
    const isLogged = useAppSelector((state)=>state.UserLogged.userLogged.onLine)

    const userData={
        id:0,
        email: "",
        name: "",
        lastName: "",
        photo: "",
        token: "",
        onLine: false
    }

    const logOut = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        dispatch( setUserLogged(userData) )
        router.push('/');
    }

    return(  
        <>    
            {
                isLogged?
                    <nav className="bg-slate-50 border-gray-300 dark:bg-gray-900">
                        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                            <a href="#" className="flex items-center">
                                <Image
                                    src={PokeLogo}
                                    alt="Logo"
                                    width={26}
                                    height={26}
                                    className="rounded-full mr-1"
                                />   
                                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                            </a>
                            <div className="flex items-center md:order-2">
                                <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                    <span className="sr-only">Open user menu</span>
                                    <Image
                                        src={urlPhoto}
                                        alt="Logo"
                                        width={36}
                                        height={36}
                                        className="rounded-full"
                                    />                        
                                </button>
                                <button  onClick={(e)=>logOut(e)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-2" >
                                    Log out
                                </button>
                                <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                                </button>
                            </div>
                            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                                <ul style={{backgroundColor:'rgb(248 250 252)'}} className="flex flex-col font-medium p-4 bg-slate-50 md:p-0 mt-4 border border-slate-50 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                    <li className="bg-slate-50">
                                        <Link href="/" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</Link>
                                    </li>
                                    <li className="bg-slate-50">
                                        <Link href="/dashboard" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Dashboard</Link>
                                    </li>
                                    <li className="bg-slate-50">
                                        <Link href="/profile" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Profile</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav> 
                :
                    <nav className="bg-slate-50 border-gray-300 dark:bg-gray-900">
                        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                            <a href="#" className="flex items-center">
                                <Image
                                    src={PokeLogo}
                                    alt="Logo"
                                    width={26}
                                    height={26}
                                    className="rounded-full mr-1"
                                />   
                                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                            </a>
                            <div className="flex items-center md:order-2">
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <Link href="/login">Log in</Link>
                                </button>
                                <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                                </button>
                            </div>
                            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 bg-slate-50" id="mobile-menu-2">
                                <ul style={{backgroundColor:'rgb(248 250 252)'}} className="flex flex-col font-medium p-4 bg-slate-50 md:p-0 mt-4 border border-slate-50 rounded-lg bg-slate-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 bg-slate-50" >
                                    <li className="bg-slate-50">
                                        <Link href="/" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</Link>
                                    </li>
                                    <li className="bg-slate-50">
                                        <Link href="/contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 bg-slate-50">Contact</Link>
                                    </li>
                                    <li className="bg-slate-50">
                                        <Link href="/about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 bg-slate-50">About</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>                 
            }
        </>
    );
};
export default Navbar;
