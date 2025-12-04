import { motion } from "framer-motion";
import { Scissors, Shirt, IceCream, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Scissors,
    title: "Barbería Profesional",
    description:
      "Cortes de precisión, fades perfectos y diseños personalizados. Nuestros barberos expertos te darán el look que buscas.",
    href: "#precios-barberia",
  },
  {
    icon: Shirt,
    title: "Boutique Exclusiva",
    description:
      "Ropa streetwear de alta calidad. Piezas únicas y exclusivas para definir tu estilo urbano.",
    href: "#boutique",
  },
  {
    icon: IceCream,
    title: "Granizados IceTRIUM",
    description:
      "Refresca tu día con nuestros granizados premium. Sabores únicos y combinaciones irresistibles.",
    href: "#granizados",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-background">
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
            Lo que ofrecemos
          </span>
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle mx-auto">
            Tres experiencias únicas en un solo lugar. Descubre todo lo que
            TRIUM tiene para ti.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="service-card group"
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
              <a
                href={service.href}
                className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all"
              >
                Explorar
                <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <Button variant="hero" size="lg" asChild>
            <a href="#contacto">Contáctanos</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
