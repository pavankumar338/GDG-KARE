import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Home";
import Events1 from "../components/Events1";
import Team1 from "../components/Team1";
import Contact from "../components/Contact";
import NotFound from "../components/NotFound";
import JoinUs from "../components/JoinUs";
import About from "../components/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "events",
        element: <Events1 />,
      },
      {
        path: "team",
        element: <Team1 />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "join",
        element: <JoinUs />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
