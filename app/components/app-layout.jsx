import React from "react";
import Navbar from "../views/layouts/navbar";
import Footer from "../views/layouts/footer";

const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default AppLayout;
