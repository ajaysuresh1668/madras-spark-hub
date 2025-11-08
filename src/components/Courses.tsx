import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, Database, Brain, TrendingUp, Laptop, MessageCircle } from "lucide-react";

const courses = [
  {
    id: 1,
    code: "BE-CSE",
    title: "Computer Science & Engineering",
    icon: Code2,
    description: "Master the fundamentals of computing, algorithms, and software development",
    highlights: ["Core Programming", "Algorithms & Data Structures", "Software Engineering"],
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 2,
    code: "B.Tech-IT",
    title: "Information Technology",
    icon: Laptop,
    description: "Explore networking, web technologies, and information systems",
    highlights: ["Network Security", "Web Development", "Cloud Computing"],
    color: "from-purple-600 to-purple-700",
  },
  {
    id: 3,
    code: "B.Tech-AIDS",
    title: "AI & Data Science",
    icon: Database,
    description: "Unlock insights from data with advanced analytics and AI techniques",
    highlights: ["Big Data Analytics", "Machine Learning", "Data Visualization"],
    color: "from-violet-500 to-violet-600",
  },
  {
    id: 4,
    code: "B.Tech-AIML",
    title: "AI & Machine Learning",
    icon: Brain,
    description: "Build intelligent systems that learn and adapt autonomously",
    highlights: ["Deep Learning", "Neural Networks", "NLP"],
    color: "from-purple-700 to-purple-800",
  },
  {
    id: 5,
    code: "B.Tech-CSBS",
    title: "Computer Science & Business Systems",
    icon: TrendingUp,
    description: "Bridge technology and business with integrated computing solutions",
    highlights: ["Business Analytics", "ERP Systems", "Digital Transformation"],
    color: "from-purple-500 to-violet-600",
  },
];

const Courses = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
            Our Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our industry-aligned programs designed to prepare you for the future of technology
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <Card 
                key={course.id}
                className="group relative overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative p-6 sm:p-8">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 animate-float`} style={{ animationDelay: `${index * 0.3}s` }}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Course Code */}
                  <div className="text-sm font-bold text-primary mb-2 bg-primary/10 px-3 py-1 rounded-full inline-block">
                    {course.code}
                  </div>

                  {/* Course Title */}
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-3">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {course.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${course.color} mr-2`} />
                        <span className="text-foreground/80">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Let's Chat Button */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <Button 
                      onClick={() => window.open(`https://wa.me/919444308959?text=Hi, I'm interested in ${course.code} - ${course.title}`, '_blank')}
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Let's Chat
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
