import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Header from "../pages/shared/Header/Header";

const Main = () => {

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default Main;
