import { Card } from "@/components/ui/card";
import { Lightbulb, Monitor, Heart } from "lucide-react";

const About = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-6">
            Project Overview
          </h2>
          <p className="text-lg text-muted-foreground text-center leading-relaxed mb-12">
            Smart Desk is an innovative workspace designed to improve productivity and comfort 
            using smart sensors and automation. It offers an intelligent solution to monitor 
            posture, manage lighting, and create a healthier work environment — integrating 
            technology seamlessly into everyday life.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            <Card className="p-6 hover-lift cursor-default border-border">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Monitor className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Smart Monitoring</h3>
                <p className="text-sm text-muted-foreground">
                  Real-time posture tracking for better ergonomics
                </p>
              </div>
            </Card>

            <Card className="p-6 hover-lift cursor-default border-border">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Intelligent Lighting</h3>
                <p className="text-sm text-muted-foreground">
                  Automated lighting management system
                </p>
              </div>
            </Card>

            <Card className="p-6 hover-lift cursor-default border-border">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Health First</h3>
                <p className="text-sm text-muted-foreground">
                  Creating a healthier work environment
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
