import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableItem = (props) => {
  // console.log(props.id);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      style={style}
      className="Temp"
    >
      <div
        style={{
          padding: 10,
          borderWidth: 1,
          borderColor: "#ccc",
          marginTop: 10,
          width: "80%",
          backgroundColor: '#f2f2f2',
          borderRadius: "5px",
        }}
      >
        {props.id}
      </div>
    </div>
  );
};

export default SortableItem;
