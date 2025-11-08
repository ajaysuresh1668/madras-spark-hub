import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap } from "lucide-react";
import heroImage from "@/assets/hero-campus.jpg";
import logo from "@/assets/mec-logo-purple.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white to-purple-50/30" />
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          {/* Logo and College Name */}
          <div className="flex items-center gap-4 mb-6 animate-fade-in">
            <img 
              src={logo} 
              alt="Madras Engineering College Logo" 
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-lg"
            />
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-black leading-tight">
                Madras Engineering
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
                College
              </h2>
            </div>
          </div>


          {/* Tagline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-8 max-w-2xl leading-relaxed">
            Empowering the next generation of engineers and innovators with cutting-edge technology education
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg px-8 py-6 rounded-xl shadow-elegant transition-all hover:scale-105 hover:shadow-2xl"
            >
              Explore Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white font-semibold text-lg px-8 py-6 rounded-xl transition-all hover:scale-105"
            >
              <GraduationCap className="mr-2 h-5 w-5" />
              Apply Now
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-4 border-2 border-primary/20 shadow-card hover:shadow-elegant transition-all">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">5</div>
              <div className="text-sm text-gray-600">Programs</div>
            </div>
            <div className="bg-white rounded-xl p-4 border-2 border-primary/20 shadow-card hover:shadow-elegant transition-all">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">100+</div>
              <div className="text-sm text-gray-600">Expert Faculty</div>
            </div>
            <div className="bg-white rounded-xl p-4 border-2 border-primary/20 shadow-card hover:shadow-elegant transition-all">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">1000+</div>
              <div className="text-sm text-gray-600">Students</div>
            </div>
            <div className="bg-white rounded-xl p-4 border-2 border-primary/20 shadow-card hover:shadow-elegant transition-all">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">95%</div>
              <div className="text-sm text-gray-600">Placements</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
