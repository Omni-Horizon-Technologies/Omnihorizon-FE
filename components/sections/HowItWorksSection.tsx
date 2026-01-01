"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Explore our AI solutions and identify which products best fit your business needs. Learn how AI can transform your workflows.",
  },
  {
    number: "02",
    title: "Integrate",
    description:
      "Seamlessly integrate our AI tools into your existing systems. Our solutions are designed for easy implementation and adoption.",
  },
  {
    number: "03",
    title: "Automate",
    description:
      "Let AI handle repetitive tasks and complex processes. Watch as our intelligent systems enhance productivity and accuracy.",
  },
  {
    number: "04",
    title: "Innovate",
    description:
      "Leverage AI insights to make data-driven decisions and unlock new opportunities for growth and innovation.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-slate-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From discovery to innovation, our AI solutions integrate seamlessly
            into your workflow to drive real business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="relative"
            >
              {/* Connector Line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-slate-200 -z-10">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 + 0.2 }}
                    className="h-full bg-slate-400 origin-left"
                  />
                </div>
              )}

              <div className="bg-white border border-slate-200/60 rounded-2xl p-6 sm:p-8 shadow-lg">
                <div className="text-6xl font-bold text-slate-200 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

