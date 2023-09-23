import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Experience from "../pages/Eperience";
import Projects from "../pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RootLayout>
        <Home />
      </RootLayout>
    ),
  },
  {
    path: "/blog",
    element: (
      <RootLayout>
        <Blog />
      </RootLayout>
    ),
  },
  {
    path: "/work",
    element: (
      <RootLayout>
        <Projects />
      </RootLayout>
    ),
  },
  {
    path: "/experience",
    element: (
      <RootLayout>
        <Experience />
      </RootLayout>
    ),
  },
]);

export default router;
