import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import Testimonals from "./components/Testimonals";
import Ending from "./components/Ending";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);



  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      <Testimonals />
      <Ending />
      <Footer />
    </>
  );
}

export default App;
