import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { autores } from "@/data/content";
import { BookOpen, ExternalLink, ArrowRight } from "lucide-react";

const SAULO_PDF_URL = "https://xlpazpfnsevawhxhqhxz.supabase.co/storage/v1/object/public/saulo2//Documento_reestructurado.pdf";

const Obras = () => {
  const autoresConObras = autores.filter((autor) => autor.obras.length > 0);
  const totalObras = autoresConObras.reduce((acc, autor) => acc + autor.obras.length, 0);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 pattern-bg relative">
        <div className="container mx-auto max-w-5xl relative">
          <div className="flex items-center gap-4 mb-6 opacity-0 animate-fade-up">
            <div className="w-8 h-px bg-primary" />
            <span className="text-sm uppercase tracking-widest text-primary font-medium">Catálogo</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-light text-primary mb-8 opacity-0 animate-fade-up line-accent" style={{ animationDelay: '0.1s' }}>
            Obras
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl opacity-0 animate-fade-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
            El archivo literario completo de los autores de Quimeras del Norte
          </p>

          {/* Quick stats */}
          <div className="flex gap-12 mt-12 opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-3xl font-display font-light text-primary">{totalObras}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Obras</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-display text-lg">{autoresConObras.length}</span>
              </div>
              <div>
                <p className="text-3xl font-display font-light text-primary">{autoresConObras.length}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Autores</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute top-32 right-12 w-32 h-32 border-t border-r border-primary/20 hidden lg:block opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }} />
      </section>

      {/* Author index */}
      <section className="py-8 px-6 border-y border-border bg-secondary/30 sticky top-20 z-40 backdrop-blur-sm">
        <div className="container mx-auto max-w-5xl">
          <nav className="flex flex-wrap gap-4 md:gap-6">
            {autoresConObras.map((autor, index) => (
              <a
                key={autor.id}
                href={`#obras-${autor.id}`}
                className="text-foreground/70 hover:text-primary transition-colors font-display text-base group flex items-center gap-1"
              >
                {autor.nombre.split(' ')[0]}
                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Works by Author */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl space-y-32">
          {autoresConObras.map((autor, index) => (
            <article 
              key={autor.id} 
              id={`obras-${autor.id}`}
              className="scroll-mt-40 opacity-0 animate-fade-up" 
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <header className="mb-10">
                <Link 
                  to={`/autores#${autor.id}`}
                  className="group inline-block"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="text-primary font-display">{autor.nombre.charAt(0)}</span>
                    </div>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">Autor</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-foreground group-hover:text-primary transition-colors">
                    {autor.nombre}
                  </h2>
                  {autor.apodo && (
                    <p className="text-muted-foreground italic mt-2 text-lg">
                      «{autor.apodo}»
                    </p>
                  )}
                </Link>
              </header>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {autor.obras.map((obra, obraIndex) => {
                  const isSauloDesesperanzas = autor.id === "saulo-avendano" && obra.toLowerCase().includes("desesperanzas");
                  
                  if (isSauloDesesperanzas) {
                    return (
                      <a
                        key={obra}
                        href={SAULO_PDF_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group card-hover p-6 lg:p-8 border border-border bg-background"
                      >
                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-xs text-primary font-medium uppercase tracking-wider">
                              {String(obraIndex + 1).padStart(2, '0')}
                            </span>
                            <ExternalLink size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <h3 className="text-lg lg:text-xl font-display text-foreground group-hover:text-primary transition-colors leading-tight">
                            {obra}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1">
                            <BookOpen size={12} />
                            Ver documento
                          </p>
                        </div>
                      </a>
                    );
                  }
                  
                  return (
                    <div
                      key={obra}
                      className="group card-hover p-6 lg:p-8 border border-border bg-background"
                    >
                      <div className="relative z-10">
                        <span className="text-xs text-primary font-medium block mb-4 uppercase tracking-wider">
                          {String(obraIndex + 1).padStart(2, '0')}
                        </span>
                        <h3 className="text-lg lg:text-xl font-display text-foreground group-hover:text-primary transition-colors leading-tight">
                          {obra}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>

              {index < autoresConObras.length - 1 && (
                <div className="section-divider mt-20" />
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-32 px-6 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-20 -left-20 w-64 h-64 border border-primary-foreground/10 rounded-full" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 border border-primary-foreground/10 rounded-full" />
        
        <div className="container mx-auto max-w-4xl relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-light mb-4">El archivo en números</h2>
            <div className="w-16 h-px bg-primary-foreground/30 mx-auto" />
          </div>
          
          <div className="grid sm:grid-cols-2 gap-16 text-center">
            <div className="space-y-4">
              <p className="text-7xl md:text-8xl font-display font-light">
                {autoresConObras.length}
              </p>
              <p className="text-primary-foreground/70 uppercase tracking-widest text-sm">
                Autores con obra
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-7xl md:text-8xl font-display font-light">
                {totalObras}
              </p>
              <p className="text-primary-foreground/70 uppercase tracking-widest text-sm">
                Obras catalogadas
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Obras;