import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-950">

      {/* 💜 BACKGROUND GLOW */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-purple-300/40 rounded-full blur-[120px]"
      />

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-400/30 rounded-full blur-[120px]"
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* BADGE */}
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-sm
                           bg-purple-100 dark:bg-purple-900/40
                           text-purple-700 dark:text-purple-300 mb-6">
            ✨ Your Opinion Matters
          </span>

          {/* HEADING */}
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight
                         text-gray-900 dark:text-white">
            Transform <br />
            <span className="text-purple-600">QR Codes</span> <br />
            Into Reviews
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-xl">
            The trust-first platform that makes collecting Google Reviews effortless.
            Let your customers vouch for your business with a simple scan.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/signup")}
              className="px-6 py-3 rounded-lg text-white font-medium
                         bg-gradient-to-r from-purple-600 to-indigo-600
                         shadow-lg hover:opacity-90 transition"
            >
              Start Free Trial →
            </motion.button>

            <button
              className="px-6 py-3 rounded-lg border border-purple-300
                         text-purple-600 font-medium
                         hover:bg-purple-50 dark:hover:bg-gray-800 transition"
            >
              ▶ Watch Demo
            </button>
          </div>

          {/* SOCIAL PROOF */}
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-purple-200 border-2 border-white"
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              <strong>25,000+</strong> Happy Businesses
            </span>
          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <div className="flex justify-center lg:justify-end">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px]
                       rounded-3xl bg-gradient-to-br from-purple-200 to-purple-100
                       shadow-xl flex items-center justify-center"
          >
            {/* QR */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-40 h-40 rounded-2xl bg-purple-500 flex items-center justify-center"
            >
              <div className="w-24 h-24 grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="bg-white rounded-sm" />
                ))}
              </div>
            </motion.div>

            {/* FLOATING RATING */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -top-4 -right-4 bg-white rounded-xl
                         shadow-md px-3 py-2 text-sm"
            >
              ⭐ 4.9 Rating
            </motion.div>

            {/* FLOATING SCANS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-xl
                         shadow-md px-3 py-2 text-sm"
            >
              📈 1.2k Scans
            </motion.div>

            {/* FOOTER TEXT */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-6 text-center text-sm
                         text-purple-700 font-medium"
            >
              One scan away from <br />
              <span className="font-bold">Your Next 5-Star Review</span>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
