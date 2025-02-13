"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="h-screen w-full relative">
      {/* Background Image */}
      <div className="w-screen h-screen bg-[length:100%_100%] bg-no-repeat bg-center" 
     style={{ backgroundImage: "url('/1.png')" }}></div>

      {/* Start Button */}
      <button
        onContextMenu={(e) => e.preventDefault()}
        onClick={() => router.push("/home")}
        className="absolute bottom-0 right-10"
      >
        <img src="/button1.gif" alt="Start" className="w-16 auto" style={{ transform: "translateX(-30px) translateY(20px) rotate(270deg)" }}/>
      </button>
    </div>
  );
}
