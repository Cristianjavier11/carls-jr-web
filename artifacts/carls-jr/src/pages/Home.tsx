import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Gallery } from "@/components/Gallery";
import { ContactForm } from "@/components/ContactForm";
import { LocationHours } from "@/components/LocationHours";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-white">
      <Nav />
      
      <main>
        <Hero />
        <About />
        <Features />
        <Gallery />
        <LocationHours />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
