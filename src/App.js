import "./App.css";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom" ;
import Navbar from "./Navbar"
import HeroSection from "./HeroSection";

function App() {
  return(
    <>
    <Router>
      <Navbar/>
      <HeroSection/>
    </Router>
    </>
  );
}

export default App;
