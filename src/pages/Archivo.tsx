import { Layout } from "@/components/layout/Layout";
import { filmografia } from "@/data/content";
import { useState } from "react";
import { BookOpen, ExternalLink } from "lucide-react";

const Archivo = () => {
  const [filter, setFilter] = useState<string>("");
  const UNA_NOCHE_EN_LA_OPERA_PDF = "/1935 - Una noche en la ópera.pdf";
  const CHINATOWN_1974_PDF = "/1974 - Chinatown.pdf";
  const SUNSET_BOULEVARD_1950_PDF = "/1950 - Sunset Boulevard.pdf";

  // Helper to return a PDF URL for a given film (if available)
  const getFilmPdfUrl = (pelicula: { titulo: string; anio: number }) => {
    if (pelicula.anio === 1935 && pelicula.titulo === "Una noche en la ópera") return UNA_NOCHE_EN_LA_OPERA_PDF;
    if (pelicula.anio === 1974 && pelicula.titulo === "Chinatown") return CHINATOWN_1974_PDF;
    if (pelicula.anio === 1950 && pelicula.titulo === "Sunset Boulevard") return SUNSET_BOULEVARD_1950_PDF;
    return undefined;
  };

  // Only consider films that have an attached PDF
  const peliculasConPdf = filmografia.filter((f) => !!getFilmPdfUrl(f));

  const decadas = [...new Set(peliculasConPdf.map((f) => Math.floor(f.anio / 10) * 10))];

  const peliculasFiltradas = filter
    ? peliculasConPdf.filter((f) => Math.floor(f.anio / 10) * 10 === parseInt(filter))
    : peliculasConPdf;

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light text-primary mb-8 opacity-0 animate-fade-up">
            Archivo
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Filmografía de referencia de Jacobo Carracedo Cusidó
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-4 px-6 border-y border-border bg-white/60 backdrop-blur-md sticky top-20 z-40">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm text-muted-foreground uppercase tracking-widest">Década:</span>
            <button
              onClick={() => setFilter("")}
              className={`px-4 py-2 text-sm rounded-full border transition-colors ${
                !filter
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-primary/50 text-primary bg-transparent hover:bg-primary/5"
              }`}
            >
              Todas
            </button>
            {decadas.map((decada) => (
              <button
                key={decada}
                onClick={() => setFilter(String(decada))}
                className={`px-4 py-2 text-sm rounded-full border transition-colors ${
                  filter === String(decada)
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-primary/50 text-primary bg-transparent hover:bg-primary/5"
                }`}
              >
                {decada}s
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Filmography */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-1">
            {peliculasFiltradas.map((pelicula, index) => {
              const pdfUrl = getFilmPdfUrl(pelicula)!;

              return (
                <article
                  key={`${pelicula.titulo}-${pelicula.anio}`}
                  className="group border-b border-border/40 hover:bg-primary/5 transition-colors px-4 -mx-4"
                >
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid grid-cols-12 gap-4 py-4"
                  >
                    <div className="col-span-1 text-muted-foreground text-sm">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <span className="text-primary font-display text-lg">
                        {pelicula.anio}
                      </span>
                    </div>
                    <div className="col-span-9 md:col-span-5">
                      <h3 className="text-lg font-display text-foreground group-hover:text-primary transition-colors">
                        {pelicula.titulo}
                      </h3>
                    </div>
                    <div className="col-span-12 md:col-span-5 md:text-right">
                      <div className="inline-flex items-center justify-end gap-2">
                        <span className="text-muted-foreground">{pelicula.director}</span>
                        <ExternalLink size={16} className="text-primary" />
                        <span className="sr-only">Ver documento</span>
                      </div>
                    </div>
                  </a>
                </article>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-6xl md:text-7xl font-display font-light text-primary mb-4">
              {peliculasFiltradas.length}
            </p>
            <p className="text-muted-foreground uppercase tracking-widest text-sm">
              Películas en el archivo
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 bg-primary/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="section-title text-center mb-16">
            1925 — 2005
          </h2>
          <p className="text-center text-muted-foreground body-large max-w-2xl mx-auto">
            Ochenta años de historia del cine recogidos en un listado personal que abarca desde la era del cine mudo hasta el nuevo milenio.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Archivo;
