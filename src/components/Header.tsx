import { Building2 } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="section-container py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-sm sm:text-base font-semibold text-foreground leading-tight">
                IIITDMJ
              </h1>
              <p className="text-xs text-muted-foreground">Innovation Project</p>
            </div>
          </div>
          <div className="text-right">
            <h2 className="text-lg sm:text-xl font-bold text-primary">Smart Desk</h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
