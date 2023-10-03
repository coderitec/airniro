import React from 'react'
import PopularEventItem from '../components/PopularEventItem'

export default function page() {
  return (
    <div className='h-[auto] w-[100%] text-[#00132E] flex flex-col items-center px-4 text-[14px]'>
        <PopularEventItem text={"Hot Bet"}/>
        <PopularEventItem text={"Headies Award"}/>
        <PopularEventItem text={"Big Brother Nigeria"}/>
        <PopularEventItem text={"Nigeria Presidential Election"}/>
        <PopularEventItem text={"MTV Base Award"}/>
        <PopularEventItem text={"Nigeria Idol"}/>
    </div>   
  )
}
