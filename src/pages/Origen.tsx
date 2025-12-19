import { Layout } from "@/components/layout/Layout";
import { origen } from "@/data/content";
import { Users } from "lucide-react";

const Origen = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-24 px-6 pattern-bg relative">
        <div className="container mx-auto max-w-4xl relative">
          <div className="flex items-center gap-4 mb-6 opacity-0 animate-fade-up">
            <div className="w-8 h-px bg-primary" />
            <span className="text-sm uppercase tracking-widest text-primary font-medium">Historia</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-light text-primary mb-8 opacity-0 animate-fade-up line-accent" style={{ animationDelay: '0.1s' }}>
            El Origen
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light opacity-0 animate-fade-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
            La historia de cómo nació este espacio literario
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-32 right-12 w-32 h-32 border-t border-r border-primary/20 hidden lg:block opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }} />
      </section>

      {/* Content */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-3xl space-y-20">
          {/* Intro */}
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-2xl md:text-3xl font-display font-light text-foreground/90 leading-relaxed">
              {origen.intro}
            </p>
          </div>

          <div className="section-divider" />

          {/* Historia */}
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <p className="body-large text-foreground/85 leading-[1.9]">
              {origen.historia}
            </p>
          </div>

          {/* Asistentes */}
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Users size={22} className="text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-light text-primary">
                Asistentes a la reunión
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
              {origen.asistentes.map((asistente, index) => (
                <div 
                  key={asistente.nombre}
                  className="card-hover p-6 lg:p-8 border border-border bg-background"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="relative z-10">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-primary font-display text-sm">{asistente.nombre.charAt(0)}</span>
                    </div>
                    <h3 className="text-xl font-display font-medium text-foreground mb-2">
                      {asistente.nombre}
                    </h3>
                    <p className="text-muted-foreground italic">
                      {asistente.rol}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conflicto */}
          <div className="py-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <p className="body-large text-foreground/85 leading-[1.9]">
              {origen.conflicto}
            </p>
          </div>

          {/* Cita de Rosa - Enhanced */}
          <div className="py-16 relative opacity-0 animate-scale-in" style={{ animationDelay: '0.7s' }}>
            <div className="absolute -left-8 -top-4 text-[10rem] text-primary/5 font-display leading-none select-none hidden md:block">"</div>
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-primary text-center leading-tight relative z-10">
              {origen.citaRosa}
            </blockquote>
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="w-12 h-px bg-primary/30" />
              <p className="text-muted-foreground italic font-display">
                Rosa, percibiendo el desastre
              </p>
              <div className="w-12 h-px bg-primary/30" />
            </div>
          </div>

          {/* Cierre */}
          <div className="py-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <p className="body-large text-foreground/85 leading-[1.9]">
              {origen.cierre}
            </p>
          </div>
        </div>
      </section>

      {/* Dedication Banner */}
      <section className="py-32 px-6 bg-primary text-primary-foreground mt-16 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-20 -left-20 w-64 h-64 border border-primary-foreground/10 rounded-full" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 border border-primary-foreground/10 rounded-full" />
        
        <div className="container mx-auto max-w-3xl text-center relative">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-px bg-primary-foreground/30" />
          </div>
          <p className="text-2xl md:text-3xl lg:text-4xl font-display font-light leading-relaxed">
            Este espacio va dedicado a quienes ya solo comparten las obras que escribieron en vida.
          </p>
          <div className="flex justify-center mt-8">
            <div className="w-16 h-px bg-primary-foreground/30" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Origen;