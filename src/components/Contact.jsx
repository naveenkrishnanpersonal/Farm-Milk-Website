import { useState } from "react";
import { asset, deliveryAreas, site, whatsappLink } from "../site";

export default function Contact({
  subscription,
  updateProduct,
  validateAddress,
}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [addressError, setAddressError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "address") {
      if (deliveryAreas.some((area) => value.toLowerCase().includes(area)))
        setAddressError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (subscription.milk === 0 && subscription.ghee === 0) {
      alert("Please select at least one dairy product before submitting!");
      return;
    }
    if (!validateAddress(formData.address)) {
      setAddressError(true);
      return;
    }

    const items = [];
    if (subscription.milk > 0) items.push(`Milk: ${subscription.milk}L`);
    if (subscription.ghee > 0) items.push(`Ghee: ${subscription.ghee}kg`);
    const itemsStr = items.join(", ") || "No items selected";

    const message =
      `*${site.name} Order Request*\n` +
      `-----------------------------------\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Address:* ${formData.address}\n\n` +
      `*Items:*\n${itemsStr}\n` +
      `-----------------------------------\n` +
      `Please confirm my order.`;

    window.location.href = whatsappLink(message);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="about-bg-pattern"></div>

      <div className="container">
        <div className="contact-header">
          <span className="contact-label">Get in Touch</span>
          <h2 className="contact-title">
            Start Your Journey
            <br />
            of <span className="contact-highlight">Health & Happiness</span>
          </h2>
          <p className="contact-desc">
            Fill out the form and our team will contact you within 2 hours to
            confirm your delivery schedule.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-left-col">
            <div className="contact-details-card">
              <div className="contact-detail-row">
                <span className="contact-detail-icon">📍</span>
                <div>
                  <span className="contact-detail-label">Farm Location</span>
                  <p className="contact-detail-value">{site.address}</p>
                </div>
              </div>
              <div className="contact-detail-row">
                <span className="contact-detail-icon">📞</span>
                <div>
                  <span className="contact-detail-label">Call or WhatsApp</span>
                  <p className="contact-detail-value">{site.phone}</p>
                </div>
              </div>
              <div className="contact-detail-row">
                <span className="contact-detail-icon">✉️</span>
                <div>
                  <span className="contact-detail-label">Email</span>
                  <p className="contact-detail-value">{site.email}</p>
                </div>
              </div>
              <div className="contact-detail-row">
                <span className="contact-detail-icon">🕐</span>
                <div>
                  <span className="contact-detail-label">Delivery Hours</span>
                  <p className="contact-detail-value">
                    {site.hours}, All Days
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            {!submitted ? (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Full name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="phone">WhatsApp Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="contact-field">
                  <label htmlFor="address">Delivery Address</label>
                  <textarea
                    id="address"
                    name="address"
                    rows="3"
                    required
                    placeholder="House number, Street, Locality (Pathalam, Eloor, Kalamassery, Vattekunnam)"
                    value={formData.address}
                    onChange={handleChange}
                    className={addressError ? "field-error" : ""}
                  />
                  {addressError && (
                    <span className="contact-field-error">
                      ⚠️ Delivery only available in Pathalam, Eloor,
                      Kalamassery, and Vattekunnam.
                    </span>
                  )}
                </div>

                <div className="contact-order-section">
                  <label className="contact-field-label">Order Summary</label>
                  <div className="contact-order-grid">
                    <div className="contact-order-item">
                      <img
                        src={asset("/images/product_milk.jpg")}
                        alt="Milk"
                        className="contact-order-img"
                        loading="lazy"
                      />
                      <span className="contact-order-name">Fresh Cow Milk</span>
                      <div className="contact-order-qty">
                        <button
                          type="button"
                          className="qty-btn"
                          onClick={() =>
                            updateProduct(
                              "milk",
                              Math.max(0, subscription.milk - 1),
                            )
                          }
                        >
                          −
                        </button>
                        <span className="qty-value">{subscription.milk} L</span>
                        <button
                          type="button"
                          className="qty-btn"
                          onClick={() =>
                            updateProduct("milk", subscription.milk + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="contact-order-item">
                      <img
                        src={asset("/images/product_ghee.jpg")}
                        alt="Ghee"
                        className="contact-order-img"
                        loading="lazy"
                      />
                      <span className="contact-order-name">Golden Ghee</span>
                      <div className="contact-order-qty">
                        <button
                          type="button"
                          className="qty-btn"
                          onClick={() =>
                            updateProduct(
                              "ghee",
                              Math.max(0, subscription.ghee - 0.5),
                            )
                          }
                        >
                          −
                        </button>
                        <span className="qty-value">
                          {subscription.ghee} kg
                        </span>
                        <button
                          type="button"
                          className="qty-btn"
                          onClick={() =>
                            updateProduct("ghee", subscription.ghee + 0.5)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <button type="submit" className="contact-submit-btn">
                  Order via WhatsApp
                </button>
              </form>
            ) : (
              <div className="contact-success">
                <h3>Order Request Sent!</h3>
                <p>
                  Your order details have been sent via WhatsApp. We'll confirm
                  your order shortly.
                </p>
                <div className="success-actions">
                  <button
                    type="button"
                    className="success-btn"
                    onClick={() => setSubmitted(false)}
                  >
                    📝 Place Another Order
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
