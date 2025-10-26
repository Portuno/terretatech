import { Zap, Users, Calendar, MessageCircle } from 'lucide-react';

const actions = [
  {
    icon: Zap,
    title: 'Programas de Aceleración',
    description: 'Impulsa tu startup con nuestros programas especializados de aceleración y mentoría personalizada',
    color: '#FF9500'
  },
  {
    icon: Users,
    title: 'Mentoría Especializada',
    description: 'Conecta con expertos en IA, Blockchain y tecnologías emergentes para guiar tu proyecto',
    color: '#007AFF'
  },
  {
    icon: Calendar,
    title: 'Eventos de Networking',
    description: 'Participa en meetups, conferencias, talleres y hackathones de alto impacto como VibeHack para ampliar tu red profesional',
    color: '#008080'
  },
  {
    icon: MessageCircle,
    title: 'Comunidad Activa',
    description: 'Forma parte de una comunidad vibrante de profesionales tech comprometidos con Valencia',
    color: '#007AFF'
  }
];

export function Actions() {
  return (
    <section id="acciones" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Cómo Actúa Terreta Tech?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#007AFF] to-[#008080] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A través de programas de aceleración, mentoría especializada y eventos de networking,
            conectamos el talento tecnológico con las oportunidades de innovación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-[#F5F5F7] to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${action.color}15` }}
                >
                  <Icon size={28} style={{ color: action.color }} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {action.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {action.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-br from-[#007AFF]/5 to-[#008080]/5 rounded-3xl p-12 border border-[#007AFF]/10">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Conéctate con la Comunidad Tech
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Participa en eventos, talleres y meetups donde podrás conocer a otros profesionales
              y estar al día de las últimas tendencias tecnológicas
            </p>
            <a
              href="#eventos"
              className="inline-flex items-center gap-2 bg-[#007AFF] text-white px-8 py-4 rounded-full hover:bg-[#0066DD] transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl"
            >
              <Calendar size={20} />
              Ver Próximos Eventos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
