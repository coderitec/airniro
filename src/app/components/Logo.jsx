import React from 'react'

export default function Logo(props) {
  return (
    <span className='h-[auto] w-[auto] flex items-center justify-center'>
        <img src='Logo lockup Black H 2.svg' width={ props.width ? props.width : 100 }/>
    </span>
  )
}
