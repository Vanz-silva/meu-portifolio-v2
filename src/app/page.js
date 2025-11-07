"use client";
import dynamic from "next/dynamic";

// Importa o componente Home dinamicamente no cliente
const ClientHome = dynamic(() => import("@/components/HomePage"), {
  ssr: false, //  desativa a renderização no servidor
});

export default function Page() {
  return <ClientHome />;
}
