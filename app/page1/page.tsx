"use client";
import { useRouter } from "next/navigation";

export default function Page1() {
  const router = useRouter();

  return (
    <div className="h-screen w-full relative">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(/2.png)` }}
      ></div>

      {/* Home Button */}
      <button
        onClick={() => router.push("/")}
        className="absolute top-5 left-5 px-4 py-2 bg-white text-black font-bold rounded-lg shadow-lg"
      >
        Home
      </button>

      {/* Music Page Button */}
      <button
        onClick={() => router.push("/music")}
        className="absolute top-5 right-5 px-4 py-2 bg-white text-black font-bold rounded-lg shadow-lg"
      >
        Music
      </button>

      {/* Previous Button */}
      <button
        onClick={() => router.push("/")}
        className="absolute bottom-10 left-10 px-6 py-3 bg-white text-black font-bold rounded-lg shadow-lg"
      >
        Previous
      </button>

      {/* GIFs */}
      <img
        src="/buttom_gif.gif"
        alt="Top Left GIF"
        className="absolute top-0 left-1/4 w-40 rotate-990"
        style={{ transform: "translateX(-95px) rotate(270deg)" }}
      />
      <img
        src="/buttom_gif.gif"
        alt="Top Right GIF"
        className="absolute top-0 right-1/4 w-40 rotate-90"
        style={{ transform: "translateX(90px) rotate(90deg)" }}
      />

      {/* Cake */}
      <a
        href="https://www.youtube.com/watch?v=FJdpUSpq9vw"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute left-1/2 transform -translate-x-1/2"
        style={{ top: "40%" }}
      >
        <img src="/cake.png" alt="Cake" className="w-[300px] md:w-[300px] lg:w-[350px]" />
      </a>
    </div>
  );
}
