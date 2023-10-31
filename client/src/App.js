// React router dom
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import { useContext } from "react";

// Import pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Ressources from "./pages/Ressources";
import Projects from "./pages/Projects";
import Inventory from "./pages/Inventory"
import Reservation from "./pages/Reservation";

// Single page
import Employee from "./pages/Employee"
import Laboratory from "./pages/Laboratory"
import Project from "./pages/Project"

// Import components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Import Context
import { AuthContext } from "./context/authContext";

const Layout = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
};

const App = () => {
  const { currentUser } = useContext(AuthContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/about", element: <About /> },
        { path: "/inventory", element: <Inventory /> },
        { path: "/reservation", element: <Reservation /> },
        { path: "/contact", element: <Contact /> },
        { path: "/employee/:id", element: <Employee /> },
        { path: "/laboratory/:id", element: <Laboratory /> },
        { path: "/project/:id", element: <Project /> },

        {
          path: "/ressources",
          element: currentUser ? <Ressources /> : <Login/>,
        },
        {
          path: "/projects",
          element: currentUser ? <Projects /> : <Login/>,
        },
      ],
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
