import React from 'react'
import Nav from '../components/Nav'
import PopularEventItem from '../components/PopularEventItem'
import AdvertBoard from '../components/AdvertBoard'
import BetSlip from '../BetSlip/page'
import BetMain from '../BetMain/page'

export default function HomePage() {
  return (
    <section className='relative bg-[#F3F3F3]'>
        <Nav/>

        <div className='h-[300px] w-[90%] mx-[auto] bg-[#008000] rounded-2xl flex flex-col items-center text-[white] relative mt-40 p-10'>
            <h1 className='h-[auto] w-[100%] text-[25px] my-6 font-[800]'>How it works</h1>
            <ul>
                <li>1. Minimum deposit amount is NGN 100.00 - you can deposit at least NGN 100.00 in one.</li>
                <li>2. Maximum per transaction is NGN 9,999,999.00 - you can deposit up to NGN 9,999,999.00 in one. </li>
                <li>3. Any card details you choose to save are encrypted. We do not store your CVV. We will also ask you to input your Sporty PIN any time you want to use your card after it has been successfully </li> 
            </ul>

        </div>

        <main id='container' className='h-[auto] w-[100vw] grid grid-cols-betgrid_main gap-[0] my-[3rem]'>
            <section id='left-col' className=''>
                
                <div className='min-h-[300px] h-[auto] w-[220px] rounded-xl mx-[auto] bg-[white] relative'>
                    <div className='h-[60px] w-[100%] rounded-t-xl bg-[#00132E] text-[white] flex items-center px-4'>
                        Popular Event
                    </div>
                    <div className='h-[auto] w-[100%] text-[#00132E] flex flex-col items-center px-4 text-[14px]'>
                        <PopularEventItem text={"Hot Bet"}/>
                        <PopularEventItem text={"Headies Award"}/>
                        <PopularEventItem text={"Big Brother Nigeria"}/>
                        <PopularEventItem text={"Nigeria Presidential Election"}/>
                        <PopularEventItem text={"MTV Base Award"}/>
                        <PopularEventItem text={"Nigeria Idol"}/>
                    </div>
                    

                </div>
            </section>


            <section id='center-col' className=''>
                <div className='h-[300px] w-[100%] bg-[white] rounded-2xl mx-auto flex items-center justify-around'>
                    <AdvertBoard/>
                    <AdvertBoard/>
                </div>


                <div className=''>
                    <BetMain title={"Sport"} subtitle={"International Clubs Club Friendly Games"} navlist={["Football", "Volley Ball", "Basket Ball", "Tennis", "Long Tennis", "Cricket", "Boxing"]} currentDate={"Tue 22 Aug"}/>
                    <BetMain title={"Entertainment"} subtitle={"Headies Awards 2023"} navlist={["Headies Awards", "AMVCA Award", "Tennis", "Long Tennis", "Cricket", "Boxing"]} currentDate={"Tue 22 Aug"}/>
                </div>

            </section>





            <section id='right-col' className=''>

                <div>
                    {/* <BetSlip/> */}
                </div>



                <div className='h-[auto] w-[220px] flex flex-col items-center justify- mx-[auto]'>
                    <AdvertBoard/>
                    <AdvertBoard/>
                </div>
            </section>
        </main>

    </section>
  )
}
