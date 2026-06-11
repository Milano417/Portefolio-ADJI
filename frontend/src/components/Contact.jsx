import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Facebook, Linkedin, Instagram, Twitter, MessageCircle } from 'lucide-react';
import { schoolInfo } from '../data/mock';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Le nom est requis';
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Le sujet est requis';
    if (!formData.message.trim()) newErrors.message = 'Le message est requis';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Contact form submitted:', formData);
      toast.success('Message envoyé avec succès! Nous vous répondrons bientôt.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      toast.error('Veuillez corriger les erreurs dans le formulaire');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#F5F7FA] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">
            Contactez-Nous
          </h2>
          <div className="w-24 h-1 bg-[#00BFFF] mx-auto rounded-full mb-4" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nous sommes à votre écoute pour répondre à toutes vos questions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-[#00BFFF]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-[#00BFFF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#003366] mb-2">Adresse</h3>
                  <p className="text-gray-700">{schoolInfo.address}</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-[#003366]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7 text-[#003366]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#003366] mb-2">Téléphone</h3>
                  <p className="text-gray-700 mb-1">
                    <a href={`tel:${schoolInfo.phone}`} className="hover:text-[#00BFFF] transition-colors duration-200">
                      {schoolInfo.phone}
                    </a>
                  </p>
                  <p className="text-gray-600 text-sm flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-green-500" />
                    WhatsApp:
                    <a href={`https://wa.me/${schoolInfo.whatsapp.replace(/\s/g, '')}`} className="hover:text-[#00BFFF] transition-colors duration-200">
                      {schoolInfo.whatsapp}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-[#00BFFF]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-7 h-7 text-[#00BFFF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#003366] mb-2">Email</h3>
                  <p className="text-gray-700">
                    <a href={`mailto:${schoolInfo.email}`} className="hover:text-[#00BFFF] transition-colors duration-200">
                      {schoolInfo.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-[#003366] to-[#00BFFF] p-6 rounded-2xl shadow-lg text-white">
              <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
              <div className="flex gap-4">
                <a
                  href={schoolInfo.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href={schoolInfo.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href={schoolInfo.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href={schoolInfo.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white p-2 rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <iframe
                src={schoolInfo.mapEmbedUrl}
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ISATech Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-[#003366] mb-6">Envoyez-nous un message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors duration-200 ${
                      errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-[#00BFFF]'
                    }`}
                    placeholder="Votre nom complet"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors duration-200 ${
                      errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-[#00BFFF]'
                    }`}
                    placeholder="votre.email@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors duration-200 ${
                      errors.subject ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-[#00BFFF]'
                    }`}
                    placeholder="Objet de votre message"
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors duration-200 resize-none ${
                      errors.message ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-[#00BFFF]'
                    }`}
                    placeholder="Écrivez votre message ici..."
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#00BFFF] text-white font-bold rounded-lg hover:bg-[#003366] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Send className="w-5 h-5" />
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;