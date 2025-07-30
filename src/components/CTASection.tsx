import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-black to-zinc-900 text-white overflow-x-hidden">
      <div className="max-w-4xl mx-auto text-center w-full">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Your Digital Freedom Starts Today
          </h2>
          <p className="text-xl opacity-90 leading-relaxed mb-8">
            The same 1,000,000+ PLR products that gave me my freedom are waiting
            for you. No monthly fees. No hidden costs. Just instant access to
            everything you need to start your digital product empire.
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
            onClick={() =>
              window.open("https://ko-fi.com/s/ebc7311aac", "_blank")
            }
          >
            🔒 Claim Your Digital Product Vault 🔒
          </Button>

          <div className="text-sm opacity-90 space-y-3 mt-8">
            <p className="flex items-center justify-center gap-2">
              <span className="text-green-400 text-xl">✓</span>
              <span>1,000,000+ Ready-to-Sell PLR Products</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-green-400 text-xl">✓</span>
              <span>My Own Complete Personal Strategy Guide</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-green-400 text-xl">✓</span>
              <span>Lifetime Vault Access + Future Updates</span>
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
            "I went from zero to $3,200 in my first 60 days using your system.
            The products are incredible and your strategy guide is pure gold.
            This changed my life."
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
