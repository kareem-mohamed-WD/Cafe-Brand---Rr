import { useState } from "react";
import Heder from "./componets/Heder";
import Home from "./componets/Home";
import About from "./componets/About";
import Menu from "./componets/Menu";
import Testimonials from "./componets/Testimonials";
import Gallery from "./componets/Gallery";
import Contact from "./componets/Contact";
import Footer from "./componets/Footer";

function App() {
  const [page, setpage] = useState("Home");

  return (
    <>
      <Heder setpage={setpage} />

      {page === "Home" && <Home contacts={setpage} />}
      {page === "About" && <About />}
      {page === "Menu" && <Menu />}
      {page === "Testimonials" && <Testimonials />}
      {page === "Gallery" && <Gallery />}
      {page === "Contact" && <Contact />}

      <Footer />
    </>
  );
}

export default App;
