export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 flex w-full flex-wrap justify-center gap-x-3 gap-y-1 border-b border-amber-400/80 bg-black/80 p-4 text-sm text-gray-200 backdrop-blur sm:gap-x-6 sm:p-6 sm:text-base">
      <a href="#inicio" className="hover:text-amber-400 transition-colors">Home</a>
      <a href="#sobre-mi" className="hover:text-amber-400 transition-colors">About me</a>
      <a href="#habilidades" className="hover:text-amber-400 transition-colors">Skills</a>
      <a href="#proyectos" className="hover:text-amber-400 transition-colors">Projects</a>
      <a href="#contacto" className="hover:text-amber-400 transition-colors">Contact</a>
    </nav>
  );
}