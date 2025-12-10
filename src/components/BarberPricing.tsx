import { motion } from "framer-motion";
import { Scissors, Sparkles, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const prices = [
  {
    icon: Scissors,
    name: "Corte de Cabello Sencillo",
    description: "Corte clásico con técnica profesional",
    price: 16000,
  },
  {
    icon: Sparkles,
    name: "Corte Sencillo + Barba",
    description: "Corte profesional con arreglo de barba",
    price: 25000,
  },
  {
    icon: Crown,
    name: "Corte + Barba + Mascarilla",
    description: "Experiencia completa de barbería premium",
    price: 35000,
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function BarberPricing() {
  return (
    <section id="precios-barberia" className="py-24 md:py-32 bg-card">
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
            Barbería Profesional
          </span>
          <h2 className="section-title">Nuestros Precios</h2>
          <p className="section-subtitle mx-auto">
            Servicios de barbería con la mejor calidad y atención personalizada
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {prices.map((item, index) => (
            <motion.div
              key={item.name}
              variants={itemVariants}
              className={`relative bg-background border border-border rounded-xl p-8 text-center group hover:border-primary/50 transition-all duration-300 ${
                index === 2 ? "md:ring-2 md:ring-primary md:border-primary" : ""
              }`}
            >
              {index === 2 && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  RECOMENDADO
                </span>
              )}
              
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                {item.name}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-6">
                {item.description}
              </p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">
                  ${item.price.toLocaleString("es-CO")}
                </span>
                <span className="text-muted-foreground ml-1">COP</span>
              </div>
              
              <Button 
                variant={index === 2 ? "hero" : "outline"} 
                className="w-full" 
                asChild
              >
                <a
                  href={`https://wa.me/573246511522?text=Hola!%20Quiero%20reservar%20un%20${encodeURIComponent(item.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reservar
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
