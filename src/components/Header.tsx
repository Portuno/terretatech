import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onOpenMembershipModal: () => void;
}

export function Header({ onOpenMembershipModal }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              src="/terreta-tech-logo-no-bg.png"
              alt="Terreta Tech"
              className="h-12 w-auto"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#pilares" className="text-gray-700 hover:text-[#007AFF] transition-colors font-medium">
              Pilares
            </a>
            <a href="#acciones" className="text-gray-700 hover:text-[#007AFF] transition-colors font-medium">
              Acciones
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-[#007AFF] transition-colors font-medium">
              Contacto
            </a>
            <button
              onClick={onOpenMembershipModal}
              className="bg-[#007AFF] text-white px-6 py-2 rounded-full hover:bg-[#0066DD] transition-all duration-300 font-medium shadow-md hover:shadow-lg"
            >
              Hazte Socio
            </button>
          </nav>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#pilares" className="text-gray-700 hover:text-[#007AFF] transition-colors font-medium">
                Pilares
              </a>
              <a href="#acciones" className="text-gray-700 hover:text-[#007AFF] transition-colors font-medium">
                Acciones
              </a>
              <a href="#contacto" className="text-gray-700 hover:text-[#007AFF] transition-colors font-medium">
                Contacto
              </a>
              <button
                onClick={() => {
                  onOpenMembershipModal();
                  setIsMenuOpen(false);
                }}
                className="bg-[#007AFF] text-white px-6 py-2 rounded-full hover:bg-[#0066DD] transition-all duration-300 font-medium text-center"
              >
                Hazte Socio
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
