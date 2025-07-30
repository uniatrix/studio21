import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      title: "Digital Entrepreneur",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      revenue: "$3,200 in 60 days",
      quote:
        "I went from zero to $3,200 in my first 60 days using this system. The products are incredible and the strategy guide is pure gold. This completely changed my life.",
      highlight: "First 60 days",
    },
    {
      name: "Mike R.",
      title: "Former Construction Worker",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      revenue: "$5,800/month",
      quote:
        "I was skeptical at first, but after losing my construction job, I had nothing to lose. Now I'm making more than I ever did in construction, working from home.",
      highlight: "Career change",
    },
    {
      name: "Jessica L.",
      title: "Stay-at-Home Mom",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      revenue: "$2,400/month",
      quote:
        "Perfect for busy moms! I work during nap times and after bedtime. The products sell themselves, and I finally have financial independence.",
      highlight: "Work-life balance",
    },
    {
      name: "David K.",
      title: "Retired Teacher",
      image:
        "https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      revenue: "$3,100/month",
      quote:
        "At 48, I thought it was too late to start something new. These PLR products gave me a second career and supplemented my pension perfectly.",
      highlight: "Second career",
    },
    {
      name: "Amanda T.",
      title: "College Student",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      revenue: "$1,900/month",
      quote:
        "I'm paying for college with this! Started with just a few hours a week between classes. Now I'm debt-free and helping other students too.",
      highlight: "Student success",
    },
    {
      name: "Robert H.",
      title: "Small Business Owner",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      revenue: "$7,300/month",
      quote:
        "Added this as a revenue stream to my existing business. It's now 60% of my income and requires almost no maintenance. Brilliant system.",
      highlight: "Business expansion",
    },
  ];

  const stats = [
    { number: "500+", label: "Success Stories" },
    { number: "$1M+", label: "Student Revenue Generated" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "6 Days", label: "Average Time to First Sale" },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Real People, Real Results
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            These aren't fake testimonials. These are real people who
            transformed their lives with the same system you're about to get.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-soft border border-border hover:shadow-strong transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              {/* Header */}
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-3 border-2 border-border"
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex-1">
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Revenue Badge */}
              <div className="inline-block bg-green-500/10 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {testimonial.revenue}
              </div>

              {/* Quote */}
              <blockquote className="text-muted-foreground leading-relaxed mb-4 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Highlight */}
              <div className="text-xs text-amber-600 dark:text-amber-400 font-medium uppercase tracking-wide">
                {testimonial.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="bg-card p-8 rounded-xl border border-border shadow-soft text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Your Success Story Could Be Next
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            These people started exactly where you are right now. The only
            difference? They took action.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="text-green-400">&#10003;</span>
              No experience required
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-400">&#10003;</span>
              Works in any niche
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-400">&#10003;</span>
              Start part-time
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-400">&#10003;</span>
              Scale at your pace
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
