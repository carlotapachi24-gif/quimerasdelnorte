import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-secondary/20 py-20 mt-24 overflow-hidden">
      {/* Decorative elements */}
      {/* QUITADA la línea vertical izquierda */}
      {/* <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-primary/20 to-transparent" /> */}
      <div className="absolute top-0 right-1/3 w-px h-24 bg-gradient-to-b from-primary/10 to-transparent" />

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
          <div className="max-w-md">
            <div className="flex items-center gap-4 mb-6">
              {/* Logo en vez de texto + quitada la raya horizontal */}
              <Link to="/" className="inline-flex items-center">
                <img
                  src="/Logo color PNG.png"
                  alt="Quimeras del Norte"
                  className="h-10 sm:h-12 lg:h-14 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </Link>
            </div>

            <p className="text-muted-foreground leading-relaxed text-lg">
              Un espacio virtual donde las voces literarias del norte comparten sus obras, sin necesidad de convivir físicamente.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-16">
            <div>
              <h4 className="text-sm uppercase tracking-widest text-foreground mb-6 font-medium">Explorar</h4>
              <nav className="flex flex-col gap-3">
                {[
                  { to: "/origen", label: "El Origen" },
                  { to: "/autores", label: "Autores" },
                  { to: "/obras", label: "Obras" },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-muted-foreground hover:text-primary transition-colors group inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-widest text-foreground mb-6 font-medium">Archivo</h4>
              <nav className="flex flex-col gap-3">
                {[
                  { to: "/archivo", label: "Filmografía" },
                  { to: "/tematicas", label: "Temáticas" },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-muted-foreground hover:text-primary transition-colors group inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-widest text-foreground mb-6 font-medium">Proyecto</h4>
              <nav className="flex flex-col gap-3">
                <Link
                  to="/sobre"
                  className="text-muted-foreground hover:text-primary transition-colors group inline-flex items-center gap-1"
                >
                  Sobre el proyecto
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground italic font-display text-lg">
              Dedicado a quienes solo comparten las obras que escribieron en vida.
            </p>
            <p className="text-xs text-muted-foreground/60">
              © {new Date().getFullYear()} Quimeras del Norte
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
