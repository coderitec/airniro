import React from 'react'

export default function FormHeaders({title, subtitle}) {
  return (
    <section className='text-center mt-[2em]'>
        <h1 className='font-bold'>{title}</h1>
        <p className='text-gray-500 text-sm mb-4'>{subtitle}</p>
    </section>
  )
}
