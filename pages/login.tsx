'use client'
import { useRouter } from 'next/router';
import PokeLogo from "../public/poke-logo.png";
import Image from 'next/image';
import SimpleInput from "../components/common/SimpleInput";
import PasswordInput from "../components/common/PasswordInput";
import { useState } from "react";
import dataUser from "../db/login.json";
import ModalErrorLogin from "../components/modals/ModalError";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { setUserLogged } from "../redux/store/login";

export default function Login() {

  const router = useRouter();
  const userLogged = useAppSelector((state)=>state.UserLogged.userLogged.onLine);
  if(userLogged){
    router.push('/dashboard');
  }
  const dispatch = useAppDispatch();
  const [dataLogin, setDataLogin] = useState({
    email: '',
    password: ''
  });
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [showModaError, setShowModalError] = useState(false);
  const expressionEmail: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleChange = (e: React.FormEvent<HTMLInputElement>) =>{  
    const { name, value } = e.target as HTMLInputElement; 
    setDataLogin({
      ...dataLogin,
      [name]: value
    }) 
  }

  const handleSumit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    e.preventDefault()
    setInvalidEmail(false)
    setInvalidPassword(false)

    //Validations
    if(!expressionEmail.test(dataLogin.email) || dataLogin.email.length < 4 ) { 
      setInvalidEmail(true)
    }

    if( dataLogin.password.length < 8 ) { 
      setInvalidPassword(true)
    }

    if( invalidEmail===false && invalidPassword===false ){
      if( dataLogin.email === dataUser.email && dataLogin.password === dataUser.password ){
        setShowModalError(false);
        const userData={
          id:1,
          email: dataUser.email,
          name: dataUser.name,
          lastName: dataUser.lastName,
          photo: dataUser.photo,
          token: dataUser.token,
          onLine: true
        }
        dispatch(setUserLogged(userData))
        router.push('/');
      }else{
        setShowModalError(true);
      }
    }
  }

  return (
    <>
      {
        showModaError?
          <ModalErrorLogin showModal={showModaError} setShowModal={setShowModalError} />
        :
        <>
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <div className="flex">
                  <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white mx-auto">
                    <Image
                        src={PokeLogo}
                        alt="Logo"
                        width={26}
                        height={26}
                        className="rounded-full mr-1"
                    />
                    Flowbite Login   
                  </a>
                </div>
                  <form className="space-y-4 md:space-y-6" onSubmit={(e)=>e.preventDefault()}>
                      <div>
                          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                          <SimpleInput 
                              type="text"
                              name="email" 
                              value={dataLogin.email}
                              placeHolder="Email"
                              onChange={handleChange}
                          />
                          <span className={`block mb-2 text-xs font-medium text-red-500 ${invalidEmail? "visible" : "invisible"}`}>
                            Wrong email
                          </span>
                      </div>
                      <div className="w-full">
                          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                          <PasswordInput 
                            name="password" 
                            placeholder="Password"
                            value={dataLogin.password}
                            onChange={handleChange}                            
                          />
                          <span className={`block mb-2 text-xs font-medium text-red-500 " ${invalidPassword? "visible" : "invisible"}`}>
                            Password must contain at least 8 characters
                          </span>
                      </div>

                      <div className="flex items-center justify-between">
                          <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                              </div>
                              <div className="ml-3 text-sm">
                                <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                              </div>
                          </div>
                          <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                      </div>
                      <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      onClick={(e)=>handleSumit(e)}>Log In</button>
                      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                          Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                      </p>
                  </form>
              </div>
            </div>
          </div>
        </>

      }
    </>
  )
}
