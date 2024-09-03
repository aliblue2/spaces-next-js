import GridSpaces from "@/components/sapces/GridSpaces";
import { getAllSpaces } from "@/lib/api_call";
import React from "react";

const Spaces = async () => {
  const spaces = await getAllSpaces();
  return (
    <>
      <GridSpaces spaces={spaces} />
    </>
  );
};

export default Spaces;
