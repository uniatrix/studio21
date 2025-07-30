import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-subtle-gradient flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading - Always at top */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
            Digital Products
            <span className="block mt-2">
              That Actually Sell
            </span>
            <span className="block mt-2">
              And How To Sell Them
            </span>
          </h1>
        </div>

        {/* Mobile-first layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section - Shows first on mobile */}
          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-2xl shadow-strong">
              <img
                src="/lovable-uploads/a403f00f-b25f-4272-b9a7-1ca593947238.png"
                alt="Digital Products That Actually Sell - 1,000,000+ Ready-to-Sell Digital Products"
                className="w-full h-[450px] md:h-[600px] object-contain md:object-cover bg-black/5"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Text & CTA Section - Shows second on mobile */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  <strong>1,000,000+ ready-to-sell digital products</strong> that transformed me from a struggling 9-to-5 worker into a successful digital entrepreneur. No tech skills required.
                </p>
              </div>

              <div className="space-y-4">
                <Button variant="cta" size="xl" className="w-full lg:w-auto text-xl px-16 py-6 h-auto transform transition-transform duration-1000 animate-slow-pulse">
                  I want to start selling digital products easily
                </Button>
                <div className="flex justify-center">
                  <p className="text-base text-muted-foreground mt-6">
                    ✓ Instant access • ✓ Lifetime vault access • ✓ No monthly fees
                  </p>
                </div>
              </div>
              {/* Studio21 Image - Shows last on mobile */}
              <div className="order-3 col-span-1 lg:col-span-2 flex justify-center w-full">
                <div className="mt-6 relative overflow-hidden rounded-2xl shadow-xl max-w-2xl transform hover:scale-[1.02] transition-transform duration-300">
                  <img
                    src="/lovable-uploads/studio21.png"
                    alt="Studio21 Software Bundle"
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;