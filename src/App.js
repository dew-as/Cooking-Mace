import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import Offers from "./components/Offers";
import Cart from "./components/Cart";
import Search from "./components/Search";
import Footer from "./components/Footer";
import RestaurantMenu from "./components/RestaurantMenu";
import { UserContext } from "./utils/globalContext";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    // this will make an api call and check the user is auth or not
    const data = {
      name: "Aswindev",
    };
    setUserName(data.name);
  }, []);

  return (
    <div className="app">
      <UserContext.Provider value={{ loggedUser: userName }}>
        <Header />
      </UserContext.Provider>
      <Outlet />
      <Footer />
    </div>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading Grocery...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute} />);
