import React from 'react';
import { Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react';
import Image from 'next/image';
import { FiSmartphone } from 'react-icons/fi';


export default function Navbar() {
  return (
    <NextUINavbar className='bg-transparent z-20 relative py-10 px-10 justify-between items-center' shouldHideOnScroll>
      <NavbarBrand>
        <div className='relative w-40 h-10 cursor-pointer'>
        <Image 
          src="/dinu-logistics-logo.png"
          alt="Dinu Logistics logo"
          layout="fill"
          objectFit='contain'
          objectPosition='left-center'
        />
        </div>
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-9 text-white'>
        <NavbarItem>
          <Link 
          className='hover:ease-in-out transition p-3 rounded-lg hover:bg-gray-800'
          color='foreground' href='#'>
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link 
          className='hover:ease-in-out transition p-3 rounded-lg hover:bg-gray-800'
          href='#' aria-current="page">
            Safety
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link 
          className='hover:ease-in-out transition p-3 rounded-lg hover:bg-gray-800'
          color='foreground' href='#'>
            Contacts
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarItem className='list-none text-white'>
        <Button as={Link} href='#' className='flex items-center px-4 py-2.5 border border-white rounded-lg text-white hover:bg-gray-800 hover:border-gray-800 hover:ease-in transition duration-10 ease-out'>
          <FiSmartphone className='h-5 w-5 mr-2'/>
          800 800 9080
        </Button>
      </NavbarItem>
    </NextUINavbar>
  )
}
