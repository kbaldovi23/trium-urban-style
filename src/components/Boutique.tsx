import { motion } from "framer-motion";
import { MessageCircle, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import tshirt1 from "@/assets/tshirt-1.png";
import tshirt2 from "@/assets/tshirt-2.png";

const products = [
  {
    name: "TRIUM Classic Tee",
    description: "Camiseta premium con logo bordado",
    image: tshirt1,
    price: "$45.000",
  },
  {
    name: "TRIUM Urban Tee",
    description: "Diseño exclusivo edición limitada",
    image: tshirt2,
    price: "$50.000",
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

export function Boutique() {
  return (
    <section id="boutique" className="py-24 md:py-32 bg-background">
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
            Ropa exclusiva
          </span>
          <h2 className="section-title">Boutique TRIUM</h2>
          <p className="section-subtitle mx-auto">
            Piezas únicas de streetwear que definen tu estilo. Calidad premium,
            diseños exclusivos.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={itemVariants}
              className="group"
            >
              <div className="service-card p-0 overflow-hidden">
                {/* Product Image */}
                <div className="aspect-square bg-secondary/20 relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary text-primary-foreground">
                      EXCLUSIVO
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-display font-bold text-foreground">
                      {product.name}
                    </h3>
                    <span className="text-lg font-bold text-primary">
                      {product.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  <Button variant="whatsapp" className="w-full" asChild>
                    <a
                      href={`https://wa.me/573246511522?text=Hola!%20Me%20interesa%20consultar%20disponibilidad%20de%20${encodeURIComponent(product.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle size={18} />
                      Consultar disponibilidad
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* More Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            ¿Buscas algo específico? Contáctanos para ver todo nuestro catálogo.
          </p>
          <Button variant="heroOutline" size="lg" asChild>
            <a
              href="https://www.instagram.com/triumboutique/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShoppingBag size={18} />
              Ver más en Instagram
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
