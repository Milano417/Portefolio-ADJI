import React, { useEffect, useState } from 'react';
import { ChevronRight, GraduationCap } from 'lucide-react';
import { schoolInfo } from '../data/mock';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1606761568499-6d2451b23c66?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzfGVufDB8fHx8MTc4MTE3MzI4MHww&ixlib=rb-4.1.0&q=85)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#003366]/95 via-[#003366]/90 to-[#00BFFF]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Logo/Icon */}
        <div className={`mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 mb-6">
            <GraduationCap className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Main Title with Gradient */}
        <h1 
          className={`text-6xl md:text-8xl font-bold mb-6 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{
            background: 'linear-gradient(135deg, #003366 0%, #00BFFF 50%, #FFFFFF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          {schoolInfo.name}
        </h1>

        {/* Subtitle */}
        <h2 
          className={`text-2xl md:text-4xl text-white font-light mb-4 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {schoolInfo.fullName}
        </h2>

        {/* Slogan */}
        <p 
          className={`text-xl md:text-2xl text-[#00BFFF] font-semibold mb-12 transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          « {schoolInfo.slogan} »
        </p>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, '#about')}
            className="group px-8 py-4 bg-white text-[#003366] font-bold rounded-lg hover:bg-[#F5F7FA] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center gap-2"
          >
            Découvrir l'école
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="#admissions"
            onClick={(e) => scrollToSection(e, '#admissions')}
            className="group px-8 py-4 bg-[#00BFFF] text-white font-bold rounded-lg hover:bg-[#00A8E8] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center gap-2 border-2 border-white/30"
          >
            S'inscrire maintenant
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Info Badge */}
        <div 
          className={`mt-16 inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/30 transform transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="w-2 h-2 bg-[#00BFFF] rounded-full animate-pulse" />
          <span className="text-white font-medium">Fondé le {schoolInfo.foundedDate}</span>
          <div className="w-1 h-6 bg-white/30 mx-2" />
          <span className="text-white font-medium">{schoolInfo.location}</span>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
};

export default Hero;