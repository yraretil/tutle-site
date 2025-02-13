"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="h-screen w-full relative">
      {/* Background Image */}
      <div className="w-screen h-screen bg-[length:100%_100%] bg-no-repeat bg-center" 
     style={{ backgroundImage: "url('/7.png')" }}></div>

      <button
        onContextMenu={(e) => e.preventDefault()}
        onClick={() => router.push("/home")}
        className="absolute top-10 right-10"
      >
        <img src="/home2.png" alt="Start" className="w-16 auto" style={{ transform: "translateX(-20px) translateY(0px)" }}/>
      </button>
    </div>
  );
}
