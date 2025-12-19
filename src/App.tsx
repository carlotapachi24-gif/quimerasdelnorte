import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Origen from "./pages/Origen";
import Autores from "./pages/Autores";
import Obras from "./pages/Obras";
import Archivo from "./pages/Archivo";
import Tematicas from "./pages/Tematicas";
import Sobre from "./pages/Sobre";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/origen" element={<Origen />} />
          <Route path="/autores" element={<Autores />} />
          <Route path="/obras" element={<Obras />} />
          <Route path="/archivo" element={<Archivo />} />
          <Route path="/tematicas" element={<Tematicas />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
