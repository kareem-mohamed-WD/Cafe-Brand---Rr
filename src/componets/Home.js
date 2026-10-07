function Home({ contacts }) {
  return (
    <div
      className="home1"
      style={{
        background: `linear-gradient(90deg, rgba(20,20,20,0.98),
          rgba(20,20,20,0.82), rgba(20,20,20,0.55)),
           url('/img/coffee-hero-section.png')
            center center/cover no-repeat`,
      }}
    >
      <div id="Home" className="sacshan1">
        <div className="text-sacshan1">
          <span>Best Coffee</span>

          <h2>Make your day great with our special coffee</h2>

          <p>
            Welcome to our coffee paradise, where every bean tells a story and
            every cup sparks joy.
          </p>

          <a href="#Menu">
            <button className="button1" onClick={() => contacts("Contact")}>
              Order Now
            </button>
          </a>

          <a href="#Contact">
            <button className="button2" onClick={() => contacts("Contact")}>
              Contact Us
            </button>
          </a>
        </div>

        <img src="img/coffee-hero-section.png" alt="Coffee" />
      </div>
    </div>
  );
}

export default Home;
