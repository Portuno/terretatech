import { MessageCircle, Users, Zap, Heart } from 'lucide-react';

export function Community() {
  return (
    <section id="comunidad" className="py-20 bg-gradient-to-b from-white to-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Únete a Nuestra Comunidad
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#007AFF] to-[#008080] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conecta con emprendedores, innovadores y expertos en tecnología e IA en Valencia.
            Comparte ideas, colabora en proyectos y crece junto a nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <Users className="text-[#007AFF]" size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-2">+200 Miembros</h3>
            <p className="text-gray-600 text-center text-sm">
              Una red activa de profesionales apasionados por la tecnología
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <Zap className="text-[#FF9500]" size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Networking Diario</h3>
            <p className="text-gray-600 text-center text-sm">
              Conecta en tiempo real con otros miembros de la comunidad
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <Heart className="text-[#FF3B30]" size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Apoyo Mutuo</h3>
            <p className="text-gray-600 text-center text-sm">
              Recibe ayuda, consejos y mentoría de la comunidad
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <MessageCircle className="text-[#008080]" size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Conversaciones</h3>
            <p className="text-gray-600 text-center text-sm">
              Discute ideas y colabora en proyectos innovadores
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#007AFF]/10 to-[#008080]/10 rounded-3xl p-12 border border-[#007AFF]/20 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Comunidad en WhatsApp
          </h3>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Somos una comunidad activa en WhatsApp donde compartimos oportunidades, noticias sobre IA,
            eventos, colaboraciones y nos apoyamos mutuamente en nuestros proyectos.
          </p>
          <a
            href="https://chat.whatsapp.com/G8CJlMhou6t1kZ21VPJZWJ?mode=wwt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-lg"
          >
            <MessageCircle size={24} />
            Únete a la Comunidad en WhatsApp
          </a>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            ¿Por qué unirte?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#007AFF] text-white">
                  <span className="font-bold">1</span>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Acceso a Oportunidades</h4>
                <p className="text-gray-600">
                  Primero en conocer eventos, hackathons, colaboraciones y oportunidades laborales
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#FF9500] text-white">
                  <span className="font-bold">2</span>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Mentoría y Conocimiento</h4>
                <p className="text-gray-600">
                  Acceso a mentores expertos y aprendizaje compartido sobre IA y emprendimiento
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#008080] text-white">
                  <span className="font-bold">3</span>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Networking Estratégico</h4>
                <p className="text-gray-600">
                  Conecta con co-fundadores potenciales, inversores y colaboradores
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#FF3B30] text-white">
                  <span className="font-bold">4</span>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Comunidad de Soporte</h4>
                <p className="text-gray-600">
                  Rodéate de personas que comparten tu pasión por la tecnología e innovación
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
