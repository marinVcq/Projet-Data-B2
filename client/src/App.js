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
        { path: "/contact", element: <Contact /> },
        {
          path: "/ressources",
          element: currentUser ? <Ressources /> : <Login/>,
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
