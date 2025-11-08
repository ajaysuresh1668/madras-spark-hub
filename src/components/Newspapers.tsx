import theHindu from "@/assets/newspapers/the-hindu.png";
import timesOfIndia from "@/assets/newspapers/times-of-india.png";
import indianExpress from "@/assets/newspapers/indian-express.png";
import deccanChronicle from "@/assets/newspapers/deccan-chronicle.png";
import economicTimes from "@/assets/newspapers/economic-times.png";
import businessStandard from "@/assets/newspapers/business-standard.png";
import newIndianExpress from "@/assets/newspapers/new-indian-express.png";
import dinamalar from "@/assets/newspapers/dinamalar.png";
import dinakaran from "@/assets/newspapers/dinakaran.png";
import dailyThanthi from "@/assets/newspapers/daily-thanthi.png";

const Newspapers = () => {
  const newspapers = [
    { name: "The Hindu", logo: theHindu },
    { name: "Times of India", logo: timesOfIndia },
    { name: "Indian Express", logo: indianExpress },
    { name: "Deccan Chronicle", logo: deccanChronicle },
    { name: "Economic Times", logo: economicTimes },
    { name: "Business Standard", logo: businessStandard },
    { name: "The New Indian Express", logo: newIndianExpress },
    { name: "Dinamalar", logo: dinamalar },
    { name: "Dinakaran", logo: dinakaran },
    { name: "Daily Thanthi", logo: dailyThanthi }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-white to-accent/5 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block animate-scale-in">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse-glow">
              Featured In
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>
          <p className="text-lg text-muted-foreground mt-4 animate-fade-in">
            Recognized by leading publications across India
          </p>
        </div>
        
        <div className="relative">
          {/* Enhanced gradient overlays with blur effect */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white via-white/50 to-transparent z-10 pointer-events-none backdrop-blur-sm" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white via-white/50 to-transparent z-10 pointer-events-none backdrop-blur-sm" />
          
          <div className="overflow-hidden py-4">
            <div className="flex animate-marquee-reverse whitespace-nowrap">
              {[...newspapers, ...newspapers].map((paper, index) => (
                <div
                  key={index}
                  className="mx-8 inline-flex items-center justify-center px-10 py-8 bg-gradient-to-br from-white via-white to-purple-50/30 rounded-3xl shadow-card border-2 border-border hover:border-primary transition-all duration-500 hover:scale-125 hover:shadow-2xl hover:-translate-y-3 group relative overflow-hidden"
                >
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/20 to-accent/20 blur-xl" />
                  
                  <img 
                    src={paper.logo} 
                    alt={`${paper.name} logo`}
                    className="h-20 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10 group-hover:drop-shadow-2xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 45s linear infinite;
        }
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Newspapers;
