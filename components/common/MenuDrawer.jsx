import { motion } from "framer-motion";

import MainNav from "./MainNav";
import PrimaryBtn from "./PrimaryBtn";
import { TbSpaces, TbUser } from "react-icons/tb";

const MenuDrawer = ({ toggle }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full z-10 bg-primaryColor bg-opacity-45"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "tween",
        ease: "easeInOut",
        duration: 0.3,
      }}
      onClick={toggle}
    >
      <motion.div
        className="w-[70%] fixed top-0 right-0 bg-white h-full shadow-xl rounded-l-3xl p-5 flex flex-col items-center justify-around"
        initial={{ right: -200 }}
        animate={{ right: 0 }}
        exit={{ right: -200 }}
        transition={{
          type: "spring",
          bounce: 0.5,
          duration: 0.5,
        }}
      >
        <div className="flex items-center justify-start gap-2">
          <TbSpaces size={40} className="text-primaryColor" />
          <h4 className="text-2xl font-medium text-primaryColor">اسپیس </h4>
        </div>
        <MainNav />
        <PrimaryBtn>
          <TbUser size={20} />
          ورود/ثبت نام
        </PrimaryBtn>
      </motion.div>
    </motion.div>
  );
};

export default MenuDrawer;
