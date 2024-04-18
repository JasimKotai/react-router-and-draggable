import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";

function HelloWorld({ playlist }) {
    console.log(playlist.name);
  const { transform, transition, setNodeRef, attributes, listeners } =
    useSortable({ id: playlist.id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  return (
    <div className="HelloWorld" style={style} {...attributes} {...listeners} ref={setNodeRef}>
      <div className="World">
        <h1>{playlist.name}</h1>
      </div>
    </div>
  );
}

export default HelloWorld;
