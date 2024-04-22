import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";
import ProfilesPage from "../pages/ProfilesPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProfilePage from "../pages/ProfilePage";
import NavbarPage from "../navbar/Navbar";
import DndKit2 from "../dndkit/DndKit2";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavbarPage />
          <HomeScreen />
        </>
      ),
      errorElement: <NotFoundPage />,
    },
    {
      path: "/profiles",
      element: (
        <>
          <NavbarPage />
          <ProfilesPage />
        </>
      ),
      children: [{ path: "/profiles/:profileId", element: <ProfilePage /> }],
    },
    // { path: "/profiles/:profileId", element: <ProfilePage /> },
    {
      path: "/dndkit2",
      element: (
        <>
          <NavbarPage />
          <DndKit2 />
        </>
      ),
      errorElement: <NotFoundPage />,
    },
  ]);
  return (
    <>
      {/* <Navbar /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default Router;
