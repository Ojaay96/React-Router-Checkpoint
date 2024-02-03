import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LegendDescription from "./Pages/LegendDescription";
import MerlinDescription from "./Pages/MerlinDescription";
import PrisonBreakDescription from "./Pages/PrisonBreakDescription";
import HomeScreen from "./Pages/HomeScreen";

const App = () => {
  // ROUTING
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: <HomeScreen />,
        },
        {
          path: "/legend-of-the-seeker",
          element: <LegendDescription />,
        },
        {
          path: "/merlin",
          element: <MerlinDescription />,
        },
        {
          path: "/prison-break",
          element: <PrisonBreakDescription />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />;
      {/* You can add a component or form for adding new movies */}
    </>
  );
};

export default App;
