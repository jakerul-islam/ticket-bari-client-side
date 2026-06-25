// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { signIn } from "@/lib/auth-client";
// import { LogIn, Key, Mail, AlertCircle, Ticket } from "lucide-react";
// import { Input } from "@/components/ui/input";


// export default function SignInPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       const res = await signIn.email({
//         email,
//         password,
//         callbackURL: "/",
//       });
//       if (res?.error) {
//         setError(res.error.message || "Invalid credentials.");
//       }
//     } catch (err) {
//       setError(err.message || "Something went wrong during sign in.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     try {
//       await signIn.social({
//         provider: "google",
//         callbackURL: "/",
//       });
//     } catch (err) {
//       setError("Google Sign In failed.");
//     }
//   };

//   return (
//     <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[var(--background)]">
//       {/* Left side: Relevant Travel Image */}
//       <div className="hidden lg:flex relative bg-slate-900 overflow-hidden items-center justify-center">
//         {/* Background Image */}
//         <div 
//           className="absolute inset-0 bg-cover bg-center opacity-70 transition-transform duration-[10s] hover:scale-105"
//           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1080')" }}
//         />
//         {/* Dark overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />
        
//         {/* Floating Brand Elements */}
//         <div className="relative z-10 p-12 max-w-lg text-white space-y-6">
//           <Link href="/" className="flex items-center space-x-2 w-fit bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10">
//             <Ticket className="w-5 h-5 text-[var(--primary)]" />
//             <span className="font-sans font-black tracking-widest text-white text-sm">
//               TICKET<span className="text-[var(--primary)]">BARI</span>
//             </span>
//           </Link>
//           <div className="space-y-3">
//             <h2 className="text-3xl font-black leading-tight">Instant Commute Bookings</h2>
//             <p className="text-sm text-slate-300 leading-relaxed font-medium">
//               Bypass terminal queues. Reserve premium seats across top regional coach operators, scenic rail systems, and airline routes.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Right side: Sign In Form */}
//       <div className="flex items-center justify-center px-6 py-12 lg:px-16">
//         <div className="w-full max-w-md bg-[var(--card)] rounded-3xl border border-[var(--border)] shadow-xl p-8 sm:p-10 space-y-6">
//           <div className="text-center space-y-2">
//             <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Welcome Back</h1>
//             <p className="text-sm text-foreground/60">Sign in to book and manage your tickets</p>
//           </div>

//           {error && (
//             <div className="flex items-center space-x-2 bg-red-50 dark:bg-red-955/20 text-red-600 dark:text-red-400 p-3.5 rounded-xl text-xs font-semibold border border-red-200/50 dark:border-red-955/50">
//               <AlertCircle className="w-4 h-4 shrink-0" />
//               <span>{error}</span>
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="space-y-1.5">
//               <label className="text-xs font-bold text-foreground/80 uppercase tracking-wider flex items-center space-x-1">
//                 <Mail className="w-3 h-3 text-[var(--primary)]" />
//                 <span>Email Address</span>
//               </label>
//               <Input
//                 type="email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="you@example.com"
//                 className="bg-[var(--input)] border-[var(--border)] text-foreground placeholder:text-foreground/40 h-11"
//               />
//             </div>

//             <div className="space-y-1.5">
//               <label className="text-xs font-bold text-foreground/80 uppercase tracking-wider flex items-center space-x-1">
//                 <Key className="w-3 h-3 text-[var(--primary)]" />
//                 <span>Password</span>
//               </label>
//               <Input
//                 type="password"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="••••••••"
//                 className="bg-[var(--input)] border-[var(--border)] text-foreground placeholder:text-foreground/40 h-11"
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-3 bg-[var(--primary)] hover:opacity-95 text-white font-bold rounded-xl text-sm transition-all active:scale-95 flex items-center justify-center space-x-2 shadow-md"
//             >
//               {loading ? (
//                 <div className="w-5 h-5 border-2 border-white border-t-transparent animate-spin rounded-full"></div>
//               ) : (
//                 <>
//                   <LogIn className="w-4 h-4" />
//                   <span>Sign In</span>
//                 </>
//               )}
//             </button>
//           </form>

//           <div className="relative flex items-center justify-center">
//             <hr className="w-full border-[var(--border)]" />
//             <span className="absolute bg-[var(--card)] px-4 text-xs font-bold uppercase tracking-wider text-foreground/50">Or Continue With</span>
//           </div>

//           <button
//             onClick={handleGoogleSignIn}
//             className="w-full py-3 bg-[var(--input)] hover:bg-[var(--card)] text-foreground border border-[var(--border)] rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center space-x-2.5"
//           >
//             <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//               <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114-3.468 0-6.28-2.812-6.28-6.28s2.812-6.28 6.28-6.28c1.637 0 3.125.626 4.248 1.648l3.123-3.123C19.262 2.693 15.98 1 12.24 1 5.922 1 12s4.922 11 11.24 11c6.518 0 11.24-4.582 11.24-11 0-.74-.067-1.455-.19-2.143H12.24z"/>
//             </svg>
//             <span>Continue with Google</span>
//           </button>

