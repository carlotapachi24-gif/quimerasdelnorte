import { Layout } from "@/components/layout/Layout";
import { origen } from "@/data/content";

const Origen = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light text-primary mb-8 opacity-0 animate-fade-up">
            El Origen
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            La historia de cómo nació este espacio
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-3xl space-y-16">
          {/* Intro */}
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <p className="body-large text-foreground leading-relaxed">
              {origen.intro}
            </p>
          </div>

          {/* Historia */}
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <p className="body-large text-foreground leading-relaxed">
              {origen.historia}
            </p>
          </div>

          {/* Asistentes */}
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <h2 className="text-2xl md:text-3xl font-display font-medium text-primary mb-8">
              Asistentes a la reunión
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {origen.asistentes.map((asistente, index) => (
                <div 
                  key={asistente.nombre}
                  className="p-6 border border-border"
                >
                  <h3 className="text-xl font-display font-medium text-foreground mb-1">
                    {asistente.nombre}
                  </h3>
                  <p className="text-muted-foreground italic">
                    {asistente.rol}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Conflicto */}
          <div className="py-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <p className="body-large text-foreground leading-relaxed">
              {origen.conflicto}
            </p>
          </div>

          {/* Cita de Rosa */}
          <div className="py-12 opacity-0 animate-fade-up" style={{ animationDelay: '0.7s' }}>
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-primary text-center leading-tight">
              {origen.citaRosa}
            </blockquote>
            <p className="text-center text-muted-foreground mt-6 italic">
              — Rosa, percibiendo el desastre
            </p>
          </div>

          {/* Cierre */}
          <div className="py-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <p className="body-large text-foreground leading-relaxed">
              {origen.cierre}
            </p>
          </div>
        </div>
      </section>

      {/* Dedication Banner */}
      <section className="py-24 px-6 bg-primary text-primary-foreground mt-16">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-xl md:text-2xl font-display font-light leading-relaxed">
            Este espacio va dedicado a quienes ya solo comparten las obras que escribieron en vida.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Origen;
