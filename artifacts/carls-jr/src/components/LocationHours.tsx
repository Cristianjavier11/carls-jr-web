import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Navigation } from "lucide-react";

export function LocationHours() {
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=Av.+Camino+a+Bosque+de+San+Isidro+1475+Centinela+I+45130+Zapopan+Jalisco";

  return (
    <section id="ubicacion" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-stretch">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/3 flex flex-col justify-center space-y-8"
          >
            <div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
                Encuéntranos
              </h2>
              <p className="text-muted-foreground text-lg">
                Visítanos en nuestra sucursal Centinela I y disfruta de tus hamburguesas favoritas.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 p-3 rounded-full text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-xl mb-1">Dirección</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Av. Camino a Bosque de San Isidro 1475, <br />
                    Centinela I, C.P. 45130 <br />
                    Zapopan, Jalisco, México
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-secondary/10 p-3 rounded-full text-secondary">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-xl mb-1">Horario</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Lunes a Domingo <br />
                    <span className="font-medium text-foreground">9:00 a.m. a 10:00 p.m.</span>
                  </p>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 text-lg mt-4 shadow-md group"
              asChild
            >
              <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                <Navigation className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Ver en Google Maps
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-2/3 min-h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-border relative"
          >
            {/* Embedded static map visual for the design effect. 
                Using a high quality generated or placeholder aesthetic since we don't have a real map API key */}
            <div className="absolute inset-0 bg-muted flex items-center justify-center">
              <div className="text-center p-6 bg-background/80 backdrop-blur-sm rounded-xl max-w-sm m-4 shadow-lg border border-border">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Carl's Jr. Bosque de San Isidro</h3>
                <p className="text-sm text-muted-foreground mb-4">Haz clic en el botón para abrir la navegación exacta en Google Maps.</p>
                <Button variant="outline" asChild>
                  <a href={mapUrl} target="_blank" rel="noopener noreferrer">Abrir Mapa</a>
                </Button>
              </div>
            </div>
            
            {/* Visual styling overlay to make the placeholder look better */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
