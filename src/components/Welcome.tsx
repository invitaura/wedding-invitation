import { motion } from "framer-motion";

interface WelcomeProps {
  onOpenInvitation: () => void;
}

export default function Welcome({ onOpenInvitation }: WelcomeProps) {
  return (
    <motion.div
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      // min-h-[100dvh] prevents mobile browser address bar layout jumps
      className="relative min-h-[100dvh] w-full flex flex-col items-center justify-between bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 overflow-hidden px-6 py-8 select-none"
    >
      {/* Mobile-Friendly Decorative Borders */}
      <div className="absolute inset-3 border border-amber-800/10 pointer-events-none rounded-md" />
      <div className="absolute inset-4.5 border-2 border-double border-amber-800/5 pointer-events-none rounded-md" />

      {/* Top Section: Divine Greeting */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-amber-900 uppercase tracking-widest text-[10px] font-bold text-center z-10"
      >
        || Sri Ganeshaaya Namaha ||
      </motion.p>

      {/* Middle Section: Centered Vinayagar & Welcome Message */}
      <div className="z-10 text-center flex flex-col items-center justify-center my-auto w-full max-w-sm">
        {/* Compact Vinayagar Image Container with enhanced mobile shadow */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 80 }}
          className="relative w-36 h-36 min-h-[144px] mb-6 drop-shadow-[0_8px_16px_rgba(217,119,6,0.25)]"
        >
          <img
            src="../../public/assets/Vinayakar.webp"
            alt="Lord Vinayagar"
            className="w-full h-full object-contain object-center"
          />
        </motion.div>

        {/* Welcome Message - Mobile Adjusted Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="font-serif text-2xl text-amber-900 mb-3 tracking-wide leading-tight px-2"
        >
          Welcome to Our Wedding Celebration
        </motion.h1>

        {/* Short, highly readable text on mobile */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="font-sans text-xs text-amber-800/90 mb-8 leading-relaxed font-light italic px-4"
        >
          We are blessed to share this beautiful journey of love with you.
          Please join us in celebrating our special day.
        </motion.p>

        {/* Large, high-contrast mobile tap target */}
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          whileTap={{ scale: 0.96 }}
          transition={{ delay: 1, duration: 0.3 }}
          onClick={onOpenInvitation}
          // active:scale properties optimized for immediate touch feedback on screens
          className="w-full xs:w-auto bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 text-amber-50 font-semibold tracking-wider text-xs px-10 py-4 rounded-full shadow-md active:shadow-sm uppercase outline-hidden ring-4 ring-amber-600/10 active:opacity-95 touch-manipulation min-h-[48px]"
        >
          Open Invitation
        </motion.button>
      </div>

      {/* Bottom Section: Compact Decorative Accent */}
      <div className="text-amber-900 text-sm opacity-30 select-none pointer-events-none z-10">
        ❖ ❖ ❖
      </div>
    </motion.div>
  );
}
