import { Brain, GraduationCap, Rocket, Shield, Network, Globe } from 'lucide-react';

const pillars = [
  {
    icon: Brain,
    title: 'Transformación Digital y Tecnologías Emergentes',
    description: 'Promover la transformación digital mediante tecnologías de vanguardia',
    keywords: ['IA', 'Blockchain', 'IoT', 'Big Data', 'Robótica'],
    color: '#007AFF'
  },
  {
    icon: GraduationCap,
    title: 'Formación y Capacitación Digital',
    description: 'Fomentar la formación, la investigación y el desarrollo de competencias',
    keywords: ['Inteligencia Artificial', 'Innovación Tecnológica', 'Competencias Digitales'],
    color: '#008080'
  },
  {
    icon: Rocket,
    title: 'Emprendimiento y Creación de Startups',
    description: 'Impulsar el emprendimiento tecnológico y la creación de empresas innovadoras',
    keywords: ['Aceleración', 'Mentoría', 'Coworking', 'Incubación'],
    color: '#FF9500'
  },
  {
    icon: Shield,
    title: 'Ética y Sostenibilidad Digital',
    description: 'Promover el uso ético, inclusivo y sostenible de la tecnología',
    keywords: ['Uso Ético', 'ODS', 'Brecha Digital', 'Agenda Digital Europea'],
    color: '#008080'
  },
  {
    icon: Network,
    title: 'Transferencia de Conocimiento y Alianzas',
    description: 'Colaborar con entidades públicas, privadas y académicas',
    keywords: ['Colaboración', 'Innovación Aplicada', 'Transferencia de Conocimiento'],
    color: '#007AFF'
  },
  {
    icon: Globe,
    title: 'Participación y Cooperación Ciudadana',
    description: 'Fomentar la participación ciudadana en la construcción de una sociedad digital',
    keywords: ['Transparencia', 'Cooperación Internacional', 'Sociedad Digital Abierta'],
    color: '#FF9500'
  }
];

export function Pillars() {
  return (
    <section id="pilares" className="py-20 bg-gradient-to-b from-white to-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestros Pilares
          </h2>
          <p className="text-xl text-gray-600 mb-4">Los Fines de Terreta Tech</p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#007AFF] to-[#008080] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${pillar.color}15` }}
                >
                  <Icon size={28} style={{ color: pillar.color }} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {pillar.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {pillar.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {pillar.keywords.map((keyword, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: `${pillar.color}10`,
                        color: pillar.color
                      }}
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
