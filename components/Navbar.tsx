import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-6 border-b p-6">
      <Link href="/">Inicio</Link>
      <Link href="/proyectos">Proyectos</Link>
      <Link href="/contacto">Contacto</Link>
    </nav>
  );
}