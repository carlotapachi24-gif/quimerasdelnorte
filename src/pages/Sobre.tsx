import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Sobre = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light text-primary mb-8 opacity-0 animate-fade-up">
            Sobre el proyecto
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-3xl space-y-12">
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <p className="body-large text-foreground leading-relaxed">
              Quimeras del Norte es un espacio virtual donde un grupo de autores comparten sus obras literarias sin necesidad de convivir físicamente.
            </p>
          </div>

          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <p className="body-large text-foreground leading-relaxed">
              La historia de este espacio se gestó en la década de los ochenta del siglo pasado, cuando un grupo de personas se reunió en Compostela con la intención de fundar una revista literaria donde expresar sus inquietudes culturales.
            </p>
          </div>

          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <p className="body-large text-foreground leading-relaxed">
              Aquella reunión no prosperó, pero el tiempo y la tecnología han permitido que estos personajes finalmente compartan un espacio común. No todos pudieron hacerlo: algunos ya solo comparten las obras que escribieron en vida.
            </p>
          </div>

          <div className="pt-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <p className="text-2xl md:text-3xl font-display font-light text-primary leading-relaxed">
              Este espacio va dedicado a ellos.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-24 px-6 bg-secondary/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="section-title mb-12">Explorar</h2>
          <div className="space-y-4">
            <Link 
              to="/origen"
              className="flex items-center justify-between p-6 border border-border hover:border-primary/50 transition-colors group"
            >
              <span className="text-xl font-display text-foreground group-hover:text-primary transition-colors">
                Leer la historia completa del origen
              </span>
              <ArrowRight className="text-primary" />
            </Link>
            <Link 
              to="/autores"
              className="flex items-center justify-between p-6 border border-border hover:border-primary/50 transition-colors group"
            >
              <span className="text-xl font-display text-foreground group-hover:text-primary transition-colors">
                Conocer a los autores
              </span>
              <ArrowRight className="text-primary" />
            </Link>
            <Link 
              to="/obras"
              className="flex items-center justify-between p-6 border border-border hover:border-primary/50 transition-colors group"
            >
              <span className="text-xl font-display text-foreground group-hover:text-primary transition-colors">
                Explorar las obras
              </span>
              <ArrowRight className="text-primary" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