//           <p className="text-center text-xs text-foreground/60">
//             Don't have an account?{" "}
//             <Link href="/auth/signup" className="text-[var(--primary)] hover:underline font-semibold">
//               Create account
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn } from "@/lib/auth-client";
import { LogIn, Key, Mail, AlertCircle, Ticket } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await signIn.email({
        email,
        password,
        callbackURL: "/",
      });
      if (res?.error) {
        setError(res.error.message || "Invalid credentials.");
      }
    } catch (err) {
      setError(err.message || "Something went wrong during sign in.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
      setError("Google Sign In failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)] relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Ambient Glows */}
      <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-[var(--primary)]/10 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-tr from-[var(--secondary)]/10 to-transparent blur-[120px] pointer-events-none" />

      {/* Centered Form Card */}
      <div className="w-full max-w-xl bg-[var(--card)] rounded-[2rem] border border-[var(--border)] shadow-2xl p-8 sm:p-10 lg:p-12 relative z-10 backdrop-blur-md">
        
        {/* Brand Logo & Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-8">
          <Link href="/" className="flex items-center space-x-2 bg-[var(--input)] px-4 py-2 rounded-xl border border-[var(--border)] transition-transform active:scale-95">
            <Ticket className="w-4 h-4 text-[var(--primary)]" />
            <span className="font-sans font-black tracking-[0.2em] text-foreground text-xs">
              TICKET<span className="text-[var(--primary)]">BARI</span>
            </span>
          </Link>
          
          <div className="space-y-1">
            <h1 className="text-3xl font-black tracking-tight text-foreground">
              Welcome Back
            </h1>
            <p className="text-sm text-foreground/60 font-medium">
              Sign in to secure your gateway and manage transits
            </p>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="flex items-center space-x-3 bg-red-500/5 text-red-500 p-4 rounded-xl text-xs font-semibold border border-red-500/10 mb-6">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Signin Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Email Terminal */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-extrabold text-foreground/50 uppercase tracking-widest flex items-center space-x-1.5">
              <Mail className="w-3.5 h-3.5 text-[var(--primary)]" />
              <span>Email Terminal</span>
            </label>
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@domain.com"
              className="bg-[var(--input)] border-[var(--border)] text-foreground placeholder:text-foreground/30 h-12 rounded-xl focus-visible:ring-1 focus-visible:ring-[var(--primary)] transition-all"
            />
          </div>

          {/* Security Key */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-extrabold text-foreground/50 uppercase tracking-widest flex items-center space-x-1.5">
              <Key className="w-3.5 h-3.5 text-[var(--primary)]" />
              <span>Security Key</span>
            </label>
            <Input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="bg-[var(--input)] border-[var(--border)] text-foreground placeholder:text-foreground/30 h-12 rounded-xl focus-visible:ring-1 focus-visible:ring-[var(--primary)] transition-all"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-[var(--primary)] hover:opacity-90 text-white font-bold rounded-xl text-sm transition-all active:scale-[0.98] flex items-center justify-center space-x-2 shadow-lg shadow-[var(--primary)]/10"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent animate-spin rounded-full"></div>
              ) : (
                <>
                  <LogIn className="w-4 h-4" />
                  <span>Authenticate Access</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="relative flex items-center justify-center py-6">
          <hr className="w-full border-[var(--border)]" />
          <span className="absolute bg-[var(--card)] px-4 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40">Alternative Gate</span>
        </div>

        {/* Google SignIn & Redirect Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={handleGoogleSignIn}
            className="w-full sm:w-auto px-6 h-12 bg-[var(--input)] hover:bg-[var(--border)] text-foreground border border-[var(--border)] rounded-xl text-xs font-bold tracking-wide transition-all duration-200 flex items-center justify-center space-x-3 grow"
          >
            <svg className="w-4 h-4 shrink-0 fill-current text-foreground" viewBox="0 0 24 24">
              <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114-3.468 0-6.28-2.812-6.28-6.28s2.812-6.28 6.28-6.28c1.637 0 3.125.626 4.248 1.648l3.123-3.123C19.262 2.693 15.98 1 12.24 1 5.922 1 12s4.922 11 11.24 11c6.518 0 11.24-4.582 11.24-11 0-.74-.067-1.455-.19-2.143H12.24z"/>
            </svg>
            <span>Connect via Google</span>
          </button>

          <p className="text-center sm:text-right text-xs text-foreground/50 font-medium whitespace-nowrap">
            New here?{" "}
            <Link href="/auth/signup" className="text-[var(--primary)] hover:underline font-bold ml-1">
              Create Account
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}
