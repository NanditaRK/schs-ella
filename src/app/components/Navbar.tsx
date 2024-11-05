'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import caret from '../../../public/caret-down.png';
import logo from '../../../public/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  
  return (
    <nav className='relative'>
      <ul className='flex justify-between p-4 border-b-4 border-b-main bg-white'>
        {/* Original Logo - Hidden when menu is open */}
        <Link href='/'>
          <div className={`${isOpen ? 'hidden' : 'block'}`}>
            <Image src={logo} width={100} height={100} alt='SCHS LPC Logo' />
          </div>
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className='md:hidden flex items-center'>
          <button onClick={toggleMenu} className='text-xl focus:outline-none'>
            &#9776;
          </button>
        </div>

        {/* Menu Links */}
        <div className={`flex-col md:flex-row md:flex w-full md:w-1/2 items-center text-lg justify-around absolute md:relative top-16 md:top-0 left-0 bg-white md:bg-transparent z-50 transition-transform md:transform-none ${isOpen ? 'flex' : 'hidden'}`}>
          {/* Logo inside the mobile menu */}
          <div className='block md:hidden p-4'>
            <Link href='/'>
              <Image src={logo} width={80} height={80} alt='SCHS LPC Logo' />
            </Link>
          </div>

         

          <div className='dropdown dropdown-hover p-4 md:p-0'>
            <div tabIndex={0} role="button" className='flex text-bold items-center'>
              About <Image className='w-4 h-4 m-1' src={caret} width={1} height={1} alt='A dropdown menu for presentations.'/>
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-main text-white text-base rounded-box z-[1] w-52 p-2 shadow">
              <Link href='/about#whoweare'><li className='m-0 p-4 hover:bg-slate-400 rounded-box'>Who We Are</li></Link>
              <Link href='/about#benefits'><li className='m-0 p-4 hover:bg-slate-400 rounded-box'>Benefits</li></Link>
              <Link href='/about#staff'><li className='m-0 p-4 hover:bg-slate-400 rounded-box'>Staff</li></Link>
              <Link href='/testimonials'><li className='m-0 p-4 hover:bg-slate-400 rounded-box'>Latino Parent Coalition</li></Link>
            </ul>
          </div>

          <div className='dropdown dropdown-hover p-4 md:p-0'>
            <div tabIndex={0} role="button" className='flex text-bold items-center'>
              Presentations <Image className='w-4 h-4 m-1' src={caret} width={1} height={1} alt='A dropdown menu for presentations.'/>
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-main text-white text-base rounded-box z-[1] w-52 p-2 shadow">
              <Link href='/fall'><li className='m-0 p-4 hover:bg-slate-400 rounded-box'>Fall</li></Link>
              <Link href='/spring'><li className='m-0 p-4 hover:bg-slate-400 rounded-box'>Spring</li></Link>
            </ul>
          </div>

          <div className='dropdown dropdown-hover p-4 md:p-0'>
            <div tabIndex={0} role="button" className='flex text-bold items-center'>
              Resources <Image className='w-4 h-4 m-1' src={caret} width={1} height={1} alt='A dropdown menu for presentations.'/>
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-main text-white text-base rounded-box z-[1] w-52 p-2 shadow">
              <Link href='/academic'><li className='m-0 p-4 hover:bg-slate-400 rounded-box '>Academic</li></Link>
              <Link href='/community'><li className='m-0 p-4 hover:bg-slate-400 rounded-box'>Community</li></Link>
              <Link href='/socialemotional'><li className='m-0 p-4 hover:bg-slate-400 rounded-box'>Social/Emotional</li></Link>
            </ul>
          </div>

          <div className='dropdown dropdown-hover p-4 md:p-0'>
            <div tabIndex={0} role="button" className='flex text-bold items-center'>
              Events <Image className='w-4 h-4 m-1' src={caret} width={1} height={1} alt='A dropdown menu for events.'/>
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-main text-white text-base rounded-box z-[1] w-52 p-2 shadow">
              <Link href='/diadelosmuertos'><li className='m-0 p-4 hover:bg-slate-400 rounded-box'>Día De Los Muertos</li></Link>
            </ul>
          </div>
          
        </div>
        <div className="my-auto mx-2" id="google_translate_element"></div>
      </ul>
      
    </nav>
  );
};

export default Navbar;

