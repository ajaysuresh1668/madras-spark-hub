const Recruiters = () => {
  const recruiters = [
    "TCS", "Infosys", "Wipro", "Cognizant", "Accenture", "HCL", "Tech Mahindra",
    "IBM", "Capgemini", "Microsoft", "Amazon", "Google", "Zoho", "PayPal",
    "Oracle", "SAP", "Dell", "HP", "Cisco", "Intel"
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center text-foreground mb-8">
          Top Recruiters
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...recruiters, ...recruiters].map((company, index) => (
              <div
                key={index}
                className="mx-8 inline-flex items-center justify-center px-8 py-4 bg-white rounded-xl shadow-md border-2 border-primary/10 hover:border-primary/30 transition-all hover:scale-105"
              >
                <span className="text-xl font-bold text-primary">{company}</span>
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
