import React from "react";
import CardSpace from "./CardSpace";

const GridSpaces = ({ spaces }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 my-5">
      {spaces.map((space) => {
        space.tags = JSON.parse(space.tags);
        return <CardSpace key={space.id} space={space} />;
      })}
    </div>
  );
};

export default GridSpaces;
