import React from "react";
import Draggable from "react-draggable";
import styles from "./ReactDraggable.module.css";

const ReactDraggable = () => {
  const eventLogger = (e, data) => {
    console.log("Event: ", e);
    console.log("Data: ", data);
  };

  return (
    <div style={{ display: "flex" }}>
      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={eventLogger}
        onDrag={eventLogger}
        onStop={eventLogger}
      >
        <div className={styles.draggable}>
          <div className="handle">Drag from here</div>
          <div>This readme is really dragging on...</div>
        </div>
      </Draggable>

      <Draggable
        axis="x"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={eventLogger}
        onDrag={eventLogger}
        onStop={eventLogger}
      >
        <div className={styles.draggable}>
          <div className="handle">Drag from here</div>
          <div>This readme is really dragging on...</div>
        </div>
      </Draggable>
    </div>
  );
};

export default ReactDraggable;

// class ReactDraggable extends React.Component {
//   render() {
//     return (
//       <>
//         <Draggable
//           axis="x"
//           handle=".handle"
//           defaultPosition={{ x: 0, y: 0 }}
//           position={null}
//           grid={[25, 25]}
//           scale={1}
//           onStart={this.handleStart}
//           onDrag={this.handleDrag}
//           onStop={this.handleStop}
//         >
//           <div>
//             <div className="handle">Drag from here</div>
//             <div>This readme is really dragging on...</div>
//           </div>
//         </Draggable>

//         <Draggable
//           axis="y"
//           handle=".handle"
//           defaultPosition={{ x: 0, y: 0 }}
//           position={null}
//           grid={[25, 25]}
//           scale={1}
//           onStart={this.handleStart}
//           onDrag={this.handleDrag}
//           onStop={this.handleStop}
//         >
//           <div>
//             <div className="handle">Drag from here</div>
//             <div>This readme is really dragging on...</div>
//           </div>
//         </Draggable>
//       </>
//     );
//   }
// }

// export default ReactDraggable;
