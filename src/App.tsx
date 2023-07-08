import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Header />

      <div id="home">
        <Home />
      </div>

      <div id="projects">
        <Project />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
