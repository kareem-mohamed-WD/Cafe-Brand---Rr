function Contact() {
  return (
    <>
      <div id="Contact" className="sacshan6-text3">
        <h2>CONTACT US</h2>
      </div>

      <div className="sacshan6">
        <div className="sacshan6-foan">
          <ul>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              123 Campsite Avenue, Wilderness, CA 98765
            </li>

            <li>
              <i className="fa-solid fa-envelope"></i>
              info@coffeeshopwebsite.com
            </li>

            <li>
              <i className="fa-solid fa-phone"></i>
              78909-456 (123)
            </li>

            <li>
              <i className="fa-regular fa-clock"></i>
              Monday - Friday: 9:00 AM - 5:00 AM
            </li>

            <li>
              <i className="fa-regular fa-clock"></i>
              Saturday: 10:00 AM - 3:00 PM
            </li>

            <li>
              <i className="fa-regular fa-clock"></i>
              Sunday: Closed
            </li>

            <li>
              <i className="fa-solid fa-globe"></i>
              www.codingnepalweb.com
            </li>
          </ul>
        </div>

        <div className="sacshan6-form">
          <form
            id="contact-section"
            action="https://formsubmit.co/karempc1020@gmail.com"
            method="POST"
          >
            <input
              name="Your name"
              type="text"
              placeholder="Your name"
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Your email"
              required
            />

            <textarea
              name="Your message"
              placeholder="Your message"
              required
            ></textarea>

            <button type="submit">Submi</button>
          </form>
        </div>
      </div>

      <div className="fotar">
        <div className="shop1">
          <h3>© 2026 Coffee Shop</h3>
        </div>

        <div className="shop2">
          <a href="#k">
            <i className="fa-brands fa-facebook-f"></i>
          </a>

          <a href="#k">
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a href="#k">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>

        <div className="shop3">
          <span>Privacy policy</span>
          <span>Refund policy</span>
        </div>
      </div>
    </>
  );
}

export default Contact;
