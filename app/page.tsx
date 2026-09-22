import Hero from "@/components/Hero";
import SobreMi from "@/components/SobreMi";
import Habilidades from "@/components/Habilidades";
import Proyectos from "@/components/Proyectos";
import Contacto from "@/components/Contacto";

export default function Home() {
  return (
    <>
      <Hero />
      <SobreMi />
      <Habilidades />
      <Proyectos />
      <Contacto />
    </>
  );
}