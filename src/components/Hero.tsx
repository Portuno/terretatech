import { ArrowRight, Rocket } from 'lucide-react';

interface HeroProps {
  onOpenMembershipModal: () => void;
  onOpenVibeHackModal: () => void;
}

export function Hero({ onOpenMembershipModal, onOpenVibeHackModal }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/10 via-[#008080]/10 to-[#FF9500]/10"></div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, #007AFF 1px, transparent 1px),
            linear-gradient(#007AFF 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="mb-8 inline-block">
          <span className="bg-[#008080]/10 text-[#008080] px-4 py-2 rounded-full text-sm font-medium">
            Innovación · Tecnología · Valencia
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Transformando Valencia con
          <span className="block mt-2 bg-gradient-to-r from-[#007AFF] to-[#008080] bg-clip-text text-transparent">
            Innovación y Tecnología Responsable
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
          Terreta Tech es la plataforma de referencia para impulsar la transformación digital en Valencia,
          con enfoque en la IA, el talento, y la ética como pilares fundamentales
        </p>

        <div className="mb-8">
          <button
            onClick={onOpenVibeHackModal}
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#FF9500] to-[#FF6B00] text-white px-10 py-5 rounded-full hover:shadow-2xl transition-all duration-300 font-bold text-xl animate-pulse hover:animate-none"
          >
            <Rocket size={24} className="group-hover:rotate-12 transition-transform" />
            <span>Próximo Evento: VibeHack</span>
            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              ¡NUEVO!
            </div>
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenMembershipModal}
            className="group bg-[#007AFF] text-white px-8 py-4 rounded-full hover:bg-[#0066DD] transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl flex items-center gap-2"
          >
            Únete a la Red
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <a
            href="#pilares"
            className="bg-white text-[#007AFF] px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-300 font-semibold text-lg shadow-xl border-2 border-[#007AFF]"
          >
            Conoce Más
          </a>
        </div>

        <div className="mt-16 text-sm text-gray-500">
          <p>Únete a la red de profesionales que están construyendo el futuro digital de Valencia</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
