"use client"
import React, {useEffect, useState } from 'react'
import styles from '../styles/betmain.module.css'


export default function SelectSportBet(props) {

    const sportOptionArray = ["Win","Draw","Win_"]

    const [isActive, setActive] = useState(null)
    const [club, setClub] = useState(null)
    const [bet, setBet] = useState(null)

    const handlebetSelection = (e) => {
            // e == "Loss"? setBet("Lose"):setBet(e)
            // console.log(bet)
            const index = sportOptionArray.indexOf(e)
            setActive(index)
            if(isActive == 0){
                setClub(props.club[0])
                setBet("Win")
            }
            else if(isActive == 1){
                setClub(props.club[0] + " & " + props.club[1])
                setBet("Draw")
            }else if (isActive == 2){ 
            setClub(props.club[1]) 
            setBet("Win")
        }   
        }

        useEffect(() => {setActive(isActive)},[isActive])
        useEffect(() => {setClub(club)},[club])
        useEffect(() => {setBet(bet)},[bet])

  return (
    <section id='bet_main' className='min-h-[150px] w-[100%] grid grid-cols-betgrid_2 gap-0'>
        
        <div className='h-[130px] min-w-[100px] grid grid-rows-betgrid_2_r items-center justify-center'>

        <div className='h-[40px] min-w-[100px] w-[auto] items-center justify-around grid grid-cols-betgrid_3 text-right gap-2 '>
            {/* club name  */}
            <p>{ props.club ? props.club[0] :`Chelsea`}</p>

            {/* club scores  */}
            <p>0</p>
        </div>
          
        <div className='h-[40px] min-w-[100px] w-[auto] items-center justify-around grid grid-cols-betgrid_3 text-right gap-2 '>
        </div>

        <div className='h-[40px] min-w-[100px] w-[auto] items-center justify-around grid grid-cols-betgrid_3 text-right gap-2 '>
            {/* club name  */}
            <p>{ props.club ? props.club[1] :`Chelsea`}</p>

            {/* club scores  */}
            <p>0</p>
        </div>
        </div>


        <div className='h-[130px] w-[auto] grid grid-rows-betgrid_2_r  min-w-[150px] items-center justify-center text-[13px] font-[650]'>
        {sportOptionArray.map((names) => (  /* add actual betting option list or arrays here*/               
        <span className={names != sportOptionArray[isActive] ? styles.betSelect : styles.active} onClick={()=> handlebetSelection(names) && setActive(sportOptionArray.indexOf(names))}>
            {names}
        </span>
        ))} 
        </div>

        <div className='h-[130px] min-w-[250px] w-[auto] grid grid-rows-betgrid_2_r items-center justify-center capitalize p-1 text-[11px] '>
            {/* user name / amount / selection  */}
            {sportOptionArray.map((e, key) => (  /* add actual betting option list or arrays here*/
            <p key={key} >               
            <p className={isActive == sportOptionArray.indexOf(e)? `` : `hidden` }> 
            <span className='text-[#0166E5]'>{`Adebola James`}</span>{` Bet${isActive} ${club} To ${bet} with N20,000 `}
            </p> 
            </p>
            ))}

                     

        </div>
    </section>
  )
}
