"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="h-screen w-full relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-300"
        style={{ backgroundImage: `url(/3.png)` }}
      ></div>
      <a
        onClick={() => router.push("/music")}
        className="absolute left-1/2 top-1/2"
        style={{ transform: "translateX(30px) translateY(-100px)" }}
      >
        <img src="/love.png" alt="heh" className="w-[400px] md:w-[400px] lg:w-[380px]" />
      </a>

      <a
        onClick={() => router.push("/letter1")}
        className="absolute right-1/2 top-1/2"
        style={{ transform: "translateX(-80px) translateY(-80px)" }}
      >
        <img src="/giftbox.png" alt="heh" className="w-[300px] md:w-[300px] lg:w-[300px]" />
      </a>
      <button
        onContextMenu={(e) => e.preventDefault()}
        onClick={() => router.push("/home")}
        className="absolute top-0 left-10"
      >
        <img src="/home.png" alt="Start" className="w-16 auto" style={{ transform: "translateX(-20px) translateY(0px)" }}/>
      </button>
    </div>
  );
}
