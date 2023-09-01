import { lazy } from "react";
import Posts from "../components/Posts";
// import About from "../components/About";
// import Contact from "../components/Contact";
// import Home from "../components/Home";
// import LayoutOne from "../components/layout/LayoutOne";
// import LayoutTwo from "../components/layout/LayoutTwo";
const LayoutOne = lazy(() => import("../components/layout/LayoutOne"));
const LayoutTwo = lazy(() => import("../components/layout/LayoutTwo"));
const Home = lazy(() => import("../components/Home"));
const Contact = lazy(() => import("../components/Contact"));
const About = lazy(() => import("../components/About"));
const SinglePage = lazy(() => import("../components/SinglePage"));
export const pages = [
  {
    element: LayoutOne,
    children: [
      {
        path: "/",
        element: Home,
      },
      {
        path: "/contact",
        element: Contact,
      },
    ],
  },
  {
    element: LayoutTwo,
    children: [
      {
        element: About,
        path: "/about",
      },
      {
        element: SinglePage,
        path: "/single/:id",
      },
      {
        element: Posts,
        path: "/posts",
      },
    ],
  },
];
