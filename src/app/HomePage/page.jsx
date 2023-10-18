import React from 'react'
import Nav from '../components/Nav'
import PopularEventItem from '../components/PopularEventItem'
import AdvertBoard from '../components/AdvertBoard'
import BetMain from '../BetMain/page'
import BetSliptLayout from '../BetSliptLayout/page'


export default function page() {
  return (
    <section className='relative bg-[#F3F3F3]'>
        <Nav/>

        <div className='h-[300px] w-[96%] mx-[auto] bg-[#2e2b8d] rounded-2xl flex flex-col items-center text-[white] relative mt-20 p-10 bg-cover'
        style={{backgroundImage: `url("p2pbanner.svg")`}}>
        </div>

        <main id='container' className='h-[auto] w-[96%] grid grid-cols-betgrid_main gap-[20px] mx-[auto] my-[3rem]'>
            
            <section id='left-col' className=''>
                
                <div className='min-h-[300px] h-[auto] min-w-[250px] w-[100%] rounded-xl mx-[auto] bg-[white] relative'>
                    <div className='h-[60px] w-[100%] rounded-t-xl bg-[#00132E] text-[white] flex items-center px-4'>
                        Popular Event
                    </div>
                    <div className='h-[auto] w-[100%] text-[#00132E] flex flex-col items-center px-4 text-[13px]'>
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
                <div className='min-h-[300px] h-[auto] w-[100%] bg-[white] rounded-2xl mx-auto flex flex-col items-center p-10 leading-loose'>
                    <h1 className='h-[auto] w-[100%] text-[24px] my-6 font-[800]'>How it works</h1>
                        <ul className='text-[16px] font-[500]'>
                            <li>1. Minimum deposit amount is NGN 100.00 - you can deposit at least NGN 100.00 in one.</li>
                            <li>2. Maximum per transaction is NGN 9,999,999.00 - you can deposit up to NGN 9,999,999.00 in one. </li>
                            <li>3. Any card details you choose to save are encrypted. We do not store your CVV. We will also ask you to input your Sporty PIN any time you want to use your card after it has been successfully </li> 
                        </ul>
                </div>


                <div className=''>
                    {/* betmain has 2 "id" to seperate category selection(e.g entertainment,lifestyle) from outcome selection(e.g sport, win, lose, draw).
                    Outcome Selection: ID=1,
                    Category Section: ID=2  
                    */}
                    <BetMain id={1} title={"Sport"} subtitle={"International Clubs Club Friendly Games"} navlist={['Football Hot Bets',  'Premier League','La Liga','Serie A','Bundesliga','League 1',]} currentDate={"Tue 22 Aug"}/>
                    <BetMain id={2} title={"Entertainment"} subtitle={"Headies Awards 2023"} navlist={["Headies Awards", "AMVCA Award", "Tennis", "Long Tennis", "Cricket", "Boxing"]} 
                    heading={"Best Album of the year 2023"}
                    date={"Tueday 22 August, 2023"}
                    time={'22:00'} categoryOption={[
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
                        }]}/>
                </div>

            </section>





            <section id='right-col' className=''>

                <div>
                    <BetSliptLayout/>
                </div>
                
                <div className='h-[370px] min-w-[220px] w-[100%] flex flex-col items-center justify-between mx-[auto] mt-[2rem]'>
                    <AdvertBoard/>
                    <AdvertBoard/>
                </div>
            </section>

        </main>

    </section>
  )
}
