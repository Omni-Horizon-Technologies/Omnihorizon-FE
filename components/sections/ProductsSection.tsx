"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    name: "LegitWriter",
    url: "https://legitwriter.com",
    description:
      "AI-powered writing assistant that helps you create professional, authentic content with ease. Perfect for businesses, content creators, and professionals.",
    screenshot: "/screenshots/Screenshot 2025-12-30 at 14.08.17.png",
  },
  {
    name: "ReelUp",
    url: "https://reelup.ai",
    description:
      "Create engaging video content effortlessly with AI-driven video generation and editing tools. Transform your ideas into stunning visual stories.",
    screenshot: "/screenshots/Screenshot 2025-12-30 at 14.08.32.png",
  },
  {
    name: "VetMemos",
    url: "https://vetmemos.com",
    description:
      "Streamline veterinary documentation with AI-powered memo generation. Save time while maintaining accuracy and compliance in your practice.",
    screenshot: "/screenshots/Screenshot 2025-12-30 at 14.08.43.png",
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 lg:py-32 bg-slate-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Our AI Products
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover our suite of AI-powered solutions designed to transform
            industries and enhance productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Screenshot */}
              <div className="relative w-full aspect-video bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src={product.screenshot}
                    alt={`${product.name} screenshot`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                  />
                </div>
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {product.description}
                </p>
                <Link
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-slate-700 transition-colors"
                >
                  Visit {product.name}
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

