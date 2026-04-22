import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBurger from "@/assets/images/hero-burger.png";

export function Hero() {
  const scrollToMenu = () => {
    const element = document.querySelector("#galeria");
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30 z-10" />
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={heroBurger}
          alt="Hamburguesa Premium Angus"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-6">
        <div className="max-w-2xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-bold tracking-wider uppercase mb-6 backdrop-blur-sm">
              Sabor Inigualable
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6 drop-shadow-lg"
          >
            HAMBURGUESAS <br />
            <span className="text-secondary">PREMIUM</span> <br />
            A LA PARRILLA.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lg md:text-xl text-white/90 mb-10 max-w-lg leading-relaxed drop-shadow-md"
          >
            Auténtico sabor americano desde 1941. Disfruta de nuestras hamburguesas 100% Angus, preparadas al momento y con el inconfundible toque de la parrilla.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="text-lg px-8 h-14 bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:scale-105 transition-transform" onClick={scrollToMenu}>
              Ver Menú <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 h-14 bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white backdrop-blur-md transition-colors" onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}>
              Contáctanos
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
