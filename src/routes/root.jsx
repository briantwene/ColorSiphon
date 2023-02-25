import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

function root() {
  return (
    <div className="mx-auto flex flex-col h-full">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default root;
