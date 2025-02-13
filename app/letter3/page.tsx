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
        style={{ transform: "translateX(-65px) translateY(-265px)" }}
      >
        <img src="/dummy.png" alt="heh" className="w-[150px] md:w-[150px] lg:w-[150x]" />
      </a>
    </div>
  );
}
