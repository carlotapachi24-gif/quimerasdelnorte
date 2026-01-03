import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { autores } from "@/data/content";
import { BookOpen, ExternalLink, ArrowRight } from "lucide-react";
import { getPdfUrl } from "@/lib/utils"; 

const Obras = () => {
  // Only show authors and works that have an associated PDF
  const autoresConObras = autores.filter((autor) => autor.obras.some((obra) => {
    if (typeof obra === "string") return !!getPdfUrl(autor.id, obra);
    if (obra.pdf) return true;
    return (obra.partes || []).some((p) => !!p.pdf);
  }));

  const totalObras = autores.reduce((acc, autor) => acc + autor.obras.filter((obra) => {
    if (typeof obra === "string") return !!getPdfUrl(autor.id, obra);
    if (obra.pdf) return true;
    return (obra.partes || []).some((p) => !!p.pdf);
  }).length, 0);



  return (
    <Layout>
      {/* Hero */}
      <section className="pt-28 pb-16 px-6 pattern-bg relative">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="flex items-center gap-4 mb-4 opacity-0 animate-fade-up">
            <div className="w-8 h-px bg-primary" />
            <span className="text-sm uppercase tracking-widest text-primary font-medium">Catálogo</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light text-primary mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Obras
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl opacity-0 animate-fade-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
            El archivo literario completo de los autores de Quimeras del Norte
          </p>

          {/* Quick stats */}
          <div className="flex gap-8 md:gap-12 mt-10 opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-2xl font-display font-light text-primary">{totalObras}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Obras</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-display">{autoresConObras.length}</span>
              </div>
              <div>
                <p className="text-2xl font-display font-light text-primary">{autoresConObras.length}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Autores</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative element - behind content */}
        <div className="absolute top-28 right-8 lg:right-16 w-24 lg:w-32 h-24 lg:h-32 border-t border-r border-primary/15 hidden md:block opacity-0 animate-fade-in pointer-events-none" style={{ animationDelay: '0.5s' }} />
      </section>

      {/* Author index */}
      <section className="py-4 px-6 border-y border-border bg-background/95 sticky top-[88px] z-40 backdrop-blur-sm">
        <div className="container mx-auto max-w-5xl">
          <nav className="flex flex-wrap gap-3 md:gap-5">
            {autoresConObras.map((autor, index) => (
              <a
                key={autor.id}
                href={`#obras-${autor.id}`}
                className="text-foreground/70 hover:text-primary transition-colors font-display text-sm md:text-base group flex items-center gap-1"
              >
                {autor.nombre.split(' ')[0]}
                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Works by Author */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl space-y-24">
          {autoresConObras.map((autor, index) => (
            <article 
              key={autor.id} 
              id={`obras-${autor.id}`}
              className="scroll-mt-32 opacity-0 animate-fade-up" 
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
                {autor.obras
                  .filter((obra) => {
                    if (typeof obra === "string") return !!getPdfUrl(autor.id, obra);
                    // object: visible only if pdf or at least one parte has pdf
                    if (obra.pdf) return true;
                    return (obra.partes || []).some((p) => !!p.pdf);
                  })
                  .map((obraEntry, obraIndex) => {
                    const titulo = typeof obraEntry === "string" ? obraEntry : obraEntry.titulo;

                    // obra object with partes
                    if (typeof obraEntry !== "string" && obraEntry.partes && obraEntry.partes.length > 0) {
                      const partesVisibles = obraEntry.partes.filter((p) => !!p.pdf);

                      return (
                        <article
                          key={titulo}
                          className="group card-hover p-6 lg:p-8 border border-border bg-background"
                        >
                          <div className="relative z-10">
                            <div className="flex items-center justify-between mb-4">
                              <span className="text-xs text-primary font-medium uppercase tracking-wider">
                                {String(obraIndex + 1).padStart(2, "0")}
                              </span>
                            </div>
                            <h3 className="text-lg lg:text-xl font-display text-foreground mb-4">
                              {titulo}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                              {partesVisibles.map((parte) => (
                                <a
                                  key={parte.id}
                                  href={parte.pdf}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-3 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                                >
                                  {parte.titulo}
                                </a>
                              ))}
                            </div>
                          </div>
                        </article>
                      );
                    }

                    // obra with single PDF (string or object with pdf)
                    const pdfUrl = typeof obraEntry === "string" ? getPdfUrl(autor.id, obraEntry) : obraEntry.pdf;

                    return (
                      <a
                        key={titulo}
                        href={pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group card-hover p-6 lg:p-8 border border-border bg-background"
                      >
                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-xs text-primary font-medium uppercase tracking-wider">
                              {String(obraIndex + 1).padStart(2, "0")}
                            </span>
                            <ExternalLink size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <h3 className="text-lg lg:text-xl font-display text-foreground group-hover:text-primary transition-colors leading-tight">
                            {titulo}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1">
                            <BookOpen size={12} />
                            Ver documento
                          </p>
                        </div>
                      </a>
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
      <section className="py-24 px-6 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Decorative circles - behind content */}
        <div className="absolute -top-16 -left-16 w-48 h-48 border border-primary-foreground/10 rounded-full pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 border border-primary-foreground/10 rounded-full pointer-events-none" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-light mb-4">El archivo en números</h2>
            <div className="w-16 h-px bg-primary-foreground/30 mx-auto" />
          </div>
          
          <div className="grid sm:grid-cols-2 gap-12 text-center">
            <div className="space-y-3">
              <p className="text-5xl md:text-6xl font-display font-light">
                {autoresConObras.length}
              </p>
              <p className="text-primary-foreground/70 uppercase tracking-widest text-xs">
                Autores con obra
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-5xl md:text-6xl font-display font-light">
                {totalObras}
              </p>
              <p className="text-primary-foreground/70 uppercase tracking-widest text-xs">
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