import AccountButton from '@/app/components/AccountButton'
import FormHeaders from '@/app/components/FormHeaders'
import React from 'react'

export default function Signup() {
  return (
    <section>
      <FormHeaders title="Welcome!" subtitle="Please enter your phone number to create an account"/>

      <div className='h-[auto] w-[100%] flex flex-col items-center justify-center my-[2rem]'>
        <p className='w-[80%] text-left m-0'> Phone Number</p>
        <input type="number" name="" id="" placeholder='+234' className='placeholder:text-gray-500 text-sm placeholder:p-4 p-4 border border-gray-500 rounded-md w-[80%] h-[44px] my-2'/>

      </div>



      <div className='h-[auto] w-[100%] flex items-center justify-center'>
        <span className='w-[80%]'>
          <AccountButton topic={'Continue'}/>
        </span>
      </div>

    </section>
  )
}
