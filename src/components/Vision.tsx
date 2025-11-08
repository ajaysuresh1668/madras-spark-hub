import { Target, Eye, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const Vision = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
            Our Vision & Mission
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Shaping the future of technology education in India
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 border-2 hover:border-primary transition-all hover:shadow-xl hover:scale-105 animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg animate-float">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be a premier institution fostering innovation, research excellence, and producing 
              globally competitive engineers who contribute to society and technological advancement.
            </p>
          </Card>

          <Card className="p-8 border-2 hover:border-primary transition-all hover:shadow-xl hover:scale-105 animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mb-6 shadow-lg animate-float" style={{ animationDelay: "0.5s" }}>
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              Provide quality technical education through innovative teaching methods, industry 
              collaborations, and research opportunities to develop skilled professionals.
            </p>
          </Card>

          <Card className="p-8 border-2 hover:border-primary transition-all hover:shadow-xl hover:scale-105 animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-700 to-purple-800 flex items-center justify-center mb-6 shadow-lg animate-float" style={{ animationDelay: "1s" }}>
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Values</h3>
            <p className="text-muted-foreground leading-relaxed">
              Excellence in education, integrity in conduct, innovation in approach, and commitment 
              to social responsibility and sustainable development.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Vision;
