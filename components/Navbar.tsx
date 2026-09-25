export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 flex w-full justify-center gap-6 border-b border-amber-400/80 bg-black/80 p-6 text-gray-200 backdrop-blur">
      <a href="#inicio" className="hover:text-amber-400 transition-colors">Home</a>
      <a href="#sobre-mi" className="hover:text-amber-400 transition-colors">About me</a>
      <a href="#habilidades" className="hover:text-amber-400 transition-colors">Skills</a>
      <a href="#proyectos" className="hover:text-amber-400 transition-colors">Projects</a>
      <a href="#contacto" className="hover:text-amber-400 transition-colors">Contact</a>
    </nav>
  );
}