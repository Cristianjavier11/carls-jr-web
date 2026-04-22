import { motion } from "framer-motion";
import { Flame, Utensils, Users, CupSoda, Clock, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Flame,
    title: "A la Parrilla",
    description: "Hamburguesas premium asadas a la parrilla para un sabor ahumado inigualable.",
  },
  {
    icon: Utensils,
    title: "Servicio a la Mesa",
    description: "Ordena, siéntate y relájate. Nosotros llevamos tu comida hasta tu mesa.",
  },
  {
    icon: Users,
    title: "Ambiente Familiar",
    description: "Espacios cómodos y limpios diseñados para disfrutar con toda la familia.",
  },
  {
    icon: CupSoda,
    title: "Relleno Ilimitado",
    description: "Disfruta de nuestras estaciones de bebidas con refill sin límite.",
  },
  {
    icon: Clock,
    title: "Atención Rápida",
    description: "Tu comida caliente y fresca, preparada al momento sin largas esperas.",
  },
  {
    icon: Award,
    title: "Calidad Premium",
    description: "Ingredientes frescos, pan recién horneado y vegetales seleccionados a mano.",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export function Features() {
  return (
    <section id="servicios" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            La Experiencia <span className="text-primary">Carl's Jr.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            No solo hacemos hamburguesas, creamos momentos. Cada detalle de nuestro restaurante está pensado para que disfrutes tu visita al máximo.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300 group bg-card">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300">
                      <Icon className="w-7 h-7 text-secondary group-hover:text-secondary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 font-serif">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
