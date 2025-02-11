"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [page, setPage] = useState(0);
  const [hover, setHover] = useState(false);
  const pages = ["/1.png", "/2.png", "/third-page.png"];

  // Track if in portrait mode
  const [isPortrait, setIsPortrait] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true); // Controls fade timing

  const checkOrientation = () => {
    const isPortraitMode = window.matchMedia("(orientation: portrait)").matches;
    setIsPortrait(isPortraitMode);
  
    if (isPortraitMode) {
      setShowOverlay(true); // Show overlay instantly for fade-in
    } else {
      setTimeout(() => setShowOverlay(false), 500); // Wait for fade-out before hiding
    }
  };
  

  useEffect(() => {
    checkOrientation(); // Check on mount
  
    const mediaQuery = window.matchMedia("(orientation: portrait)");
    const handleChange = () => checkOrientation();
  
    mediaQuery.addEventListener("change", handleChange);
  
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);
  

  return (
    <div className="h-screen w-full relative">
      {/* Background Image for Current Page */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-100"
        style={{ backgroundImage: `url(${pages[page]})` }}
      ></div>

      {/* Fade-In & Fade-Out Portrait Overlay */}
      <div
        className={`absolute inset-0 flex items-center justify-center bg-black transition-opacity duration-500 ${
          isPortrait ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {showOverlay && (
          <img src="/rotate.png" alt="Rotate to continue" className="w-full h-full object-cover" />
        )}
      </div>

      {!isPortrait && (
        <>
          {/* Custom Image Button (Only on First Page) */}
          {page === 0 && (
            <button
              onClick={() => setPage(1)}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onTouchStart={() => setHover(true)}
              onTouchEnd={() => setHover(false)}
              className="absolute bottom-10 right-10"
            >
              <img src={hover ? "/button1.gif" : "/button1.png"} alt="Start" className="w-16 auto" />
            </button>
          )}

          {/* Navigation Buttons */}
          {page > 0 && (
            <button
              onClick={() => setPage(0)}
              className="absolute top-5 left-5 px-4 py-2 bg-white text-black font-bold rounded-lg shadow-lg"
            >
              Home
            </button>
          )}

          {page > 0 && (
            <button
              onClick={() => setPage(page - 1)}
              className="absolute bottom-10 left-10 px-6 py-3 bg-white text-black font-bold rounded-lg shadow-lg"
            >
              Previous
            </button>
          )}

          {page > 0 && page < pages.length - 1 && (
            <button
              onClick={() => setPage(page + 1)}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-white text-black font-bold rounded-lg shadow-lg"
            >
              Next Page
            </button>
          )}

          {page === 1 && (
            <>
              <img src="/buttom_gif.gif" alt="Top Left GIF" className="absolute top-0 left-1/4 w-40 rotate-990" style={{ transform: "translateX(-95px) rotate(270deg)" }} />
              <img src="/buttom_gif.gif" alt="Top Right GIF" className="absolute top-0 right-1/4 w-40 rotate-90" style={{ transform: "translateX(90px) rotate(90deg)" }} />

              <a href="https://www.youtube.com/watch?v=FJdpUSpq9vw" target="_blank" rel="noopener noreferrer" className="absolute left-1/2 transform -translate-x-1/2" style={{ top: "40%" }}>
                <img src="/cake.png" alt="Cake" className="w-[300px] md:w-[300px] lg:w-[300px]" />
              </a>
            </>
          )}
        </>
      )}
    </div>
  );
}
