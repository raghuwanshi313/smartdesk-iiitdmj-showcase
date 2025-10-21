import { Card } from "@/components/ui/card";
import { User } from "lucide-react";

const teamMembers = [
  { name: "Team Member 1", role: "Project Lead" },
  { name: "Team Member 2", role: "Hardware Engineer" },
  { name: "Team Member 3", role: "Software Developer" },
  { name: "Team Member 4", role: "Design Specialist" },
];

const Team = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
            Our Team
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Meet the innovators behind Smart Desk
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 hover-lift border-border text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
