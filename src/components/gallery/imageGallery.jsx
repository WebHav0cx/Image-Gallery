import React, { useState } from "react";
import { Images } from "../../images/images";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function ImageGallery() {
  const [image, setImage] = useState(Images);

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(image);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setImage(items);
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Image Gallery</h1>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="image-gallery">
          {(provided) => (
            <ul
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {image.map((image, index) => (
                <Draggable
                  key={image.id}
                  draggableId={image.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <li
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      className="rounded-lg overflow-hidden shadow-md"
                    >
                      <div>
                        <img
                          src={image.url}
                          alt={image.tag}
                          className="w-full h-[343px] object-cover"
                        />
                        <div className="p-2 bg-gray-100">
                          <p className="text-sm text-gray-700">{image.tag}</p>
                        </div>
                      </div>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default ImageGallery;
