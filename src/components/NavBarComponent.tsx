import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Avatar,
} from '@nextui-org/react';
import { ThemeSwitcher } from './ThemeSwitcher';
import Image from 'next/image';

const NavBarComponent: React.FC = () => {
  return (
    <Navbar
      maxWidth="full"
      position="sticky"
      className="bg-white dark:bg-[#18181B] shadow-sm w-screen"
    >
      <NavbarBrand>
        <Image
          src="/assets/logo.webp"
          alt="logo"
          width={100}
          height={100}
          className='w-[100px] h-auto'
          priority
        />
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <div className="flex gap-2">
            <ThemeSwitcher />
            <Avatar showFallback src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          </div>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBarComponent;
