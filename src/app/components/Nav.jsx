"use client"
import React, { useState } from 'react'
import Logo from './Logo'
import InnerNav from './InnerNav'

export default function Nav() {

        const [isActive, setActive] = useState("")

        const navLinks = [
        {
        link: "Home",
        nestedLink: ["Sport", "Politics", "Entertainment", "Education", "Lifestyle", "Finance"]
        },
        {
        link: "Single Bet",
        nestedLink: ["Single Bet", "Sport", "Politics", "Entertainment", "Education", "Lifestyle", "Finance"]
        },
        {
        link: "Group Bet",
        nestedLink: ["Group Bet", "Sport", "Politics", "Entertainment", "Education", "Lifestyle", "Finance"]
        },
        {
        link: "Hot Bet",
        nestedLink: ["Hot Bet", "Sport", "Politics", "Entertainment", "Education", "Lifestyle", "Finance"]
        },
        
    ]

  return (
    <div>
    <nav className='h-[80px] w-[100%] p-1 px-6 flex items-center justify-between bg-[#00132E] relative top-0 left-0 text-[14px]'>
        <Logo/>

        <nav className='h-[auto] w-[400px] flex items-center justify-around'>
        {navLinks.map((e) => (
            <a href='#' className={isActive == e.link ? `text-[#FFC717]`:`text-[white]`} key={e.link} onMouseOver={() => setActive(e.link)}>
                <p>{e.link}</p>
            </a>
        ))}

        </nav>

        <div className='h-[auto] w-[130px] flex items-center justify-between'>
            <div className='cursor-pointer'>
                <p className='text-[white]'>
                  Login  
                </p>
            </div>

            <div className='h-[35px] w-[70px] rounded-md flex items-center justify-center bg-[#FFC717] cursor-pointer'>
                <p className='text-[black]'>
                  Sign Up
                </p>
            </div>

        </div>


    </nav>
        <div className={isActive ? `absolute h-[70px] w-[100%] bg-[#0166E5] flex items-center text-[white] p-1 px-6 text-[13px]` : `hidden`}>
        {navLinks.map((e) => (isActive == e.link ? e.nestedLink.map((e) => (
            <a href='#' className='mx-5' key={e}>
                <p>{e}</p>
            </a>
        )
    ):null))}
        </div>
    </div>
  )
}
