"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MusicPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const router = useRouter();

  const togglePlay = () => {
    const audio = document.getElementById("audio-player") as HTMLAudioElement;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white">
      {/* Home Button */}
      <button
        onClick={() => router.push("/")}
        className="absolute top-5 left-5 px-4 py-2 bg-white text-black font-bold rounded-lg shadow-lg"
      >
        Home
      </button>

      {/* Previous Button */}
      <button
        onClick={() => router.push("/page1")}
        className="absolute top-5 right-5 px-4 py-2 bg-white text-black font-bold rounded-lg shadow-lg"
      >
        Back
      </button>

      {/* Vinyl Record Animation */}
      <div className="relative w-48 h-48">
        <img
          src="/vinyl.png"
          alt="Vinyl Record"
          className={`w-full h-full transition-transform duration-500 ${
            isPlaying ? "animate-spin" : ""
          }`}
        />
      </div>

      {/* Audio Controls */}
      <audio id="audio-player" src="/your-song.mp3"></audio>
      <button
        onClick={togglePlay}
        className="mt-6 px-6 py-3 bg-white text-black font-bold rounded-lg shadow-lg"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>

      {/* Download Option */}
      <a
        href="/your-song.mp3"
        download
        className="mt-4 text-blue-400 underline"
      >
        Download Song
      </a>
    </div>
  );
}
