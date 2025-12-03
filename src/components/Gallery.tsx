import { motion } from "framer-motion";
import haircut1 from "@/assets/haircut-1.jpg";
import haircut2 from "@/assets/haircut-2.jpg";
import haircut3 from "@/assets/haircut-3.jpg";
import barber1 from "@/assets/barber-1.jpg";
import tshirt1 from "@/assets/tshirt-1.png";
import granizado2 from "@/assets/granizado-2.jpg";

const galleryImages = [
  { src: haircut1, alt: "Fade haircut", category: "Barbería" },
  { src: tshirt1, alt: "TRIUM T-shirt", category: "Boutique" },
  { src: haircut2, alt: "Classic haircut", category: "Barbería" },
  { src: granizado2, alt: "Blue granizado", category: "Granizados" },
  { src: haircut3, alt: "Modern style", category: "Barbería" },
  { src: barber1, alt: "Barber at work", category: "Barbería" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export function Gallery() {
  return (
    <section id="galeria" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Nuestro trabajo
          </span>
          <h2 className="section-title">Galería</h2>
          <p className="section-subtitle mx-auto">
            Una muestra de nuestro trabajo y estilo. Inspírate con lo mejor de
            TRIUM.
          </p>
        </motion.div>

        {/* Gallery Grid - Masonry-like */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`image-hover group relative ${
                index === 0 || index === 5 ? "row-span-2" : ""
              }`}
            >
              <div className={`${index === 0 || index === 5 ? "aspect-[3/5]" : "aspect-square"} overflow-hidden rounded-xl bg-card`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                <span className="text-sm font-medium text-foreground px-4 py-2 rounded-full border border-border">
                  {image.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
