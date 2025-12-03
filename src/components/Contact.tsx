import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Instagram, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hola! Soy ${formData.name}. ${formData.message}. Mi teléfono es ${formData.phone}`;
    window.open(
      `https://wa.me/573246511522?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
  };

  return (
    <section id="contacto" className="py-24 md:py-32 bg-background">
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
            Contáctanos
          </span>
          <h2 className="section-title">Visítanos</h2>
          <p className="section-subtitle mx-auto">
            Estamos listos para atenderte. Reserva tu cita o visítanos
            directamente.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="service-card">
                <MapPin className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-display font-bold text-foreground mb-1">
                  Ubicación
                </h3>
                <p className="text-sm text-muted-foreground">
                  Magangué, Bolívar
                  <br />
                  Colombia
                </p>
              </div>

              <div className="service-card">
                <Clock className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-display font-bold text-foreground mb-1">
                  Horarios
                </h3>
                <p className="text-sm text-muted-foreground">
                  Lun - Sáb: 9am - 8pm
                  <br />
                  Dom: 10am - 6pm
                </p>
              </div>

              <div className="service-card">
                <Phone className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-display font-bold text-foreground mb-1">
                  Teléfono
                </h3>
                <p className="text-sm text-muted-foreground">
                  +57 324 651 1522
                </p>
              </div>

              <div className="service-card">
                <Instagram className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-display font-bold text-foreground mb-1">
                  Instagram
                </h3>
                <p className="text-sm text-muted-foreground">@triumboutique</p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground">
                    WhatsApp Directo
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Respuesta inmediata
                  </p>
                </div>
              </div>
              <Button variant="whatsapp" className="w-full" size="lg" asChild>
                <a
                  href="https://wa.me/573246511522?text=Hola!%20Quiero%20reservar%20una%20cita"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={20} />
                  Escríbenos ahora
                </a>
              </Button>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-border h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31441.893947775424!2d-74.77!3d9.24!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5b5a6e4c6e8c5d%3A0x1234567890abcdef!2sMagangué%2C%20Bol%C3%ADvar!5e0!3m2!1ses!2sco!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de TRIUM"
              />
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                Envíanos un mensaje
              </h3>
              <p className="text-muted-foreground mb-6">
                Completa el formulario y te contactaremos pronto.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="+57 300 000 0000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                    placeholder="¿En qué podemos ayudarte?"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send size={18} />
                  Enviar mensaje
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
