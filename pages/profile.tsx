'use client'
import React from "react";
import { useRouter } from 'next/router';
import { useAppSelector } from "../redux/hooks/hooks";
import Image from 'next/image';

export default function Profile(){

    const email = useAppSelector((state)=>state.UserLogged.userLogged.email);
    const name = useAppSelector((state)=>state.UserLogged.userLogged.name);
    const lastName = useAppSelector((state)=>state.UserLogged.userLogged.lastName);
    const urlPhoto = useAppSelector((state)=>state.UserLogged.userLogged.photo)
    const isLogged = useAppSelector((state)=>state.UserLogged.userLogged.onLine)

    return(    
        <div className="flex">
            <div className="m-auto mt-10 w-full max-w-sm bg-slate-50  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center pb-10">
                    <Image
                        src={urlPhoto}
                        alt="Logo"
                        width={100}
                        height={100}
                        className="rounded-full mt-5"
                    />  
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name + " " + lastName }</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{email}</span>
                </div>
            </div>
        </div>    
    )
}