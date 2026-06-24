"use client";

import Link from "next/link";
import { Home, ArrowLeft, TrainFront } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-slate-950 px-4 py-24 sm:px-6 lg:px-8 select-none overflow-hidden">
      
      {/* 🔮 ব্যাকগ্রাউন্ড গ্লো ইফেক্টস (স্লিক ও রিফাইনড) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* 🧩 বিশাল ব্যাকগ্রাউন্ড টেক্সট ওয়াটারমার্ক - যা পুরো লুক বদলে দেয় */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.02]">
        <h1 className="text-[30vw] font-black tracking-tighter text-white">404</h1>
      </div>

      <div className="relative max-w-xl w-full text-center space-y-10 z-10">
        
        {/* 🎫 ইমার্সিভ অ্যানিমেটেড আইকন সেকশন */}
        <div className="relative inline-flex items-center justify-center">
          <div className="p-5 bg-slate-900/50 border border-slate-800/80 rounded-3xl backdrop-blur-xs relative group shadow-2xl">
            <TrainFront className="w-14 h-14 text-emerald-500 animate-pulse" />
            
            {/* নোটিফিকেশন ডট ব্যাজ */}
            <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-rose-500 text-[10px] text-white font-black items-center justify-center shadow-xs">
                ✕
              </span>
            </span>
          </div>
        </div>

        {/* 📝 টাইপোগ্রাফি ও মেসেজিং সেকশন */}
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">
              Trip Cancelled
            </span>
          </div>
          
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
            Route Is Unavailable
          </h1>
          
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium max-w-md mx-auto">
            The station or itinerary you are trying to reach does not exist. It may have been permanently archived, renamed, or shifted to another platform.
          </p>
        </div>

        {/* 🛠️ টোটালি রি-ডিজাইনড অ্যাকশন বাটন্স */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto pt-4">
          <Link
            href="/"
            className="w-full sm:flex-1 py-3.5 bg-linear-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/20 active:scale-98"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Terminal Home</span>
          </Link>
          
          <Link
            href="/tickets"
            className="w-full sm:flex-1 py-3.5 bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-300 hover:text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 active:scale-98"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Find Other Routes</span>
          </Link>
        </div>

      </div>
    </div>
  );
}