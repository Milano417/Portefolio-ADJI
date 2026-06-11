import React, { useState, useEffect, useRef } from 'react';
import { Award, GraduationCap, Users, TrendingUp, Briefcase, UserCheck } from 'lucide-react';
import { statistics } from '../data/mock';

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(statistics.map(() => 0));
  const sectionRef = useRef(null);

  const iconMap = {
    'Award': Award,
    'GraduationCap': GraduationCap,
    'Users': Users,
    'TrendingUp': TrendingUp,
    'Briefcase': Briefcase,
    'UserCheck': UserCheck
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60 FPS
    const totalFrames = Math.round(duration / frameDuration);

    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounts(statistics.map(stat => Math.round(stat.value * easeOutQuart)));

      if (frame === totalFrames) {
        clearInterval(counter);
        setCounts(statistics.map(stat => stat.value));
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, [isVisible]);

  return (
    <section id="statistics" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">
            ISATech en Chiffres
          </h2>
          <div className="w-24 h-1 bg-[#00BFFF] mx-auto rounded-full mb-4" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Plus de deux décennies d'excellence et de réussite
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {statistics.map((stat, index) => {
            const Icon = iconMap[stat.icon] || Award;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-[#F5F7FA] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00BFFF] to-[#003366] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-5xl font-bold mb-2">
                    <span 
                      className="bg-gradient-to-r from-[#003366] to-[#00BFFF] bg-clip-text text-transparent"
                    >
                      {counts[index]}{stat.suffix}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-700">
                    {stat.label}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-[#003366] to-[#00BFFF] p-8 md:p-12 rounded-2xl text-white shadow-xl">
            <h3 className="text-3xl font-bold mb-4">Rejoignez l'Excellence</h3>
            <p className="text-lg mb-6 max-w-2xl">
              Faites partie des milliers d'étudiants qui ont choisi ISATech pour leur formation et ont réussi leur carrière professionnelle.
            </p>
            <a
              href="#admissions"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#admissions').scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block px-8 py-4 bg-white text-[#003366] font-bold rounded-lg hover:bg-[#F5F7FA] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              S'inscrire Maintenant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;