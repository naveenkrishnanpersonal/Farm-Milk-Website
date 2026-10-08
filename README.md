# 🥛 Aman Farm Milk

> Fresh cow milk, Bilona ghee and curd — collected at dawn and delivered from the farm to your doorstep.

<p align="center">
  <a href="https://naveenkrishnanpersonal.github.io/Farm-Milk-Website/">
    <img src="./public/preview.jpg" alt="Aman Farm Milk Website Preview">
  </a>
</p>

<p align="center">
  <a href="https://naveenkrishnanpersonal.github.io/Farm-Milk-Website/">
    <img src="https://img.shields.io/badge/🌐_Live_Demo-Visit_Website-347F7C?style=for-the-badge" alt="Live Demo">
  </a>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19">
  <img src="https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT License">
</p>

## 📌 About the Project

**Aman Farm Milk** is a single-page marketing site for a small dairy farm. A visitor
reads the farm's story, browses the products and the daily process, then places an order
through a pre-filled WhatsApp message.

The project focuses on:

- A warm, natural brand look (aqua-teal + milk-cream)
- Responsive desktop and mobile layouts
- A clear product → order flow
- Scroll-driven motion that stays light on performance
- Accessible markup and navigation

---

## ✨ What's on the page

- Hero with the primary call to action
- Products grid with live pricing
- Our Story section
- "From Farm to Your Glass" process timeline that reveals on scroll
- Customer testimonials
- Contact form with an order summary and WhatsApp hand-off
- Footer with contact details and site links

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| React 19 | User interface |
| Vite 6 | Dev server & build tooling |
| GSAP (ScrollTrigger) | Scroll-driven page-border animation |
| react-icons | Footer icon set |
| CSS | Styling & responsive design |
| Oxlint | Linting |
| GitHub Pages | Deployment |

---

## 📂 Project Structure

```text
public/              Static assets (logo, product images, favicons, manifest, robots, sitemap)
src/
  components/        One component (+ CSS, where needed) per page section
  hooks/             useSubscription — shared order state and delivery-area check
  site.js            Contact details, delivery areas and the WhatsApp/asset helpers
  App.jsx            Section order for the page
  main.jsx           React entry point
  style.css          Brand tokens, layout and responsive rules
.github/workflows/   GitHub Pages deployment
index.html           SEO meta tags and LocalBusiness structured data
```

---

## 🚀 Getting started

```bash
npm install
npm run dev
```

The dev server prints a local URL (usually <http://localhost:5173>).

## 📜 Scripts

| Command           | What it does                       |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Start the dev server with HMR      |
| `npm run build`   | Production build into `dist/`      |
| `npm run preview` | Serve the built output locally     |
| `npm run lint`    | Run Oxlint over the project        |

---

## ⚙️ Configuration

Everything a non-developer might want to change lives in **`src/site.js`** — the phone
number, WhatsApp number, email, address, opening hours and delivery areas. Update them
there and every button, contact tile and footer link follows.

```js
export const site = {
  name: "Aman Farm Milk",
  phone: "+91 81130 11820",
  whatsapp: "918113011820", // wa.me format, digits only
  email: "naveenkrishnanpersonal@gmail.com",
  address: "Palakkad, Kerala 678001",
  hours: "5:00am - 8:00pm",
};

export const deliveryAreas = ["pathalam", "eloor", "kalamassery", "vattekunnam"];
```

`deliveryAreas` is matched case-insensitively against the address a customer types, so
add or remove localities there to change the service area.

---

## 🔍 SEO

Everything Google needs to index the page is already wired up:

- Keyword-rich `<title>`, description and `og:` / `twitter:` tags in `index.html`
- `FoodEstablishment` JSON-LD structured data for rich results
- `public/robots.txt` pointing at `public/sitemap.xml`
- Descriptive `alt` text on images and a single keyword `<h1>`

> Before launch, change the domain in `index.html` (canonical, `og:url`, `og:image`,
> JSON-LD) and in `public/robots.txt` + `public/sitemap.xml` to your own URL, then
> submit the sitemap in [Google Search Console](https://search.google.com/search-console).

---

## 🚢 Deployment

`npm run build` emits a static site to `dist/`. The build uses a relative base (`./`),
so it can be served from a domain root or from a subpath — for example a GitHub Pages
project site at `https://<user>.github.io/<repo>/` — without further configuration.

A workflow at `.github/workflows/deploy.yml` builds and publishes to GitHub Pages on
every push to `main`. Enable it once in **Settings → Pages → Build and deployment →
Source: GitHub Actions**.

---

## 📄 License

[MIT](LICENSE)
