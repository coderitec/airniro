"use client"
import Link from 'next/link'
import CancelButton from '../components/CancelButton'
import { Montserrat } from 'next/font/google'
import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'

const poppins = Montserrat({ subsets: ['latin'], weight: ['400']})

// export const metadata = {
//   title: 'Welcome to Airniro',
//   description: 'This is a peer-to-peer betting platform',
//   keywords: "entertainment, sport, live style"
// }

export default function RegistertLayout({ children }) {

    const [active, setActive] = useState('signup')

    const handleclick= (link) => {
        setActive(link);
    }
    // const router  = useRouter
    // const link = router

    // console.log(link)




  return (
    <section section className="bg-[#333333] h-screen flex items-center justify-center">

    <main className="bg-white m-auto w-[32%] min-w-[470px] pb-[3.5rem] relative rounded-3xl">
        <CancelButton/>
        <nav className='h-[70px] w-[100%] flex items-center rounded-t-3xl bg-[#78777734]'>
            <Link href={'/Register/Signup'} onClick={() => handleclick('signup')} className={`h-[100%] w-[50%] rounded-tl-3xl hover:bg-[#5353532d] hover:cursor-pointer ${active == 'signup'? `border-b-2 border-[#FFC717]`:``}`}>
            <aside className='h-[100%] w-[100%] rounded-tl-3xl flex justify-center items-end p-2'>
                <p className='text-center'> Register </p>
            </aside>
            </Link>

            <Link href={'/Register/Login'} onClick={() => handleclick('login')} className={`h-[100%] w-[50%] rounded-tr-3xl hover:bg-[#5353532d] hover:cursor-pointer ${active == 'login'? `border-b-2 border-[#FFC717]`:``}`}>
            <aside className='h-[100%] w-[100%] rounded-tr-3xl flex justify-center items-end p-2'>
                <p className=' text-center'> Login </p>
            </aside>
            </Link>

        </nav>
        {children}
    </main>
    </section>
  )
}
