"use client";

import { motion } from "framer-motion";

const leadership = [
  {
    name: "Emmanuel Mark Jonah",
    role: "Chief Executive Officer",
    qualifications: "BSC Management Information Systems, MSC International Business",
    description:
      "Leading Omnihorizon's vision and strategy, driving innovation in AI solutions and ensuring we deliver exceptional value to our clients.",
  },
  {
    name: "Babajide Emmanuel Fakile",
    role: "Chief Operating Officer",
    qualifications: "BSC Economics, MSC International Business",
    description:
      "Overseeing day-to-day operations, optimizing processes, and ensuring seamless execution of our AI product development and delivery.",
  },
  {
    name: "Shederack Mark Jonah",
    role: "Chief Technology Officer",
    qualifications: "",
    description:
      "Architecting cutting-edge AI systems, leading our technical team, and ensuring our solutions leverage the latest advancements in artificial intelligence.",
  },
];

const IconUser = () => (
  <svg
    className="w-12 h-12"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
    />
  </svg>
);

export default function LeadershipSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            About Us
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Founded in 2024, Omnihorizon is a fast-growing AI solutions company
            with over 20 employees dedicated to building intelligent tools that
            transform how businesses work.
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Leadership Team
          </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Meet the executive team driving innovation and excellence at
            Omnihorizon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {leadership.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className="bg-white border border-slate-200/60 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 mx-auto mb-6">
                <IconUser />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {leader.name}
              </h3>
              <p className="text-sm font-semibold text-slate-600 mb-2">
                {leader.role}
              </p>
              {leader.qualifications && (
                <p className="text-xs text-slate-500 mb-4 italic">
                  {leader.qualifications}
                </p>
              )}
              <p className="text-sm text-slate-600 leading-relaxed">
                {leader.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

