import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper to map author + obra to a PDF URL when available
export function getPdfUrl(autorId: string, obra: string) {
  if (autorId === "saulo-avendano" && obra.toLowerCase().includes("desesperanzas")) return "/01.pdf";
  if (autorId === "andres-teixido" && obra === "Morpheoppium") return "/Morpheoppium.pdf";
  if (autorId === "william-barbeitos" && obra === "Castora") return "/Castora.pdf";
  if (autorId === "sariew-zepol" && obra === "La sonrisa y los naifes") return "/00-Prólogo.pdf";
  if (autorId === "rosa-constenla" && obra === "Vasectomía") return "/VASECTOMÍA.pdf";
  return undefined;
} 
