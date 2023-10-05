"use client"
import React, { useEffect, useState } from 'react'
import styles from '../styles/betmain.module.css'


export default function SelectBet(props) {

    const sportOptionArray = ["Win","Draw", "Loss"]

    const [bet, setBet] = useState("...")
    const [isActive, setActive] = useState()

    useEffect(
        () => {
            setBet(bet)
            console.log(bet)
        },[bet]
    )

    const handlebetSelection = (e) => {
            e == "Loss"? setBet("Lose"):setBet(e)
            console.log(bet)
            setActive(e)
    }
 



  return (
    <section id='bet_main' className='h-[50px] w-[100%] items-center justify-center grid  grid-cols-betgrid_2'>
        <div className='h-[50px] min-w-[100px] w-[auto]  items-center justify-around grid grid-cols-betgrid_3 text-right gap-1'>
            {/* club name  */}
            <p>{ props.club ? props.club :`Chelsea`}</p>

            {/* club scores  */}
            <p>0</p>

        </div>


        <div className='flex items-center justify-center h-[50px] min-w-[300px] w-[auto] p-2 txet-[13px] '>
        {sportOptionArray.map((names) => (  /* add actual betting option list or arrays here*/               
        <span key={Math.random()} className={names != isActive ? styles.betSelect : styles.active} onClick={()=> handlebetSelection(names) && setActive(names)}>
            {names}
        </span>
        ))} 
        </div>

        <div className='h-[50px] min-w-[200px] w-[auto] flex  items-center capitalize p-2 text-[11px]'>
            {/* user name / amount / selection  */}
            <p className={isActive ? `` : `hidden` }> <span className='text-[#0166E5]'>{`Adebola James `}</span>{`Bet ${props.club} To ${bet} with N20,000 `}</p>          

        </div>
    </section>
  )
}
