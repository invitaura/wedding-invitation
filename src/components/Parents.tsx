import { motion, type Variants } from "framer-motion";
import TempleImg from "../assets/Temple.png";
// Import your new Thoranam asset from the assets folder
import ThoranamImg from "../assets/Thoranum.png";

export default function Parents() {

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col items-center justify-between px-4 sm:px-6 pb-10 pt-4 select-none overflow-hidden bg-gradient-to-b from-amber-50/50 via-white to-amber-50/30 snap-start">
      {/* 🏛️ Center Temple Gopuram Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <img
          src={TempleImg}
          alt="Temple Gopuram"
          className="w-full max-w-[340px] sm:max-w-[420px] h-auto object-contain opacity-[0.06] transform scale-105"
        />
      </div>

      {/* 🌿 TOP CREATIVE ELEMENT: Repeating Traditional Leaf Garland (Thoranam) */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 0.95, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 left-0 right-0 w-full h-12 sm:h-16 pointer-events-none z-10"
        style={{
          backgroundImage: `url(${ThoranamImg})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%", // Keeps the aspect ratio height perfect while repeating horizontally
          backgroundPosition: "top center",
        }}
      />

      {/* 📜 CENTER ELEMENT: Traditional Content Typography */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="w-full max-w-md z-10 text-center flex flex-col items-center justify-center px-2 mt-16 sm:mt-20 mb-auto"
      >
        {/* Top Quote */}
        <motion.p
          variants={itemVariants}
          className="font-serif italic text-amber-800 text-xs sm:text-[13px] tracking-wide max-w-xs sm:max-w-sm mb-6 sm:mb-10 leading-relaxed"
        >
          "With the love of our families as our anchor and the blessings of the heavens as our light, our journey begins."
        </motion.p>

        {/* Bride's Side */}
        <div className="w-full flex flex-col items-center">
          <motion.p
            variants={itemVariants}
            className="font-serif italic text-amber-900/60 text-[10px] sm:text-xs tracking-wider uppercase mb-1"
          >
            Beloved Daughter of
          </motion.p>

          <motion.h4
            variants={itemVariants}
            className="font-serif text-base sm:text-lg md:text-xl text-neutral-800 font-semibold tracking-wide leading-tight whitespace-nowrap"
          >
            Mr. S.Baskar & Mrs. B.Geetha
          </motion.h4>

          <motion.p
            variants={itemVariants}
            className="font-sans text-[10px] sm:text-[11px] md:text-xs text-neutral-400 tracking-wide mt-1 mb-4 sm:mb-5 font-bold max-w-[280px] sm:max-w-none"
          >
            (LIC of India, Sr. Insurance Advisor)
          </motion.p>
        </div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="w-full flex items-center justify-center gap-4 my-1"
        >
          <div className="w-8 border-b border-amber-800/15" />
          <span className="font-serif italic text-amber-700/40 text-xs sm:text-sm">
            and
          </span>
          <div className="w-8 border-b border-amber-800/15" />
        </motion.div>

        {/* Groom's Side */}
        <div className="w-full flex flex-col items-center mt-4 sm:mt-5">
          <motion.p
            variants={itemVariants}
            className="font-serif italic text-amber-900/60 text-[10px] sm:text-xs tracking-wider uppercase mb-1"
          >
            Cherished Son of
          </motion.p>

          <motion.h4
            variants={itemVariants}
            className="font-serif text-base sm:text-lg md:text-xl text-neutral-800 font-semibold tracking-wide leading-tight whitespace-nowrap"
          >
            Mr. T.Marimuthu & Mrs. M.Nirmala
          </motion.h4>

          <motion.p
            variants={itemVariants}
            className="font-sans text-[10px] sm:text-[11px] md:text-xs text-neutral-400 tracking-wide mt-1 font-bold max-w-[280px] sm:max-w-none"
          >
            (Sri Meenakshi Bikes, Bajaj Service Manager)
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
