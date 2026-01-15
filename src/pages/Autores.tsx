import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { autores, type Obra } from "@/data/content";
import { FileText } from "lucide-react";
import { getPdfUrl } from "@/lib/utils";

const SAULO_PDF_URL = "https://xlpazpfnsevawhxhqhxz.supabase.co/storage/v1/object/public/saulo2/Documento_reestructurado.pdf";

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
            {autores.map((autor) => {
              const isActive = location.hash === `#${autor.id}`;
              return (
              <a
                key={autor.id}
                href={`#${autor.id}`}
                className={`inline-flex items-center px-4 py-2 rounded-full border transition-colors font-display text-lg ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-primary/50 text-primary bg-transparent hover:bg-primary/5"
                }`}
              >
                {autor.nombre.split(' ')[0]}
              </a>
              );
            })}
          </nav>
        </div>
      </section>

      {/* Authors */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl space-y-32">
          {autores.map((autor, index) => {
            const obrasPublicadas = Array.from(
              autor.obras.reduce((acc, obra) => {
                const titulo = typeof obra === "string" ? obra : obra.titulo;
                const existente = acc.get(titulo);
                if (!existente || typeof existente === "string") {
                  acc.set(titulo, obra);
                }
                return acc;
              }, new Map<string, Obra>()).values(),
            ).filter((obra) => {
              if (typeof obra === "string") return !!getPdfUrl(autor.id, obra);
              if (obra.pdf) return true;
              return (obra.partes || []).some((p) => !!p.pdf);
            });

            return (
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

              {obrasPublicadas.length > 0 && (
                <div className="pt-8 border-t border-border">
                  <h3 className="text-xl font-display font-medium text-primary mb-6">
                    Obras
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                    {obrasPublicadas.map((obraEntry) => {
                      if (typeof obraEntry === "string") {
                        return (
                          <li key={obraEntry} className="text-foreground/80 py-1">
                            {obraEntry}
                          </li>
                        );
                      }

                      if (obraEntry.pdf) {
                        return (
                          <li key={obraEntry.titulo} className="text-foreground/80 py-1">
                            {obraEntry.titulo}
                          </li>
                        );
                      }

                      return (
                        <li key={obraEntry.titulo} className="text-foreground/80 py-1">
                          {obraEntry.titulo}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {/* Filmografía link for Jacobo */}
              {autor.id === "jacobo-carracedo" && (
                <div className="pt-8 border-t border-border mt-8">
                  <Link
                    to="/archivo"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-display text-lg"
                  >
                    <FileText className="w-5 h-5" />
                    Ver filmografía de referencia completa
                  </Link>
                </div>
              )}

              {/* PDF Document for Saulo */}
              {autor.id === "saulo" && (
                <div className="pt-8 border-t border-border mt-8">
                  <h3 className="text-xl font-display font-medium text-primary mb-6 flex items-center gap-3">
                    <FileText className="w-5 h-5" />
                    Documento
                  </h3>
                  <div className="bg-secondary/30 rounded-2xl overflow-hidden">
                    <iframe
                      src={SAULO_PDF_URL}
                      className="w-full h-[600px] md:h-[800px]"
                      title="Documento de Saulo Avendaño Silva"
                    />
                  </div>
                  <a
                    href={SAULO_PDF_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-primary hover:text-primary/80 transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    Descargar documento PDF
                  </a>
                </div>
              )}



              {index < autores.length - 1 && (
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mt-16" />
              )}
            </article>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Autores;
