import { motion } from "framer-motion";
import { Award, Users, Sparkles, MapPin } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Estilo Único",
    description: "Cada corte es una obra de arte personalizada a tu estilo.",
  },
  {
    icon: Users,
    title: "Profesionales Expertos",
    description: "Barberos certificados con años de experiencia en tendencias.",
  },
  {
    icon: Sparkles,
    title: "Productos Exclusivos",
    description: "Ropa y accesorios que no encontrarás en otro lugar.",
  },
  {
    icon: MapPin,
    title: "Ambiente Urbano",
    description: "Un espacio moderno donde el estilo se respira.",
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">
              ¿Por qué TRIUM?
            </span>
            <h2 className="section-title mb-6">
              La experiencia que
              <br />
              <span className="text-gradient">mereces</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              En TRIUM no solo ofrecemos servicios, creamos experiencias. Desde
              el momento en que entras hasta que sales, cada detalle está
              pensado para que te sientas único.
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {reasons.map((reason) => (
                <motion.div
                  key={reason.title}
                  variants={itemVariants}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
                <div className="text-center">
                  <div className="text-7xl md:text-8xl font-display font-bold text-foreground mb-4">
                    +500
                  </div>
                  <p className="text-xl text-muted-foreground mb-8">
                    Clientes satisfechos
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-display font-bold text-foreground mb-1">
                        3+
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Años de experiencia
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-display font-bold text-foreground mb-1">
                        5★
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Calificación promedio
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-border/50 rounded-xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/5 rounded-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
