import React from 'react'

export default function ProfileListItems(props) {

  const handleClick = (e) => {
    console.log(e);
  }
  return (
    <div className='h-[60px] w-[100%] flex bg-[#ffffff] transition-all hover:bg-[#d6d6d6] hover:transition-all hover:cursor-pointer' onClick={handleClick("click")}>
        <span className='h-[100%] w-[50px] ml-3 flex items-center'>
            {props.icon}
        </span>
        <p className='h-[100%] w-[auto] text-[15px] ml-1 flex items-center '>
            {props.text}
        </p>
    </div>
  )
}
