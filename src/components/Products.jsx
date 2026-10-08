import { asset } from "../site";

const products = [
  {
    key: 'milk',
    name: 'Pure Cow Milk',
    tagline: 'Fresh from the farm',
    price: '₹60',
    unit: '/ litre',
    desc: 'Raw, untouched cow milk. Collected at dawn, chilled within the hour, delivered to your door.',
    img: '/images/product_milk.jpg',
  },
  {
    key: 'ghee',
    name: 'Bilona Cow Ghee',
    tagline: 'Made the traditional way',
    price: '₹800',
    unit: '/ kg',
    desc: 'Slow-cooked using the ancient Bilona method. Granular, aromatic, golden — pure as it gets.',
    img: '/images/product_ghee.jpg',
  },
]

export default function Products() {
  return (
    <section id="products" className="products-section">
      <div className="pattern-waves products-bg-animated" aria-hidden="true"></div>
      <div className="container products-container">
        <div className="products-header">
          <h2 className="products-title">Our Products</h2>
          <p className="products-subtitle">Straight from our cows to your home. No middlemen. No chemicals.</p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.key}>
              <div className="product-card-inner">
                <div className="product-image-wrapper">
                  <div className="product-image-glow" />
                  <img src={asset(product.img)} alt={product.name} className="product-image" loading="lazy" />
                  <div className="product-image-reflection" />
                </div>

                <div className="product-info">
                  <span className="product-tagline">{product.tagline}</span>
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-desc">{product.desc}</p>

                  <div className="product-price-row">
                    <div className="product-price-badge">
                      <span className="product-price">{product.price}</span>
                      <span className="product-unit">{product.unit}</span>
                    </div>
                    <a href="#contact" className="product-order-btn">
                      Order Now
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
