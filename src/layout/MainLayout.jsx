import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-grow pt-12">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
