"use client"
import React, { useEffect, useState } from 'react'
import styles from '../styles/betselectionmain.module.css'


export default function SelectOptiontBet(props) {

    const categoryOptionArray = [
        {
        mainName: "Made in Lagos",
        name: "Wizkid"
        },
        {
        mainName: "Timeless",
        name: "Davido"
        },
        {
        mainName: "Body & Soul",
        name: "Joeboy"
        },
        {
        mainName: "Work Of Art",
        name: "Asake"
        },
        {
        mainName: "Thy Kingdom Come",
        name: "Seyi Vibes"
        },
    ]

    const [bet, setBet] = useState("...")
    const [isActive, setActive] = useState()

    // const betSelection = props.categoryOption[props.categoryOption.findIndex((item)=> item.mainName == bet)]
    const betSelection = betSelectionIndex !== -1 ? props.categoryOption[betSelectionIndex] : null;

    console.log(betSelection)

    useEffect(
        () => {
            setBet(bet)
            console.log(bet)
        },{bet}
    )

    const handlebetSelection = (e) => {
            setBet(e)
            console.log(bet)
            setActive(e)
    }
 



  return (
    <section id='bet_main' className='min-h-[150px] h-[auto] w-[100%] flex flex-col items-center justify-center m-2 '>

        {/* props title  */}
        <p className=' w-[100%] text-[13px] text-left'>{`${props.subtitle} ( ${props.date} )`}</p>
        


        <div className={isActive ? `h-[50px] min-w-[100%] w-[auto] flex  items-center capitalize text-[11px] transition-all` : `hidden transition-all`}>
            <p className={``}> <span className='text-[#0166E5]'>{`Adebola James `}</span>{`Bet Adebola James Bet ${betSelection?betSelection.name:''} Album ${betSelection?betSelection.mainName:''} to Win the best Album of the year at the Headies award 2023 With N20,000`}
            </p>          
        </div>

        <div className='h-[80px] w-[100%] flex items-center justify-center min-w-[300px] text-[13px] capitalize text-left my-[0.2rem]'>
        {props.categoryOption.map((i, key) => (  /* add actual betting option list or arrays here*/               
        <span key={key} className={i.mainName != isActive ? styles.betSelect : styles.active } onClick={()=> handlebetSelection(i.mainName) && setActive(i.mainName)}>
            <p className='text-[13px] font-[600] w-[100%]'>{i.mainName}</p>
            <p className='text-[11px] w-[100%]'>{i.name}</p>
        </span>
        ))} 
        </div>


        <p className={`w-[100%] text-left text-[11px] flex items-center capitalize `}> {`Bet against `} <span className='text-[#0166E5] text-left'>{` Adebola James `}</span> {` with N20,000 to win extra N20,000`}</p>          
    </section>
  )
}
