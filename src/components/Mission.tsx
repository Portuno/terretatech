import { Target, Users, Lightbulb } from 'lucide-react';

export function Mission() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestra Misión
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#007AFF] to-[#008080] mx-auto mb-8"></div>
        </div>

        <div className="bg-gradient-to-br from-[#F5F5F7] to-white rounded-3xl p-8 md:p-12 shadow-xl">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            <strong className="text-[#007AFF]">Terreta Tech</strong> es la plataforma de referencia para impulsar la
            transformación digital y tecnológica de Valencia, actuando como motor de innovación, emprendimiento y conocimiento.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            Somos una red activa de profesionales comprometidos con la adopción responsable y ética de tecnologías emergentes
            (como la <strong>Inteligencia Artificial</strong>, <strong>Blockchain</strong> y <strong>Big Data</strong>),
            buscando alinear el progreso digital con los <strong>Objetivos de Desarrollo Sostenible (ODS)</strong>.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Nuestro propósito es reducir la brecha digital, fomentar el talento local y catalizar la creación de startups
            de alto impacto, asegurando que el desarrollo tecnológico contribuya al bienestar social y al crecimiento
            económico inclusivo de nuestra <strong className="text-[#008080]">'Terreta'</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#007AFF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="text-[#007AFF]" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Innovación</h3>
            <p className="text-gray-600">Motor de transformación digital</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#008080]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-[#008080]" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Comunidad</h3>
            <p className="text-gray-600">Red de profesionales comprometidos</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#FF9500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="text-[#FF9500]" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Impacto</h3>
            <p className="text-gray-600">Crecimiento inclusivo y sostenible</p>
          </div>
        </div>
      </div>
    </section>
  );
}
