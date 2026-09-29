import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Welcome from './components/Welcome';

function App() {
  const [showInvitation, setShowInvitation] = useState(false);

  return (
    <div className="min-h-[100dvh] bg-neutral-50 text-neutral-900 overflow-x-hidden antialiased">
      <AnimatePresence mode="wait">
        {!showInvitation ? (
          <Welcome 
            key="welcome-screen" 
            onOpenInvitation={() => setShowInvitation(true)} 
          />
        ) : (
          // Main Mobile Invitation Layout
          <motion.div 
            key="home-page"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full min-h-[100dvh] flex flex-col items-center justify-start px-6 py-12 bg-gradient-to-b from-amber-50/40 to-white"
          >
            <header className="text-center w-full max-w-sm mt-8">
              <h2 className="font-serif text-3xl text-amber-900 mb-2">The Wedding of</h2>
              <p className="text-lg font-light text-neutral-500 tracking-widest uppercase">Groom & Bride</p>
              
              {/* Elegant Divider line */}
              <div className="my-5 border-b border-amber-800/20 w-16 mx-auto" />
              
              <p className="text-neutral-600 font-serif italic text-sm mb-1">Save The Date</p>
              <p className="text-base font-semibold text-amber-800 tracking-wide">December 12, 2026</p>
              
              {/* Placeholder for venue or countdown */}
              <div className="mt-12 p-6 border border-amber-800/10 rounded-xl bg-white/50 backdrop-blur-xs shadow-xs">
                <p className="text-xs uppercase tracking-wider text-neutral-400 mb-1">Venue</p>
                <p className="text-sm font-medium text-neutral-800">Grand Palace Hall, Coimbatore</p>
              </div>
            </header>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
