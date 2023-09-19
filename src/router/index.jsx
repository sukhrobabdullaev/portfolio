import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
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
    path: "/contact",
    element: (
      <RootLayout>
        <Contact />
      </RootLayout>
    ),
  },
  {
    path: "/projects",
    element: (
      <RootLayout>
        <Projects />
      </RootLayout>
    ),
  },
]);

export default router;
