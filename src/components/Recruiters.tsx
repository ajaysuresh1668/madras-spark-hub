const Recruiters = () => {
  const recruiters = [
    "TCS", "Infosys", "Wipro", "Cognizant", "Accenture", "HCL", "Tech Mahindra",
    "IBM", "Capgemini", "Microsoft", "Amazon", "Google", "Zoho", "PayPal",
    "Oracle", "SAP", "Dell", "HP", "Cisco", "Intel"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 overflow-hidden relative">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-heading font-bold text-center text-foreground mb-12 animate-fade-in">
          Top Recruiters
        </h2>
        <div className="relative overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/50 to-transparent z-10 pointer-events-none" />
          
          <div className="flex animate-marquee whitespace-nowrap py-4">
            {[...recruiters, ...recruiters].map((company, index) => (
              <div
                key={index}
                className="mx-8 inline-flex items-center justify-center px-10 py-6 bg-gradient-to-br from-white via-white to-purple-50/20 rounded-2xl shadow-md border-2 border-primary/10 hover:border-primary transition-all hover:scale-110 hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="text-xl font-bold text-primary relative z-10">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Recruiters;
