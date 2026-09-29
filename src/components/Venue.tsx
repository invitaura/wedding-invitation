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
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
        isExpired: false,
      });
    };

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

  const mapDirectionsUrl = "https://maps.app.goo.gl/8XJZsNrQxhFqUP2i7";

  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center px-4 sm:px-6 pt-12 pb-4 select-none overflow-hidden bg-gradient-to-b from-white via-amber-50/20 to-amber-50/40 snap-start">
      {/* 📜 Structured Container Box */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="w-full max-w-md z-10 text-center flex flex-col items-center justify-center px-2 gap-y-6 h-full"
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

        {/* ⏳ COUNTDOWN TIMER */}
        {!timeLeft.isExpired && (
          <motion.div
            variants={itemVariants}
            className="w-full flex flex-col items-center gap-2"
          >
            <p className="font-serif italic text-amber-800/70 text-[11px] sm:text-xs tracking-widest uppercase font-medium">
              Counting Down To The Big Day
            </p>

            <div className="flex items-center justify-center gap-3 sm:gap-4 w-full px-2">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Mins", value: timeLeft.minutes },
                { label: "Secs", value: timeLeft.seconds },
              ].map((timeUnit, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center min-w-[64px] sm:min-w-[72px]"
                >
                  <div className="w-full bg-amber-900/5 backdrop-blur-xs border border-amber-800/10 rounded-xl py-2 px-1 text-center shadow-inner">
                    <span className="font-sans font-bold text-lg sm:text-xl md:text-2xl text-amber-900 tabular-nums">
                      {String(timeUnit.value).padStart(2, "0")}
                    </span>
                  </div>
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
          <div className="w-full flex items-center justify-between">
            <div className="flex flex-col items-end w-[45%] text-right pr-4 border-r border-amber-800/15">
              <p className="font-serif text-sm sm:text-base text-neutral-800 font-bold leading-tight">
                Wednesday
              </p>
              <p className="font-serif text-xs sm:text-sm text-amber-950 font-semibold tracking-wide mt-0.5">
                Oct 28, 2026
              </p>
            </div>

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

        {/* 💝 THE FINAL SIGN-OFF MESSAGE */}
        <div className="w-full flex flex-col items-center mt-2">
          <motion.p
            variants={itemVariants}
            className="font-serif italic text-amber-900/70 text-xs sm:text-[13px] tracking-wide max-w-xs leading-relaxed"
          >
            “Your presence and blessings are the most precious gifts we could
            receive on our special day.”
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-4 flex flex-col items-center gap-0.5"
          >
            <p className="font-serif italic text-[10px] sm:text-xs tracking-widest text-neutral-400 uppercase">
              With Best Compliments From
            </p>
            <p className="font-serif text-sm text-amber-950 font-bold tracking-wide">
              Near & Dear, Friends & Family
            </p>
          </motion.div>
        </div>

        {/* 🏷️ BRAND FOOTER CREDITS */}
        <motion.footer
          variants={itemVariants}
          className="w-full flex flex-col items-center gap-2 mt-8 pt-5 border-t border-amber-800/20 text-xs sm:text-sm text-neutral-600 font-sans tracking-normal"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 font-bold">
            {/* Instagram Link */}
            <a
              href="https://instagram.com/_invitaura_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-800 transition-colors duration-200 flex items-center gap-1.5 cursor-pointer text-neutral-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>{" "}
              <span>@_invitaura_</span>
            </a>

            <span className="text-neutral-400 select-none font-normal">•</span>

            {/* Phone Link */}
            <a
              href="tel:+918667259395"
              className="hover:text-amber-800 transition-colors duration-200 flex items-center gap-1.5 cursor-pointer text-neutral-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg>
              <span>+91 86672 59395</span>
            </a>
          </div>

          {/* Copyright notice */}
          <p className="text-[10px] sm:text-[11px] text-neutral-500 font-medium mt-1 select-text">
            © {new Date().getFullYear()} Designed & Developed by{" "}
            <span className="font-bold text-amber-950 tracking-normal">
              invitaura
            </span>
          </p>
        </motion.footer>
      </motion.div>
    </section>
  );
}
