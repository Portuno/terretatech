import { X, User, Mail, Phone, FileText, Send, AlertCircle, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

interface MembershipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MembershipModal({ isOpen, onClose }: MembershipModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { error: insertError } = await supabase
        .from('membership_applications')
        .insert([{
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          description: formData.description
        }]);

      if (insertError) {
        setError('Hubo un error al enviar tu solicitud. Por favor, intenta de nuevo');
        setIsSubmitting(false);
        return;
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          description: ''
        });
        onClose();
      }, 3000);
    } catch (err) {
      setError('Hubo un error al enviar tu solicitud. Por favor, intenta de nuevo');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>

        <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-8 md:p-12">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>

          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Únete a Terreta Tech
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#007AFF] to-[#008080] mx-auto mb-4"></div>
            <p className="text-gray-600">
              Forma parte de la red de profesionales que está transformando Valencia
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre Completo *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="text-gray-400" size={20} />
                </div>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  required
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#007AFF] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Correo Electrónico *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="text-gray-400" size={20} />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#007AFF] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Teléfono *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Phone className="text-gray-400" size={20} />
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+34 123 456 789"
                  required
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#007AFF] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Cuéntanos sobre ti *
              </label>
              <div className="relative">
                <div className="absolute top-3 left-0 pl-4 flex items-start pointer-events-none">
                  <FileText className="text-gray-400" size={20} />
                </div>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="¿Por qué quieres unirte a Terreta Tech? ¿Cuál es tu experiencia en tecnología?"
                  required
                  rows={4}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#007AFF] focus:outline-none transition-colors resize-none"
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
                  <span>¡Solicitud Enviada!</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  <span>Enviar Solicitud</span>
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
            <div className="mt-6 space-y-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-center font-medium">
                  ¡Gracias por tu interés! Revisaremos tu solicitud y nos pondremos en contacto contigo pronto.
                </p>
              </div>
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-800 text-center font-medium mb-3">
                  ¡Únete a nuestra comunidad en WhatsApp!
                </p>
                <a
                  href="https://chat.whatsapp.com/G8CJlMhou6t1kZ21VPJZWJ?mode=wwt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  <MessageCircle size={18} />
                  Unirse a WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
