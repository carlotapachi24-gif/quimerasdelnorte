import { Layout } from "@/components/layout/Layout";
import { origen } from "@/data/content";
import { Users } from "lucide-react";

const Origen = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-28 pb-16 px-6 pattern-bg relative">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="flex items-center gap-4 mb-4 opacity-0 animate-fade-up">
            <div className="w-8 h-px bg-primary" />
            <span className="text-sm uppercase tracking-widest text-primary font-medium">Historia</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light text-primary mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            El Origen
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light opacity-0 animate-fade-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
            La historia de cómo nació este espacio literario
          </p>
        </div>

        {/* Decorative elements - behind content */}
        <div className="absolute top-28 right-8 lg:right-16 w-24 lg:w-32 h-24 lg:h-32 border-t border-r border-primary/15 hidden md:block opacity-0 animate-fade-in pointer-events-none" style={{ animationDelay: '0.5s' }} />
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-3xl space-y-16">
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
          <div className="py-12 relative opacity-0 animate-scale-in" style={{ animationDelay: '0.7s' }}>
            <div className="absolute left-0 top-0 text-6xl md:text-8xl text-primary/5 font-display leading-none select-none pointer-events-none">"</div>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-display font-light text-primary text-center leading-snug relative z-10 px-4 md:px-8">
              {origen.citaRosa}
            </blockquote>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="w-10 h-px bg-primary/30" />
              <p className="text-sm text-muted-foreground italic font-display">
                Rosa, percibiendo el desastre
              </p>
              <div className="w-10 h-px bg-primary/30" />
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
      <section className="py-24 px-6 bg-primary text-primary-foreground mt-12 relative overflow-hidden">
        {/* Decorative circles - behind content */}
        <div className="absolute -top-16 -left-16 w-48 h-48 border border-primary-foreground/10 rounded-full pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 border border-primary-foreground/10 rounded-full pointer-events-none" />
        
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-px bg-primary-foreground/30" />
          </div>
          <p className="text-xl md:text-2xl lg:text-3xl font-display font-light leading-relaxed px-4">
            Este espacio va dedicado a quienes ya solo comparten las obras que escribieron en vida.
          </p>
          <div className="flex justify-center mt-6">
            <div className="w-16 h-px bg-primary-foreground/30" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Origen;