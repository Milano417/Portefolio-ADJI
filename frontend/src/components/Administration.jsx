import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { administration } from '../data/mock';

const Administration = () => {
  return (
    <section id="administration" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">
            Notre Administration
          </h2>
          <div className="w-24 h-1 bg-[#00BFFF] mx-auto rounded-full mb-4" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une équipe dévouée au service de l'excellence académique
          </p>
        </div>

        {/* Administration Team */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {administration.map((member) => (
            <div
              key={member.id}
              className="group bg-gradient-to-br from-white to-[#F5F7FA] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-2"
            >
              {/* Photo */}
              <div className="relative overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#003366] mb-2">
                  {member.name}
                </h3>
                <p className="text-[#00BFFF] font-semibold mb-4">
                  {member.position}
                </p>

                <div className="space-y-2">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#00BFFF] transition-colors duration-200"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="truncate">{member.email}</span>
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#00BFFF] transition-colors duration-200"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{member.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Organigramme */}
        <div className="bg-gradient-to-br from-[#F5F7FA] to-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-3xl font-bold text-[#003366] text-center mb-12">Organigramme</h3>
          
          <div className="max-w-4xl mx-auto">
            {/* Directeur Général */}
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-br from-[#003366] to-[#00BFFF] text-white p-6 rounded-xl shadow-lg text-center min-w-[200px]">
                <div className="font-bold text-lg mb-1">Directeur Général</div>
                <div className="text-sm opacity-90">Dr. Konan Yao</div>
              </div>
            </div>

            {/* Vertical Line */}
            <div className="flex justify-center mb-8">
              <div className="w-1 h-12 bg-gradient-to-b from-[#00BFFF] to-[#003366]" />
            </div>

            {/* Second Level */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <div className="bg-white border-2 border-[#00BFFF] p-5 rounded-xl shadow-md text-center w-full">
                  <div className="font-bold text-[#003366] mb-1">Directrice des Études</div>
                  <div className="text-sm text-gray-600">Mme. Adjoua Kouassi</div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-white border-2 border-[#00BFFF] p-5 rounded-xl shadow-md text-center w-full">
                  <div className="font-bold text-[#003366] mb-1">Responsable Scolarité</div>
                  <div className="text-sm text-gray-600">M. Koffi Brou</div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-white border-2 border-[#00BFFF] p-5 rounded-xl shadow-md text-center w-full">
                  <div className="font-bold text-[#003366] mb-1">Responsable Administrative</div>
                  <div className="text-sm text-gray-600">Mme. Akissi N'Guessan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Administration;