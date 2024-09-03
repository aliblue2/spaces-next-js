import error404Img from "@/assets/error404.png";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 w-full max-w-[600px] mx-auto p-5 ">
      <Image src={error404Img} alt="404 not found" className="w-full max-h-96 object-contain" />
      <h3 className="text-2xl font-medium text-primaryColor">بنظر میاد گمشدی!</h3>
      <Link href={"/"} className="w-fit p-2 rounded-xl bg-primaryColor text-white hover:bg-accentColor font-medium">
      برگشت به خانه
      </Link>
    </div>
  );
};

export default NotFound;
