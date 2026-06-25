// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { signOut, signUp, signIn } from "@/lib/auth-client";
// import { UserPlus, User, Mail, Key, Image, AlertCircle, Sparkles, Ticket } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { Select } from "@/components/ui/select";
// import { useRouter } from "next/navigation";



// export default function SignUpPage() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("user");
//   const [imageFile, setImageFile] = useState(null);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//  const router = useRouter();
//   const handleFileChange = (e) => {
//     setImageFile(e.target.files[0]);
   
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       let imageUrl = "";


//       if (imageFile) {
//         const formData = new FormData();
//         formData.append("image", imageFile);

//         const imgbbKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY || "e137d11ae145b9f6610a6d8377ef5413";
//         const uploadRes = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbKey}`, {
//           method: "POST",
//           body: formData,
//         });

//         if (!uploadRes.ok) {
//           const errData = await uploadRes.json().catch(() => ({}));
//           const errMsg = errData.error?.message || `Failed to upload avatar image to ImgBB (status ${uploadRes.status}).`;
//           throw new Error(errMsg);
//         }

//         const uploadData = await uploadRes.json();
//         imageUrl = uploadData.data?.url || "";
//       } else {
//         // Fallback default avatar
//         imageUrl = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150";
//       }

//       // 2. Sign Up via BetterAuth (with custom additional fields)
//       const res = await signUp.email({
//         email,
//         password,
//         name,
//         image: imageUrl,
//         role: role, // Extends schema


//       });

//       if (res?.error) {
//         setError(res.error.message || "Failed to register account.");
//       } else {
//         await signOut();
//         router.push("/auth/signin");
//       }

//     } catch (err) {
//       setError(err.message || "Registration failed. Try again.");
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
//           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=1080')" }}
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
//             <h2 className="text-3xl font-black leading-tight">Create Your Passenger Pass</h2>
//             <p className="text-sm text-slate-300 leading-relaxed font-medium">
//               Join thousands of travelers who book bus seats, rail commutes, and flight schedules instantly.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Right side: Sign Up Form */}
//       <div className="flex items-center justify-center px-6 py-12 lg:px-16">
//         <div className="w-full max-w-md bg-[var(--card)] rounded-3xl border border-[var(--border)] shadow-xl p-8 sm:p-10 space-y-6">
//           <div className="text-center space-y-2">
//             <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Create Account</h1>
//             <p className="text-sm text-foreground/60">Sign up to purchase tickets or list schedules</p>
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
//                 <User className="w-3 h-3 text-[var(--primary)]" />
//                 <span>Full Name</span>
//               </label>
//               <Input
//                 type="text"
//                 required
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="John Doe"
//                 className="bg-[var(--input)] border-[var(--border)] text-foreground placeholder:text-foreground/40 h-11"
//               />
//             </div>

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

//             <div className="space-y-1.5">
//               <label className="text-xs font-bold text-foreground/80 uppercase tracking-wider flex items-center space-x-1">
//                 <Sparkles className="w-3 h-3 text-[var(--primary)]" />
//                 <span>Register As</span>
//               </label>
//               <Select
//                 value={role}
//                 onChange={(e) => setRole(e.target.value)}
//                 className="bg-[var(--input)] border-[var(--border)] text-foreground h-11"
//               >
//                 <option value="user">User (Passenger)</option>
//                 <option value="vendor">Vendor (Transport Company)</option>
//               </Select>
//             </div>

