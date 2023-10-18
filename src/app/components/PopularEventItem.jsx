import React from 'react'
import {BsChevronRight} from "react-icons/bs"

export default function PopularEventItem(props) {
  return (
    <a href={`/` + props.text} className='h-[50px] w-[100%] flex text-[13px] items-center justify-between hover:cursor-pointer'>
        <p>
            {props.text}
        </p>
        <span>
            <BsChevronRight/>
        </span>

    </a>
  )
}
