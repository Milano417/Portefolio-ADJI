import React from 'react';
import { Target, Eye, Heart, Award } from 'lucide-react';
import { about } from '../data/mock';

const About = () => {
  const iconMap = {
    'Excellence': Award,
    'Innovation': Target,
    'Intégrité': Heart,
    'Professionnalisme': Eye
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">
            À Propos d'ISATech
          </h2>
          <div className="w-24 h-1 bg-[#00BFFF] mx-auto rounded-full" />
        </div>

        {/* History */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-[#F5F7FA] to-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-[#003366] mb-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#00BFFF] flex items-center justify-center text-white">
                <Award className="w-5 h-5" />
              </div>
              Notre Histoire
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              {about.history}
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#00BFFF] hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#00BFFF]/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-[#00BFFF]" />
              </div>
              <h3 className="text-2xl font-bold text-[#003366]">Notre Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {about.mission}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#003366] hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#003366]/10 flex items-center justify-center">
                <Eye className="w-6 h-6 text-[#003366]" />
              </div>
              <h3 className="text-2xl font-bold text-[#003366]">Notre Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {about.vision}
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-[#003366] text-center mb-10">Nos Valeurs</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {about.values.map((value, index) => {
              const Icon = iconMap[value.title] || Award;
              return (
                <div
                  key={index}
                  className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#00BFFF] transform hover:-translate-y-2"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00BFFF] to-[#003366] flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-[#003366] text-center mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recognition */}
        <div className="bg-gradient-to-r from-[#003366] to-[#00BFFF] p-8 md:p-12 rounded-2xl text-white text-center shadow-xl">
          <Award className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Reconnaissance Officielle</h3>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            {about.recognition}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;