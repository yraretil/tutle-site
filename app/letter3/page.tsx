"use client";
import { useRouter } from "next/navigation";

export default function Letter3() {
  const router = useRouter();

  return (
    <div className="h-screen w-full relative">
      {/* Background Image */}
      <div className="w-screen h-screen bg-[length:100%_100%] bg-no-repeat bg-center" 
     style={{ backgroundImage: "url('/6.png')" }}></div>
      <a
        onClick={() => router.push("/final")}
        className="absolute left-1/2 top-1/2"
        style={{ transform: "translateX(-160px) translateY(-295px)" }}
      >
        <img src="/dummy.png" alt="heh" className="w-[325px] md:w-[325px] lg:w-[325x]" />
      </a>
    </div>
  );
}
