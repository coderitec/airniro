"use client"
import React, { useRef, useState } from 'react';
import FormHeaders from '../components/FormHeaders'
import AccountButton from '../components/AccountButton';
import CancelButton from '../components/CancelButton';

export default function Page() {

  const text_color = '[#4b4b4bb6]';
  const ph_color = '[#afa9a9b6]';
  const light_blue = '[#5137ff]';
  const dark_blue = '[#1c1360]';

  var otp = []

  typeof window !== 'undefined'?
    otp = JSON.parse(localStorage.getItem('OTP') || `[]`)
      : otp = [];

  const [otpInputs, setOtpInputs] = useState(['', '', '', '', '', '']);
  const otp_BETA_TEST_LENGTH = 6; // Replace with your actual length of OTP array
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const inputRefs = useRef([...Array(otp_BETA_TEST_LENGTH)].map(() => React.createRef()));

  const handleOtpInputChange = (index, value) => {
    const newOtpInputs = [...otpInputs];
    newOtpInputs[index] = value;
    setOtpInputs(newOtpInputs);

    if (value && index < otp_BETA_TEST_LENGTH - 1) {
      inputRefs.current[index + 1].current.focus();
    }
  };
  

  return (
    <section className="bg-[#333333] h-screen flex items-center justify-center">

      <section className="bg-white m-auto w-[32%] pb-[3.5rem] relative rounded-3xl px-7">
      <CancelButton/>
      <FormHeaders title="Verification" subtitle="Please enter a 6 digit code sent to your phone number"/>

      <div className='h-[auto] w-[100%] flex flex-col items-center justify-center mt-[3rem] mb-[1.5rem]' >
        <p className='h-[auto] w-[85%] text-left'> Enter code</p>
      <form
          className="flex flex-row items-center justify-between h-[auto] w-[85%] relative "
        >
          {otpInputs.map((value, index) => (
            <input
              key={index}
              type="text"
              value={value}
              onChange={(e) => handleOtpInputChange(index, e.target.value)}
              maxLength={1}
              ref={inputRefs.current[index]}
              placeholder={value}
              className={
                error == ''
                  ? `text-${ph_color} h-[44px] w-[44px] border-2 rounded-xl border-${ph_color} text-center `
                  : !success
                  ? `border-red-500 text-red-500 h-[44px] w-[44px] border-2 rounded-xl text-center`
                  : `text-green-400 h-[44px] w-[44px] border-2 rounded-xl border-green-400 text-center `
              }
            />
          ))}
        </form>
        </div>

        <div className='h-[auto] w-[100%] mb-[3rem]'>
          <p className='text-gray-500 text-center text-sm mb-4'>Resend code in 02:53</p>
        </div>
        
        <AccountButton topic = "Continue"/>

      </section>
      
    </section>
  )
}
