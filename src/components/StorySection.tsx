import { Button } from "@/components/ui/button";
import { trackInitiateCheckout } from "@/utils/fbPixel";

const StorySection = () => {
  return (
    <section className="py-20 px-4 bg-background overflow-x-hidden">
      <div className="max-w-4xl mx-auto w-full">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-12 flex items-center justify-center gap-3">
            <span className="text-amber-400">🎯</span>
            It's Actually Simple
          </h1>
          <div className="max-w-3xl mx-auto space-y-8 text-xl md:text-2xl text-muted-foreground leading-relaxed">
            <div className="bg-card p-8 rounded-xl border border-border shadow-soft my-12">
              <p className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                <span className="text-amber-400">DEMAND:</span> People need
                digital products every single day
              </p>
              <p className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                <span className="text-blue-400">SUPPLY:</span> I've got
                1,000,000+ products ready to go
              </p>
              <p className="text-2xl md:text-3xl font-bold">
                <span className="text-purple-400">CONNECTION:</span>{" "}
                <span className="text-white">
                  I teach you EXACTLY how to approach these clients
                </span>
              </p>
            </div>
            <p className="font-semibold text-foreground text-2xl md:text-3xl">
              You want to know how? I've put EVERYTHING you need to know in my
              guide.
            </p>
          </div>
        </div>

        {/* The Reality Section */}
        <div className="mb-20">
          <h2 className="text-5xl font-bold text-foreground mb-8 text-center">
            💡 Here's The Reality
          </h2>
          <div className="space-y-6 text-xl text-muted-foreground">
            <p className="text-2xl">
              Every day, thousands of people are desperately searching for:
            </p>
            <div className="bg-foreground/5 p-8 rounded-xl border border-foreground/20 mt-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">📄</span>
                  <p className="text-xl text-foreground">
                    Business templates, resumes
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">🖼️</span>
                  <p className="text-xl text-foreground">
                    Logos, social media graphics
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">🎓</span>
                  <p className="text-xl text-foreground">
                    Online courses, training materials
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">🔧</span>
                  <p className="text-xl text-foreground">
                    Marketing tools, automation
                  </p>
                </div>
              </div>
            </div>

            <p className="text-3xl font-bold text-foreground text-center my-8">
              <span className="text-yellow-400">That's the DEMAND.</span>
            </p>

            <p className="text-2xl mb-6">
              Now here's what I've got ready for you:
            </p>

            <div className="bg-foreground/5 p-8 rounded-xl border border-foreground/20 mt-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">📁</span>
                  <p className="text-xl text-foreground">
                    250,000+ Templates - Ready to use
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">🎭</span>
                  <p className="text-xl text-foreground">
                    500,000+ Designs - Professional graphics
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">🎯</span>
                  <p className="text-xl text-foreground">
                    15,000+ Courses - Complete training
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">🚀</span>
                  <p className="text-xl text-foreground">
                    175,000+ Marketing Tools - Growth solutions
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">💎</span>
                  <p className="text-xl text-foreground">
                    100,000+ Software - Premium apps & plugins
                  </p>
                </div>
              </div>
            </div>

            <p className="text-3xl font-bold text-foreground text-center my-8">
              <span className="text-blue-400">That's the SUPPLY.</span>
            </p>

            <div className="bg-card p-8 rounded-xl border border-border shadow-soft my-12">
              <p className="text-3xl font-bold text-center text-green-500 mb-6">
                The missing piece? Knowing HOW to connect them.
              </p>
              <p className="text-xl text-center text-muted-foreground">
                Where to find these clients. What to say. How to approach them.
                How to close the deal.
              </p>
            </div>

            {/* Success Metrics CTA */}
            <div className="pt-12">
              <div className="flex justify-center w-full">
                <Button
                  variant="destructive"
                  size="lg"
                  className="text-lg md:text-2xl py-6 md:py-8 px-8 md:px-16 font-bold shadow-lg transform transition-transform duration-1000 animate-slow-pulse w-full max-w-md mx-auto"
                  onClick={() => {
                    trackInitiateCheckout();
                    window.open("https://ko-fi.com/s/ebc7311aac", "_blank");
                  }}
                >
                  <span className="relative">
                    Show Me The Complete System →
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Journey Image */}
        <div className="flex justify-center mb-12">
          <div className="relative overflow-hidden rounded-2xl shadow-xl max-w-md">
            <img
              src="/lovable-uploads/21b7633e-4ed7-427e-9574-35e21657aed4.png"
              alt="Supply meets demand"
              className="w-full h-[400px] object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>

        {/* Gabriel's Story Section */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Text Content */}
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Hi, I'm Gabriel 👋
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  A few years ago, I started trying to sell digital products
                  online. Like most people, I jumped in without a real plan,
                  just hoping something would work.
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  After several failed attempts, I realized the products weren't
                  the problem. It was knowing HOW to find clients and WHAT to
                  say that made all the difference. I spent months perfecting a
                  method that works for any niche.
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  That's when I created Studio21: the complete package combining
                  1,000,000+ proven products with my step-by-step client
                  acquisition system.
                </p>
                <p className="text-xl text-foreground font-semibold">
                  Now I'm here to help others skip the trial and error. You get
                  both the products AND the exact method to sell them.
                </p>
              </div>

              {/* Studio21 Logo */}
              <div className="flex justify-center">
                <div className="relative overflow-hidden rounded-2xl shadow-xl max-w-2xl transform hover:scale-[1.02] transition-transform duration-300">
                  <img
                    src="/lovable-uploads/studio21.png"
                    alt="Studio21 Complete System"
                    className="w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* My System Section */}
        <div className="mb-20">
          <h2 className="text-5xl font-bold text-foreground mb-8 text-center">
            My Complete System
          </h2>
          <div className="flex flex-col items-center mb-12">
            <div className="space-y-6 text-xl text-muted-foreground max-w-3xl text-center mb-12">
              <p className="text-2xl font-bold text-center mb-8">
                Think of me as your{" "}
                <span className="text-amber-400">connection coach</span> who's
                already done the hard work.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 p-6 rounded-xl border border-blue-700/30">
                  <div className="text-3xl mb-3">🎯</div>
                  <h4 className="text-xl font-bold text-blue-400 mb-2">
                    The Hunt
                  </h4>
                  <p className="text-foreground">
                    I'll show you the exact platforms, communities, and spaces
                    where your ideal clients are actively looking for solutions
                    RIGHT NOW.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 p-6 rounded-xl border border-purple-700/30">
                  <div className="text-3xl mb-3">💬</div>
                  <h4 className="text-xl font-bold text-purple-400 mb-2">
                    The Script
                  </h4>
                  <p className="text-foreground">
                    Word-for-word templates and conversation starters that get
                    responses. No more wondering "what do I say?"
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 p-6 rounded-xl border border-green-700/30">
                  <div className="text-3xl mb-3">🎭</div>
                  <h4 className="text-xl font-bold text-green-400 mb-2">
                    The Positioning
                  </h4>
                  <p className="text-foreground">
                    How to present yourself as THE solution they've been
                    searching for, not just another seller.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-amber-900/20 to-amber-800/10 p-6 rounded-xl border border-amber-700/30">
                  <div className="text-3xl mb-3">💰</div>
                  <h4 className="text-xl font-bold text-amber-400 mb-2">
                    The Close
                  </h4>
                  <p className="text-foreground">
                    My proven system for turning conversations into sales, from
                    first contact to payment received.
                  </p>
                </div>
              </div>

              <div className="text-center bg-gradient-to-r from-indigo-900/30 to-purple-900/30 p-6 rounded-xl border border-indigo-700/30">
                <p className="text-xl font-bold text-white mb-2">
                  🚀 PLUS: 1,000,000+ Ready-to-Sell Products
                </p>
                <p className="text-muted-foreground">
                  The complete arsenal to back up every conversation you have
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What Works vs What Doesn't Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* What Doesn't Work */}
          <div className="bg-red-950/10 p-8 rounded-xl border border-red-900/20">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              What Most People Do (That Fails):
            </h3>
            <div className="space-y-4">
              {[
                "Create products without knowing if there's demand",
                "Spend months building something nobody wants",
                "Hope customers will magically find them",
                "Guess what clients need instead of knowing",
                "Try to compete on price instead of value",
                "Give up before they find the right approach",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-2xl text-red-500 flex-shrink-0">
                    ❌
                  </span>
                  <span className="text-lg text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What Works */}
          <div className="bg-green-950/10 p-8 rounded-xl border border-green-900/20">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              What Actually Works:
            </h3>
            <div className="space-y-4">
              {[
                "Start with proven products people already need",
                "Know exactly where your clients hang out",
                "Approach them with confidence and clarity",
                "Offer solutions to problems they already have",
                "Follow a tested system that works",
                "Scale by connecting more supply with more demand",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-2xl text-green-500 flex-shrink-0">
                    ✅
                  </span>
                  <span className="text-lg text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
