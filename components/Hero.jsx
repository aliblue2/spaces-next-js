import heroImage from "@/assets/broklyn.png";
import Image from "next/image";
import PrimaryBtn from "./common/PrimaryBtn";
import { TbMoneybag } from "react-icons/tb";
const Hero = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
        <div className="flex col-span-1  flex-col items-start justify-center gap-10">
          <h3 className="text-primaryColor font-medium md:text-4xl text-3xl md:leading-normal max-w-[600px]">
            همکاری تیمی بهتر، انجام کار بیشتر، همه در یک بستر
          </h3>
          <p className="font-medium text-lg">
            اسپیس بستر آنلاین مدیریت امن و آسان کارها و پروژه‌ها برای
            تیم‌های‌بزرگ و کوچک در صنایع مختلف
          </p>
          <PrimaryBtn>
            رایگان شروع کنید!
            <TbMoneybag size={20} />
          </PrimaryBtn>
        </div>
        <div className="flex items-centere justify-center col-span-1">
          <Image src={heroImage}  alt="space hero image" />
        </div>
      </div>
      <h5 className="text-primaryColor text-center font-medium text-3xl">
        یک مـیز کار کامل در اختیـار شـماست !!!
      </h5>
      <p className="text-lg text-center my-3">
        بر روی اهداف، پروژه‌ها و کارهای روزمره خود متمرکز شوید.
      </p>
    </>
  );
};

export default Hero;
