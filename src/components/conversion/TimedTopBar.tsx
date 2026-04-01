"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "timedTopBar_dismissed";

export function TimedTopBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 left-0 right-0 z-[45]"
        >
          <div
            className="px-4 py-3 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(to right, var(--color-dark-dark), var(--color-primary-dark), var(--color-accent-dark))",
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <div className="max-w-6xl mx-auto flex items-center justify-between relative z-10">
              <p className="text-white font-bold text-sm md:text-base flex-1 text-center md:text-left">
                <span className="inline-block animate-pulse mr-2">
                  &#9733;
                </span>
                Limited Time: Free Water Test for First-Time Customers!
              </p>
              <a
                href="tel:4077732883"
                className="hidden md:block text-white/90 font-semibold text-sm hover:text-white ml-4 whitespace-nowrap"
              >
                Call (407) 773-2883
              </a>
              <button
                onClick={handleClose}
                className="text-white/60 hover:text-white ml-3 text-lg font-bold leading-none"
                aria-label="Close"
              >
                &times;
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
