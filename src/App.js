import { useState } from "react";
import Five from "./Components/Five";
import Gosti from "./Components/Gosti";
import Kinopokazi from "./Components/Kinopokazi";
import Line from "./Components/Line";
import Main from "./Components/Main";
import Media from "./Components/Media";
import Navbar from "./Components/navbar/Navbar";
import News from "./Components/News";
import Program from "./Components/Program";
import Tifest from "./Components/Tifest";
import Primyer from "./Components/Primyer";
import Delegat from "./Components/Delegat";
import Story from "./Components/Story";
import Footer from "./Components/Footer";
import Master from "./Components/Master";
import Partner from "./Components/Partner";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Line />
      <Tifest />
      <Line />
      <News />
      <Line />
      <Five />
      <Line />
      <Kinopokazi />
      <Line />
      <Gosti />
      <Line />
      <Program />
      <Line />
      <Media />
      <Line />
      <Primyer />
      <Line />
      <Delegat />
      <Line />
      <Story />
      <Line />
      <Master />
      <Line />
      <Partner />
      <Line />
      <Footer />
      <Line />
    </div>
  );
}

export default App;
