import { useState } from "react";

import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { DndContext, closestCenter } from "@dnd-kit/core";
import HelloWorld from "../../HelloWorld";

const DndKit = () => {
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
  // console.log('playlist =>', playlist);

  const onDdragEnd = (e) => {
    const { active: draggedItem, over: targetItem } = e;
    // console.log("draggedItem =>", draggedItem);
    // console.log("targetItem =>", targetItem);
    // console.log(e);
    setPlaylist(() => {
      const oldIndex = playlist.findIndex(
        (playlist) => playlist.id === draggedItem.id
      );

      const newIndex = playlist.findIndex(
        (playlist) => playlist.id === targetItem.id
      );
      const temp = arrayMove(playlist, oldIndex, newIndex);
      console.log("temp ==>", temp);
      return arrayMove(playlist, oldIndex, newIndex);
    });
  };

  return (
    <DndContext onDragEnd={onDdragEnd} collisionDetection={closestCenter}>
      <SortableContext strategy={verticalListSortingStrategy} items={playlist}>
        {playlist.map((playlist) => (
          <HelloWorld playlist={playlist} key={playlist.id}></HelloWorld>
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default DndKit;
