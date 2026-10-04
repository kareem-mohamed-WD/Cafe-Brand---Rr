import { useState } from "react";

function Heder({ setpage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div
        className={`ovluq ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      <nav>
        <div>
          <img src="img/logoo.png" alt="logo" />{" "}
        </div>

        <button className="openbtn" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={`fa ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>

        <ul className={menuOpen ? "active" : ""} onClick={() => setMenuOpen(false)}>
          <li>
            <a href="#K" onClick={() => setpage("Home")}>
              Home
            </a>
          </li>

          <li>
            <a href="#K" onClick={() => setpage("About")}>
              About
            </a>
          </li>

          <li>
            <a href="#K" onClick={() => setpage("Menu")}>
              Menu
            </a>
          </li>

          <li>
            <a href="#K" onClick={() => setpage("Testimonials")}>
              Testimonials
            </a>
          </li>

          <li>
            <a href="#K" onClick={() => setpage("Gallery")}>
              Gallery
            </a>
          </li>

          <li>
            <a href="#K" onClick={() => setpage("Contact")}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Heder;
