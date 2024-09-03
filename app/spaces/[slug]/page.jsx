import ImageSlider from "@/components/sapces/ImageSlider";
import { getSpceBySlug } from "@/lib/api_call";
import tomanIc from "@/assets/toman.webp";

import Image from "next/image";
import NotFound from "@/app/not-found";

const DeatilSpacePage = async ({ params }) => {
  const slug = params.slug;
  const space = await getSpceBySlug(slug);
  if (!space || space === undefined) {
    return <NotFound />;
  }

  space.gallery.push(space.image);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="col-span-1">
          <ImageSlider images={space.gallery} />
        </div>
        <div className="flex flex-col items-start justify-between gap-5 col-span-1">
          <h4 className="text-primaryColor font-bold text-2xl">
            {space.title}
          </h4>
          <p className="mt-8 leading-9 font-medium">
            امکانات :
            {space.tags.map((tag) => {
              return (
                <span
                  className="inline-flex px-4 py-1 rounded-md bg-primaryColor text-primaryColor bg-opacity-15 border border-dashed text-xs  border-primaryColor ms-2"
                  key={tag}
                >
                  {tag}
                </span>
              );
            })}
          </p>
          <p className="font-medium leading-loose text-sm">
            {space.description}
          </p>
          <p className="font-medium leading-loose">آدرس : {space.location}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
        <div className="flex items-center justify-center gap-5 bg-primaryColor bg-opacity-15 p-3 rounded-xl text-primaryColor">
          <h6 className="font-medium">صندلی اشتراکی روزانه</h6>
          <h6 className="md:text-lg font-medium flex items-center justify-center gap-1">
            {space.price_per_day.toLocaleString("fa-IR")}

            <Image
              src={tomanIc}
              alt="toman"
              className="max-w-4 mix-blend-multiply"
            />
          </h6>
        </div>
        <div className="flex items-center justify-center gap-5 bg-primaryColor bg-opacity-15 p-3 rounded-xl text-primaryColor">
          <h6 className="font-medium">صندلی اشتراکی ماهانه</h6>
          <h6 className="md:text-lg font-medium flex items-center justify-center gap-1">
            {space.price_per_mounth.toLocaleString("fa-IR")}

            <Image
              src={tomanIc}
              alt="toman"
              className="max-w-4 mix-blend-multiply"
            />
          </h6>
        </div>
      </div>
    </>
  );
};

export default DeatilSpacePage;
