import React from 'react';
import styles from '../styles/betmain.module.css';
import SelectSportBet from './SelectSportBet';
import { IoIosAddCircleOutline } from 'react-icons/io';

export default function BetSlip(props) {
  const propstitle = 'Sport';
  const propsclub = 'Chelsea';
  return (
    <main className="h-[150px] w-[100%] p-2 relative flex items-center bg-[#f2f2f2] border-[#00000016] border-[1px]">
      <span className="absolute right-2 top-2 text-[11px] text-[#0166E5]">
        {/* props title  */}
        {props.title}
      </span>

      <span className="h-[35px] w-[130px] rounded-lg flex items-center justify-around bg-[#FFC717] absolute bottom-2  right-2 cursor-pointer text-[13px]">
        <IoIosAddCircleOutline />
        Recreate Bet
      </span>

      <section className="h-[100px] w-[80%] grid grid-cols-betgrid_1 gap-[4px] my-[3rem] ">
        <span className="h-[100%] w-[auto] font-[700] text-[#0166E5] text-[13px] flex flex-col  justify-center text-left p-6">
          {/* betting time stamps */}
          {props.time}
        </span>

        <span className="h-[100%] w-[auto] flex flex-col items-center justify-center text-[14px]">
          {/* betting teams*/}
          <SelectSportBet club={props.club[0]} />
          <SelectSportBet club={props.club[1]} />
        </span>
      </section>
    </main>
  );
}
