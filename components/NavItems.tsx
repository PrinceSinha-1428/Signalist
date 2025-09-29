"use client";

import { navItems } from '@/lib/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems: React.FC = () => {

  const pathName: string = usePathname()

  const isActive = (path: string): boolean => {
    if(path === '/') return pathName === '/';
    return pathName.startsWith(path)
  };

  return (
    <ul className='flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium'>
      {navItems.map((item) => (
        <li key={item.href}>
          <Link  href={item.href} className={`hover:text-yellow-500 transition-colors ${ isActive(item.href) ? "text-gray-100" : ""} `}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default NavItems
