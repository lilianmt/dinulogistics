import React from 'react';
import { Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react';
import Image from 'next/image';
import { FiSmartphone } from 'react-icons/fi';
import { MotionDiv } from './motion';
import Logo from '../../public/dinu-logistics-logo.png'


export default function Navbar() {
  return (
    <NextUINavbar className='fixed bg-transparent z-10' shouldHideOnScroll isBlurred={false}>
      {/* Logo */}
      <NavbarBrand>
        <MotionDiv className=' relative w-40 h-10 cursor-pointer'>
        <Image 
          src={ Logo }
          alt="Dinu Logistics logo"
          layout="fill"
        />
        </MotionDiv>
      </NavbarBrand>

      {/* Links */}
      <NavbarContent className="text-white gap-10 hidden sm:flex" justify="end"> 
        <NavbarItem>
          <Link 
          className='hover:ease-in-out transition duration-10 rounded-lg hover:bg-gray-800'
          color='foreground' href='#'>
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link 
          className='hover:ease-in-out transition duration-10 rounded-lg hover:bg-gray-800'
          color='foreground' href='#'>
            Safety
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link 
          className='hover:ease-in-out transition duration-10 rounded-lg hover:bg-gray-800'
          color='foreground' href='#'>
            Contacts
          </Link>
        </NavbarItem>
        </NavbarContent>
        {/* Contact button */}
        <NavbarContent justify="end">
          <NavbarItem className='text-white'>
          <Button as={Link} href='#' className='flex items-center px-4 py-2.5 border border-white rounded-lg text-white hover:bg-gray-800 hover:border-gray-800 hover:ease-in-out transition duration-10'>
            <FiSmartphone className='h-5 w-5 mr-2'/>
            <span className='text-nowrap'>800 800 9080</span>
          </Button>
        </NavbarItem>
        </NavbarContent>
      </NextUINavbar>
  )
}
