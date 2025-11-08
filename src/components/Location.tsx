import { MapPin, Phone, Mail } from "lucide-react";

const Location = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
            Visit Our Campus
          </h2>
          <p className="text-lg text-muted-foreground">
            Come and explore our state-of-the-art facilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="bg-white rounded-2xl p-8 border-2 border-primary/20 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 animate-float">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Address</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Madras Engineering College<br />
                      Chennai, Tamil Nadu<br />
                      India - 600001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center flex-shrink-0 animate-float" style={{ animationDelay: "0.5s" }}>
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <a 
                      href="tel:9444308959" 
                      className="text-primary hover:text-primary/80 font-semibold transition-colors"
                    >
                      94443 08959
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-700 to-purple-800 flex items-center justify-center flex-shrink-0 animate-float" style={{ animationDelay: "1s" }}>
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a 
                      href="mailto:info@madrasengineering.edu" 
                      className="text-primary hover:text-primary/80 font-semibold transition-colors"
                    >
                      info@madrasengineering.edu
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-primary/5 rounded-xl border-2 border-primary/20 hover:border-primary transition-all hover:scale-105">
                <p className="text-sm font-semibold text-foreground mb-1">
                  TNEA Counselling Code
                </p>
                <p className="text-3xl font-bold text-primary animate-pulse-glow">1203</p>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="bg-white rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg h-[500px] hover:shadow-xl hover:scale-105 transition-all animate-slide-in-right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8413537859845!2d80.2263376!3d13.044422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267e0f1e2c1e5%3A0x4e3e45d93e2c7f7!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Madras Engineering College Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
