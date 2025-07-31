import { Button } from "@/components/ui/button";
import { trackInitiateCheckout } from "@/utils/fbPixel";

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-black to-zinc-900 text-white overflow-x-hidden">
      <div className="max-w-4xl mx-auto text-center w-full">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Stop Guessing. Start Connecting.
          </h2>
          <p className="text-xl opacity-90 leading-relaxed mb-8">
            The demand exists. The supply is ready. You just need the exact
            system to connect them. No guesswork. No trial and error. Just a
            proven method that works.
          </p>
        </div>

        {/* Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-semibold mb-2">Instant Access</h3>
            <p className="text-sm opacity-80">
              Download everything immediately after purchase
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-3xl mb-3">♾</div>
            <h3 className="font-semibold mb-2">Lifetime Access</h3>
            <p className="text-sm opacity-80">
              Keep everything forever, including future updates
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-3xl mb-3">📦</div>
            <h3 className="font-semibold mb-2">Complete Package</h3>
            <p className="text-sm opacity-80">
              Products + my strategy guide + bonuses
            </p>
          </div>
        </div>

        {/* Main CTA */}
        <div className="space-y-6">
          <Button
            variant="cta"
            size="xl"
            className="text-lg md:text-xl px-8 md:px-16 py-6 h-auto transform transition-transform duration-1000 animate-slow-pulse w-full max-w-md mx-auto"
            onClick={() => {
              trackInitiateCheckout();
              window.open("https://ko-fi.com/s/ebc7311aac", "_blank");
            }}
          >
            🔥 Yes, I'm Ready To Begin 🔥
          </Button>

          <div className="text-sm opacity-90 space-y-3 mt-8">
            <p className="flex items-center justify-center gap-2">
              <span className="text-green-400 text-xl">✓</span>
              <span>1,000,000+ In-Demand Products</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-green-400 text-xl">✓</span>
              <span>My Complete Client Connection Strategy</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-green-400 text-xl">✓</span>
              <span>Lifetime Access + All Future Updates</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-green-400 text-xl">✓</span>
              <span>30-Day Money-Back Guarantee</span>
            </p>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
          <div className="text-3xl mb-4">⭐⭐⭐⭐⭐</div>
          <blockquote className="text-lg italic mb-4">
            "Finally someone who shows you WHERE to find clients and EXACTLY
            what to say. I made $3,200 in my first 60 days just by following
            your connection strategy. This changed everything."
          </blockquote>
          <cite className="text-sm opacity-75">
            — Sarah M., Digital Entrepreneur
          </cite>
        </div>

        {/* Final Trust Elements */}
        <div className="mt-12 text-sm opacity-75 space-y-2">
          <p className="flex items-center justify-center gap-2">
            <span>🔒 Secure checkout</span>
            <span>•</span>
            <span>💳 All payment methods accepted</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
