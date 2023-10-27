import React from 'react';
import styles from '../styles/betmain.module.css';
import SelectSportBet from './SelectSportBet';
import { IoIosAddCircleOutline } from 'react-icons/io';
import SelectOptiontBet from './SelectOptionBet';

export default function BetSlip(props) {
  const propstitle = 'Sport';
  const propsclub = 'Chelsea';
  return (
    
    <main className="min-h-[180px] h-[auto] w-[100%] p-2 relative flex items-center bg-[#f2f2f2] border-[#00000016] border-[1px]">
      <span className="absolute right-2 top-2 text-[11px] text-[#0166E5]">
        {/* props title  */}
        {props.title}
      </span>

      <span className="h-[35px] w-[130px] rounded-lg flex items-center justify-around bg-[#FFC717] absolute bottom-2  right-2 cursor-pointer text-[13px]">
        <IoIosAddCircleOutline />
        Recreate Bet
      </span>

      <section className="h-[100px] w-[80%] grid grid-cols-betgrid_1 gap-[1px] my-[auto]">
        <span className="h-[100%] w-[auto] font-[700] text-[#0166E5] text-[13px] flex flex-col justify-center text-left p-3 ">
          {/* betting time stamps */}
          {props.time}
        </span>

        <span className="min-h-[100%] h-[auto] min-w-[450px] w-[auto] flex flex-col items-center justify-center text-[14px]">
          {/* betting teams*/}
        {props.id == 1 ? (
          <>
          <SelectSportBet club={[props.club[0], props.club[1]]}/>
          </>
          ):(
          <>
          <SelectOptiontBet
          id={props.id}
          title={props.title}
          subtitle={props.subtitle}
          date={props.date}
          time={props.time}
          categoryOption = {props.categoryOption}
            />
          </>
          )}
        </span>
      </section>
    </main>
  );
}
