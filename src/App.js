import { useState } from "react";
import Heder from "./Heder";
import Home from "./componets/Home";
import About from "./componets/About";
import Menu from "./componets/Menu";
import Testimonials from "./Testimonials";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  const [page, setpage] = useState("Home");

  return (
    <>
      <Heder setpage={setpage} />
      {page === "Home" && <Home />}
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