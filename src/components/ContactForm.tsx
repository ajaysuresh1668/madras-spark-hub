import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Phone } from "lucide-react";
import { z } from "zod";

const phoneSchema = z.object({
  phone: z.string()
    .trim()
    .regex(/^[6-9]\d{9}$/, { message: "Please enter a valid 10-digit mobile number" })
});

const ContactForm = () => {
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      phoneSchema.parse({ phone });
      setIsSubmitting(true);

      // Simulate form submission
      setTimeout(() => {
        const message = encodeURIComponent(`Hello! I'm interested in admission at Madras Engineering College. My contact number is ${phone}`);
        window.open(`https://wa.me/919444308959?text=${message}`, '_blank');
        
        toast({
          title: "Thank you for your interest!",
          description: "We'll contact you shortly.",
        });
        setPhone("");
        setIsSubmitting(false);
      }, 500);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Invalid Phone Number",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary to-accent overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>
      
      <div className="container mx-auto max-w-2xl text-center relative z-10">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 sm:p-12 border-2 border-white/20 shadow-2xl animate-scale-in hover:scale-105 transition-transform">
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-6 shadow-xl animate-pulse-glow">
            <Phone className="w-10 h-10 text-primary animate-float" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4 animate-fade-in">
            Get Admission Information
          </h2>
          <p className="text-lg text-white/90 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Enter your mobile number and we'll reach out to help with your admission
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="tel"
              placeholder="Enter your 10-digit mobile number"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
              className="h-14 text-lg bg-white/95 border-2 border-white/30 focus:border-white"
              maxLength={10}
              required
            />
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full h-14 text-lg font-semibold bg-white text-primary hover:bg-white/90 shadow-xl hover:scale-105 transition-all"
            >
              {isSubmitting ? "Submitting..." : "Get Started"}
            </Button>
          </form>

          <p className="text-sm text-white/80 mt-6">
            By submitting, you agree to receive information via WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
