"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const CardSpace = ({ space }) => {
  return (
    <motion.div
      whileHover={{ top: -15 }}
      transition={{
        type: "spring",
        bounce: 0.5,
        duration: 0.5,
      }}
      className="bg-white relative h-96 group rounded-xl overflow-hidden shadow-md"
    >
      <img
        src={space.image}
        alt={space.title}
        className="w-full h-40 object-cover"
      />
      <Link
        href={`/spaces/${space.slug}`}
        className="flex flex-col items-start justify-around h-56 p-2 gap-1"
      >
        <h4 className="line-clamp-1 font-medium">
          {space.title}
        </h4>
        <p className="line-clamp-3 leading-relaxed">
        {space.tags.map((tag, i) => {
          return (
            <span key={i} className="inline-flex text-[10px] bg-primaryColor bg-opacity-15 px-1 text-accentColor rounded-md me-2">
              {tag}
            </span>
          );
        })}
        </p>
        <p className="text-xs line-clamp-3">
          {space.description}
        </p>
        <button className="bg-primaryColor w-full hover:bg-accentColor text-white transition-colors duration-300 text-sm hidden group-hover:block p-1 rounded-lg" >
          مشاهده بیشتر ..
        </button>
      </Link>
    </motion.div>
  );
};

export default CardSpace;
