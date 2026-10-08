import "./Footer.css";
import { asset, site } from "../site";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const scrollToTop = (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function Footer() {
  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="footer-top">
        <div className="footer-block footer-about">
          <a
            href="#home"
            className="footer-brand"
            onClick={scrollToTop}
            aria-label="Go to home top"
          >
            <img
              src={asset("/images/logo.png")}
              alt="Aman Farm Milk logo"
              className="footer-brand-logo"
              loading="lazy"
              decoding="async"
            />
          </a>
          <p className="footer-text">
            Founded with a dream to bring pure, unadulterated milk from our
            pasture to your plate. We serve hundreds of families every single
            morning with trust, health, and the very best nature has to offer.
          </p>
          <div className="footer-socials">
            <a
              href="#facebook"
              aria-label="Facebook"
              className="footer-social-link footer-social-facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#instagram"
              aria-label="Instagram"
              className="footer-social-link footer-social-instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#whatsapp"
              aria-label="WhatsApp"
              className="footer-social-link footer-social-whatsapp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="footer-block footer-links">
          <h3>Information</h3>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#journey">Our Farm</a>
            </li>
            <li>
              <a href="#Blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-block footer-contact">
          <h3>Contact Info</h3>
          <div className="footer-contact-item">
            <FaMapMarkerAlt />
            <p>{site.address}</p>
          </div>
          <div className="footer-contact-item">
            <FaPhoneAlt />
            <p>{site.phone}</p>
          </div>
          <div className="footer-contact-item">
            <FaEnvelope />
            <p>{site.email}</p>
          </div>
          <div className="footer-contact-item">
            <FaClock />
            <p>Opening Hours: {site.hours}</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          2024-{new Date().getFullYear()} © {site.name}. All Rights Reserved.
          Developed By{" "}
          <a
            href={site.developer.url}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-credit-link"
            aria-label="Visit developer website"
          >
            {site.developer.name}
          </a>
        </p>
        <div className="footer-bottom-links">
          <a href="#">Our Terms</a>
          <span>•</span>
          <a href="#">Privacy Policy</a>
          <span>•</span>
          <a href="#">Refund and Cancellation</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
