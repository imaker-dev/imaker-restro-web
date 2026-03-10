import React from "react";
import Navbar from "../views/layouts/navbar";
import Footer from "../views/layouts/footer";

const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
