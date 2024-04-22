import React, { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";

const DndKit2 = () => {
  const [languages, setLanguages] = useState([
    "Javascript",
    "Python",
    "Typescript",
    "Java",
    "C++",
    "C#",
  ]);
  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={languages} strategy={verticalListSortingStrategy}>
        {languages.map((language) => (
          <SortableItem key={language} id={language} />
        ))}
      </SortableContext>
    </DndContext>
  );
  function handleDragEnd(event) {
    console.log("drag end called");

    const { active, over } = event;
    console.log('active: ' + active.id);
    console.log('over: ' + over.id);

    if(active.id !== over.id) {
        setLanguages((items) => {
            const activeIndex = items.indexOf(active.id);
            const overIndex = items.indexOf(over.id);

            console.log(arrayMove(items, activeIndex, overIndex));
            return arrayMove(items, activeIndex, overIndex)
        })
    }
  }
};

export default DndKit2;
