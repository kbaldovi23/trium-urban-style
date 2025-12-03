import { motion } from "framer-motion";
import { Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import barber1 from "@/assets/barber-1.jpg";
import barber2 from "@/assets/barber-2.jpg";
import barber3 from "@/assets/barber-3.jpg";

const barbers = [
  {
    name: "Carlos Martínez",
    role: "Master Barber",
    specialties: ["Fades", "Diseños", "Barba"],
    image: barber1,
  },
  {
    name: "Miguel Ángel",
    role: "Senior Barber",
    specialties: ["Clásicos", "Texturizado", "Afro"],
    image: barber2,
  },
  {
    name: "Andrés Herrera",
    role: "Style Expert",
    specialties: ["Tendencias", "Coloración", "Perfilado"],
    image: barber3,
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

export function Barbers() {
  return (
    <section id="barberos" className="py-24 md:py-32 bg-card/50">
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
            Nuestro equipo
          </span>
          <h2 className="section-title">Barberos Expertos</h2>
          <p className="section-subtitle mx-auto">
            Profesionales apasionados por el estilo y la precisión. Reserva con
            tu barbero favorito.
          </p>
        </motion.div>

        {/* Barbers Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {barbers.map((barber) => (
            <motion.div
              key={barber.name}
              variants={itemVariants}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                {/* Image */}
                <div className="aspect-[3/4] image-hover">
                  <img
                    src={barber.image}
                    alt={barber.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>

              {/* Info */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-primary text-primary"
                    />
                  ))}
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-1">
                  {barber.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {barber.role}
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {barber.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="text-xs px-3 py-1 rounded-full bg-accent text-accent-foreground"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                <Button variant="urban" className="w-full" asChild>
                  <a href={`https://wa.me/573001234567?text=Hola!%20Quiero%20agendar%20una%20cita%20con%20${encodeURIComponent(barber.name)}%20en%20TRIUM`} target="_blank" rel="noopener noreferrer">
                    <Calendar size={16} />
                    Reservar con {barber.name.split(" ")[0]}
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
