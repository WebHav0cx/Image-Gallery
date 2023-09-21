import React from "react";
import { useDrag } from "react-dnd";

const DraggableImage = ({ id, src, alt, isDropped }) => {
  const [, ref] = useDrag({
    type: "IMAGE",
    item: { id },
  });

  return (
    <div
      ref={ref}
      className={`rounded-lg overflow-hidden shadow-md ${
        isDropped ? "bg-gray-300" : ""
      }`}
    >
      <img src={src} alt={alt} className="w-full h-[343px] object-cover" />
      <div className="p-2 bg-gray-100">
        <p className="text-sm text-gray-700">{alt}</p>
      </div>
    </div>
  );
};

export default DraggableImage;
