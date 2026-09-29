import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";

export default function Venue() {
  // Target Event Time: October 28, 2026, at 6:00 PM (18:00)
  const TARGET_DATE = new Date("2026-10-28T18:00:00").getTime();

  // State management tracking countdown parameters
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = TARGET_DATE - now;

      if (difference <= 0) {
        setTimeLeft((prev) => ({ ...prev, isExpired: true }));
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
        isExpired: false,
      });
    };

    // Run calculation once immediately on mount, then initialize interval engine
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [TARGET_DATE]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const mapDirectionsUrl = "https://maps.app.goo.gl/5DYbBRDwfXBge6A7A";

  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center px-4 sm:px-6 py-12 select-none overflow-hidden bg-gradient-to-b from-white via-amber-50/20 to-amber-50/40 snap-start">
      
      {/* 📜 Structured Container Box */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="w-full max-w-md z-10 text-center flex flex-col items-center justify-center px-2 gap-y-6"
      >
        {/* Component Title Header */}
        <div className="flex flex-col items-center gap-1">
          <motion.span
            variants={itemVariants}
            className="font-serif italic text-amber-800/80 text-[11px] sm:text-xs tracking-widest uppercase font-semibold"
          >
            — Join Our Celebration —
          </motion.span>
          <motion.h3
            variants={itemVariants}
            className="font-serif text-xl sm:text-2xl text-neutral-800 font-bold tracking-wide"
          >
            Event Details & Venue
          </motion.h3>
          <div className="w-12 border-b-2 border-amber-600/30 mt-1" />
        </div>

        {/* ⏳ NEW ELEMENT: STUNNING REAL-TIME COUNTDOWN TIMER */}
        {!timeLeft.isExpired && (
          <motion.div
            variants={itemVariants}
            className="w-full flex flex-col items-center gap-2"
          >
            <p className="font-serif italic text-amber-800/70 text-[11px] sm:text-xs tracking-widest uppercase font-medium">
              Counting Down To The Big Day
            </p>
            
            {/* Horizontal Grid Block Matrix */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 w-full px-2">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Mins", value: timeLeft.minutes },
                { label: "Secs", value: timeLeft.seconds }
              ].map((timeUnit, index) => (
                <div key={index} className="flex flex-col items-center min-w-[64px] sm:min-w-[72px]">
                  {/* Glowing Numeric Metric Box */}
                  <div className="w-full bg-amber-900/5 backdrop-blur-xs border border-amber-800/10 rounded-xl py-2 px-1 text-center shadow-inner">
                    <span className="font-sans font-bold text-lg sm:text-xl md:text-2xl text-amber-900 tabular-nums">
                      {String(timeUnit.value).padStart(2, "0")}
                    </span>
                  </div>
                  {/* Subtle Footer Label */}
                  <span className="font-serif italic text-[10px] sm:text-[11px] text-neutral-400 mt-1">
                    {timeUnit.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* 📅 DATE & TIME CARD MATRIX */}
        <motion.div
          variants={itemVariants}
          className="w-full bg-white/70 backdrop-blur-sm border border-amber-800/10 rounded-2xl p-4 sm:p-5 shadow-sm flex flex-col gap-4"
        >
          {/* Main Detail Core Row */}
          <div className="w-full flex items-center justify-between">
            {/* Left Column: Date Callout */}
            <div className="flex flex-col items-end w-[45%] text-right pr-4 border-r border-amber-800/15">
              <p className="font-serif text-sm sm:text-base text-neutral-800 font-bold leading-tight">
                Wednesday
              </p>
              <p className="font-serif text-xs sm:text-sm text-amber-950 font-semibold tracking-wide mt-0.5">
                Oct 28, 2026
              </p>
            </div>

            {/* Right Column: Timing Callout */}
            <div className="flex flex-col items-start w-[50%] text-left pl-4">
              <p className="font-serif text-xs sm:text-sm text-neutral-700 font-bold tracking-wide">
                6:00 PM Onwards
              </p>
              <p className="font-sans text-[10px] sm:text-[11px] text-neutral-400 font-semibold mt-0.5">
                Marriage Reception
              </p>
            </div>
          </div>

          <div className="w-full border-t border-dashed border-amber-800/10" />

          {/* Hall Identity Details */}
          <div className="flex flex-col items-center">
            <p className="font-serif italic text-[10px] sm:text-xs text-amber-900/60 uppercase tracking-widest mb-1">
              Celebration Hall
            </p>
            <h4 className="font-serif text-sm sm:text-base text-neutral-800 font-bold tracking-wide">
              Periyasamy Udayar Mandapam
            </h4>
            <p className="font-sans text-[11px] sm:text-xs text-neutral-500 font-semibold mt-1 leading-normal max-w-[280px]">
              Valasaiyur, Salem
            </p>
          </div>
        </motion.div>

        {/* 🧭 NAVIGATION CTA BUTTON */}
        <motion.a
          variants={itemVariants}
          href={mapDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-800 to-amber-900 text-white font-serif tracking-wide text-xs sm:text-sm px-6 py-3 rounded-full shadow-md hover:from-amber-900 hover:to-amber-950 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 w-fit cursor-pointer z-20"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          Locate on Google Maps
        </motion.a>
      </motion.div>
    </section>
  );
}
