import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Welcome from './components/Welcome';
import Parents from './components/Parents'; 
// 📦 Imported your brand new Venue component here
import Venue from './components/Venue';

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
          <motion.div 
            key="home-page"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            /* Added smooth vertical container scrolling features */
            className="w-full h-[100dvh] overflow-y-auto snap-y snap-mandatory scroll-smooth"
          >
            {/* Page 1: Parents, Quote & Couple Block */}
            <Parents />

            {/* Page 2: Your complete standalone interactive map layout */}
            <Venue />
            
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
