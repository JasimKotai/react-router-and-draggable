import ReactDnd from "./components/ReactDnd";
import ReactDraggable from "./components/ReactDraggable";

import { useState } from "react";
import HelloWorld from "../HelloWorld";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { DndContext, closestCenter } from "@dnd-kit/core";

const App = () => {
  const data = [
    {
      id: 2,
      category: "Popular videos",
      name: "Gauthier",
      time: "13:20",
    },
    {
      id: 1,
      category: "Short videos",
      name: "Samaria",
      time: "10:20",
    },
    {
      id: 3,
      category: "Videos",
      name: "Mellisa",
      time: "4:20",
    },
    {
      id: 5,
      category: "Created playlists",
      name: "Devon",
      time: "20:20",
    },
    {
      id: 4,
      category: "Single playlist: React JS mini proj",
      name: "Arabela",
      time: "14:20",
    },
  ];
  const [playlist, setPlaylist] = useState(data);

  const onDdragEnd = (e) => {
    const { active: draggedItem, over: targetItem } = e;
    // console.log(draggedItem, '-----', targetItem);
    setPlaylist(() => {
      const oldIndex = playlist.findIndex(
        (playlist) => playlist.id === draggedItem.id
      );

      const newIndex = playlist.findIndex(
        (playlist) => playlist.id === targetItem.id
      );

      return arrayMove(playlist, oldIndex, newIndex);
    });
  };
  return (
    <>
      <div
        style={{
          borderBottomWidth: 1,
          borderColor: "green",
          minHeight: 300,
        }}
      >
        <ReactDnd />
      </div>

      <div
        style={{
          borderBottomWidth: 1,
          borderColor: "blue",
          minHeight: 300,
        }}
      >
        <ReactDraggable />
      </div>

      {/* <div className="flex border-black border-2" draggable="true">
        <h1 className="text-center text-2xl text-red-800 mb-5 mr-10 ml-10">
          App
        </h1>
        <h1 className="text-center text-2xl text-red-800 mt-">App</h1>
      </div> */}

      <DndContext onDragEnd={onDdragEnd} collisionDetection={closestCenter}>
        <SortableContext
          strategy={verticalListSortingStrategy}
          items={playlist}
        >
          {playlist.map((playlist) => (
            <HelloWorld playlist={playlist} key={playlist.id}>
              {" "}
            </HelloWorld>
          ))}
        </SortableContext>
      </DndContext>
    </>
  );
};

export default App;
