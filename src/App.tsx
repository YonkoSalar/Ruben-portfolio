import React, {useEffect} from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Timeline from "./pages/Timeline";
import ReactGA from "react-ga";



function App() {


  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize('G-E1B1ZK5K1H'); // Use your actual tracking ID here

    // Record a pageview for this page
    ReactGA.pageview(window.location.pathname + window.location.search);

  }, []); // The empty array means this useEffect will run once when the component mounts

  return (
    <div className="App">

      
      <Header />


      <div id="home">
        <Home />
      </div>

      <div id="projects">
        <Project />
      </div>

      <div id="timeline">
        <Timeline />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
