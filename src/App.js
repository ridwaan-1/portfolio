import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import './App.css';
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Hero /> 
      <Projects />
      <Footer />
    </React.Fragment>
  );
}
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/ridwaan-1/Portfolio.git
// git push -u origin main
export default App;
