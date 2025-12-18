import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { origen, autores } from "@/data/content";
import { ArrowDown, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-8 opacity-0 animate-fade-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light text-primary leading-tight tracking-tight">
              Quimeras<br />
              <span className="text-foreground">del Norte</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-light">
              {origen.intro}
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-primary/50" size={32} />
        </div>
      </section>

      {/* Origin Fragment */}
      <section className="py-24 md:py-32 px-6 bg-primary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            <p className="body-large text-foreground/80 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              {origen.historia}
            </p>
            
            <blockquote className="editorial-quote text-primary opacity-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              {origen.citaRosa}
              <footer className="text-base text-muted-foreground mt-4 not-italic">
                — Rosa, percibiendo el desastre
              </footer>
            </blockquote>

            <div className="pt-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <Link 
                to="/origen" 
                className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all duration-300 text-lg"
              >
                Leer la historia completa
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Authors Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title text-primary mb-16 opacity-0 animate-fade-up">
            Los Autores
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {autores.map((autor, index) => (
              <Link
                key={autor.id}
                to={`/autores#${autor.id}`}
                className="group p-8 border border-border hover:border-primary/50 transition-all duration-500 opacity-0 animate-fade-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <h3 className="text-2xl font-display font-medium text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                  {autor.nombre}
                </h3>
                {autor.apodo && (
                  <p className="text-sm text-muted-foreground italic mb-4">
                    «{autor.apodo}»
                  </p>
                )}
                <p className="text-sm text-muted-foreground">
                  {autor.lugarNacimiento}, {autor.nacimiento.split(',')[0]}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center opacity-0 animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <Link 
              to="/autores" 
              className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all duration-300 text-lg"
            >
              Ver todos los autores
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Dedication */}
      <section className="py-24 md:py-32 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-xl md:text-2xl lg:text-3xl font-display font-light leading-relaxed">
            {origen.cierre}
          </p>
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title mb-16">Explorar el archivo</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Link 
              to="/obras"
              className="group p-12 bg-secondary/50 hover:bg-secondary transition-colors duration-300"
            >
              <h3 className="text-3xl font-display font-medium text-foreground group-hover:text-primary transition-colors mb-4">
                Obras
              </h3>
              <p className="text-muted-foreground">
                El catálogo completo de obras literarias de todos los autores.
              </p>
            </Link>
            
            <Link 
              to="/archivo"
              className="group p-12 bg-secondary/50 hover:bg-secondary transition-colors duration-300"
            >
              <h3 className="text-3xl font-display font-medium text-foreground group-hover:text-primary transition-colors mb-4">
                Filmografía
              </h3>
              <p className="text-muted-foreground">
                El archivo cinematográfico de referencia de Jacobo Carracedo.
              </p>
            </Link>
            
            <Link 
              to="/tematicas"
              className="group p-12 bg-secondary/50 hover:bg-secondary transition-colors duration-300"
            >
              <h3 className="text-3xl font-display font-medium text-foreground group-hover:text-primary transition-colors mb-4">
                Temáticas
              </h3>
              <p className="text-muted-foreground">
                Los ejes conceptuales del trabajo de Mª Rosa Constenla Fernández.
              </p>
            </Link>
            
            <Link 
              to="/sobre"
              className="group p-12 bg-secondary/50 hover:bg-secondary transition-colors duration-300"
            >
              <h3 className="text-3xl font-display font-medium text-foreground group-hover:text-primary transition-colors mb-4">
                Sobre el proyecto
              </h3>
              <p className="text-muted-foreground">
                La razón de ser de este espacio virtual.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
