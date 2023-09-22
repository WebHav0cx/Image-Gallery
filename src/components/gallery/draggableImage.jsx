import React from "react";

export function DraggableImage({ item }) {
  // Destructure the properties directly from the 'item' prop
  const { url, tag } = item;

  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <img src={url} alt={tag} className="w-full h-[343px] object-cover" />
      <div className="p-2 bg-gray-100">
        <p className="text-sm text-gray-700">{tag}</p>
      </div>
    </div>
  );
}

// export default DraggableImage;
