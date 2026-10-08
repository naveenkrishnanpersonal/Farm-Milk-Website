// Single source of truth for brand and contact details.
export const site = {
  name: "Aman Farm Milk",
  tagline: "Health And Happiness",
  phone: "+91 81130 11820",
  whatsapp: "918113011820",
  email: "naveenkrishnanpersonal@gmail.com",
  address: "Palakkad, Kerala 678001",
  hours: "5:00am - 8:00pm",
  developer: {
    name: "Naveen Krishnan S",
    url: "https://www.naveenkrishnan.online/",
  },
};

// Locality names matched (case-insensitively) against the delivery address.
export const deliveryAreas = ["pathalam", "eloor", "kalamassery", "vattekunnam"];

export const whatsappLink = (message) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

// Prefixes a public asset with Vite's base so images resolve whether the site
// is served from a domain root or a subpath.
export const asset = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
