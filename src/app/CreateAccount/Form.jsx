"use client"
import styles from './account.module.css'
import React, { useEffect, useState } from 'react'

export default function Form() {
    
  const [clicked, setClicked] = useState(false)
  const [inputType, setInputType] = useState('password')

  const handleclick = () => {
    setClicked(!clicked)
  }

    useEffect(()=> {        
      clicked?setInputType("text"): setInputType("password")
  }, [clicked])


  return (
    <form>
        <ul className={styles.formUl}>
            <li>
                <label htmlFor="fullName">Full Name</label>
                <input type="text" name="fullName" id="fullName" />
            </li>
            <li>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
            </li>
            <li>
                <label htmlFor="pwd">Create Password</label>
                <div className='h-[auto] w-[100%] relative my-2'>
                <input type={inputType} name="" id="" placeholder='' className='placeholder:text-gray-500 text-sm placeholder:p-8 p-8 border border-gray-500 rounded-md w-[100%] h-[44px]  outline-none relative'/>
        
                <span className='h-[100%] w-[80px] absolute top-0 right-0 flex items-center justify-center z-[3]'>
                <span className='h-[25px] w-[59px] rounded-md text-[12px] bg-[#0168e534] text-[#0166E5] flex items-center justify-center hover:cursor-pointer'
                onClick={handleclick}>
                {clicked? `Hide`: `Show`}
                </span>
                </span>
                </div>
                <span className='text-[10px]'>Maximum of 8 characters, one uppercase and one special character</span>
            </li>
            <li>
                <label htmlFor="dateOfBirth">Date Of Birth</label>
                <input type="date" name="dateOfBirth" id="dateOfBirth" />
            </li>
        </ul>
        
      <style jsx>
      {`
      input[type="password"]::-ms-reveal,
      input[type="password"]::-ms-clear {
        display: none;
      }
      `}
    </style>
    </form>
  )
}
