import { Button } from "@/components/ui/button";
import VideoPlayer from "@/components/VideoPlayer";

const StorySection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Video Section with Attention-Grabbing Text */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-full px-6 py-2 mb-4">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            <span className="text-red-500 font-semibold text-sm uppercase tracking-wide">
              MUST WATCH
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🎯 The Exact Story Behind My $8,900/Month Success
          </h2>
        </div>

        {/* Video Player */}
        <div className="flex justify-center mb-16">
          <div className="max-w-4xl w-full shadow-xl">
            <VideoPlayer
              videoSrc="/lovable-uploads/vslstudio21.mp4"
              thumbnailSrc="/lovable-uploads/coffe.png"
              alt="My journey from skeptic to success - Watch my complete transformation story"
              className="rounded-2xl overflow-hidden"
            />
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-12 flex items-center justify-center gap-3">
            <span className="text-amber-400">✨</span>
            Picture This
          </h1>
          <div className="max-w-2xl mx-auto space-y-8 text-xl md:text-2xl text-muted-foreground leading-relaxed">
            <p className="opacity-90">
              I wake up to sunlight on my face.
              <br />
              No alarm. No meetings. Just calm.
            </p>
            <p className="opacity-90">
              I grab coffee, open my laptop, and check my phone.
            </p>
            <div className="bg-card p-8 rounded-xl border border-border shadow-soft my-12">
              <p className="text-2xl md:text-3xl font-bold text-green-500">
                <span className="text-2xl">💸</span> $142{" "}
                <span className="text-foreground">came in while I slept.</span>
                <br />
                <span className="text-foreground">Yesterday?</span> $178
                <span className="text-foreground">.</span>
              </p>
              <p className="text-xl md:text-2xl mt-3 text-muted-foreground">
                Digital products I didn't even create—making me real income.
              </p>
            </div>
            <p className="font-semibold text-foreground text-2xl md:text-3xl">
              This is my life now. But it wasn't always.
            </p>
          </div>
        </div>

        {/* Turning Point Section */}
        <div className="mb-20">
          <h2 className="text-5xl font-bold text-foreground mb-8 text-center">
            💡 The Turning Point
          </h2>
          <div className="space-y-6 text-xl text-muted-foreground">
            <p className="text-2xl">
              That's when I found{" "}
              <strong className="text-yellow-400 font-bold">
                PLR products
              </strong>
              —ready-made digital products I could rebrand and sell as my own.
              💻 No coding. 🎨 No content creation. 💰 No expensive tools.
            </p>
            <p className="text-3xl font-bold text-foreground text-center my-8">
              Just:{" "}
              <div>
                <span className="text-yellow-400 font-bold">
                  Download → Personalize → Sell
                </span>
              </div>
            </p>
            <br />

            <div className="bg-foreground/5 p-8 rounded-xl border border-foreground/20 mt-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="text-4xl">🌟</span>
                  <div>
                    <p className="text-2xl font-bold text-foreground">
                      My first month?{" "}
                      <span className="text-green-500 font-bold">$847</span>
                    </p>
                    <p className="text-xl text-muted-foreground">
                      Not life-changing yet—but for once, it worked.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <span className="text-4xl">🚀</span>
                  <div>
                    <p className="text-2xl font-bold text-foreground">
                      Month 6?{" "}
                      <span className="text-green-500 font-bold">$4,200</span>
                    </p>
                    <p className="text-xl text-muted-foreground">
                      Things started to really click.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <span className="text-4xl">💎</span>
                  <div>
                    <p className="text-3xl font-bold text-foreground">
                      Month 12?{" "}
                      <span className="text-green-500 font-bold">
                        $8,900/month
                      </span>
                      —and total freedom.
                    </p>
                    <p className="text-xl text-muted-foreground">
                      Finally, I could focus on my family.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Metrics CTA */}
            <div className="pt-12">
              <div className="flex justify-center">
                <Button
                  variant="destructive"
                  size="lg"
                  className="text-2xl py-8 px-16 font-bold shadow-lg transform transition-transform duration-1000 animate-slow-pulse"
                >
                  <span className="relative">
                    Want Results Like These? Start Now →
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
              alt="My journey to success"
              className="w-full h-[400px] object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>

        {/* Studio21 Creation Section */}
        <div className="mb-20">
          <h2 className="text-5xl font-bold text-foreground mb-8 text-center">
            🚀 And after all that...
          </h2>
          <div className="flex flex-col items-center mb-12">
            <div className="space-y-6 text-xl text-muted-foreground max-w-3xl text-center mb-12">
              <p>
                I created <span className="text-white font-bold">Studio21</span>{" "}
                — the most comprehensive software bundle that not only gives you
                powerful tools but teaches you how to sell them.
              </p>
              <p className="font-semibold">
                The perfect blend of ready-to-use software and the knowledge to
                turn them into a profitable business.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl max-w-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <img
                src="/lovable-uploads/studio21.png"
                alt="Studio21 Software Bundle"
                className="w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* What Worked vs What Didn't Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* What Didn't Work */}
          <div className="bg-red-950/10 p-8 rounded-xl border border-red-900/20">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              What I Tried (That Didn't Work):
            </h3>
            <div className="space-y-4">
              {[
                "Building from scratch",
                "Spending months creating online courses",
                "Gambling on 'big ideas' with zero demand",
                "Running ads and hoping something would stick",
                "Waiting months to launch anything",
                "Burning out before I even made a sale",
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

          {/* What Worked */}
          <div className="bg-green-950/10 p-8 rounded-xl border border-green-900/20">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              What Worked for Me:
            </h3>
            <div className="space-y-4">
              {[
                "Selling proven digital products that people already want",
                "Starting in hours—not months",
                "Keeping 100% profit from every sale",
                "No coding, no tech hurdles",
                "Rebranding existing PLR content",
                "Scaling to real freedom with no team and no fluff",
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
