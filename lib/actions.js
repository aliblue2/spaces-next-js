"use server";

import { revalidatePath } from "next/cache";
import { saveSpace } from "./api_call";
import { redirect } from "next/navigation";

const validateInpt = (text) => {
  if (text.trim() === "" || !text) {
    return false;
  }
  return true;
};

export const addSapce = async (prevData, formData) => {
  const space = {
    title: formData.get("title"),
    description: formData.get("description"),
    location: formData.get("location"),
    tags: formData.get("tags"),
    image: formData.get("image"),
    gallery: formData.get("gallery"),
    price_per_day: formData.get("price_per_day"),
    price_per_mounth: formData.get("price_per_mounth"),
  };
  if (
    !space.title ||
    !validateInpt(space.title) ||
    !space.description ||
    !validateInpt(space.description) ||
    !space.image ||
    !validateInpt(space.image) ||
    !space.gallery ||
    !validateInpt(space.gallery) ||
    !space.location ||
    !validateInpt(space.location) ||
    !space.tags ||
    !validateInpt(space.tags) ||
    !space.price_per_day ||
    space.price_per_day === 0 ||
    !space.price_per_mounth ||
    space.price_per_mounth === 0
  ) {
    return {
      message: "توجه کنید که همه اینپوت ها مقادیر صحیح اختصاص داده اید.!",
    };
  } else {
    await saveSpace(space);
    revalidatePath("/spaces");
    redirect("/spaces");
  }
};
