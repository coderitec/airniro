"use client"
import React, { useState } from 'react'
import Nav from '../components/Nav'
import { CiMoneyCheck1, CiMoneyBill } from "react-icons/ci"
import { PiScrollDuotone } from "react-icons/pi"
import { MdOutlineVerifiedUser, MdCameraAlt } from "react-icons/md"
import ProfileListItems from './components/ProfileListItems'
import Profiler from './components/Profiler'

export default function Page() {

    const [firstName, setFirstName] = useState('Benson')
    const [lastName, setLastName] = useState('Chukwudi')
    const [phone, setPhone] = useState('8032119898')    
    const [username, setUserName] = useState('@bensonchux')
    const [email, setEmail] = useState('bensonchux@gmail.com')
    const [dob, setDOB] = useState('02/04/1992')
    
  
    const handlefirstName = (e) => {
      e = e.charAt(0).toUpperCase() + e.slice(1).trim()
      setFirstName(e)
    }
    const handlelastName = (e) => {
      e = e.charAt(0).toUpperCase() + e.slice(1).trim()
      setLastName(e)
    }
    const handleEmail = (e) => {
      e=e.toLowerCase().trim()
      setEmail(e)
    }
    const handleUsername = (e) => {
        e=e.toLowerCase().trim()
        setUserName(e)
      }
    const handleDOB = (e) => {
        e=e.toLowerCase().trim()
        setDOB(e)
      }
    const handlePhone = (e) => {
      // create a validation here that only setPhone when e is an integer from the input field
      // console.log('phone', parseInt(e))
      if (!isNaN(parseInt(e))){
        e=e.toString() &&
        setPhone(e)
      }
      null
    }

    const handleSideNavClick = () => {
      
    }
    
  return (
    <section className='relative w-[100vw] bg-[#F3F3F3]'>
        <Nav/>

        <main className='h-[100vh] w-[100vw] bg-[#f0f0f0] flex items-center justify-around'>
            
            <section className='h-[100vh] w-[30%]  flex flex-col items-center '>

                <div className='relative h-[180px] w-[380px] shadow-md rounded-lg bg-white mt-[6rem]'>
                    <div className='min-h-[80px] h-[auto] w-[100%] rounded-t-lg bg-[#00132E] p-5 flex items-center'>
                        <span className='relative h-[60px] w-[60px] rounded-full bg-[gray]'></span>
                        <p className='text-white text-xl font-bold ml-4'>Benson Chukwudi</p>
                    </div>

                    <div className='min-h-[100px] h-[auto] w-[100%] rounded-b-lg p-5 flex flex-col justify-center'>
                        <p className='text-[16px] text-[gray] pl-1'>Balance</p>
                        <p className='text-[21px]'>NGN 0.00</p>
                    </div>
                </div>

                <div className='relative h-[320px] w-[380px] shadow-md rounded-lg bg-white mt-[2.5rem]'>
                    <div className='min-h-[100px] h-[auto] w-[100%] rounded-t-lg bg-[#FFC717] p-5 flex items-center'>
                        <span className='relative h-[60px] w-[60px] rounded-full bg-[gray]'></span>
                        <div className='flex flex-col  justify-center'>
                        <p className='text-xl font-bold ml-4'>Benson Chukwudi</p>
                        <p className='text-xl font-medium ml-4'>My Account Information</p>
                        </div>                        
                    </div>

                    <div className='relative min-h-[220px] h-[auto] w-[100%] rounded-b-lg flex flex-col justify-center'>
                        <ProfileListItems icon={<CiMoneyCheck1 size={30} />} text={"Deposit"} />
                        <ProfileListItems icon={<CiMoneyBill  size={30} />} text={"Transaction"}/>
                        <ProfileListItems icon={<PiScrollDuotone size={30} />} text={"Bet History"}/>
                        <ProfileListItems icon={<MdOutlineVerifiedUser size={30} />} text={"Safety & Security"}/>                       
                    </div>
                </div>
                
            </section>

            <section className='h-[100vh] w-[70%] flex flex-col'>
                <div className='h-[600px] w-[1000px] bg-[white] rounded-lg shadow-md mt-[6rem]'>
                    <div className='min-h-[70px] h-[auto] w-[100%] border-b-[1px] border-b-[#d8d8d8]'>
                    </div>

                    <div className='min-h-[500px] h-[auto] w-[100%] flex flex-col items-center rounded-b-lg p-8'>

                    <div id='profile_picture' className='h-[120px] w-[120px] relative  rounded-full bg-[gray]'>     
                         <span className='h-[45px] w-[45px] absolute bottom-2 -right-1 flex items-center justify-center  rounded-full bg-[#ffffff]'>
                         <span className='h-[40px] w-[40px]  flex items-center justify-center  rounded-full bg-[blue]'>
                         <MdCameraAlt color='white' size={30} />
                         </span>
                         </span>
                    </div>

                    <Profiler title={'Personal Information'} detail={[
                      {
                        name: 'First Name',
                        value: (firstName),
                        onChange: ((e) => handlefirstName(e.target.value))
                      },
                      {
                        name: 'Last Name',
                        value: (lastName),
                        onChange: ((e) => handlelastName(e.target.value))
                      },              
                      {
                        name: 'Phone',
                        value: (`+234${phone.slice(0,2)} ${phone.slice(2,5)} ${phone.slice(5)}`),
                        onChange: ((e) => handlePhone(e.target.value))
                      },
                      {
                        name: 'Date of Birth',
                        value: (dob),
                        onChange: ((e) => handleDOB(e.target.value)),
                        type: 'date'
                      },
                      {
                        name: 'Email address',
                        value: email,
                        onChange: ((e) => handleEmail(e.target.value)),
                        type: 'email'
                    
                      },
                      {
                        name: 'Username',
                        value: (username),
                        onChange: ((e) => handleUsername(e.target.value))
                      },
                  
                    ]}/>

                    <span className='h-[1px] w-[96%] bg-[#d8d8d8] mt-8'></span>

                    




                    </div>



                </div>

            </section>

        </main>
    </section>
  )
}
