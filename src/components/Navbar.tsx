import logo from "@/assets/mec-logo-purple.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center gap-4">
        <img 
          src={logo} 
          alt="Madras Engineering College Logo" 
          className="h-12 w-12 object-contain"
        />
        <h1 className="text-xl md:text-2xl font-bold text-foreground">
          Madras Engineering College
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
