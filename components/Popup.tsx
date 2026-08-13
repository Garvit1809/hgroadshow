"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Show the popup on load
    setIsOpen(true);
  }, []);

  const handleImageClick = () => {
    setIsOpen(false);
    router.push("/sponsors");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden z-10"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors backdrop-blur-sm"
              aria-label="Close popup"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div
              className="relative w-full aspect-[4/3] md:aspect-video flex items-center justify-center bg-[#f0f7f4] cursor-pointer"
              onClick={handleImageClick}
            >
              <Image
                src="/popup.jpeg"
                alt="Welcome"
                fill
                className="object-contain transition-transform duration-300 hover:scale-[1.02]"
                priority
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
