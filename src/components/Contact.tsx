import { Card } from "@/components/ui/card";
import { Phone, Building2 } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-16 sm:py-20 bg-secondary">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Have questions? Feel free to reach out to us
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="p-6 border-border hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                  <a 
                    href="tel:9301767181" 
                    className="text-primary hover:text-primary-hover transition-colors"
                  >
                    9301767181
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Institution</h3>
                  <p className="text-muted-foreground">IIITDMJ</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Indian Institute of Information Technology, Design and Manufacturing, Jabalpur
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
