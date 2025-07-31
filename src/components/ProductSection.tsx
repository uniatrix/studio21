import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackInitiateCheckout } from "@/utils/fbPixel";

const ProductSection = () => {
  const productTypes = [
    {
      icon: "📋",
      title: "Templates",
      description: "Business plans, resumes, presentations, and more",
      count: "250,000+",
    },
    {
      icon: "💻",
      title: "Online Courses",
      description: "Complete video courses on marketing, business, tech",
      count: "15,000+",
    },
    {
      icon: "🎨",
      title: "Canva Designs",
      description: "Social media graphics, logos, banners, infographics",
      count: "500,000+",
    },
    {
      icon: "📊",
      title: "Excel Tools",
      description: "Calculators, trackers, business spreadsheets",
      count: "100,000+",
    },
    {
      icon: "🛠️",
      title: "Marketing Kits",
      description: "Email sequences, ad copy, sales funnels",
      count: "75,000+",
    },
    {
      icon: "⚙️",
      title: "Code Snippets",
      description: "Website templates, plugins, software tools",
      count: "100,000+",
    },
  ];

  const benefits = [
    "Start selling in hours, not months",
    "No product creation needed",
    "100% profit from every sale",
    "Launch your own branded shop or agency",
    "Full commercial rights included",
    "Lifetime access to new products added monthly",
  ];

  return (
    <section className="py-2 px-4 bg-subtle-gradient">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-foreground mb-8 text-center">
          What You'll Get
        </h2>
        {/* Vault Section */}
        <div className="bg-card p-6 rounded-2xl shadow-soft border border-border">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-4xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
              <span className="text-3xl">📦</span>
              Your Complete Supply Arsenal
            </h3>

            {/* Main Benefits */}
            <div className="space-y-4 mb-16">
              {[
                "1,000,000+ Products That People Need Daily",
                "Templates, courses, designs, tools. Everything in demand",
                "Full commercial rights",
                "Instant access. No monthly fees",
                "My complete guide on HOW to find and approach clients",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 group hover:transform hover:translate-x-2 transition-transform duration-200"
                >
                  <span className="text-3xl text-amber-400 flex-shrink-0 font-bold">
                    →
                  </span>
                  <span className="text-xl text-foreground font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Product Types Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
              {productTypes.map((product, index) => (
                <div
                  key={index}
                  className="bg-card/50 p-5 rounded-xl shadow-soft border border-border/50 hover:shadow-strong transition-all duration-300"
                >
                  <div className="text-4xl mb-3">{product.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    {product.description}
                  </p>
                  <div className="text-amber-400 font-bold">
                    {product.count}
                  </div>
                </div>
              ))}
            </div>

            {/* Why This Changes Everything */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                Why This Changes Everything
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center space-y-8 mt-16">
              <h3 className="text-4xl font-bold text-foreground flex items-center justify-center gap-3">
                <span className="text-3xl">🎯</span>
                Ready to Connect Supply with Demand?
              </h3>

              <div className="space-y-4 text-xl text-muted-foreground">
                <p>The demand is there. The supply is ready.</p>
                <p className="font-semibold">
                  All you need is the connection strategy.
                  <br />
                  I'll show you exactly how to make it happen.
                </p>
              </div>

              <div className="space-y-4">
                <Button
                  size="lg"
                  variant="destructive"
                  className="w-full text-lg md:text-2xl py-6 px-4 md:px-12 font-bold shadow-lg transform transition-transform duration-1000 animate-slow-pulse"
                  onClick={() => {
                    trackInitiateCheckout();
                    window.open("https://ko-fi.com/s/ebc7311aac", "_blank");
                  }}
                >
                  <span className="relative">
                    👉 I Want To Start Selling Today
                  </span>
                </Button>

                <p className="text-lg text-muted-foreground">
                  You could be selling your first product by tonight.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
