import React, { useState } from 'react'
import { CiMenuBurger } from 'react-icons/ci'
import { IoClose } from 'react-icons/io5'
import { SiWebpack } from 'react-icons/si'
import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  // State
  const location = useLocation()
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false)

  // Event handler for toggling burger menu
  const handleToggleBurgerMenu = () => {
    setBurgerMenuOpen(!isBurgerMenuOpen)
  }

  // Custom component for Hamburger navigation logo
  const NavLogo = () => {
    return !isBurgerMenuOpen ? (
      <CiMenuBurger
        onClick={handleToggleBurgerMenu}
        className='sm:hidden items-center absolute text-white text-4xl right-2 cursor-pointer'
      />
    ) : (
      <IoClose
        onClick={handleToggleBurgerMenu}
        className='sm:hidden items-center absolute text-white text-4xl right-2 cursor-pointer'
      />
    )
  }

  return (
    <header className='sticky top-0 z-10 shadow-md'>
      {/* Main Navigation */}
      <nav className='flex opacity-85 justify-between items-center bg-black text-2xl h-[100px] border-b border-gray-700'>
        {/* Logo */}
        <div className='text-white flex items-center ml-10 gap-5 text-4xl'>
          <h1 className='font-bold'>
            <Link to='/'>
              Beqa <span className='text-red-500'>D</span>.
            </Link>
          </h1>
          <Link to='/' className='hidden lg:inline-block'>
            <SiWebpack className='text-red-500' />
          </Link>
        </div>

        {/* Burger Menu Icon */}
        <NavLogo />

        {/* Navigation Links */}
        <ul
          className={`lg:flex md:flex ${
            isBurgerMenuOpen ? 'flex' : 'hidden'
          } flex-col sm:flex-row justify-between w-max gap-2 md:gap-10 mr-12 lg:gap-16 mt-32 z-10 bg-black md:mt-0 lg:mt-0 items-center text-white font-bold font-lato`}
        >
          {/* Navigation Items */}
          <li
            className={`p-3 rounded-md hover:text-gray-400 ${
              location.pathname === '/' ? 'text-red-700' : ''
            }`}
          >
            <Link to='/'>Home</Link>
          </li>
          <li
            className={`p-3 rounded-md hover:text-gray-400 ${
              location.pathname === '/projects' ? 'text-red-700' : ''
            }`}
          >
            <Link to='/projects'>Projects</Link>
          </li>
          <li
            className={`p-3 rounded-md hover:text-gray-400 ${
              location.pathname === '/about' ? 'text-red-700' : ''
            }`}
          >
            <Link to='/about'>About me</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
