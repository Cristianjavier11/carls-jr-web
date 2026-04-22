import { motion } from "framer-motion";
import img1 from "@/assets/images/gallery-burger-1.png";
import img2 from "@/assets/images/gallery-burger-2.png";
import img3 from "@/assets/images/gallery-fries.png";
import img4 from "@/assets/images/gallery-drink.png";
import img5 from "@/assets/images/gallery-combo.png";
import img6 from "@/assets/images/gallery-ambiance.png";
import imgFeatured from "@assets/image_1776840190568.png";

const images = [
  { src: imgFeatured, alt: "Nuestro Menú Completo", colSpan: "col-span-1 md:col-span-4", rowSpan: "row-span-1 md:row-span-2" },
  { src: img1, alt: "Doble Cheeseburger Premium", colSpan: "col-span-1 md:col-span-2", rowSpan: "row-span-1 md:row-span-2" },
  { src: img3, alt: "Papas Fritas Crujientes", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { src: img4, alt: "Bebida Refrescante", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { src: img2, alt: "Hamburguesa Picante BBQ", colSpan: "col-span-1 md:col-span-2", rowSpan: "row-span-1 md:row-span-1" },
  { src: img5, alt: "Combo Premium", colSpan: "col-span-1 md:col-span-2", rowSpan: "row-span-1 md:row-span-2" },
  { src: img6, alt: "Ambiente Familiar", colSpan: "col-span-1 md:col-span-2", rowSpan: "row-span-1" },
];

export function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-1 w-12 bg-primary"></div>
            <h3 className="text-primary font-bold tracking-wider uppercase text-sm">Nuestro Menú</h3>
            <div className="h-1 w-12 bg-primary"></div>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            Sabor Que Se <span className="text-secondary">Antoja</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Descubre por qué somos los expertos en hamburguesas. Ingredientes de la más alta calidad para una experiencia insuperable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-xl group ${image.colSpan} ${image.rowSpan}`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
                <h4 className="text-white font-bold text-lg">{image.alt}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
