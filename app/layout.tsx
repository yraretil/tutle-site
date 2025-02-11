"use client";
import { useState, useEffect } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isPortrait, setIsPortrait] = useState<boolean | null>(null); // Prevents hydration error
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const checkOrientation = () => {
      const isPortraitMode = window.matchMedia("(orientation: portrait)").matches;
      setIsPortrait(isPortraitMode);

      if (isPortraitMode) {
        setShowOverlay(true); // Instantly show overlay when switching to portrait
      } else {
        setTimeout(() => setShowOverlay(false), 700); // Ensures a smooth fade-out
      }
    };

    checkOrientation();

    const mediaQuery = window.matchMedia("(orientation: portrait)");
    const handleChange = () => {
      setShowOverlay(true); // Show the overlay before checking again
      setTimeout(() => checkOrientation(), 50);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <html lang="en">
      <body className="h-screen w-full relative bg-black">
        {/* Prevent hydration mismatch */}
        {isPortrait === null ? null : (
          <>
            {/* Orientation Overlay with Smooth Fade-In & Fade-Out */}
            <div
              className={`absolute inset-0 flex items-center justify-center bg-black transition-opacity duration-700 ${
                showOverlay ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              {showOverlay && (
                <img src="/rotate.png" alt="Rotate to continue" className="w-full h-full object-cover" />
              )}
            </div>

            {/* Render children only when in landscape mode */}
            {!isPortrait && children}
          </>
        )}
      </body>
    </html>
  );
}
