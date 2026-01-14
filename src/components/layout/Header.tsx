import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const leftNav = [
  { name: "Inicio", href: "/" },
  { name: "El Origen", href: "/origen" },
  { name: "Sobre el proyecto", href: "/sobre" },
];

const rightNav = [
  { name: "Autores", href: "/autores" },
  { name: "Obras", href: "/obras" },
  { name: "Archivo", href: "/archivo" },
];

const allNav = [...leftNav, ...rightNav];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white border-b border-border ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation - Left */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-end">
            {leftNav.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link text-sm uppercase tracking-widest opacity-0 animate-fade-in font-medium ${
                  location.pathname === item.href ? "text-primary" : ""
                }`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Logo - Center */}
          <Link 
            to="/" 
            className="flex items-center mx-8 lg:mx-12 group opacity-0 animate-scale-in"
            style={{ animationDelay: '0.2s' }}
          >
            <img 
              src={logo} 
              alt="Quimeras del Norte" 
              className={`w-auto transition-all duration-500 group-hover:scale-105 ${
                isScrolled ? "h-12 md:h-14" : "h-16 md:h-20"
              }`}
            />
          </Link>

          {/* Desktop Navigation - Right */}
          <div className="hidden lg:flex items-center gap-8 flex-1">
            {rightNav.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link text-sm uppercase tracking-widest opacity-0 animate-fade-in font-medium ${
                  location.pathname === item.href ? "text-primary" : ""
                }`}
                style={{ animationDelay: `${0.1 * (index + 3)}s` }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span 
                className={`absolute left-0 top-1 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? "rotate-45 top-3" : ""
                }`} 
              />
              <span 
                className={`absolute left-0 top-3 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`} 
              />
              <span 
                className={`absolute left-0 top-5 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? "-rotate-45 top-3" : ""
                }`} 
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-6 pb-4 border-t border-border mt-4">
            <div className="flex flex-col gap-1">
              {allNav.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-3 px-4 text-lg font-display transition-all duration-300 hover:bg-primary/5 hover:pl-6 ${
                    location.pathname === item.href
                      ? "text-primary bg-primary/5 border-l-2 border-primary"
                      : "text-foreground/70"
                  }`}
                  style={{ animationDelay: `${0.05 * index}s` }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
