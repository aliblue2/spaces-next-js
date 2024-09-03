"use client";
import { useFormStatus } from "react-dom";
const AddSpaceBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={`${
        pending ? "bg-gray-300 text-gray-700" : "bg-primaryColor hover:bg-accentColor"
      } w-full font-medium text-white p-2 my-3 rounded-xl`}
    >
      {pending ? "در حال ثبت اسپیس" : "ثبت اسپیس"}
    </button>
  );
};

export default AddSpaceBtn;
