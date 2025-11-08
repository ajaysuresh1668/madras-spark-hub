import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import Recruiters from "@/components/Recruiters";
import Vision from "@/components/Vision";
import ExtraCourses from "@/components/ExtraCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactForm from "@/components/ContactForm";
import Newspapers from "@/components/Newspapers";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Courses />
      <Recruiters />
      <Vision />
      <ExtraCourses />
      <WhyChooseUs />
      <ContactForm />
      <Newspapers />
      <FAQ />
      <Location />
    </main>
  );
};

export default Index;
