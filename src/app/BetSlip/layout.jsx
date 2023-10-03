"use client"
import Link from 'next/link'
import CancelButton from '../components/CancelButton'
import { Montserrat } from 'next/font/google'
import { useState } from 'react'


const poppins = Montserrat({ subsets: ['latin'], weight: ['400']})

// export const metadata = {
//   title: 'Welcome to Airniro',
//   description: 'This is a peer-to-peer betting platform',
//   keywords: "entertainment, sport, live style"
// }

export default function BetSliptLayout({ children }) {

    const [active, setActive] = useState('single')

    const handleclick= (link) => {
        setActive(link);
    }
    // const router  = useRouter
    // const link = router
  return (
    <div className=' h-[300px] min-h-[300px] w-[270px] rounded-xl mx-[auto] bg-[#ff0000] relative'>
        <div className='h-[60px] w-[100%] rounded-t-xl bg-[#00132E] text-[white] flex items-center px-4'>
            Bet Slip
        </div>
        <nav className='h-[70px] w-[100%] flex items-center rounded-t-3xl bg-[#78777734]'>
            <Link href={'/Register/Signup'} onClick={() => handleclick('single')} className={`h-[100%] w-[50%] rounded-tl-3xl hover:bg-[#5353532d] hover:cursor-pointer ${active == 'single'? `border-b-2 border-[#FFC717]`:``}`}>
            <aside className='h-[100%] w-[100%] rounded-tl-3xl flex justify-center items-end p-2'>
                <p className='text-center'> Single </p>
            </aside>
            </Link>

            <Link href={'/Register/Login'} onClick={() => handleclick('multiple')} className={`h-[100%] w-[50%] rounded-tr-3xl hover:bg-[#5353532d] hover:cursor-pointer ${active == 'multiple'? `border-b-2 border-[#FFC717]`:``}`}>
            <aside className='h-[100%] w-[100%] rounded-tr-3xl flex justify-center items-end p-2'>
                <p className=' text-center'>Multiple</p>
            </aside>
            </Link>
        </nav>

        <div>
            {children}
        </div>

    </div>
  
  )
}
