"use client";

import Image from "next/image";
import spaceImg from "@/assets/space.png";
import AddSpaceBtn from "@/components/sapces/AddSpaceBtn";
import { addSapce } from "@/lib/actions";
import { useFormState } from "react-dom";
const AddSpacePage = () => {
  const [state, action] = useFormState(addSapce, {
    message: null,
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <Image src={spaceImg} alt="spaceImage" />
      <>
        <form
          action={action}
          className="flex w-full flex-col items-start justify-start gap-3 text-sm font-medium"
        >
          <label htmlFor="title">نام اسپیس : </label>
          <input
            required
            type="text"
            name="title"
            id="title"
            className="w-full mb-1 p-2 rounded-xl border border-primaryColor outline-none shadow-md"
            placeholder="مثال : باغ بهشت تهران
"
          />
          <label htmlFor="description">توضیحات اسپیس : </label>
          <textarea
            rows={3}
            name="description"
            id="description"
            className="w-full mb-1 p-2 rounded-xl border border-primaryColor outline-none shadow-md"
            placeholder="مثال : باغ بهشت، یک فضای کار در بین درخت های باغ لارک در مح...
"
          />
          <label htmlFor="location">آدرس اسپیس : </label>
          <input
            required
            type="text"
            name="location"
            id="location"
            className="w-full mb-1 p-2 rounded-xl border border-primaryColor outline-none shadow-md"
            placeholder="مثال :  تهران، بزرگراه ارتش شرق به غرب،
"
          />
          <label htmlFor="tags">امکانات اسپیس : </label>
          <input
            required
            type="text"
            name="tags"
            id="tags"
            className="w-full mb-1 p-2 rounded-xl border border-primaryColor outline-none shadow-md"
            placeholder="مثال :اتاق جلسه، اتاق اختصاصی، صندلی اختصاصی، صندلی اشتراکی
"
          />
          <label htmlFor="image">لینک عکس اصلی اسپیس: </label>
          <input
            required
            type="text"
            name="image"
            id="image"
            className="w-full mb-1 p-2 rounded-xl border border-primaryColor outline-none shadow-md"
            placeholder="مثال :https://api.spaces.ir
"
          />
          <label htmlFor="gallery">لینک گالری عکس اسپیس : </label>
          <input
            required
            type="text"
            name="gallery"
            id="gallery"
            s
            className="w-full mb-1 p-2 rounded-xl border border-primaryColor outline-none shadow-md"
            placeholder="نکته هر لینک با کاما از دیگری جدا میشود.!"
          />

          <label htmlFor="price_per_day">قیمت ماهانه: </label>
          <input
            required
            type="text"
            name="price_per_day"
            id="price_per_day"
            s
            className="w-full mb-1 p-2 rounded-xl border border-primaryColor outline-none shadow-md"
            placeholder="مثل : ۱۳۰۰۰۰۰ هزار تومان"
          />
          <label htmlFor="price_per_mounth">قیمت ماهانه: </label>
          <input
            required
            type="text"
            name="price_per_mounth"
            id="price_per_mounth"
            s
            className="w-full mb-1 p-2 rounded-xl border border-primaryColor outline-none shadow-md"
            placeholder="مثل : ۱۳۰۰۰۰۰ هزار تومان"
          />
          <AddSpaceBtn />
          {state && state.message !== null && (
            <span className="text-red-500 font-medium text-lg">
              {state.message}
            </span>
          )}
        </form>
      </>
    </div>
  );
};

export default AddSpacePage;