//             <div className="space-y-1.5">
//               <label className="text-xs font-bold text-foreground/80 uppercase tracking-wider flex items-center space-x-1">
//                 <Image className="w-3 h-3 text-[var(--primary)]" />
//                 <span>Profile Image</span>
//               </label>
//               <Input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleFileChange}
//                 className="bg-[var(--input)] border-[var(--border)] text-foreground file:mr-4 file:py-2 file:px-3 file:border-0 file:bg-white/10 file:text-xs file:font-semibold file:text-[var(--primary)] hover:file:opacity-80 h-11 flex items-center"
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
//                   <UserPlus className="w-4 h-4" />
//                   <span>Register Account</span>
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
//             Already have an account?{" "}
//             <Link href="/auth/signin" className="text-[var(--primary)] hover:underline font-semibold">
//               Sign In
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
import { signOut, signUp, signIn } from "@/lib/auth-client";
import { UserPlus, User, Mail, Key, Image as ImageIcon, AlertCircle, Sparkles, Ticket } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      let imageUrl = "";

      if (imageFile) {
        const formData = new FormData();
        formData.append("image", imageFile);

        const imgbbKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY || "e137d11ae145b9f6610a6d8377ef5413";
        const uploadRes = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbKey}`, {
          method: "POST",
          body: formData,
        });

        if (!uploadRes.ok) {
          const errData = await uploadRes.json().catch(() => ({}));
          const errMsg = errData.error?.message || `Failed to upload avatar image to ImgBB (status ${uploadRes.status}).`;
          throw new Error(errMsg);
        }

        const uploadData = await uploadRes.json();
        imageUrl = uploadData.data?.url || "";
      } else {
        imageUrl = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150";
      }

      const res = await signUp.email({
        email,
        password,
        name,
        image: imageUrl,
        role: role,
      });

      if (res?.error) {
        setError(res.error.message || "Failed to register account.");
      } else {
        await signOut();
        router.push("/auth/signin");
      }

    } catch (err) {
      setError(err.message || "Registration failed. Try again.");
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
      {/* Background Subtle Geometrics (ডিজাইন একদম ইউনিক করার জন্য) */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[var(--primary)]/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tr from-[var(--secondary)]/10 to-transparent blur-[100px] pointer-events-none" />

      {/* Main Glassmorphism Container */}
      <div className="w-full max-w-5xl bg-gradient-to-b from-[var(--card)] to-[var(--background)] rounded-[2.5rem] border border-[var(--border)] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative z-10 backdrop-blur-sm">
        
        {/* Left Side: Form Container */}
        <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center space-y-7">
          <div className="space-y-2">
            <h1 className="text-4xl font-black tracking-tight text-foreground bg-gradient-to-r from-foreground via-foreground to-[var(--primary)] bg-clip-text">
              Get On Board.
            </h1>
            <p className="text-sm text-foreground/60 font-medium">
              Setup your account profile to access reservations
            </p>
          </div>

          {error && (
            <div className="flex items-center space-x-3 bg-red-500/5 text-red-500 p-4 rounded-2xl text-xs font-semibold border border-red-500/10 animate-shake">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Full Name */}
            <div className="space-y-1.5 sm:col-span-2">
              <label className="text-[11px] font-extrabold text-foreground/50 uppercase tracking-widest flex items-center space-x-1.5">
                <User className="w-3.5 h-3.5 text-[var(--primary)]" />
                <span>Identity Name</span>
              </label>
              <Input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alen Walker"
                className="bg-[var(--input)] border-[var(--border)] text-foreground placeholder:text-foreground/30 h-12 rounded-xl focus-visible:ring-1 focus-visible:ring-[var(--primary)] transition-all"
              />
            </div>

            {/* Email Address */}
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

            {/* Password */}
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

            {/* Register As */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-extrabold text-foreground/50 uppercase tracking-widest flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[var(--primary)]" />
                <span>Account Type</span>
              </label>
              <Select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="bg-[var(--input)] border-[var(--border)] text-foreground h-12 rounded-xl focus:ring-1 focus:ring-[var(--primary)]"
              >
                <option value="user">Passenger (Standard User)</option>
                <option value="vendor">Merchant / Transport Vendor</option>
              </Select>
            </div>

            {/* Profile Image */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-extrabold text-foreground/50 uppercase tracking-widest flex items-center space-x-1.5">
                <ImageIcon className="w-3.5 h-3.5 text-[var(--primary)]" />
                <span>Avatar Display</span>
              </label>
              <Input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="bg-[var(--input)] border-[var(--border)] text-foreground file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:bg-[var(--primary)]/10 file:text-xs file:font-bold file:text-[var(--primary)] hover:file:bg-[var(--primary)]/20 h-12 flex items-center rounded-xl cursor-pointer"
              />
            </div>

            {/* Submit Button */}
            <div className="sm:col-span-2 pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-[var(--primary)] hover:opacity-90 text-white font-bold rounded-xl text-sm transition-all active:scale-[0.98] flex items-center justify-center space-x-2 shadow-lg shadow-[var(--primary)]/10"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent animate-spin rounded-full"></div>
                ) : (
                  <>
                    <UserPlus className="w-4 h-4" />
                    <span>Initialize Registration</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="relative flex items-center justify-center py-1">
            <hr className="w-full border-[var(--border)]" />
            <span className="absolute bg-[var(--card)] px-4 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40">Alternative Gate</span>
          </div>

          {/* OAuth & Redirection */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-center">
            <button
              onClick={handleGoogleSignIn}
              className="sm:col-span-3 h-12 bg-[var(--input)] hover:bg-[var(--border)] text-foreground border border-[var(--border)] rounded-xl text-xs font-bold tracking-wide transition-all duration-200 flex items-center justify-center space-x-3"
            >
              <svg className="w-4 h-4 shrink-0 fill-current text-foreground" viewBox="0 0 24 24">
                <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114-3.468 0-6.28-2.812-6.28-6.28s2.812-6.28 6.28-6.28c1.637 0 3.125.626 4.248 1.648l3.123-3.123C19.262 2.693 15.98 1 12.24 1 5.922 1 12s4.922 11 11.24 11c6.518 0 11.24-4.582 11.24-11 0-.74-.067-1.455-.19-2.143H12.24z"/>
              </svg>
              <span>Connect via Google</span>
            </button>

            <p className="sm:col-span-2 text-center sm:text-right text-xs text-foreground/50 font-medium">
              Registered?{" "}
              <Link href="/auth/signin" className="text-[var(--primary)] hover:underline font-bold block sm:inline-block sm:ml-1">
                Access Account
              </Link>
            </p>
          </div>
        </div>

        {/* Right Side: Showcase Panel (লেআউট অদলবদল করা হয়েছে) */}
        <div className="hidden lg:col-span-5 lg:flex relative bg-neutral-950 overflow-hidden flex-col justify-between p-12">
          {/* Overlay Graphics */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity scale-105"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=1080')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/70 to-neutral-950" />

          {/* Top Brand Logo */}
          <div className="relative z-10">
            <Link href="/" className="flex items-center space-x-2 w-fit bg-neutral-900/80 backdrop-blur-md px-4 py-2 rounded-xl border border-neutral-800">
              <Ticket className="w-4 h-4 text-[var(--primary)]" />
              <span className="font-sans font-black tracking-[0.2em] text-white text-xs">
                TICKET<span className="text-[var(--primary)]">BARI</span>
              </span>
            </Link>
          </div>

          {/* Bottom Pitch Text */}
          <div className="relative z-10 space-y-3">
            <div className="inline-flex items-center space-x-2 bg-[var(--primary)]/20 text-[var(--primary)] border border-[var(--primary)]/30 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
              <span>Smart Booking</span>
            </div>
            <h2 className="text-2xl font-black tracking-tight text-white leading-tight">
              Your Ultimate Gateway to Seamless Transits.
            </h2>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Unlock fluid scheduling for interstate buses, regional train tracks, and global flight pathways from a centralized control unit.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
