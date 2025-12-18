import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { autores } from "@/data/content";

const SAULO_PDF_URL = "https://xlpazpfnsevawhxhqhxz.supabase.co/storage/v1/object/public/saulo2//Documento_reestructurado.pdf";

const Obras = () => {
  const autoresConObras = autores.filter((autor) => autor.obras.length > 0);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light text-primary mb-8 opacity-0 animate-fade-up">
            Obras
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            El catálogo literario completo
          </p>
        </div>
      </section>

      {/* Works by Author */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl space-y-24">
          {autoresConObras.map((autor, index) => (
            <article key={autor.id} className="opacity-0 animate-fade-up" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <header className="mb-8">
                <Link 
                  to={`/autores#${autor.id}`}
                  className="group inline-block"
                >
                  <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground group-hover:text-primary transition-colors">
                    {autor.nombre}
                  </h2>
                  {autor.apodo && (
                    <p className="text-muted-foreground italic mt-1">
                      «{autor.apodo}»
                    </p>
                  )}
                </Link>
              </header>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {autor.obras.map((obra, obraIndex) => {
                  const isSauloDesesperanzas = autor.id === "saulo-avendano" && obra.toLowerCase().includes("desesperanzas");
                  
                  if (isSauloDesesperanzas) {
                    return (
                      <a
                        key={obra}
                        href={SAULO_PDF_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-6 border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-pointer"
                      >
                        <span className="text-xs text-muted-foreground block mb-2">
                          {String(obraIndex + 1).padStart(2, '0')}
                        </span>
                        <h3 className="text-lg font-display text-foreground group-hover:text-primary transition-colors">
                          {obra}
                        </h3>
                      </a>
                    );
                  }
                  
                  return (
                    <div
                      key={obra}
                      className="group p-6 border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                    >
                      <span className="text-xs text-muted-foreground block mb-2">
                        {String(obraIndex + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-lg font-display text-foreground group-hover:text-primary transition-colors">
                        {obra}
                      </h3>
                    </div>
                  );
                })}
              </div>

              {index < autoresConObras.length - 1 && (
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mt-16" />
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 bg-primary/5 mt-16">
        <div className="container mx-auto max-w-4xl">
          <div className="grid sm:grid-cols-2 gap-12 text-center">
            <div>
              <p className="text-6xl md:text-7xl font-display font-light text-primary mb-4">
                {autoresConObras.length}
              </p>
              <p className="text-muted-foreground uppercase tracking-widest text-sm">
                Autores con obra
              </p>
            </div>
            <div>
              <p className="text-6xl md:text-7xl font-display font-light text-primary mb-4">
                {autoresConObras.reduce((acc, autor) => acc + autor.obras.length, 0)}
              </p>
              <p className="text-muted-foreground uppercase tracking-widest text-sm">
                Obras totales
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Obras;
