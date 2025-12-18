import { useState } from "react";
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
  { name: "Temáticas", href: "/tematicas" },
  { name: "Archivo", href: "/archivo" },
];

const allNav = [...leftNav, ...rightNav];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation - Left */}
          <div className="hidden lg:flex items-center gap-6 flex-1 justify-end">
            {leftNav.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link text-sm uppercase tracking-widest ${
                  location.pathname === item.href ? "text-primary" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Logo - Center */}
          <Link to="/" className="flex items-center mx-8 lg:mx-12">
            <img 
              src={logo} 
              alt="Quimeras del Norte" 
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation - Right */}
          <div className="hidden lg:flex items-center gap-6 flex-1">
            {rightNav.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link text-sm uppercase tracking-widest ${
                  location.pathname === item.href ? "text-primary" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {allNav.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-display ${
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-foreground/70"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
