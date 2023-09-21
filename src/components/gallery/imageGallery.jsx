import React from "react";
import { useDrop } from "react-dnd";
import DraggableImage from "./draggableImage";
import { DndProvider } from "react-dnd";

import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";
import image5 from "../../assets/images/image5.jpg";
import image6 from "../../assets/images/image6.jpg";
import image7 from "../../assets/images/image7.jpg";
import image8 from "../../assets/images/image8.jpg";
import image9 from "../../assets/images/image9.jpg";
import image10 from "../../assets/images/image10.jpg";
import image11 from "../../assets/images/image11.jpg";
import image12 from "../../assets/images/image12.jpg";
import image13 from "../../assets/images/image13.jpg";
import image14 from "../../assets/images/image14.jpg";
import image15 from "../../assets/images/image15.jpg";
import image16 from "../../assets/images/image16.jpg";
import image17 from "../../assets/images/image17.jpg";
import image18 from "../../assets/images/image18.jpg";
import image19 from "../../assets/images/image19.png";
import image20 from "../../assets/images/image20.jpg";

const ImageGallery = () => {
  const [images, setImages] = React.useState([
    { id: 1, src: image1, alt: "Image 1" },
    { id: 2, src: image2, alt: "Image 2" },
    { id: 3, src: image3, alt: "Image 3" },
    { id: 4, src: image4, alt: "Image 4" },
    { id: 5, src: image5, alt: "Image 5" },
    { id: 6, src: image6, alt: "Image 6" },
    { id: 7, src: image7, alt: "Image 7" },
    { id: 8, src: image8, alt: "Image 8" },
    { id: 9, src: image9, alt: "Image 9" },
    { id: 10, src: image10, alt: "Image 10" },
    { id: 11, src: image11, alt: "Image 11" },
    { id: 12, src: image12, alt: "Image 12" },
    { id: 13, src: image13, alt: "Image 13" },
    { id: 14, src: image14, alt: "Image 14" },
    { id: 15, src: image15, alt: "Image 15" },
    { id: 16, src: image16, alt: "Image 16" },
    { id: 17, src: image17, alt: "Image 17" },
    { id: 18, src: image18, alt: "Image 18" },
    { id: 19, src: image19, alt: "Image 19" },
    { id: 20, src: image20, alt: "Image 20" },
  ]);

  const handleDrop = (draggedImageId, targetImageId) => {
    const updatedImages = [...images];

    const draggedImageIndex = updatedImages.findIndex(
      (image) => image.id === draggedImageId
    );
    const targetImageIndex = updatedImages.findIndex(
      (image) => image.id === targetImageId
    );

    [updatedImages[draggedImageIndex], updatedImages[targetImageIndex]] = [
      updatedImages[targetImageIndex],
      updatedImages[draggedImageIndex],
    ];

    setImages(updatedImages);
  };

  const [, drop] = useDrop({
    accept: "IMAGE",
    drop: (draggedImage) => {
      const draggedImageId = draggedImage.id;

      const targetImage = images.find((image) => image.id === draggedImageId);
      const targetImageId = targetImage.id;

      handleDrop(draggedImageId, targetImageId);
    },
  });
  return (
    <DndProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">
          Image Gallery Wallpapers
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="rounded-lg overflow-hidden shadow-md"
            >
              <DraggableImage
                id={image.id}
                src={image.src}
                alt={image.alt}
                isDropped={false}
              />
            </div>
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default ImageGallery;
