"use client"
import AccountButton from '@/app/components/AccountButton'
import FormHeaders from '@/app/components/FormHeaders'
import React, { useEffect, useState } from 'react'

export default function Login() {

  const [clicked, setClicked] = useState(false)
  const [inputType, setInputType] = useState('password')

  const handleclick = () => {
    setClicked(!clicked)
  }

    useEffect(()=> {        
      clicked?setInputType("text"): setInputType("password")
  }, [clicked])

  return (
    <section>
      <FormHeaders title="Welcome Back!" subtitle="Please login into your account to continue"/>

      <div className='h-[auto] w-[100%] flex flex-col items-center justify-center my-[2rem]'>
        <p className='w-[80%] text-left m-0'> Phone Number</p>
        <span className='h-[44px] w-[80%] flex items-center border border-gray-500 rounded-tl-md rounded-bl-md p-2 my-2 '>
        <p className='text-sm text-center h-[100%] w-[20%] flex items-center justify-center'> +234</p>
        <input type="number" name="" id="" placeholder='70233456758' className='placeholder:text-gray-500 text-sm placeholder:p-2 p-2  rounded-tr-md rounded-br-md w-[80%] h-[100%] outline-none'/>

        </span>

        <p className='w-[80%] text-left mt-3'> Password</p>

        <div className='h-[auto] w-[80%] relative my-2'>
        <input type={inputType} name="" id="" placeholder='' className='placeholder:text-gray-500 text-sm placeholder:p-4 p-4 border border-gray-500 rounded-md w-[100%] h-[44px]  outline-none relative'/>
        
        <span className='h-[100%] w-[80px] absolute top-0 right-0 flex items-center justify-center z-[3]'>
          <span className='h-[25px] w-[59px] rounded-md text-[12px] bg-[#0168e534] text-[#0166E5] flex items-center justify-center hover:cursor-pointer'
          onClick={handleclick}>
          {clicked? `Hide`: `Show`}
          </span>
        </span>
        </div>


      </div>



      <div className='h-[auto] w-[100%] flex items-center justify-center'>
        <span className='w-[80%]'>
          <AccountButton topic={'Login'}/>
        </span>
      </div>
      <style jsx>
      {`
      input[type="password"]::-ms-reveal,
      input[type="password"]::-ms-clear {
        display: none;
      }
      `}
    </style> 
    </section>
  )
}