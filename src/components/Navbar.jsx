import { useState, useEffect } from "react";
import { asset } from "../site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      let current = "home";
      document.querySelectorAll("section[id]").forEach((section) => {
        if (window.scrollY >= section.offsetTop - 140) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#products", label: "Products" },
    { href: "#about", label: "About Our Farm" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <div className="announcement-banner">
        <div className="container announcement-container">
          <span className="announcement-badge">NEW</span>
          <span className="announcement-text">
            Fresh Ghee now available — Pure Bilona method, delivered weekly!
          </span>
          <a href="#products" className="announcement-link">
            Shop now <span className="announcement-arrow">→</span>
          </a>
        </div>
      </div>

      <header className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="container navbar-container">
          <a href="#" className="logo-link" aria-label="Aman Farm Milk Home">
            <img
              src={asset("/images/logo.png")}
              alt="Aman Farm Milk"
              className="logo-img"
            />
            <span className="logo-text">
              Aman Farm<span className="logo-text-accent">Milk</span>
            </span>
          </a>

          <nav className={`nav-menu${menuOpen ? " active" : ""}`} id="navMenu">
            <ul className="nav-list">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className={`nav-item${activeSection === href.slice(1) ? " active" : ""}`}
                    onClick={handleNavClick}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-actions">
            <a href="#contact" className="btn btn-primary btn-nav-sm">
              ORDER NOW
            </a>

            <button
              className={`mobile-menu-toggle${menuOpen ? " active" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
