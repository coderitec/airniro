"use client"
import React, { useState } from 'react'
import EditButton from './EditButton'

export default function Profiler(props) {
    const [isEdit, setEdit ] = useState(false)

    const handleEdit =() => {
        setEdit(!isEdit)
    }
    
    return (
    <div className='h-[auto] w-[100%] flex flex-col  '>
        
    <div id='profile_data' className='min-h-[150px] h-[auto] w-[100%] flex-wrap flex justify-between my-[2rem]'>
            
            {
                isEdit?
                props.detail.map((item)=>(
                    <label className='min-w-[30%] w-[auto] my-3'>
                        <p id='input-group__input' className='text-[14px] text-[#2b2b2bdb] '>{item.name}</p>
                        <input type={item.type? item.type: "text"} id='input-group__label' className='text-[16px] border-[1px] rounded-md outline-none h-[auto] w-[auto]' placeholder={`${item.value.length > 25 ? item. value.slice(0,25) + `...`: item.value}`} onChange={item.onChange} ref={item.ref}/>
                    </label>
                )):
                props.detail.map((item)=>(
                    <div className='min-w-[30%] w-[auto] my-3'>
                        <p className='text-[14px] text-[#2b2b2bdb]'>{item.name}</p>
                        <p className='text-[16px]  text-black'>{item.value.length > 25 ? item.value.slice(0,25) + `...`: item.value}</p>
                    </div>
                ))
            }

        </div>

        <div className='h-[auto] w-[100%] flex justify-end items-center'>
            <EditButton onClick={handleEdit} isEdit={isEdit}/>
        </div>
    </div>
  )
}
