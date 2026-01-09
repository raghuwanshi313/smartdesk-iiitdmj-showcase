import smartDeskImage from "@/assets/smart-desk.jpg";

const Hero = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-secondary to-background">
      <div className="section-container">
        <div className="max-w-6xl mx-auto fade-in">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <p className="text-sm font-medium text-primary">IIITDMJ Innovation Project</p>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-4 tracking-tight">
              CHANAKYA
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              Touch Screen Foldable Mat for Workspace Evolution
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-4 font-light">
              Reimagining workspaces through smart innovation
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
            <img 
              src={smartDeskImage} 
              alt="Smart Desk with holographic interface and posture monitoring system" 
              className="w-full h-auto"
            />
          </div>

          <div className="text-center pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Indian Institute of Information Technology, Design and Manufacturing, Jabalpur
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
