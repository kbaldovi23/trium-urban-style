import { Instagram, Phone, MapPin, Mail } from "lucide-react";
import logo from "@/assets/trium-logo.png";

const footerLinks = {
  navigation: [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Barberos", href: "#barberos" },
    { name: "Boutique", href: "#boutique" },
  ],
  services: [
    { name: "Cortes", href: "#servicios" },
    { name: "Diseños", href: "#servicios" },
    { name: "Ropa", href: "#boutique" },
    { name: "Granizados", href: "#granizados" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logo} alt="TRIUM" className="h-10 w-auto mb-4" />
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Moda, precisión y estilo. Tu destino para cortes profesionales,
              ropa exclusiva y bebidas refrescantes en Magangué.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/triumboutique/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="tel:+573001234567"
                className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/80 transition-colors"
                aria-label="Teléfono"
              >
                <Phone size={18} />
              </a>
              <a
                href="mailto:contacto@trium.com"
                className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/80 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">
              Navegación
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">
              Servicios
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">
              Horarios
            </h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                <span className="text-foreground font-medium">Lun - Sáb:</span>{" "}
                9:00 AM - 8:00 PM
              </p>
              <p>
                <span className="text-foreground font-medium">Domingo:</span>{" "}
                10:00 AM - 6:00 PM
              </p>
            </div>
            <div className="mt-6 flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin size={16} className="flex-shrink-0 mt-0.5" />
              <span>Magangué, Bolívar, Colombia</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} TRIUM | Boutique & Barbería. Todos
              los derechos reservados.
            </p>
            <p className="text-sm text-muted-foreground">
              Cortes • Ropa • Granizados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
