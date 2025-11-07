const Newspapers = () => {
  const newspapers = [
    "The Hindu", "Times of India", "Indian Express", "Deccan Chronicle",
    "Economic Times", "Business Standard", "The New Indian Express",
    "Dinamalar", "Dinakaran", "Daily Thanthi"
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-gray-50 via-white to-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center text-foreground mb-8">
          Featured In
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {[...newspapers, ...newspapers].map((paper, index) => (
              <div
                key={index}
                className="mx-8 inline-flex items-center justify-center px-8 py-4 bg-white rounded-xl shadow-md border-2 border-gray-200 hover:border-primary/50 transition-all hover:scale-105"
              >
                <span className="text-xl font-bold text-gray-800">{paper}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 35s linear infinite;
        }
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Newspapers;
