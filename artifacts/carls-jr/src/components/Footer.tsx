export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t-8 border-primary relative overflow-hidden">
      {/* Decorative Star Background */}
      <div className="absolute -top-24 -right-24 text-white/5 pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                </svg>
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight">
                Carl's Jr.
              </span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Auténticas hamburguesas premium a la parrilla desde 1941. Calidad superior, sabor inigualable y la mejor experiencia familiar.
            </p>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif uppercase tracking-wider text-secondary">Contacto</h4>
            <ul className="space-y-4 text-white/70">
              <li>Av. Camino a Bosque de San Isidro 1475, Centinela I, 45130 Zapopan, Jal.</li>
              <li>Lun - Dom: 9:00 a.m. - 10:00 p.m.</li>
              <li>Tel: +52 (33) 1234 5678</li>
            </ul>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif uppercase tracking-wider text-secondary">Navegación</h4>
            <ul className="space-y-3">
              {['Inicio', 'Nosotros', 'Servicios', 'Galería', 'Ubicación', 'Contacto'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace('í', 'i')}`} 
                    className="text-white/70 hover:text-white hover:underline transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Student Info Col - DO NOT REMOVE */}
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider text-primary">Proyecto Académico</h4>
            
            {/* DATOS DEL ALUMNO - EDITAR AQUÍ */}
            <ul className="space-y-2 text-sm text-white/80 mb-6">
              <li><span className="font-bold text-white">Alumno:</span> Cristian Javier Padilla Cornejo</li>
              <li><span className="font-bold text-white">Materia:</span> Desarrollo de Aplicaciones Web en la Nube y Móviles</li>
              <li><span className="font-bold text-white">Profesor:</span> Zeus Emanuel Gutierrez Cobian</li>
              <li><span className="font-bold text-white">Calendario:</span> 26A</li>
            </ul>
            
            <div className="w-full h-20 border-2 border-dashed border-white/20 rounded-lg flex items-center justify-center text-white/50 text-sm font-medium bg-white/5">
              Logo CUCEI - Reemplazar aquí
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            &copy; {currentYear} Carl's Jr. Bosque de San Isidro. Todos los derechos reservados.
          </p>
          <p className="text-white/30 text-xs text-center md:text-right max-w-md">
            Este sitio web es un proyecto escolar y no es el sitio oficial de Carl's Jr. Las marcas registradas y logotipos pertenecen a sus respectivos dueños.
          </p>
        </div>
      </div>
    </footer>
  );
}
