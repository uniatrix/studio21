import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What exactly are PLR products?",
      answer:
        "PLR (Private Label Rights) products are ready-made digital products that you can rebrand, modify, and sell as your own. Think templates, courses, ebooks, software tools, and more. You get full commercial rights to sell them and keep 100% of the profits.",
    },
    {
      question: "Do I need technical skills to use these products?",
      answer:
        "Not at all. Most PLR products are designed to be user-friendly. You might need to add your branding or make simple customizations, but nothing that requires coding or advanced technical knowledge. My strategy guide walks you through everything step-by-step.",
    },
    {
      question: "How quickly can I start making money?",
      answer:
        "You could literally start selling today. Once you download the products, you can rebrand them and list them for sale on platforms like Etsy, your own website, or marketplaces. Some of my students make their first sale within 24-48 hours.",
    },
    {
      question: "Is this a one-time payment or subscription?",
      answer:
        "One-time payment, lifetime access. No monthly fees, no hidden costs. You pay once and get access to everything forever, including future updates and new products added to the vault.",
    },
    {
      question: "What if I don't make any money?",
      answer:
        "I offer a 30-day money-back guarantee. If you follow my strategy guide and don't see results, I'll refund every penny. But honestly, with 1,000,000+ proven products and my step-by-step system, success is almost inevitable if you take action.",
    },
    {
      question: "Can I really sell these as my own products?",
      answer:
        "Yes! That's exactly what PLR rights give you. You can rebrand them, modify them, add your name and logo, and sell them as if you created them yourself. Full commercial rights are included with every product in the vault.",
    },
    {
      question: "How is this different from other PLR collections?",
      answer:
        "Most PLR collections give you a few hundred outdated products. I'm giving you 1,000,000+ current, high-quality products PLUS my complete strategy guide that shows you exactly how I built my $8,900/month business. It's products + proven strategy in one package.",
    },
    {
      question: "What kind of support do I get?",
      answer:
        "You get my complete strategy guide that covers everything from product selection to marketing and sales. Plus, you have lifetime access to updates and new products. The guide is so detailed, it's like having me personally walk you through the entire process.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about starting your digital product
            business
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-strong"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-200"
              >
                <h3 className="text-lg md:text-xl font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-muted-foreground" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-6">
                  <div className="border-t border-border pt-6">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
