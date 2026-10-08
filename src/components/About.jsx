import { asset } from "../site";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-bg-pattern"></div>
      <div className="container">
        <div className="about-layout">
          <div className="about-product-side about-product-left">
            <img src={asset("/images/product_milk.jpg")} alt="Pure Cow Milk" className="about-product-img" loading="lazy" />
          </div>

          <div className="about-content">
            <span className="about-label">Our Story</span>
            <h2 className="about-title">Where Quality<br />Meets <span className="about-highlight">Affection</span></h2>
            <div className="about-story">
              <p className="about-intro">At Aman Farm, we believe great dairy starts with happy cows and honest farming. Founded with a simple dream — to bring pure, unadulterated milk from our pasture to your plate — we now serve hundreds of families every single morning.</p>
              <p className="about-intro">Our cows graze freely on lush green pastures, fed on pesticide-free grass, and cared for with genuine love. Every drop of milk is collected at dawn, chilled within the hour, and delivered fresh to your doorstep — no chemicals, no middlemen, no compromises.</p>
              <p className="about-intro">We don't just sell milk. We deliver trust. We deliver health. We deliver a promise that your family deserves the very best nature has to offer.</p>
            </div>
          </div>

          <div className="about-product-side about-product-right">
            <img src={asset("/images/product_ghee.jpg")} alt="Bilona Cow Ghee" className="about-product-img" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}
