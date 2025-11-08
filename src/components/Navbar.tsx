import logo from "@/assets/mec-logo-purple.png";
import { Phone, FileText } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img 
            src={logo} 
            alt="Madras Engineering College Logo" 
            className="h-12 w-12 object-contain"
          />
          <h1 className="text-xl md:text-2xl font-bold text-foreground">
            Madras Engineering College
          </h1>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg border border-primary/30 hover:border-primary transition-colors">
            <Phone className="w-4 h-4 text-primary" />
            <a href="tel:9444308959" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
              94443 08959
            </a>
          </div>
          <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg border border-primary/30 hover:border-primary transition-colors">
            <FileText className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">
              TNEA: <span className="text-primary font-bold">1203</span>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
