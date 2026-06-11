import React, { useState } from 'react';
import { ChevronRight, GraduationCap, Clock, Award } from 'lucide-react';
import { filieres } from '../data/mock';

const Filieres = () => {
  const [selectedFiliere, setSelectedFiliere] = useState(null);

  return (
    <section id="filieres" className="py-20 bg-gradient-to-br from-[#F5F7FA] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">
            Nos Filières de Formation
          </h2>
          <div className="w-24 h-1 bg-[#00BFFF] mx-auto rounded-full mb-4" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos programmes de formation professionnelle reconnus et adaptés aux besoins du marché
          </p>
        </div>

        {/* Filieres Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filieres.map((filiere) => (
            <div
              key={filiere.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={filiere.image}
                  alt={filiere.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/90 via-[#003366]/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-4 py-2 bg-[#00BFFF] text-white font-bold rounded-full text-sm">
                    {filiere.code}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#003366] mb-3 line-clamp-2 min-h-[56px]">
                  {filiere.name}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                  {filiere.description}
                </p>

                {/* Info */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{filiere.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    <span>{filiere.diploma}</span>
                  </div>
                </div>

                {/* Debouches Preview */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-[#003366] mb-2">Débouchés professionnels :</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {filiere.debouches.slice(0, 3).map((debouche, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#00BFFF] mt-1">•</span>
                        <span>{debouche}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => setSelectedFiliere(filiere)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#00BFFF] text-white font-semibold rounded-lg hover:bg-[#003366] transition-colors duration-300 group-hover:shadow-lg"
                >
                  En savoir plus
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedFiliere && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedFiliere(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-64">
              <img
                src={selectedFiliere.image}
                alt={selectedFiliere.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/95 via-[#003366]/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-4 py-2 bg-[#00BFFF] text-white font-bold rounded-full text-sm mb-3">
                  {selectedFiliere.code}
                </span>
                <h3 className="text-3xl font-bold text-white">
                  {selectedFiliere.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedFiliere(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="mb-6">
                <h4 className="text-xl font-bold text-[#003366] mb-3">Description de la formation</h4>
                <p className="text-gray-700 leading-relaxed">
                  {selectedFiliere.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-[#F5F7FA] p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-[#003366] mb-2">
                    <Clock className="w-5 h-5" />
                    <span className="font-semibold">Durée</span>
                  </div>
                  <p className="text-gray-700">{selectedFiliere.duration}</p>
                </div>
                <div className="bg-[#F5F7FA] p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-[#003366] mb-2">
                    <Award className="w-5 h-5" />
                    <span className="font-semibold">Diplôme</span>
                  </div>
                  <p className="text-gray-700">{selectedFiliere.diploma}</p>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-[#003366] mb-4 flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-[#00BFFF]" />
                  Débouchés Professionnels
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedFiliere.debouches.map((debouche, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 bg-[#F5F7FA] rounded-lg hover:bg-[#00BFFF]/10 transition-colors duration-200"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#00BFFF] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronRight className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm">{debouche}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href="#admissions"
                  onClick={() => {
                    setSelectedFiliere(null);
                    document.querySelector('#admissions').scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex-1 px-6 py-3 bg-[#00BFFF] text-white font-semibold rounded-lg hover:bg-[#003366] transition-colors duration-300 text-center"
                >
                  S'inscrire à cette filière
                </a>
                <button
                  onClick={() => setSelectedFiliere(null)}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Filieres;