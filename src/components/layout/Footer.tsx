import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16 mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-sm">
            <h3 className="text-2xl font-display font-medium text-primary mb-4">
              Quimeras del Norte
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Un espacio virtual donde las voces literarias del norte comparten sus obras, sin necesidad de convivir físicamente.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <h4 className="text-sm uppercase tracking-widest text-foreground mb-4">Explorar</h4>
              <nav className="flex flex-col gap-2">
                <Link to="/origen" className="text-muted-foreground hover:text-primary transition-colors">El Origen</Link>
                <Link to="/autores" className="text-muted-foreground hover:text-primary transition-colors">Autores</Link>
                <Link to="/obras" className="text-muted-foreground hover:text-primary transition-colors">Obras</Link>
              </nav>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-widest text-foreground mb-4">Archivo</h4>
              <nav className="flex flex-col gap-2">
                <Link to="/archivo" className="text-muted-foreground hover:text-primary transition-colors">Filmografía</Link>
                <Link to="/tematicas" className="text-muted-foreground hover:text-primary transition-colors">Temáticas</Link>
              </nav>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-widest text-foreground mb-4">Proyecto</h4>
              <nav className="flex flex-col gap-2">
                <Link to="/sobre" className="text-muted-foreground hover:text-primary transition-colors">Sobre el proyecto</Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>Dedicado a quienes solo comparten las obras que escribieron en vida.</p>
        </div>
      </div>
    </footer>
  );
}
