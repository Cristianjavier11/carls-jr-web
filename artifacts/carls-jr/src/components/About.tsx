import { motion } from "framer-motion";
import interiorImg from "@/assets/images/interior.png";

export function About() {
  return (
    <section id="nosotros" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-1 w-12 bg-primary"></div>
              <h3 className="text-primary font-bold tracking-wider uppercase text-sm">Sobre Nosotros</h3>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Una historia de <br/>
              <span className="text-primary">sabor y calidad</span>
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              Fundada en 1941, Carl's Jr. nació con una estrella: la promesa de ofrecer hamburguesas excepcionales. Nuestro secreto no es un secreto; es carne 100% Angus asada a la parrilla para sellar ese sabor ahumado que nos distingue.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              En nuestra sucursal de Bosque de San Isidro, mantenemos viva esa tradición. Te ofrecemos un ambiente familiar, servicio directo a tu mesa, y nuestras famosas estaciones de refresco con relleno ilimitado.
            </p>

            <div className="pt-6 grid grid-cols-2 gap-6">
              <div className="border-l-4 border-secondary pl-4">
                <h4 className="text-3xl font-serif font-bold text-foreground">1941</h4>
                <p className="text-sm text-muted-foreground font-medium mt-1">Año de fundación</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-3xl font-serif font-bold text-foreground">100%</h4>
                <p className="text-sm text-muted-foreground font-medium mt-1">Carne Angus Premium</p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img 
                src={interiorImg} 
                alt="Interior de restaurante Carl's Jr" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10"></div>
            
            <div className="absolute -right-8 bottom-12 bg-white dark:bg-card p-6 rounded-xl shadow-xl max-w-[200px] border border-border/50 hidden md:block">
              <div className="flex text-secondary mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm font-bold text-foreground">"La mejor hamburguesa que he probado."</p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
