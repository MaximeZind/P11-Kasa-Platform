import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

function BaseLayout({ children }) {
    return (
      <>
        <Nav />
        {children}
        <Footer />
      </>
    );
  }
  export default BaseLayout;