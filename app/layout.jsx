import React from "react";
import "../styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="flex flex-col flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
