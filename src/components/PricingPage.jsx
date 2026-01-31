import { Link } from "react-router-dom";
import { ROUTES } from "../constants";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      subtitle: "Perfect for small businesses getting started",
      price: "$19",
      popular: false,
      features: [
        "5 QR codes",
        "Basic analytics",
        "Email support",
        "Mobile optimized",
        "Google integration",
      ],
    },
    {
      name: "Professional",
      subtitle: "For growing businesses that need more",
      price: "$49",
      popular: true,
      features: [
        "Unlimited QR codes",
        "Advanced analytics",
        "Priority support",
        "Custom branding",
        "Multi-location support",
        "API access",
      ],
    },
    {
      name: "Enterprise",
      subtitle: "For large organizations with specific needs",
      price: "Custom",
      popular: false,
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom integrations",
        "White-label options",
        "SLA guarantees",
        "Advanced security",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-white dark:bg-gray-950"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-300/30 via-pink-200/10 to-transparent blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Transparent pricing that grows with your business
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            No hidden fees. Simple plans for every stage.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
          {plans.map((plan, index) => (
            <div key={index} className="group relative h-full">
              {/* Glow layer */}
              <div
                className={`absolute -inset-0.5 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500
                  ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"
                      : "bg-gradient-to-r from-purple-300 to-pink-300"
                  }`}
              />

              {/* Card */}
              <div
                className={`relative h-full flex flex-col rounded-3xl border p-8 backdrop-blur-xl
                  bg-white/60 dark:bg-gray-900/60
                  transition-all duration-300 ease-out
                  hover:-translate-y-2 hover:scale-[1.03]
                  ${
                    plan.popular
                      ? "border-purple-500/60"
                      : "border-purple-200/40"
                  }`}
              >
                {/* Most Popular badge */}
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-sm rounded-full bg-purple-600 text-white shadow-lg">
                    Most Popular
                  </span>
                )}

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {plan.name}
                </h3>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {plan.subtitle}
                </p>

                {/* Price */}
                <div className="mt-8">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-gray-500 dark:text-gray-400">
                      {" "}
                      /month
                    </span>
                  )}
                </div>

                {/* CTA */}
                <Link
                  to={ROUTES.LOGIN}
                  className="mt-6 w-full py-3 rounded-lg font-medium text-center
                    border border-purple-300 text-purple-600
                    transition-all duration-300
                    group-hover:bg-purple-600
                    group-hover:text-white
                    group-hover:shadow-xl
                    dark:group-hover:bg-purple-600"
                >
                  Get Started →
                </Link>

                {/* Features */}
                <ul className="mt-auto pt-8 space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 transition-colors duration-300
                                 group-hover:text-gray-900 dark:group-hover:text-white"
                    >
                      {/* ✅ SVG CHECK ICON */}
                      <svg
                        className="w-5 h-5 text-purple-600 flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M8 12l3 3 5-6" />
                      </svg>

                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
