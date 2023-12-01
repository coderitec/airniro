'use client';
import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import styles from '../styles/betmain.module.css';
import SelectBet from '../components/SelectSportBet';
import { IoIosAddCircleOutline } from 'react-icons/io';
import BetSlip from '../components/BetSlip';

export default function BetMain(props) {
 
  const sportArray = [
    'Football',
    'Premier League',
    'La Liga',
    'Serie A',
    'Bundesliga',
    'League 1',
  ];

  const propstitle = 'Sport';

  const [isNavActive, setNavActive] = useState('');

  return (
    <div className="h-[auto] w-[100%] rounded-2xl flex flex-col bg-[#d6d6d6] mx-[auto] my-[2rem]">
      <div className="h-[60px] w-[100%] rounded-t-2xl p-4 bg-[#00132E] text-[white] text-[16px]">
        <p className="h-[100%] w-[100%] flex items-center">{props.title}</p>{' '}
        {/**props.title */}
      </div>

        <nav className='min-h-[60px] w-[100%] flex items-center justify-around bg-[#0166E5] text-[white]'>
              {/**props.navlist  an array for nav items  */}
            {sportArray.map((names, index) => (                     
                <span key={index} className={isNavActive === names ? `h-[100%] w-[auto] flex items-center justify-around cursor-pointer text-[13px] text-[#FFC717]`:`h-[100%] w-[auto] flex items-center justify-around cursor-pointer text-[13px]`} onClick={() => setNavActive(names)}>
                    {names}
                </span>
            ))}    

        <span className="h-[100%] w-[70px] flex items-center justify-around cursor-pointer">
          More
          <IoIosArrowDown />
        </span>
      </nav>

      <section className="min-h-[60px] w-[100%] p-4 bg-[#ffffff] font-[700]">
        <p className="h-[100%] w-[100%] flex items-center text-[15px]">
          {props.subtitle}
          {/**props.subtitle */}
        </p>
      </section>

      {props.currentDate ? (
      <section className="min-h-[50px] w-[100%] p-4 bg-[#ffffff] border-t border-t-[#dfdede]">
        <p className="h-[100%] w-[100%] flex items-center text-[14px]">
          {props.currentDate}
          {/**props.currentDate */}
        </p>
      </section>): null}

      
      <main className="h-[auto] w-[100%] relative flex flex-col items-center bg-[#ffffff]">
      {props.id == 1? (<>
      <BetSlip
          id={props.id}
          title={props.title}
          club={['Chealsea', 'Liverpool']}
          time={'18:00'}
        />
        <BetSlip
          id={props.id}
          title={props.title}
          club={['Everton', 'Aston Villa']}
          time={'20:00'}
        />
        <BetSlip
          id={props.id}
          title={props.title}
          club={['AC Millan', 'Napoli']}
          time={'22:00'}
        />
        <BetSlip
          id={props.id}
          title={props.title}
          club={['Sevilla', 'Barcelona']}
          time={'22:00'}
        />
        </>):(<>
        <BetSlip
        id={props.id}
        title={props.title}
        subtitle={props.heading}
        date={props.date}
        time={props.time}
        categoryOption = {props.categoryOption}
        />
        <BetSlip
        id={props.id}
        title={props.title}
        subtitle={props.heading}
        date={props.date}
        time={props.time}
        categoryOption = {props.categoryOption}
        />
        </>)}
      </main>

      <style>
        {`
        /* Betting Page */
        #betSelect:
        `}
      </style>
    </div>
  );
}
