import React from "react";
import { RouterProvider } from "react-router-dom";

import CourseCatalog from "./components/CourseCatalog";
import Header from "./components/Header";
import Hero from "./components/Hero";
import router from "./components/router";

const App: React.FC = () => {
  return (
    <>
      <Hero />
    </>
  );
};

export default App;
