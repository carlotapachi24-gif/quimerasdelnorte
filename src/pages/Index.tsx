import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { origen, autores } from "@/data/content";
import { ArrowDown, ArrowRight, BookOpen, Film, Compass, Info } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative px-6 pattern-bg">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-8">
            {/* Decorative element */}
            <div className="w-16 h-px bg-primary opacity-0 animate-line-grow" style={{ animationDelay: '0.2s' }} />
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-light leading-[0.9] tracking-tight">
              <span className="block overflow-hidden">
                <span className="block text-primary opacity-0 animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
                  Quimeras
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="block text-foreground opacity-0 animate-slide-in-left" style={{ animationDelay: '0.5s' }}>
                  del Norte
                </span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-2xl leading-relaxed font-light opacity-0 animate-fade-up" style={{ animationDelay: '0.7s' }}>
              {origen.intro}
            </p>

            {/* CTA Button */}
            <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.9s' }}>
              <Link 
                to="/origen"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-display text-lg transition-all duration-300 hover:gap-5 hover:shadow-lg hover:shadow-primary/20"
              >
                Descubrir la historia
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Explorar</span>
          <ArrowDown className="text-primary animate-float" size={24} />
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-24 right-12 w-32 h-32 border-t border-r border-primary/20 opacity-0 animate-fade-in hidden lg:block" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-24 left-12 w-24 h-24 border-b border-l border-primary/20 opacity-0 animate-fade-in hidden lg:block" style={{ animationDelay: '1.1s' }} />
      </section>

      {/* Origin Fragment */}
      <section className="py-32 md:py-40 px-6 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="container mx-auto max-w-4xl relative">
          <div className="space-y-16">
            {/* Section indicator */}
            <div className="flex items-center gap-4 opacity-0 animate-fade-up">
              <div className="w-8 h-px bg-primary" />
              <span className="text-sm uppercase tracking-widest text-primary font-medium">El Origen</span>
            </div>

            <p className="body-large text-foreground/80 opacity-0 animate-fade-up leading-[1.8]" style={{ animationDelay: '0.2s' }}>
              {origen.historia}
            </p>
            
            {/* Enhanced quote */}
            <div className="relative py-8 opacity-0 animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="absolute -left-4 top-0 text-8xl text-primary/10 font-display leading-none select-none">"</div>
              <blockquote className="editorial-quote text-primary/90 relative z-10">
                {origen.citaRosa}
                <footer className="text-base text-muted-foreground mt-6 not-italic flex items-center gap-2">
                  <span className="w-6 h-px bg-muted-foreground/50" />
                  Rosa, percibiendo el desastre
                </footer>
              </blockquote>
            </div>

            <div className="pt-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <Link 
                to="/origen" 
                className="link-arrow text-lg group"
              >
                <span className="relative">
                  Leer la historia completa
                  <span className="absolute bottom-0 left-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Authors Section */}
      <section className="py-32 md:py-40 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
            <div>
              <div className="flex items-center gap-4 mb-4 opacity-0 animate-fade-up">
                <div className="w-8 h-px bg-primary" />
                <span className="text-sm uppercase tracking-widest text-primary font-medium">Voces Literarias</span>
              </div>
              <h2 className="section-title text-primary opacity-0 animate-fade-up line-accent" style={{ animationDelay: '0.1s' }}>
                Los Autores
              </h2>
            </div>
            <Link 
              to="/autores" 
              className="link-arrow text-lg opacity-0 animate-fade-up md:pb-2" 
              style={{ animationDelay: '0.2s' }}
            >
              Ver todos
              <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {autores.map((autor, index) => (
              <Link
                key={autor.id}
                to={`/autores#${autor.id}`}
                className="group card-hover p-8 lg:p-10 border border-border bg-background opacity-0 animate-fade-up"
                style={{ animationDelay: `${0.15 * (index + 1)}s` }}
              >
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <span className="text-primary font-display text-lg">{autor.nombre.charAt(0)}</span>
                  </div>
                  <h3 className="text-2xl font-display font-medium text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                    {autor.nombre}
                  </h3>
                  {autor.apodo && (
                    <p className="text-sm text-muted-foreground italic mb-4">
                      «{autor.apodo}»
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground">
                    {autor.lugarNacimiento}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm">Explorar</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Dedication */}
      <section className="py-32 md:py-40 px-6 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 -left-20 w-64 h-64 border border-primary-foreground/50 rounded-full" />
          <div className="absolute bottom-1/4 -right-20 w-48 h-48 border border-primary-foreground/50 rounded-full" />
        </div>
        
        <div className="container mx-auto max-w-3xl text-center relative">
          <div className="space-y-8">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-px bg-primary-foreground/50" />
            </div>
            <p className="text-2xl md:text-3xl lg:text-4xl font-display font-light leading-relaxed">
              {origen.cierre}
            </p>
            <div className="flex justify-center mt-8">
              <div className="w-16 h-px bg-primary-foreground/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-32 md:py-40 px-6 pattern-bg">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-4 opacity-0 animate-fade-up">
            <div className="w-8 h-px bg-primary" />
            <span className="text-sm uppercase tracking-widest text-primary font-medium">Navegar</span>
          </div>
          <h2 className="section-title mb-16 opacity-0 animate-fade-up line-accent" style={{ animationDelay: '0.1s' }}>
            Explorar el archivo
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              { to: "/obras", icon: BookOpen, title: "Obras", desc: "El catálogo completo de obras literarias de todos los autores." },
              { to: "/archivo", icon: Film, title: "Filmografía", desc: "El archivo cinematográfico de referencia de Jacobo Carracedo." },
              { to: "/tematicas", icon: Compass, title: "Temáticas", desc: "Los ejes conceptuales del trabajo de Mª Rosa Constenla Fernández." },
              { to: "/sobre", icon: Info, title: "Sobre el proyecto", desc: "La razón de ser de este espacio virtual." },
            ].map((item, index) => (
              <Link 
                key={item.to}
                to={item.to}
                className="group card-hover p-10 lg:p-12 bg-secondary/30 border border-transparent opacity-0 animate-fade-up"
                style={{ animationDelay: `${0.15 * (index + 1)}s` }}
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <item.icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-display font-medium text-foreground group-hover:text-primary transition-colors duration-300 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-primary">
                    <span className="text-sm">Acceder</span>
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;