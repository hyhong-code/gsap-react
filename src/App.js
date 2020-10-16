import React, { useEffect } from "react";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Cases from "./components/Cases";
import "./styles/App.scss";

function App() {
  useEffect(() => {
    // Get browser height instead of device height
    // Assign 1/100 browser height to be 1--vh
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <div className="App">
      <Header />
      <Banner />
      <Cases />
    </div>
  );
}

export default App;
