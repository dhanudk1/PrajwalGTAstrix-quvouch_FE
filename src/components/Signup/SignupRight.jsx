export default function SignupRightPanel() {
  const features = [
    {
      text: "Increase reviews by 300%",
      iconBg: "bg-green-500",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white" fill="none" strokeWidth="2">
          <path d="M3 17l6-6 4 4 7-7" />
          <path d="M14 7h7v7" />
        </svg>
      ),
    },
    {
      text: "Join 25,000+ businesses",
      iconBg: "bg-indigo-500",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white" fill="none" strokeWidth="2">
          <path d="M16 11c1.66 0 3-1.34 3-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3z" />
          <path d="M8 11c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3z" />
          <path d="M2 20c0-2.21 3.58-4 6-4" />
          <path d="M14 16c2.42 0 6 1.79 6 4" />
        </svg>
      ),
    },
    {
      text: "Boost your star rating",
      iconBg: "bg-pink-500",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white" fill="none" strokeWidth="2">
          <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9" />
        </svg>
      ),
    },
    {
      text: "Enterprise-grade security",
      iconBg: "bg-purple-500",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white" fill="none" strokeWidth="2">
          <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="hidden lg:flex items-center justify-center px-6 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-300/40 to-transparent blur-3xl" />

      <div className="relative max-w-md w-full space-y-10">

        {/* QR SECTION */}
        <div className="relative flex items-center justify-center">

          {/* Pulse glow */}
          <div className="absolute inset-0 rounded-3xl bg-purple-500/40 blur-3xl animate-pulse" />

          {/* QR Card */}
          <div className="relative w-72 h-72 rounded-3xl bg-linear-to-br from-purple-600 to-indigo-600 p-6 shadow-2xl">
            <div className="grid grid-cols-3 gap-3 bg-white rounded-2xl p-4">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className={`rounded-lg ${
                    i % 2 === 0 ? "bg-purple-400" : "bg-purple-200"
                  } animate-[qrPulse_2.5s_ease-in-out_infinite]`}
                  style={{
                    aspectRatio: "1 / 1",
                    animationDelay: `${i * 0.15}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Rating badge */}
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg px-4 py-2 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center">
              ★
            </div>
            <div>
              <p className="font-bold text-sm">4.9</p>
              <p className="text-xs text-gray-500">Rating</p>
            </div>
          </div>

          {/* Growth badge */}
          <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg px-4 py-2 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-green-500 text-white flex items-center justify-center">
              ↗
            </div>
            <div>
              <p className="font-bold text-sm">+287%</p>
              <p className="text-xs text-gray-500">Growth</p>
            </div>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
          Why Businesses <span className="text-purple-600">Choose Quvouch</span>
        </h2>

        {/* Feature cards */}
        <div className="space-y-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="group flex items-center justify-between p-4 rounded-2xl
                         bg-white/70 dark:bg-gray-900/70 backdrop-blur
                         border border-purple-200/40
                         hover:border-purple-500
                         hover:shadow-xl hover:shadow-purple-300/30
                         transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-xl ${item.iconBg}
                              flex items-center justify-center`}
                >
                  {item.icon}
                </div>
                <span className="font-medium text-gray-900 dark:text-white">
                  {item.text}
                </span>
              </div>

              <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-600
                               flex items-center justify-center
                               group-hover:bg-purple-600 group-hover:text-white transition">
                ✓
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 QR dot animation */}
      <style>{`
        @keyframes qrPulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.15); }
        }
      `}</style>
    </div>
  );
}
