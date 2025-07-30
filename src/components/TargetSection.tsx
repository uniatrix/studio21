import { Users, Zap, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const TargetSection = () => {
  const idealFor = [
    {
      icon: <Users className="w-8 h-8 text-blue-500 dark:text-blue-400" />,
      title: "Complete Beginners",
      description:
        "Never sold anything online? Perfect. This system works even if you're starting from zero.",
    },
    {
      icon: <Zap className="w-8 h-8 text-amber-500 dark:text-amber-400" />,
      title: "Busy People",
      description:
        "No time to create products? These are ready-to-sell immediately. Just rebrand and profit.",
    },
    {
      icon: (
        <Shield className="w-8 h-8 text-emerald-500 dark:text-emerald-400" />
      ),
      title: "Risk-Averse Entrepreneurs",
      description:
        "Why gamble on unproven ideas? These products have already been market-tested.",
    },
    {
      icon: (
        <TrendingUp className="w-8 h-8 text-purple-500 dark:text-purple-400" />
      ),
      title: "Scaling Existing Business",
      description:
        "Add new revenue streams instantly without the overhead of product development.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Who This Is Perfect For
          </h2>
          <p className="text-xl text-muted-foreground">
            I designed this for people exactly like I was — ready for change
            but not sure where to start
          </p>
        </div>

        {/* Ideal Customer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {idealFor.map((item, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-soft border border-border"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Key Requirements */}
        <div className="bg-muted p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            What You DON'T Need
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-3">❌</div>
              <h4 className="font-semibold text-foreground mb-2">
                Technical Skills
              </h4>
              <p className="text-sm text-muted-foreground">
                No coding, no complex software, no learning curve
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">❌</div>
              <h4 className="font-semibold text-foreground mb-2">
                Large Investment
              </h4>
              <p className="text-sm text-muted-foreground">
                Start with what you have, scale as you grow
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">❌</div>
              <h4 className="font-semibold text-foreground mb-2">Experience</h4>
              <p className="text-sm text-muted-foreground">
                My guide walks you through everything
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetSection;
