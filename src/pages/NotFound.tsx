import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="relative overflow-hidden pattern-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-4xl px-6 py-24 md:py-32">
          <div className="flex items-center gap-4 opacity-0 animate-fade-up">
            <div className="w-10 h-px bg-primary" />
            <span className="text-sm uppercase tracking-[0.3em] text-primary font-medium">
              Ruta perdida
            </span>
          </div>
          <div className="mt-8 space-y-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-light tracking-tight opacity-0 animate-slide-in-left">
              404
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl opacity-0 animate-fade-up">
              La página que buscas no habita este archivo. Quizá se esconda en otro pasillo del
              relato.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2 opacity-0 animate-fade-up">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-display text-lg rounded-full transition-all duration-300 hover:gap-5 hover:shadow-lg hover:shadow-primary/20"
              >
                Volver al inicio
              </Link>
              <Link
                to="/obras"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-primary/30 text-primary font-display text-lg rounded-full transition-all duration-300 hover:border-primary hover:bg-primary/10"
              >
                Explorar el archivo
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute top-24 right-8 lg:right-16 w-24 lg:w-32 h-24 lg:h-32 border-t border-r border-primary/20 opacity-0 animate-fade-in hidden md:block pointer-events-none" />
        <div className="absolute bottom-24 left-8 lg:left-16 w-20 lg:w-24 h-20 lg:h-24 border-b border-l border-primary/20 opacity-0 animate-fade-in hidden md:block pointer-events-none" />
      </section>
    </Layout>
  );
};

export default NotFound;
