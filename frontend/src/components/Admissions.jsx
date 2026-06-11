import React, { useState } from 'react';
import { CheckCircle, FileText, Send, User, Mail, Phone, BookOpen, MessageSquare } from 'lucide-react';
import { admissionInfo, filieres } from '../data/mock';
import { toast } from 'sonner';

const Admissions = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    niveau: '',
    filiere: '',
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
    
    if (!formData.nom.trim()) newErrors.nom = 'Le nom est requis';
    if (!formData.prenom.trim()) newErrors.prenom = 'Le prénom est requis';
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    if (!formData.telephone.trim()) {
      newErrors.telephone = 'Le téléphone est requis';
    } else if (!/^\+?[0-9]{8,15}$/.test(formData.telephone.replace(/\s/g, ''))) {
      newErrors.telephone = 'Téléphone invalide';
    }
    if (!formData.niveau) newErrors.niveau = 'Le niveau d\'étude est requis';
    if (!formData.filiere) newErrors.filiere = 'La filière est requise';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      toast.success('Demande d\'inscription envoyée avec succès! Nous vous contactons bientôt.');
      // Reset form
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        niveau: '',
        filiere: '',
        message: ''
      });
    } else {
      toast.error('Veuillez corriger les erreurs dans le formulaire');
    }
  };

  return (
    <section id="admissions" className="py-20 bg-gradient-to-br from-[#F5F7FA] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">
            Admissions & Inscriptions
          </h2>
          <div className="w-24 h-1 bg-[#00BFFF] mx-auto rounded-full mb-4" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Rejoignez ISATech et faites partie de l'excellence académique
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Information */}
          <div className="space-y-8">
            {/* Conditions */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#00BFFF]/10 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-[#00BFFF]" />
                </div>
                <h3 className="text-2xl font-bold text-[#003366]">Conditions d'Admission</h3>
              </div>
              <ul className="space-y-3">
                {admissionInfo.conditions.map((condition, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#00BFFF] flex-shrink-0 mt-0.5" />
                    <span>{condition}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Documents */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#003366]/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-[#003366]" />
                </div>
                <h3 className="text-2xl font-bold text-[#003366]">Pièces à Fournir</h3>
              </div>
              <ul className="space-y-3">
                {admissionInfo.documents.map((doc, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-[#00BFFF] text-white flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                      {index + 1}
                    </div>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dates */}
            <div className="bg-gradient-to-br from-[#003366] to-[#00BFFF] p-8 rounded-2xl text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Dates Importantes</h3>
              <div className="space-y-3">
                <div>
                  <span className="font-semibold">Inscriptions :</span>
                  <span className="ml-2">{admissionInfo.dates.inscriptions}</span>
                </div>
                <div>
                  <span className="font-semibold">Rentrée académique :</span>
                  <span className="ml-2">{admissionInfo.dates.rentree}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-[#003366] mb-6">Formulaire de Pré-inscription</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nom */}
                <div>
                  <label htmlFor="nom" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nom *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      className={`w-full pl-11 pr-4 py-3 border-2 rounded-lg focus:outline-none transition-colors duration-200 ${
                        errors.nom ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-[#00BFFF]'
                      }`}
                      placeholder="Votre nom"
                    />
                  </div>
                  {errors.nom && <p className="text-red-500 text-sm mt-1">{errors.nom}</p>}
                </div>

                {/* Prénom */}
                <div>
                  <label htmlFor="prenom" className="block text-sm font-semibold text-gray-700 mb-2">
                    Prénom *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="prenom"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      className={`w-full pl-11 pr-4 py-3 border-2 rounded-lg focus:outline-none transition-colors duration-200 ${
                        errors.prenom ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-[#00BFFF]'
                      }`}
                      placeholder="Votre prénom"
                    />
                  </div>
                  {errors.prenom && <p className="text-red-500 text-sm mt-1">{errors.prenom}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full pl-11 pr-4 py-3 border-2 rounded-lg focus:outline-none transition-colors duration-200 ${
                        errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-[#00BFFF]'
                      }`}
                      placeholder="votre.email@example.com"
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Téléphone */}
                <div>
                  <label htmlFor="telephone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className={`w-full pl-11 pr-4 py-3 border-2 rounded-lg focus:outline-none transition-colors duration-200 ${
                        errors.telephone ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-[#00BFFF]'
                      }`}
                      placeholder="+225 XX XX XX XX XX"
                    />
                  </div>
                  {errors.telephone && <p className="text-red-500 text-sm mt-1">{errors.telephone}</p>}
                </div>

                {/* Niveau */}
                <div>
                  <label htmlFor="niveau" className="block text-sm font-semibold text-gray-700 mb-2">
                    Niveau d'étude *
                  </label>
                  <div className="relative">
                    <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      id="niveau"
                      name="niveau"
                      value={formData.niveau}
                      onChange={handleChange}
                      className={`w-full pl-11 pr-4 py-3 border-2 rounded-lg focus:outline-none transition-colors duration-200 ${
                        errors.niveau ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-[#00BFFF]'
                      }`}
                    >
                      <option value="">Sélectionnez votre niveau</option>
                      <option value="bac">Baccalauréat</option>
                      <option value="bac1">BAC+1</option>
                      <option value="bac2">BAC+2</option>
                      <option value="bac3">BAC+3 et plus</option>
                    </select>
                  </div>
                  {errors.niveau && <p className="text-red-500 text-sm mt-1">{errors.niveau}</p>}
                </div>

                {/* Filière */}
                <div>
                  <label htmlFor="filiere" className="block text-sm font-semibold text-gray-700 mb-2">
                    Filière souhaitée *
                  </label>
                  <select
                    id="filiere"
                    name="filiere"
                    value={formData.filiere}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors duration-200 ${
                      errors.filiere ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-[#00BFFF]'
                    }`}
                  >
                    <option value="">Sélectionnez une filière</option>
                    {filieres.map((filiere) => (
                      <option key={filiere.id} value={filiere.code}>
                        {filiere.code} - {filiere.name}
                      </option>
                    ))}
                  </select>
                  {errors.filiere && <p className="text-red-500 text-sm mt-1">{errors.filiere}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message (optionnel)
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#00BFFF] transition-colors duration-200 resize-none"
                      placeholder="Votre message..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#00BFFF] text-white font-bold rounded-lg hover:bg-[#003366] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Send className="w-5 h-5" />
                  Envoyer ma demande
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;