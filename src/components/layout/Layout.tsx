import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20 relative overflow-hidden">
        <div className="page-ambient">
          <div className="ambient-orb ambient-orb-primary -top-24 -left-32 h-72 w-72" />
          <div className="ambient-orb ambient-orb-accent top-1/3 -right-40 h-80 w-80" />
          <div className="ambient-orb ambient-orb-muted -bottom-24 left-1/3 h-64 w-64" />
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
}
