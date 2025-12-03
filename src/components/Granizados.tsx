import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import granizado1 from "@/assets/granizado-1.jpg";
import granizado2 from "@/assets/granizado-2.jpg";
import granizado3 from "@/assets/granizado-3.jpg";
import granizadosPromo from "@/assets/granizados-promo.mp4";

const granizados = [
  {
    name: "Fresa Tropical",
    description: "Explosión de sabor frutal",
    image: granizado1,
    color: "from-red-500/20",
  },
  {
    name: "Blue Ocean",
    description: "Frescura del océano",
    image: granizado2,
    color: "from-blue-500/20",
  },
  {
    name: "Lima Fresh",
    description: "Cítrico y refrescante",
    image: granizado3,
    color: "from-green-500/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export function Granizados() {
  return (
    <section id="granizados" className="py-24 md:py-32 bg-card/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">
            <Sparkles size={14} />
            Nuevo
            <Sparkles size={14} />
          </span>
          <h2 className="section-title">Granizados IceTRIUM</h2>
          <p className="section-subtitle mx-auto">
            Refresca tu día con nuestros granizados premium. Sabores únicos y
            combinaciones irresistibles que te harán volver.
          </p>
        </motion.div>

        {/* Granizados Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {granizados.map((item) => (
            <motion.div
              key={item.name}
              variants={itemVariants}
              className="group"
            >
              <div className="service-card p-0 overflow-hidden text-center">
                {/* Image */}
                <div className={`aspect-square bg-gradient-to-b ${item.color} to-transparent relative overflow-hidden`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-foreground mb-1">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Promo Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden border border-border/20 shadow-2xl">
            <video
              src={granizadosPromo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Más de 10 sabores disponibles. Visítanos y descubre tu favorito.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="#contacto">Ver todos los sabores</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
