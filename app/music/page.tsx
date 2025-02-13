"use client";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward,} from "lucide-react";

export default function MusicPlayer() {
  const [showImage, setShowImage] = useState(false);
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        if (audioRef.current) {
          setProgress(
            (audioRef.current.currentTime / audioRef.current.duration) * 100
          );
        }
      }, 500);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  // Stop vinyl when music ends
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("ended", () => setIsPlaying(false));
    }
    return () => {
      if (audio) {
        audio.removeEventListener("ended", () => setIsPlaying(false));
      }
    };
  }, []);
  

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
      setTimeout(() => setShowImage(true), 180000); // Show PNG after 3mins
    }
    setIsPlaying(!isPlaying);
  };

  const restartSong = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6 relative">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(/star.gif)` }}
      ></div>
      
      {/* Vinyl Record */}
      <div className="relative w-80 h-80 mb-5">
        <img
          src={isPlaying ? "/vinyl.gif" : "/vinyl.png"}
          alt="Vinyl Record"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Music Player Controls */}
      <div className="bg-[#121212] p-4 rounded-lg shadow-lg w-80 flex flex-col items-center relative z-10">
        <audio ref={audioRef} src="/music.wav" preload="metadata"></audio>

        {/* Progress Bar */}
        <input
          type="range"
          value={progress}
          max="100"
          readOnly
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer mt-3"
        />

        {/* Player Buttons */}
        <div className="flex items-center justify-between mt-3 w-full px-6">
          <button onClick={restartSong}>
            <SkipBack size={28} className="text-gray-400" />
          </button>
          <button
            onClick={togglePlay}
            className="bg-green-500 text-black p-4 rounded-full flex items-center justify-center"
          >
            {isPlaying ? <Pause size={32} /> : <Play size={32} />}
          </button>
          <button>
            <SkipForward size={28} className="text-gray-400" />
          </button>
        </div>
      </div>
      <button
        onContextMenu={(e) => e.preventDefault()}
        onClick={() => router.push("/home")}
        className="absolute top-0 left-10"
      >
        <img src="/home2.png" alt="Start" className="w-16 auto" style={{ transform: "translateX(-20px) translateY(0px)" }}/>
      </button>

      <img 
        src="/thank.png" 
        className={`absolute transition-opacity duration-1000 ${showImage ? 'opacity-100' : 'opacity-0'}`}
        style={{ width: "400px", height: "100px", transform: "translateY(300px)" }}
        alt="End Transition"
      />
    </div>
  );
}
