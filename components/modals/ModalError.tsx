import React, { useState } from "react";

export default function ModalErrorLogin({
    showModal= false,
    setShowModal=()=>{}
}:{
    showModal:boolean,
    setShowModal: Function
}) { 

    const handleModal=(value: boolean)=>{
        setShowModal(value);
    }

    return(
        <div key={1} className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full bg-opacity-70 bg-slate-900 flex">
            <div className="relative w-full max-w-2xl max-h-full flex m-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 mx-auto">
                    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                           Error
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal" onClick={()=>handleModal(false)}>
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only" >Close modal</span>
                        </button>
                    </div>
                    <div className="p-6 space-y-6">
                        <div className="w-full flex">
                            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
                                Incorrect data, please verify the data entered.
                            </p>
                        </div>
                    </div>
                    <div className="flex p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600 border w-full">
                        <button data-modal-hide="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-auto" onClick={()=>handleModal(false)}> Aceptar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}