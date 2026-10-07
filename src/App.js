import { useState } from "react";
import {
  Heder,
  Home,
  About,
  Menu,
  Testimonials,
  Gallery,
  Contact,
  Footer,
} from "./componets/index";

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
