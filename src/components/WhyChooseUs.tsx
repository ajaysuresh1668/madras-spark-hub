import { CheckCircle2 } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "95% Placement Record",
      description: "Excellent placement opportunities with top companies across India and globally"
    },
    {
      title: "Experienced Faculty",
      description: "Learn from industry experts and PhD holders with years of teaching experience"
    },
    {
      title: "State-of-the-Art Labs",
      description: "Modern infrastructure with cutting-edge technology and equipment"
    },
    {
      title: "Industry Collaborations",
      description: "Partnerships with leading tech companies for internships and training"
    },
    {
      title: "Research Opportunities",
      description: "Active research programs and innovation centers for student projects"
    },
    {
      title: "Vibrant Campus Life",
      description: "Cultural events, sports facilities, and numerous student clubs and activities"
    },
    {
      title: "AICTE Approved",
      description: "Recognized by AICTE and affiliated with Anna University"
    },
    {
      title: "Affordable Fee Structure",
      description: "Quality education at reasonable costs with scholarship opportunities"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
            Why Choose Madras Engineering College?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here's what makes us stand out from the rest
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group flex gap-4 p-6 bg-gradient-to-br from-white to-purple-50/30 rounded-2xl border-2 border-purple-100 hover:border-primary transition-all hover:shadow-lg hover:scale-105 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform animate-pulse-glow">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
