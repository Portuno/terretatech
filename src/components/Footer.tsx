import { Mail, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#007AFF] to-[#008080] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TT</span>
              </div>
              <span className="text-xl font-bold">Terreta Tech</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Transformando Valencia con innovación y tecnología responsable.
              Somos la red de profesionales comprometidos con el futuro digital de nuestra tierra.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/terretatech-org"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#007AFF] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/terreta_tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#007AFF] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@terretatech.org"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#007AFF] transition-colors"
                aria-label="TikTok"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="mailto:contact@terretatech.org"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#007AFF] transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#pilares" className="text-gray-400 hover:text-[#007AFF] transition-colors">
                  Nuestros Pilares
                </a>
              </li>
              <li>
                <a href="#acciones" className="text-gray-400 hover:text-[#007AFF] transition-colors">
                  Acciones
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-[#007AFF] transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#hazte-socio" className="text-gray-400 hover:text-[#007AFF] transition-colors">
                  Hazte Socio
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Tecnologías</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Inteligencia Artificial</li>
              <li className="text-gray-400">Blockchain</li>
              <li className="text-gray-400">Big Data</li>
              <li className="text-gray-400">IoT</li>
              <li className="text-gray-400">Robótica</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Terreta Tech. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
