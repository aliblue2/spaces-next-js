"use client";
import { useState } from "react";

import MainNav from "./MainNav";
import PrimaryBtn from "./PrimaryBtn";
import { TbMenuDeep, TbSpaces, TbUser } from "react-icons/tb";
import { AnimatePresence } from "framer-motion";
import MenuDrawer from "./MenuDrawer";
const Header = () => {
  const [menuDrawer, setMenuDrawer] = useState(false);
  const menuDrawerToggler = () => {
    setMenuDrawer(!menuDrawer);
  };
  return (
    <>
      <header className="w-full h-16 bg-white shadow-md">
        <div className="flex px-5 items-center justify-between gap-5 h-full w-full max-w-[1100px] mx-auto">
          <div className="flex items-center justify-start gap-2">
            <TbMenuDeep
              onClick={menuDrawerToggler}
              size={24}
              className="md:hidden cursor-pointer"
            />

            <TbSpaces size={40} className="text-primaryColor" />
            <h4 className="text-2xl font-medium text-primaryColor">اسپیس </h4>
          </div>
          <div className="md:block hidden">
            <MainNav />
          </div>
          <PrimaryBtn>
            <TbUser size={20} />
            <span className="hidden md:block">ورود/ثبت نام</span>
          </PrimaryBtn>
        </div>
      </header>
      <AnimatePresence>
        {menuDrawer && <MenuDrawer toggle={menuDrawerToggler} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
