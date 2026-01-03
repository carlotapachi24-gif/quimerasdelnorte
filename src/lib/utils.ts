import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { autores } from "@/data/content";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Look up the PDF for a given author + obra (and optional parte id).
export function getPdfUrl(autorId: string, obraTitulo: string, parteId?: string) {
  const autor = autores.find((a) => a.id === autorId);
  if (!autor) return undefined;

  const obraEntry = autor.obras.find((o) => (typeof o === "string" ? o === obraTitulo : o.titulo === obraTitulo));
  if (!obraEntry) return undefined;

  if (typeof obraEntry === "string") {
    // no pdf attached in data
    return undefined;
  }

  if (parteId) {
    const parte = obraEntry.partes?.find((p) => p.id === parteId || p.titulo === parteId);
    return parte?.pdf;
  }

  // obra-level PDF
  if (obraEntry.pdf) return obraEntry.pdf;

  // if obra has partes, return undefined (we expect the UI to render the partes list)
  return undefined;
}
