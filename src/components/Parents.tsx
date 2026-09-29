import { motion, type Variants } from "framer-motion";
import TempleImg from "../assets/Temple.png";
import ThoranamImg from "../assets/Thoranum.png";
import CoupleImg from "../assets/Couple.png";

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
    <section className="relative w-full h-[100dvh] min-h-[100dvh] flex flex-col items-center justify-center px-4 sm:px-6 py-8 select-none overflow-hidden bg-gradient-to-b from-amber-50/50 via-white to-amber-50/30 snap-start">
      {/* 🏛️ Center Temple Gopuram Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <img
          src={TempleImg}
          alt="Temple Gopuram"
          className="w-full max-w-[340px] sm:max-w-[420px] h-auto object-contain opacity-[0.05] transform scale-110"
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
          backgroundSize: "auto 100%",
          backgroundPosition: "top center",
        }}
      />

      {/* 📜 CENTER ELEMENT: Tight, Balanced Content Typography Stack */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="w-full max-w-md z-10 text-center flex flex-col items-center justify-center px-2 gap-y-5 sm:gap-y-6"
      >
        {/* Top Quote */}
        <motion.p
          variants={itemVariants}
          className="font-serif italic text-amber-800 text-xs sm:text-[13px] tracking-wide max-w-xs sm:max-w-sm leading-relaxed mb-1"
        >
          "With the love of our families as our anchor and the blessings of the heavens as our light, our journey begins."
        </motion.p>

        {/* Bride's Side */}
        <div className="w-full flex flex-col items-center">
          <motion.p
            variants={itemVariants}
            className="font-serif italic text-amber-900/60 text-[10px] sm:text-xs tracking-wider uppercase mb-0.5"
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
            className="font-sans text-[10px] sm:text-[11px] md:text-xs text-neutral-400 tracking-wide mt-0.5 font-light max-w-[280px] sm:max-w-none"
          >
            (LIC of India, Sr. Insurance Advisor)
          </motion.p>
        </div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="w-full flex items-center justify-center gap-4 py-0.5"
        >
          <div className="w-8 border-b border-amber-800/15" />
          <span className="font-serif italic text-amber-700/40 text-xs sm:text-sm">
            and
          </span>
          <div className="w-8 border-b border-amber-800/15" />
        </motion.div>

        {/* Groom's Side */}
        <div className="w-full flex flex-col items-center">
          <motion.p
            variants={itemVariants}
            className="font-serif italic text-amber-900/60 text-[10px] sm:text-xs tracking-wider uppercase mb-0.5"
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
            className="font-sans text-[10px] sm:text-[11px] md:text-xs text-neutral-400 tracking-wide mt-0.5 font-light max-w-[280px] sm:max-w-none"
          >
            (Sri Meenakshi Bikes, Bajaj Service Manager)
          </motion.p>
        </div>

        {/* 👩‍❤️‍👨 Couple Illustration & Names Section (Now seamlessly grouped) */}
        <div className="w-full flex flex-col items-center mt-2 gap-y-3">
          {/* Couple Illustration */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-[100px] sm:max-w-[120px] aspect-[3/4] flex items-center justify-center"
          >
            <img
              src={CoupleImg}
              alt="Wedding Couple Cartoon"
              className="w-full h-auto object-contain drop-shadow-sm"
            />
          </motion.div>

          {/* Responsive Couple Names Display */}
          <motion.h3
            variants={itemVariants}
            className="font-serif text-xl sm:text-2xl md:text-3xl text-amber-900 font-bold tracking-wide leading-tight whitespace-nowrap px-2"
          >
            Sushmitha <span className="font-normal font-sans text-lg sm:text-xl text-amber-700/70 mx-1">&</span> Pandian
          </motion.h3>
        </div>

      </motion.div>
    </section>
  );
}
