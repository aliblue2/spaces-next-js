import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbCodePlus, TbHomeFilled, TbSpace, TbSpaces } from "react-icons/tb";
const MainNav = () => {
  const pathName = usePathname();
  return (
    <ul className="flex items-center justify-start gap-3 flex-col md:flex-row">
      <motion.li className="relative p-2">
        <Link
          href={"/"}
          className={`${
            pathName === "/" && "text-primaryColor font-medium"
          } flex items-center justify-start text-sm gap-1`}
        >
          <TbHomeFilled size={20} />
          خانه
        </Link>
        {pathName === "/" && (
          <motion.span
            layoutId="active"
            className="absolute top-0 left-0 w-full h-full rounded-xl bg-primaryColor bg-opacity-20 border-b-2 border-primaryColor"
          />
        )}
      </motion.li>
      <motion.li className="relative p-2">
        <Link
          href={"/spaces"}
          className={`${
            pathName === "/spaces" && "text-primaryColor font-medium"
          } flex items-center justify-start text-sm gap-1`}
        >
          <TbSpaces size={20} />
          اسپیس ها
        </Link>
        {pathName === "/spaces" && (
          <motion.span
            layoutId="active"
            className="absolute top-0 left-0 w-full h-full rounded-xl bg-primaryColor bg-opacity-20 border-b-2 border-primaryColor"
          />
        )}
      </motion.li>
      <motion.li className="relative p-2">
        <Link
          href={"/spaces/add"}
          className={`${
            pathName === "/spaces/add" && "text-primaryColor font-medium"
          } flex items-center justify-start text-sm gap-1`}
        >
          <TbCodePlus size={20} />
          اضافه کردن اسپیس
        </Link>
        {pathName === "/spaces/add" && (
          <motion.span
            layoutId="active"
            className="absolute top-0 left-0 w-full h-full rounded-xl bg-primaryColor bg-opacity-20 border-b-2 border-primaryColor"
          />
        )}
      </motion.li>
    </ul>
  );
};

export default MainNav;
