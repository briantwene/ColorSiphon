import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

function root() {
  return (
    <div className="container mx-auto h-full">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default root;
