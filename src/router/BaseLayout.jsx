import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function BaseLayout() {
    return (
      <>
        <Nav />
        <Outlet />
        <Footer />
      </>
    );
  }
  export default BaseLayout;