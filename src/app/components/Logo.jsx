import React from 'react'
import Image from 'next/image'

export default function Logo(props) {
  return (
    <span className='h-[auto] w-[auto] flex items-center justify-center'>
        <Image src='/Logo lockup Black H 2.svg' alt='airniro logo' height={100} width={ props.width ? props.width : 100 } className='inline'/>
    </span>
  )
}
