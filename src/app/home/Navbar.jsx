"use client"
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='bg-blue-950 text-white  md:h-[100px] h-screen md:w-[100%] w-[50%] capitalize font-bold '>
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}  onClick={toggleMenu}>
        <GiHamburgerMenu size={30} className='md:hidden'/>
      </div>

      <div className={`md:hidden ${isMenuOpen ? 'hidden' : 'block'}`} onClick={toggleMenu}>
        <AiOutlineClose size={30} />
      </div>

      {!isMenuOpen && (
        <header className={`md:flex ${isMenuOpen ?  'hidden':'flex md:flex-row flex-col' } md:justify-around justify-evenly md:items-center items-end md:h-[100px] h-screen md:w-[100%] w-[90%] capitalize font-bold `}>
          <ul className="flex space-x-2">
            <li>logo</li>
          </ul>

          <ul className="flex md:space-x-2  md:space-y-0 space-y-4 flex-col md:flex-row md:items-center items-end">
            <li>single bet</li>
            <li>group bet</li>
            <li>hot bet</li>
          </ul>

          <ul className="flex md:space-x-2 md:space-y-0 space-y-4 flex-col md:flex-row md:items-center items-end">
            <li>log in</li>
            <li>sign up</li>
          </ul>
        </header>
      )}
    </nav>
  );
}
