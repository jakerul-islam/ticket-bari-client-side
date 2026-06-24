// "use client";

// import { useState, useEffect } from "react";
// import Lenis from "lenis";
// import { Ticket } from "lucide-react";
// import { Toaster } from "sonner";

// export default function ClientWrapper({ children }) {
//   const [loading, setLoading] = useState(true);

//   // Initialize Lenis smooth scroll
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       orientation: "vertical",
//       gestureOrientation: "vertical",
//       smoothWheel: true,
//     });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);

//     // Hide loader after 1.2 seconds
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1200);

//     return () => {
//       lenis.destroy();
//       clearTimeout(timer);
//     };
//   }, []);

//   return (
//     <>
//       <Toaster richColors closeButton position="top-right" theme="auto" />
//       {loading && (
//         <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[var(--background)] text-[var(--foreground)] transition-opacity duration-500">
//           {/* Wave/Glow circles background */}
//           <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
//             <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] rounded-full bg-[var(--primary)] blur-[100px] animate-pulse"></div>
//             <div className="absolute bottom-1/4 right-1/4 w-[25vw] h-[25vw] rounded-full bg-[var(--secondary)] blur-[120px] animate-pulse"></div>
//           </div>

//           <div className="relative flex flex-col items-center space-y-6">
//             {/* Spinning/pulsing ticket icon */}
//             <div className="relative flex items-center justify-center p-6 rounded-3xl bg-[var(--card)] border border-[var(--border)] shadow-xl shadow-emerald-500/5 animate-[float_3s_ease-in-out_infinite]">
//               <Ticket className="w-12 h-12 text-[var(--primary)] animate-pulse" />
//               {/* Spinning loading rings */}
//               <div className="absolute inset-0 border-2 border-[var(--primary)] border-t-transparent rounded-3xl animate-spin"></div>
//             </div>

//             {/* Glowing Brand text */}
//             <h1 className="text-3xl font-extrabold tracking-wider bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
//               TICKETBARI
//             </h1>

//             {/* Micro loading progress bar */}
//             <div className="w-48 h-1 bg-[var(--border)] rounded-full overflow-hidden">
//               <div className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] animate-[loadingBar_1.2s_ease-in-out_infinite]"></div>
//             </div>
//           </div>
//         </div>
//       )}
//       <div className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
//         {children}
//       </div>
//     </>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";

export default function ClientWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Hide loader after 1.2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => {
      lenis.destroy();
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Toaster richColors closeButton position="top-right" theme="auto" />
      
      {loading && (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[var(--background)] transition-opacity duration-500">
          
          {/* গ্লোয়িং ব্যাকগ্রাউন্ড অ্যাম্বিয়েন্স */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full bg-[var(--primary)] blur-[120px] animate-pulse"></div>
          </div>

          <div className="relative flex flex-col items-center space-y-4">
            
            {/* মডার্ন টেক্সট লোডার উইথ শিমার ইফেক্ট */}
            <h1 className="text-4xl font-black tracking-[0.25em] bg-gradient-to-r from-[var(--foreground)] via-[var(--primary)] to-[var(--foreground)] bg-[length:200%_auto] bg-clip-text text-transparent animate-[shimmer_2s_linear_infinite] select-none">
              TICKETBARI
            </h1>

            {/* মিনিমালিস্ট ৩-ডট বাউন্সি লোডার */}
            <div className="flex items-center space-x-1.5 pt-2">
              <div className="w-2 h-2 rounded-full bg-[var(--primary)] animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-2 h-2 rounded-full bg-[var(--primary)] opacity-80 animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-2 h-2 rounded-full bg-[var(--primary)] opacity-60 animate-bounce"></div>
            </div>

            {/* ছোট করে নিচের সাবটেল লোডিং টেক্সট */}
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40 animate-pulse pt-4">
              Loading Experience
            </span>

          </div>
        </div>
      )}

      <div className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
        {children}
      </div>
    </>
  );
}