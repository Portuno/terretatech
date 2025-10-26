import { Mail, Send, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

export function Contact() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { error: insertError } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email }]);

      if (insertError) {
        if (insertError.code === '23505') {
          setError('Este correo ya está suscrito');
        } else {
          setError('Hubo un error. Por favor, intenta de nuevo');
        }
        setIsSubmitting(false);
        return;
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 3000);
    } catch (err) {
      setError('Hubo un error. Por favor, intenta de nuevo');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-[#F5F5F7] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Stay Connected
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#007AFF] to-[#008080] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 mb-4">
              No te pierdas las novedades sobre IA, Emprendimiento y los eventos de Terreta Tech
            </p>
            <p className="text-sm text-gray-500">
              Suscríbete a las actualizaciones de{' '}
              <a href="https://terretahub.com" target="_blank" rel="noopener noreferrer" className="text-[#007AFF] hover:underline font-medium">
                Terreta Hub
              </a>
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Correo Electrónico
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="text-gray-400" size={20} />
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    required
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#007AFF] focus:outline-none transition-colors text-lg"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitted || isSubmitting}
                className="w-full bg-[#007AFF] text-white px-8 py-4 rounded-xl hover:bg-[#0066DD] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span>Enviando...</span>
                  </>
                ) : submitted ? (
                  <>
                    <span>¡Suscrito!</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Suscribirse</span>
                  </>
                )}
              </button>
            </form>

            {error && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
                <AlertCircle className="text-red-600" size={20} />
                <p className="text-red-800 font-medium">{error}</p>
              </div>
            )}

            {submitted && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-center font-medium">
                  ¡Gracias por suscribirte! Te mantendremos informado.
                </p>
              </div>
            )}

            <p className="mt-6 text-xs text-gray-500 text-center">
              Al suscribirte, aceptas recibir noticias y anuncios de{' '}
              <a href="https://terretahub.com" target="_blank" rel="noopener noreferrer" className="text-[#007AFF] hover:underline">
                Terreta Hub
              </a>
              . Puedes cancelar tu suscripción en cualquier momento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
