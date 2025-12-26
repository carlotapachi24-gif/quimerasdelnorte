import { Layout } from "@/components/layout/Layout";
import { autores } from "@/data/content";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const rosa = autores.find((a) => a.id === "rosa-constenla");
const tematicas = rosa?.tematicas || [];

const Tematicas = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light text-primary mb-8 opacity-0 animate-fade-up">
            Temáticas
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Los ejes conceptuales del trabajo de Mª Rosa Constenla Fernández
          </p>
        </div>
      </section>

      {/* Author Reference */}
      <section className="py-8 px-6 border-y border-border bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <Link 
            to="/autores#rosa-constenla"
            className="inline-flex items-center gap-4 group"
          >
            <span className="text-foreground/70 group-hover:text-primary transition-colors">
              Autora:
            </span>
            <span className="text-foreground group-hover:text-primary transition-colors font-display text-lg">
              Mª Rosa Constenla Fernández
            </span>
          </Link>
        </div>
      </section>

      {/* Themes Grid */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tematicas.map((tema, index) => {
              const isVasectomia = tema === "Vasectomía";

              if (isVasectomia) {
                return (
                  <a
                    key={tema}
                    href="/VASECTOMÍA.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aspect-square flex items-center justify-center p-8 border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 group opacity-0 animate-fade-up"
                    style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                  >
                    <h2 className="text-2xl md:text-3xl font-display font-medium text-center group-hover:scale-105 transition-transform duration-500 flex items-center gap-2">
                      {tema}
                      <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h2>
                  </a>
                );
              }

              return (
                <article
                  key={tema}
                  className="aspect-square flex items-center justify-center p-8 border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 group opacity-0 animate-fade-up"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <h2 className="text-2xl md:text-3xl font-display font-medium text-center group-hover:scale-105 transition-transform duration-500">
                    {tema}
                  </h2>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="py-24 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-xl md:text-2xl font-display font-light leading-relaxed">
            Inspirada por Miguel Gila, Rosa comenzó a escribir piezas humorístico-satíricas en forma de monólogos que exploran estos ocho ejes temáticos.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-8xl md:text-9xl font-display font-light text-primary mb-8">
            {tematicas.length}
          </p>
          <p className="text-muted-foreground uppercase tracking-widest">
            Ejes temáticos
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Tematicas;
