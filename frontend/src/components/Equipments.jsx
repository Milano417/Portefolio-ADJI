import React from 'react';
import { Monitor, Video, BookOpen, Users, Wifi, Projector } from 'lucide-react';
import { equipments } from '../data/mock';

const Equipments = () => {
  const iconMap = {
    'Monitor': Monitor,
    'Video': Video,
    'BookOpen': BookOpen,
    'Users': Users,
    'Wifi': Wifi,
    'Projector': Projector
  };

  return (
    <section id="equipments" className="py-20 bg-gradient-to-br from-[#F5F7FA] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">
            Équipements & Installations
          </h2>
          <div className="w-24 h-1 bg-[#00BFFF] mx-auto rounded-full mb-4" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des infrastructures modernes pour une formation de qualité
          </p>
        </div>

        {/* Equipments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipments.map((equipment) => {
            const Icon = iconMap[equipment.icon] || Monitor;
            return (
              <div
                key={equipment.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-2"
              >
                {equipment.image ? (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={equipment.image}
                      alt={equipment.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-full bg-[#00BFFF] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-48 bg-gradient-to-br from-[#003366] to-[#00BFFF] flex items-center justify-center">
                    <Icon className="w-20 h-20 text-white/90" />
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#003366] mb-3">
                    {equipment.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {equipment.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-[#003366] to-[#00BFFF] p-8 md:p-12 rounded-2xl text-white text-center shadow-xl">
          <h3 className="text-3xl font-bold mb-4">Un environnement d'apprentissage optimal</h3>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            Nos équipements de pointe et nos infrastructures modernes offrent aux étudiants 
            un cadre idéal pour développer leurs compétences et exceller dans leur domaine.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Equipments;