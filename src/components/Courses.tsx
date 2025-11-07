import { Card } from "@/components/ui/card";
import { Code2, Database, Brain, TrendingUp, Laptop } from "lucide-react";

const courses = [
  {
    id: 1,
    code: "BE CSE",
    title: "Computer Science & Engineering",
    icon: Code2,
    description: "Master the fundamentals of computing, algorithms, and software development",
    highlights: ["Core Programming", "Algorithms & Data Structures", "Software Engineering"],
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    code: "B.Tech IT",
    title: "Information Technology",
    icon: Laptop,
    description: "Explore networking, web technologies, and information systems",
    highlights: ["Network Security", "Web Development", "Cloud Computing"],
    color: "from-cyan-500 to-cyan-600",
  },
  {
    id: 3,
    code: "B.Tech AIDS",
    title: "AI & Data Science",
    icon: Database,
    description: "Unlock insights from data with advanced analytics and AI techniques",
    highlights: ["Big Data Analytics", "Machine Learning", "Data Visualization"],
    color: "from-emerald-500 to-emerald-600",
  },
  {
    id: 4,
    code: "B.Tech AIML",
    title: "AI & Machine Learning",
    icon: Brain,
    description: "Build intelligent systems that learn and adapt autonomously",
    highlights: ["Deep Learning", "Neural Networks", "NLP"],
    color: "from-violet-500 to-violet-600",
  },
  {
    id: 5,
    code: "B.Tech CSBS",
    title: "Computer Science & Business Systems",
    icon: TrendingUp,
    description: "Bridge technology and business with integrated computing solutions",
    highlights: ["Business Analytics", "ERP Systems", "Digital Transformation"],
    color: "from-orange-500 to-orange-600",
  },
];

const Courses = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
            Our Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our industry-aligned programs designed to prepare you for the future of technology
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <Card 
                key={course.id}
                className="group relative overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative p-6 sm:p-8">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Course Code */}
                  <div className="text-sm font-semibold text-accent mb-2">
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

                  {/* Learn More Link */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <span className="text-primary font-semibold text-sm group-hover:text-accent transition-colors inline-flex items-center">
                      Learn More 
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </span>
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
