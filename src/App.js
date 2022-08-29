import "./index.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cards from "./components/Table";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Video from "./components/Video";
import Description from "./components/Description";

function App() {
  return (
    <div style={{background:"#1f2937"}}>
      <Navbar />
      <Home />
      <Cards />
      <Description />
      <Gallery />
      <Video />
      <Footer />
    </div>
  );
}

export default App;
