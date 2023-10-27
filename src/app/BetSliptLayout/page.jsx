"use client"
import Link from 'next/link'
import CancelButton from '../components/CancelButton'
import { Montserrat } from 'next/font/google'
import { useState } from 'react'
import Group from './Group/page'
import Single from './Single/page'


const poppins = Montserrat({ subsets: ['latin'], weight: ['400']})

// export const metadata = {
//   title: 'Welcome to Airniro',
//   description: 'This is a peer-to-peer betting platform',
//   keywords: "entertainment, sport, live style"
// }

export default function BetSliptLayout() {

    const [active, setActive] = useState('single')

    const handleclick= (link) => {
        setActive(link);
    }
    // const router  = useRouter
    // const link = router
  return (
    <div className='min-h-[300px] h-[auto] w-[100%] rounded-xl mx-[auto] bg-[#ffffff] relative'>
        <div className='h-[60px] w-[100%] rounded-t-xl bg-[#00132E] text-[white] flex items-center px-4'>
            Bet Slip
        </div>
        <main className='bg-[white]'>
        <nav className='h-[50px] w-[100%] flex items-center text-[13px] border-b-[0.6px] border-[#78777734]'>
            <p onClick={() => handleclick('single')} className={`h-[100%] w-[50%] hover:bg-[#5353532d] hover:cursor-pointer ${active == 'single'? `border-b-2 border-[#FFC717]`:``}`}>
            <aside className='h-[100%] w-[100%] rounded-tl-3xl flex justify-center items-end p-2'>
                <p className='text-center'> Single </p>
            </aside>
            </p>

            <p onClick={() => handleclick('multiple')} className={`h-[100%] w-[50%] hover:bg-[#5353532d] hover:cursor-pointer ${active == 'multiple'? `border-b-2 border-[#FFC717]`:``}`}>
            <aside className='h-[100%] w-[100%] rounded-tr-3xl flex justify-center items-end p-2'>
                <p className=' text-center'>Group</p>
            </aside>
            </p>
        </nav>

        {active == "single"? (
            <section>
                <Single/>
            </section>
        ): (
            <section>
                <Group/>
            </section>
        )}
        

        </main>

    </div>
  
  )
}
