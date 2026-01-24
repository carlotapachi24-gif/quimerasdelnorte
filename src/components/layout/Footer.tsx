import { type FormEvent, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [message, setMessage] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [result, setResult] = useState("");
  const MAX_WORDS = 250;

  const countWords = (text: string) => (text.trim() ? text.trim().split(/\s+/).length : 0);

  const clampWords = (text: string) => {
    const words = text.trim().split(/\s+/).filter(Boolean);
    if (words.length > MAX_WORDS) return `${words.slice(0, MAX_WORDS).join(" ")} `;
    return text;
  };

  const handleMessageChange = (value: string) => {
    const clamped = clampWords(value);
    setMessage(clamped);
    setWordCount(countWords(clamped));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (countWords(message) > MAX_WORDS) {
      setResult("Te has pasado de 250 palabras. Recorta un poco.");
      return;
    }

    const form = formRef.current;
    if (!form) return;

    const fd = new FormData(form);
    try {
      const r = await fetch(form.action, { method: "POST", body: fd });
      const data = await r.json();
      if (data.success) {
        setResult("Enviado. Gracias.");
        setMessage("");
        setWordCount(0);
      } else {
        setResult("No se pudo enviar. Intenta de nuevo.");
      }
    } catch {
      setResult("Error de red. Reintenta.");
    }
  };

  return (
    <footer className="relative border-t border-border bg-secondary/20 py-20 mt-24 overflow-hidden">
      {/* Decorative elements */}
      {/* QUITADA la linea vertical izquierda */}
      {/* <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-primary/20 to-transparent" /> */}
      <div className="absolute top-0 right-1/3 w-px h-24 bg-gradient-to-b from-primary/10 to-transparent" />

      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="max-w-md">
            <div className="flex items-center gap-4 mb-6">
              {/* Logo en vez de texto + quitada la raya horizontal */}
              <Link to="/" className="inline-flex items-center">
                <img
                  src="/Logo color PNG.png"
                  alt="Quimeras del Norte"
                  className="h-10 sm:h-12 lg:h-14 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </Link>
            </div>

            <p className="text-muted-foreground leading-relaxed text-lg">
              Un espacio virtual donde las voces literarias del norte comparten sus obras, sin necesidad de convivir
              fisicamente.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-16">
            <div>
              <h4 className="text-sm uppercase tracking-widest text-foreground mb-6 font-medium">Explorar</h4>
              <nav className="flex flex-col gap-3">
                {[
                  { to: "/origen", label: "El Origen" },
                  { to: "/autores", label: "Autores" },
                  { to: "/obras", label: "Obras" },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-muted-foreground hover:text-primary transition-colors group inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-widest text-foreground mb-6 font-medium">Archivo</h4>
              <nav className="flex flex-col gap-3">
                {[{ to: "/archivo", label: "Filmografia" }].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-muted-foreground hover:text-primary transition-colors group inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-widest text-foreground mb-6 font-medium">Proyecto</h4>
              <nav className="flex flex-col gap-3">
                <Link
                  to="/sobre"
                  className="text-muted-foreground hover:text-primary transition-colors group inline-flex items-center gap-1"
                >
                  Sobre el proyecto
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </nav>
            </div>
          </div>

          <section className="feedback lg:justify-self-end" aria-label="Sugerencias">
            <h3 className="text-sm uppercase tracking-widest text-foreground mb-6 font-medium">Enviar sugerencia</h3>

            <form
              id="qdn-form"
              ref={formRef}
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 w-full max-w-md"
            >
              <input type="hidden" name="access_key" value="f1254b6c-a899-4186-b11c-cd5a5ec72727" />
              <input type="hidden" name="subject" value="Sugerencia desde Quimeras del Norte" />
              <input type="hidden" name="from_name" value="Quimeras del Norte" />

              <label htmlFor="message" className="text-muted-foreground">
                Mensaje (max. 250 palabras)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                maxLength={2000}
                placeholder="Escribe tu sugerencia..."
                required
                value={message}
                onChange={(e) => handleMessageChange(e.target.value)}
                className="w-full rounded-md border border-border bg-background/60 p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              />

              <small id="wc" className="text-muted-foreground/80">
                {wordCount}/{MAX_WORDS} palabras
              </small>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Enviar
              </button>
            </form>

            <p id="qdn-result" role="status" aria-live="polite" className="mt-3 text-sm text-muted-foreground">
              {result}
            </p>
          </section>
        </div>

        <div className="mt-20 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground italic font-display text-lg">
              Dedicado a quienes solo comparten las obras que escribieron en vida.
            </p>
            <p className="text-xs text-muted-foreground/60">¶¸ {new Date().getFullYear()} Quimeras del Norte</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
