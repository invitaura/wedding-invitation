import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Welcome from './components/Welcome';
import Parents from './components/Parents'; 
import Venue from './components/Venue';

function App() {
  const [showInvitation, setShowInvitation] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // 🎵 Extract your raw .mp3 audio stream link hosted in your asset pipeline or streaming provider dashboard
  const audioUrl = "/assets/music.mp3"; 

  // Initialize the native browser audio node object on assembly mounting
  useEffect(() => {
    audioRef.current = new Audio(audioUrl);
    audioRef.current.preload = 'auto';
    audioRef.current.loop = true; // Loops seamlessly for continuous background audio
    audioRef.current.volume = 0.4; // Initial target comfort volume level (40%)

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [audioUrl]);

  // Combined function handling route changes and sound engine activation safely
  const handleOpenInvitation = () => {
    setShowInvitation(true);
    
    // Safely trigger audio stream playback directly after user interaction
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.log("Browser safety policies blocked early autoplay until interaction state shifts:", err));
    }
  };

  // Toggle playback manually from the floating controller bar interface
  const togglePlayPause = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-[100dvh] bg-neutral-50 text-neutral-900 overflow-x-hidden antialiased">
      <AnimatePresence mode="wait">
        {!showInvitation ? (
          <Welcome 
            key="welcome-screen" 
            onOpenInvitation={handleOpenInvitation} // Linked to initialization handler
          />
        ) : (
          <div className="relative w-full h-[100dvh]">
            
            {/* 🎵 FLOATING CONTROLLABLE MUSIC BAR WIDGET */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.4 }}
              onClick={togglePlayPause}
              className="fixed top-6 right-6 z-50 flex items-center justify-center gap-2 bg-white/80 backdrop-blur-md border border-amber-800/20 shadow-md px-3 py-2 rounded-full cursor-pointer hover:bg-white text-neutral-800 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Dynamic Equalizer Wave Animation (Animates exclusively when playing) */}
              <div className="flex items-end gap-[2px] h-3.5 w-4 px-0.5">
                {[1, 2, 3, 4].map((bar) => (
                  <motion.span
                    key={bar}
                    className="w-[2px] bg-amber-800 rounded-full"
                    animate={isPlaying ? { height: ["20%", "100%", "20%"] } : { height: "20%" }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: bar * 0.15,
                    }}
                  />
                ))}
              </div>
              
              {/* UI Labels indicating current sound-card power-state */}
              <span className="font-serif text-[11px] tracking-wider uppercase pr-1 font-medium select-none text-amber-950">
                {isPlaying ? "Mute" : "Play"}
              </span >
            </motion.button>

            {/* Main Interactive Presentation Layer Container */}
            <motion.div 
              key="home-page"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full h-[100dvh] overflow-y-auto snap-y snap-mandatory scroll-smooth"
            >
              <Parents />
              <Venue />
            </motion.div>

          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
