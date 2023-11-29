"use client"
import React, { useState } from 'react'

export default function EditButton(props) {
    const isEdit= props.isEdit

    // const handleEdit =() => {
    //     setEdit(props.isEdit)
    // }
  return (
    <div className={ isEdit ? `h-[50px] w-[180px] bg-[#FFC717] rounded-md flex items-center justify-center text-[12px] text-[#000000db] hover:cursor-pointer`:`h-[50px] w-[180px] bg-[#FFC717] rounded-md flex items-center justify-center text-[12px] text-[#2b2b2bdb] hover:cursor-pointer`} onClick={props.onClick}>
            {isEdit? 'Save Changes':'Edit'}
    </div>
  )
}
