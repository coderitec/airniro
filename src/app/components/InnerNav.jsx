"use client"
import React, { useState } from 'react'

export default function InnerNav() {

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
    <nav className='h-[auto] w-[400px] flex items-center justify-around'>
        {navLinks.map((e) => (
            <a href='#' className={isActive == e.link ? `text-[#FFC717]`:`text-[white]`} key={e.link} onClick={() => setActive(e.link)}>
                <p>{e.link}</p>
            </a>
        ))}

    </nav>
  )
}
