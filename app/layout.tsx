"use client";
import Head from 'next/head';
import { useState, useEffect } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isPortrait, setIsPortrait] = useState(false); // Assume landscape initially
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      const isPortraitMode = window.matchMedia("(orientation: portrait)").matches;
      setIsPortrait(isPortraitMode);
  
      if (isPortraitMode) {
        setShowOverlay(true); // Immediately show overlay
      } else {
        setShowOverlay(false); // Instantly remove overlay when switching back
      }
    };
  
    checkOrientation();
    const mediaQuery = window.matchMedia("(orientation: portrait)");
    mediaQuery.addEventListener("change", checkOrientation);
  
    return () => mediaQuery.removeEventListener("change", checkOrientation);
  }, []);
  

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </Head>
      <body className="h-screen w-full relative bg-black">
        {/* Smooth Fade for Overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center bg-black transition-opacity duration-700 ${
            showOverlay ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {showOverlay && <img src="/rotate.png" alt="Rotate to continue" className="w-full h-full object-cover" />}
        </div>

        {!isPortrait && children}
      </body>
    </>
  );
}
