import { Link } from "react-router-dom";
import { ROUTES } from "../constants";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-950">
      
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-200/30 via-purple-100/10 to-transparent blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">
        
        {/* Badge */}
        <span className="inline-flex items-center gap-2 text-sm font-medium text-purple-600">
          ✨ Start Today ✨
        </span>

        {/* Heading */}
        <h2 className="mt-6 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Ready to Transform Your Reviews?
        </h2>

        {/* Subtext */}
        <p className="mt-6 text-gray-600 dark:text-gray-400">
          Join thousands of businesses using Quvouch to collect authentic reviews
          and build trust. Start your free trial today—no credit card required.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* Start Free Trial */}
          <Link
            to={ROUTES.LOGIN}
            className="px-6 py-3 rounded-lg text-white font-medium
                       bg-gradient-to-r from-purple-600 to-indigo-600
                       shadow-lg hover:opacity-90 transition
                       flex items-center gap-2"
          >
            ⬜ Start Free Trial →
          </Link>

          {/* Talk to Sales */}
          <button
            className="px-6 py-3 rounded-lg border border-purple-300
                       text-purple-600 font-medium
                       hover:bg-purple-50 dark:hover:bg-gray-800
                       transition flex items-center gap-2"
          >
            💬 Talk to Sales
          </button>
        </div>

        {/* Trust points */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6
                        text-sm text-gray-600 dark:text-gray-400">
          
          {[
            "14-day free trial",
            "No credit card required",
            "Cancel anytime",
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-2">
              
              {/* ✅ SVG CHECK ICON */}
              <svg
                className="w-5 h-5 text-purple-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12l3 3 5-6" />
              </svg>

              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
