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
    <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-white to-accent/5 overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center text-foreground mb-12 animate-fade-in">
          Featured In
        </h2>
        <div className="relative">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div className="overflow-hidden">
            <div className="flex animate-marquee-reverse whitespace-nowrap">
              {[...newspapers, ...newspapers].map((paper, index) => (
                <div
                  key={index}
                  className="mx-6 inline-flex items-center justify-center px-8 py-6 bg-white rounded-2xl shadow-card border-2 border-border hover:border-primary/50 transition-all hover:scale-110 hover:shadow-elegant hover:-translate-y-1 group"
                >
                  <img 
                    src={paper.logo} 
                    alt={`${paper.name} logo`}
                    className="h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
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
          animation: marquee-reverse 40s linear infinite;
        }
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Newspapers;
