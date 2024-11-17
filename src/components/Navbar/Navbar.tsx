import React, { useState } from 'react';
import './NavbarStyle.css'

function Navbar({ compDarkMode=true}) {
  return (
    <>
    <header className='w-svw h-fit fixed z-[1000] left-0 top-[85%] flex items-center justify-center bg-transparent '>
        <div 
            id="navbar-header" 
            className={`${compDarkMode ? 'bg-primary-light bg-opacity-15' :'bg-primary-darker'}   w-fit min-h-[56px] h-fit flex items-center  gap-5 backdrop-blur-lg rounded-xl px-[20px] py-[10px]`}

        >
           
            <nav id="navbar-nav" className='w-fit h-fit font-montserrat'>
            <ul 
                id="navbar-links" 
                className={`${compDarkMode ? 'text-dark-mode-theme-content':'text-white-mode-theme-content'} text-[14px] flex items-center gap-[25px] text-secondary-dark`}
            >
                <li id="nav-about" className='cursor-pointer'> 
                <a href='#' >About me</a>
                </li>
                <li id="nav-projects" className='cursor-pointer'>
                <a href="#">Projects</a>
                </li>
                <li id="nav-resume" className='cursor-pointer'>
                <a href="#">Resume</a>
                </li>
                <li id="nav-contact" className='cursor-pointer'>
                <a href="#">Contact</a>
                </li>
            </ul>
            </nav>
           
        </div>
    </header>
   
    </>
  );
}
 
export default Navbar;
