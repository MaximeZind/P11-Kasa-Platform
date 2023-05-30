import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

function BaseLayout({ children }) {
    return (
      <React.Fragment>
        <Nav />
        {children}
        <Footer />
      </React.Fragment>
    );
  }
  export default BaseLayout;