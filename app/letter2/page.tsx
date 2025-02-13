"use client";
import { useRouter } from "next/navigation";

export default function Letter2() {
  const router = useRouter();

  return (
    <div className="h-screen w-full relative">
      {/* Background Image */}
      <div className="w-screen h-screen bg-[length:100%_100%] bg-no-repeat bg-center" 
     style={{ backgroundImage: "url('/5.png')" }}></div>
      <button
        onContextMenu={(e) => e.preventDefault()}
        onClick={() => router.push("/letter3")}
        className="absolute bottom-0 right-10"
      >
        <img src="/button1.gif" alt="Start" className="w-16 auto" style={{ transform: "translateX(-525px) translateY(-50px) " }}/>
      </button>
    </div>
  );
}
