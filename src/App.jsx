// import ReactDnd from "./components/ReactDnd";
// import ReactDraggable from "./components/ReactDraggable";

// import { CustomDraggable } from "./CustomDraggable";
// import DndKit from "./components/DndKit";
// import DndKit2 from "./dndkit/DndKit2";

// const App = () => {

//   return (
//     <>
//       <div
//         style={{
//           borderBottomWidth: 1,
//           borderColor: "green",
//           minHeight: 300,
//         }}
//       >
//         <ReactDnd />
//       </div>

//       <div
//         style={{
//           borderBottomWidth: 1,
//           borderColor: "blue",
//           minHeight: 300,
//         }}
//       >
//         <ReactDraggable />
//       </div>

//       <div
//         style={{
//           borderBottomWidth: 1,
//           borderColor: "blue",
//           minHeight: 300,
//           padding: 20,
//           paddingBottom: 40,
//         }}
//       >
//         <DndKit />
//       </div>

//       <div
//         style={{
//           borderBottomWidth: 1,
//           borderColor: "blue",
//           minHeight: 300,
//           padding: 20,
//           paddingBottom: 40,
//         }}
//       >
//         <DndKit2 />
//       </div>


//       <div style={{ height: 1, backgroundColor: "red", margin: 40 }} />

//       <CustomDraggable />
//     </>
//   );
// };

// export default App;

import React from 'react'
import Router from './router/Router'
import DndKit2 from './dndkit/DndKit2'
import HomeScreen from './pages/HomeScreen'

function App() {
  return (
    <>
    <Router />
    {/* <DndKit2 /> */}
    {/* <HomeScreen /> */}
    </>
  )
}

export default App