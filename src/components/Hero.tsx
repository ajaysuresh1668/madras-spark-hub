import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Phone, FileText } from "lucide-react";
import heroImage from "@/assets/hero-campus.jpg";
import logo from "@/assets/mec-logo-purple.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Logo and College Name */}
          <div className="flex items-center gap-4 mb-6 animate-fade-in">
            <img 
              src={logo} 
              alt="Madras Engineering College Logo" 
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-2xl"
            />
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-white leading-tight">
                Madras Engineering
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-heading font-bold text-accent leading-tight">
                College
              </h2>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30">
              <Phone className="w-5 h-5 text-accent" />
              <a href="tel:9444308959" className="text-white font-semibold hover:text-accent transition-colors">
                94443 08959
              </a>
            </div>
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30">
              <FileText className="w-5 h-5 text-accent" />
              <span className="text-white font-semibold">
                TNEA Code: <span className="text-accent">1203</span>
              </span>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Empowering the next generation of engineers and innovators with cutting-edge technology education
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8 py-6 rounded-xl shadow-elegant transition-all hover:scale-105 hover:shadow-2xl"
            >
              Explore Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-6 rounded-xl transition-all hover:scale-105"
            >
              <GraduationCap className="mr-2 h-5 w-5" />
              Apply Now
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-1">5</div>
              <div className="text-sm text-white/80">Programs</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-1">100+</div>
              <div className="text-sm text-white/80">Expert Faculty</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-1">1000+</div>
              <div className="text-sm text-white/80">Students</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-1">95%</div>
              <div className="text-sm text-white/80">Placements</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
