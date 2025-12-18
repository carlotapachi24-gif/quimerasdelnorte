import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { autores } from "@/data/content";
import { Link } from "react-router-dom";

const Autores = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light text-primary mb-8 opacity-0 animate-fade-up">
            Autores
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Las voces que dan vida a este espacio literario
          </p>
        </div>
      </section>

      {/* Author Index */}
      <section className="py-8 px-6 border-y border-border bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <nav className="flex flex-wrap gap-4 md:gap-8">
            {autores.map((autor) => (
              <a
                key={autor.id}
                href={`#${autor.id}`}
                className="text-foreground/70 hover:text-primary transition-colors font-display text-lg"
              >
                {autor.nombre.split(' ')[0]}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Authors */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl space-y-32">
          {autores.map((autor, index) => (
            <article
              key={autor.id}
              id={autor.id}
              className="scroll-mt-32"
            >
              <header className="mb-12">
                <h2 className="author-title mb-4">
                  {autor.nombre}
                </h2>
                {autor.apodo && (
                  <p className="text-xl text-muted-foreground italic mb-6">
                    «{autor.apodo}»
                  </p>
                )}
                <div className="flex flex-wrap gap-x-8 gap-y-2 text-muted-foreground">
                  <p>
                    <span className="text-foreground/70">Nacimiento:</span>{" "}
                    {autor.nacimiento}, {autor.lugarNacimiento}
                  </p>
                  {autor.fallecimiento && (
                    <p>
                      <span className="text-foreground/70">Fallecimiento:</span>{" "}
                      {autor.fallecimiento}
                    </p>
                  )}
                  {autor.desaparicion && (
                    <p>
                      <span className="text-foreground/70">Desaparición:</span>{" "}
                      {autor.desaparicion}
                    </p>
                  )}
                  {autor.denunciaOficial && (
                    <p>
                      <span className="text-foreground/70">Denuncia oficial:</span>{" "}
                      {autor.denunciaOficial}
                    </p>
                  )}
                </div>
              </header>

              <div className="space-y-6 mb-12">
                {autor.biografia.map((parrafo, i) => (
                  <p key={i} className="body-large text-foreground/90 leading-relaxed">
                    {parrafo}
                  </p>
                ))}
              </div>

              {autor.obras.length > 0 && (
                <div className="pt-8 border-t border-border">
                  <h3 className="text-xl font-display font-medium text-primary mb-6">
                    Obras
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                    {autor.obras.map((obra) => (
                      <li key={obra} className="text-foreground/80 py-1">
                        {obra}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {autor.tematicas && autor.tematicas.length > 0 && (
                <div className="pt-8 border-t border-border mt-8">
                  <h3 className="text-xl font-display font-medium text-primary mb-6">
                    Temáticas
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {autor.tematicas.map((tema) => (
                      <Link
                        key={tema}
                        to="/tematicas"
                        className="px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      >
                        {tema}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {index < autores.length - 1 && (
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mt-16" />
              )}
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Autores;
