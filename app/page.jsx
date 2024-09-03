import Hero from "@/components/Hero";
import GridSpaces from "@/components/sapces/GridSpaces";
import { getAllSpaces } from "@/lib/api_call";
import { Suspense } from "react";
import Loading from "./loading";
import LeaderImg from "@/assets/leader.png";
import Image from "next/image";
import PrimaryBtn from "@/components/common/PrimaryBtn";
import { TbReservedLine } from "react-icons/tb";
async function GridAllSpaces() {
  const spaces = await getAllSpaces();
  return <GridSpaces spaces={spaces} />;
}

export default async function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<Loading />}>
        <GridAllSpaces />
      </Suspense>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
        <Image src={LeaderImg} alt="leadership" />
        <div className="flex flex-col items-start justify-center gap-8">
          <h4 className="text-primaryColor text-3xl font-medium">
            با ابزارهای مدیریت قدیمی هنوز به نتیجه مطلــوب نرسیده‌اید؟
          </h4>
          <p>
            از ابزارهای مدیریت موجود استفاده ‌می‌کنید اما زمان زیادی صرف انجام
            کارها و پروژه‌ها می‌کنید و به موقع به سر رسید کارها نمی‌رسید؟ و یا
            ابزارهای قدیمی به حدی پیچیدگی دارند که شما و تیمتان را سردرگم
            می‌کند؟
          </p>
          <PrimaryBtn >
            <TbReservedLine size={24} />
            رزور اسپیس 
          </PrimaryBtn>
        </div>
      </div>
    </>
  );
}
