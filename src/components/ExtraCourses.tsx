import { BookOpen, Code, Palette, Globe, Calculator, Languages, Music, Camera, Dumbbell, Briefcase } from "lucide-react";

const ExtraCourses = () => {
  const extraCourses = [
    { name: "Soft Skills Development", icon: BookOpen, color: "from-blue-500 to-blue-600" },
    { name: "Advanced Programming", icon: Code, color: "from-green-500 to-green-600" },
    { name: "UI/UX Design", icon: Palette, color: "from-pink-500 to-pink-600" },
    { name: "Digital Marketing", icon: Globe, color: "from-orange-500 to-orange-600" },
    { name: "Aptitude Training", icon: Calculator, color: "from-purple-500 to-purple-600" },
    { name: "Foreign Languages", icon: Languages, color: "from-red-500 to-red-600" },
    { name: "Music & Arts", icon: Music, color: "from-indigo-500 to-indigo-600" },
    { name: "Photography", icon: Camera, color: "from-teal-500 to-teal-600" },
    { name: "Fitness & Yoga", icon: Dumbbell, color: "from-emerald-500 to-emerald-600" },
    { name: "Entrepreneurship", icon: Briefcase, color: "from-amber-500 to-amber-600" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50/50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
            Extra Learning Opportunities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beyond academics - develop skills that make you industry-ready
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {extraCourses.map((course, index) => {
            const Icon = course.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-primary transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-foreground leading-tight">
                  {course.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExtraCourses;
