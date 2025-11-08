import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the TNEA counselling code for Madras Engineering College?",
      answer: "The TNEA counselling code for Madras Engineering College is 1203. You need to use this code during the counselling process."
    },
    {
      question: "What courses are offered at Madras Engineering College?",
      answer: "We offer BE in Computer Science & Engineering, B.Tech in Information Technology, B.Tech in AI & Data Science, B.Tech in AI & Machine Learning, and B.Tech in Computer Science & Business Systems."
    },
    {
      question: "What is the admission process?",
      answer: "Admissions are through TNEA counselling. Students must have completed 12th grade with required marks in Physics, Chemistry, and Mathematics. Apply through the TNEA portal using our college code 1203."
    },
    {
      question: "What are the placement opportunities?",
      answer: "We have an excellent 95% placement record with top companies like TCS, Infosys, Wipro, Cognizant, and many more recruiting from our campus every year."
    },
    {
      question: "What is the fee structure?",
      answer: "We offer affordable fee structure with various scholarship opportunities. For detailed fee information, please contact us at 94443 08959."
    },
    {
      question: "Does the college provide hostel facilities?",
      answer: "Yes, we provide separate hostel facilities for both boys and girls with modern amenities, mess, and 24/7 security."
    },
    {
      question: "What extra-curricular activities are available?",
      answer: "We have numerous student clubs, cultural events, sports facilities, technical workshops, and competitions throughout the year to ensure holistic development."
    },
    {
      question: "Is the college AICTE approved?",
      answer: "Yes, Madras Engineering College is AICTE approved and affiliated with Anna University, ensuring quality education and recognized degrees."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Get answers to common questions about admissions and campus life
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-2 border-gray-200 rounded-xl px-6 hover:border-primary hover:shadow-lg transition-all animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
