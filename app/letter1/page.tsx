"use client";
import { useRouter } from "next/navigation";

export default function Letter1() {
  const router = useRouter();

  return (
    <div className="h-screen w-full relative">
      {/* Background Image */}
      <div className="w-screen h-screen bg-[length:100%_100%] bg-no-repeat bg-center" 
     style={{ backgroundImage: "url('/4.png')" }}></div>
      <a
        onClick={() => router.push("/letter2")}
        className="absolute left-1/2 top-1/2"
        style={{ transform: "translateX(200px) translateY(70px)" }}
      >
        <img src="/dummy.png" alt="heh" className="w-[200px] md:w-[200px] lg:w-[300px]" />
      </a>
    </div>
  );
}
