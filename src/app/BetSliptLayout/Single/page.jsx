import Link from 'next/link'
import React from 'react'

export default function Single() {
  return (
  <div className='flex flex-col items-center p-8 text-[#00132E] text-center text-[16px]'>
    <p className='h-[80px] w-[100%] px-[auto]'>Please Sign Up or Login to place a bet</p>

    <Link href={'/Register/Signup'} className='h-[40px] min-w-[280px] w-[100%] rounded-md flex items-center justify-center bg-[#FFC717] cursor-pointer'>
        <p className='text-[black]'>
          Sign Up
        </p>
    </Link>

    <Link href={'/Register/Login'} className='h-[40px] min-w-[280px] w-[100%] rounded-md flex items-center justify-center bg-[#0166E5] text-[white] cursor-pointer mt-[0.6rem]'>
        <p className='text-[black]'>
          Login
        </p>
    </Link>

</div>
  )
}
