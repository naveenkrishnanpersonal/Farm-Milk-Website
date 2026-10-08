import { useSubscription } from "./hooks/useSubscription";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MarqueeBorder from "./components/MarqueeBorder";
import Products from "./components/Products";
import About from "./components/About";
import Journey from "./components/Journey";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const {
    state: subscription,
    updateProduct,
    validateAddress,
  } = useSubscription();

  return (
    <>
      <MarqueeBorder />
      <Navbar />
      <main>
        <Hero />
        <Products />
        <About />
        <Journey />

        <Testimonials />
        <Contact
          subscription={subscription}
          updateProduct={updateProduct}
          validateAddress={validateAddress}
        />
      </main>
      <Footer />
    </>
  );
}
