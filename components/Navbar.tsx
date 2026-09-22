export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 flex w-full gap-6 border-b bg-white/80 p-6 backdrop-blur">
      <a href="#inicio">Inicio</a>
      <a href="#proyectos">Proyectos</a>
      <a href="#contacto">Contacto</a>
    </nav>
  );
}