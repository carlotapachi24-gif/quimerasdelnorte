import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-secondary/20 py-20 mt-24 overflow-hidden">
      {/* Decorative elements */}
      {/* QUITADA la línea vertical izquierda */}
      {/* <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-primary/20 to-transparent" /> */}
      <div className="absolute top-0 right-1/3 w-px h-24 bg-gradient-to-b from-primary/10 to-transparent" />

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
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
              Un espacio virtual donde las voces literarias del norte comparten sus obras, sin necesidad de convivir físicamente.
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
                {[
                  { to: "/archivo", label: "Filmografía" },

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
        </div>

        <div className="mt-20 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground italic font-display text-lg">
              Dedicado a quienes solo comparten las obras que escribieron en vida.
            </p>
            <p className="text-xs text-muted-foreground/60">
              © {new Date().getFullYear()} Quimeras del Norte
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
<section class="feedback" aria-label="Sugerencias">
  <h3>Enviar sugerencia</h3>

  <form id="qdn-form" action="https://api.web3forms.com/submit" method="POST">
    <!-- 1) Tu key -->
    <input type="hidden" name="access_key" value="TU_ACCESS_KEY_NUEVA" />

    <!-- 2) Opcionales útiles -->
    <input type="hidden" name="subject" value="Sugerencia desde Quimeras del Norte" />
    <input type="hidden" name="from_name" value="Quimeras del Norte" />

    <!-- 3) SOLO mensaje -->
    <label for="message">Mensaje (máx. 250 palabras)</label>
    <textarea
      id="message"
      name="message"
      rows="6"
      maxlength="2000"
      placeholder="Escribe tu sugerencia…"
      required></textarea>

    <small id="wc">0/250 palabras</small>

    <!-- 4) hCaptcha (recomendado) -->
    <div class="h-captcha" data-captcha="true"></div>

    <button type="submit">Enviar</button>
  </form>

  <p id="qdn-result" role="status" aria-live="polite"></p>
</section>

<!-- Script de Web3Forms para hCaptcha -->
<script src="https://web3forms.com/client/script.js" async defer></script>

<script>
  (() => {
    const form = document.getElementById("qdn-form");
    const msg = document.getElementById("message");
    const wc = document.getElementById("wc");
    const out = document.getElementById("qdn-result");
    const MAX_WORDS = 250;

    const countWords = (t) => (t.trim() ? t.trim().split(/\s+/).length : 0);

    function clampWords() {
      const words = msg.value.trim().split(/\s+/).filter(Boolean);
      if (words.length > MAX_WORDS) msg.value = words.slice(0, MAX_WORDS).join(" ") + " ";
      wc.textContent = `${countWords(msg.value)}/${MAX_WORDS} palabras`;
    }

    msg.addEventListener("input", clampWords);
    clampWords();

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (countWords(msg.value) > MAX_WORDS) {
        out.textContent = "Te has pasado de 250 palabras. Recorta un poco 🙂";
        return;
      }

      const fd = new FormData(form);
      try {
        const r = await fetch(form.action, { method: "POST", body: fd });
        const data = await r.json();
        if (data.success) {
          out.textContent = "Enviado. Gracias.";
          form.reset();
          clampWords();
        } else {
          out.textContent = "No se pudo enviar. Intenta de nuevo.";
        }
      } catch {
        out.textContent = "Error de red. Reintenta.";
      }
    });
  })();
</script>
