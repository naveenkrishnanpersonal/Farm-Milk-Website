import { asset } from "../site";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg">
        <img
          src={asset("/images/cowhome.png")}
          alt=""
          className="hero-bg-img"
          loading="eager"
        />
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title fade-in-up delay-1">
            Pure Milk,<br />
            <span className="hero-accent">Delivered Fresh</span>
          </h1>
          <p className="hero-subtitle fade-in-up delay-2">
            Farm-to-doorstep delivery of organic cow milk, curd &amp; ghee.
            No additives. No preservatives.<br />Just nature in a bottle.
          </p>
          <div className="hero-actions fade-in-up delay-3">
            <a href="#products" className="hero-btn hero-btn-primary">
              <svg className="hero-btn-icon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
              </svg>
              Explore
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
