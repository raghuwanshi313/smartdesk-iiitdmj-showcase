import { Card } from "@/components/ui/card";

const VideoDemo = () => {
  return (
    <section className="py-16 sm:py-20 bg-secondary">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
            See It In Action
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Watch our Smart Desk prototype in action
          </p>

          <Card className="overflow-hidden border-border shadow-lg">
            <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/puxHXjszzbE"
                title="Smart Desk Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
