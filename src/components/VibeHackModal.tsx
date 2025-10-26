import { X, Calendar, Users, Clock, Trophy, Zap } from 'lucide-react';

interface VibeHackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VibeHackModal({ isOpen, onClose }: VibeHackModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

        <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FF9500] via-[#007AFF] to-[#008080]"></div>

          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors z-10"
          >
            <X size={24} />
          </button>

          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-block bg-gradient-to-r from-[#FF9500] to-[#007AFF] px-4 py-2 rounded-full mb-4">
                <span className="text-white font-bold text-sm">PRÓXIMO EVENTO</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                VibeHack
              </h2>
              <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-[#007AFF] to-[#008080] bg-clip-text text-transparent mb-6">
                Build, Launch and Validate in 72h
              </p>
              <div className="flex items-center justify-center gap-2 text-lg text-gray-600">
                <Calendar size={20} className="text-[#FF9500]" />
                <span className="font-semibold">Octubre 2025 • Valencia</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#F5F5F7] to-white rounded-2xl p-6 md:p-8 mb-8 border border-gray-100">
              <p className="text-lg text-gray-700 leading-relaxed">
                Un fin de semana intensivo para inventar la nueva era de la creación de productos.
                Únete a mentes innovadoras y prueba técnicas de producción y distribución disruptivas
                con el apoyo de nuevas herramientas. <strong className="text-[#007AFF]">¡Innovación sin límites!</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center bg-[#007AFF]/5 rounded-xl p-6">
                <div className="flex justify-center mb-3">
                  <Users className="text-[#007AFF]" size={32} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">+200</div>
                <div className="text-sm text-gray-600">Mentes Creativas</div>
              </div>

              <div className="text-center bg-[#FF9500]/5 rounded-xl p-6">
                <div className="flex justify-center mb-3">
                  <Clock className="text-[#FF9500]" size={32} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">72</div>
                <div className="text-sm text-gray-600">Horas de Acción</div>
              </div>

              <div className="text-center bg-[#008080]/5 rounded-xl p-6">
                <div className="flex justify-center mb-3">
                  <Zap className="text-[#008080]" size={32} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">42</div>
                <div className="text-sm text-gray-600">Inscriptos</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 md:p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Calendar className="text-[#007AFF]" size={24} />
                Agenda del Evento
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="font-bold text-[#007AFF]">Viernes</span>
                  </div>
                  <div className="flex-1 border-l-2 border-[#007AFF] pl-4">
                    <p className="text-gray-700 font-medium">Ideación y Formación de Equipos</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="font-bold text-[#FF9500]">Sábado</span>
                  </div>
                  <div className="flex-1 border-l-2 border-[#FF9500] pl-4">
                    <p className="text-gray-700 font-medium">Desarrollo y Pruebas</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="font-bold text-[#008080]">Domingo</span>
                  </div>
                  <div className="flex-1 border-l-2 border-[#008080] pl-4">
                    <p className="text-gray-700 font-medium">Demostraciones y Premios</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#F5F5F7] to-white rounded-2xl p-6 mb-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Patrocinadores y Colaboradores
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg p-4 flex items-center justify-center h-20 border border-gray-200">
                  <span className="text-gray-400 font-medium">Sponsor 1</span>
                </div>
                <div className="bg-white rounded-lg p-4 flex items-center justify-center h-20 border border-gray-200">
                  <span className="text-gray-400 font-medium">Sponsor 2</span>
                </div>
                <div className="bg-white rounded-lg p-4 flex items-center justify-center h-20 border border-gray-200">
                  <span className="text-gray-400 font-medium">Sponsor 3</span>
                </div>
                <div className="bg-white rounded-lg p-4 flex items-center justify-center h-20 border border-gray-200">
                  <span className="text-gray-400 font-medium">Sponsor 4</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="#registro-vibehack"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF9500] to-[#007AFF] text-white px-10 py-5 rounded-full hover:shadow-2xl transition-all duration-300 font-bold text-xl"
              >
                <Trophy size={24} />
                ¡Regístrate Ahora!
              </a>
              <p className="mt-4 text-sm text-gray-500">
                Plazas limitadas - Asegura tu lugar en el hackathon más innovador de Valencia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
