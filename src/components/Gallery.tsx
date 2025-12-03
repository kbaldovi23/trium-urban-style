import { motion } from "framer-motion";
import galleryVideo1 from "@/assets/gallery-video-1.mp4";
import gallery2 from "@/assets/gallery-2.png";
import galleryVideo3 from "@/assets/gallery-video-3.mp4";

type GalleryItem = {
  type: "image" | "video";
  src: string;
  alt: string;
};

const galleryItems: GalleryItem[] = [
  { type: "video", src: galleryVideo1, alt: "TRIUM corte 1" },
  { type: "image", src: gallery2, alt: "TRIUM corte 2" },
  { type: "video", src: galleryVideo3, alt: "TRIUM corte 3" },
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

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="image-hover group relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-xl bg-card">
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
