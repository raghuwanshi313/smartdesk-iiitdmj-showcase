const Hero = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-secondary to-background">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <p className="text-sm font-medium text-primary">Student Innovation Project</p>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Smart Desk
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-4 font-light">
            Reimagining workspaces through smart innovation
          </p>
          <div className="mt-8 pt-8 border-t border-border">
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
