import Link from "next/link";
import { Mail, Phone, Send, ArrowUpRight, ShieldCheck, TrainFront } from "lucide-react"; // 🌟 TrainFront আইকন ইমপোর্ট করা হয়েছে

export default function Footer() {
  return (
    <footer className="relative mt-auto border-t border-slate-900 bg-slate-950 py-16 text-slate-400 overflow-hidden select-none">
      
      {/* 🔮 মডার্ন রিফাইনড ব্যাকগ্রাউন্ড গ্লো অ্যাকসেন্ট */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[500px] h-[250px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-teal-500/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Column 1: Brand & Desc (4/12 Width) */}
          <div className="md:col-span-4 space-y-4">
            {/* 🚌 🚊 পরিমার্জিত মডার্ন লোগো সেকশন */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2.5 group">
                <div className="p-2 bg-linear-to-tr from-emerald-500 to-teal-600 rounded-xl shadow-xs transition-transform duration-300 group-hover:scale-105">
                  <TrainFront className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-black tracking-widest text-white">
                  TICKET<span className="bg-linear-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">BARI</span>
                </span>
              </Link>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-medium max-w-sm pt-1">
              Book bus, train, launch & flight tickets easily. Seamless, instant reservations and zero hidden markup fees.
            </p>
          </div>

          {/* Column 2: Navigation Links (2/12 Width) */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-white font-black text-xs uppercase tracking-widest">Navigation</h3>
            <ul className="space-y-3 text-xs font-semibold">
              {[
                { label: "Home", href: "/" },
                { label: "All Tickets", href: "/tickets" },
                { label: "Contact Us", href: "/contact" },
                { label: "About Us", href: "/about" },
              ].map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center text-slate-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Coordinates (3/12 Width) */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-white font-black text-xs uppercase tracking-widest">Support Line</h3>
            <ul className="space-y-3.5 text-xs font-semibold">
              <li className="flex items-center space-x-3 hover:text-white transition-colors duration-200">
                <div className="p-1.5 bg-slate-900 rounded-lg border border-slate-800/80">
                  <Mail className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                </div>
                <a href="mailto:support@ticketbari.com">support@ticketbari.com</a>
              </li>
              <li className="flex items-center space-x-3 hover:text-white transition-colors duration-200">
                <div className="p-1.5 bg-slate-900 rounded-lg border border-slate-800/80">
                  <Phone className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                </div>
                <a href="tel:+8801700000000">+880 1700 000000</a>
              </li>
              <li className="flex items-center space-x-3 hover:text-white transition-colors duration-200">
                <div className="p-1.5 bg-slate-900 rounded-lg border border-slate-800/80">
                  <svg className="w-3.5 h-3.5 text-emerald-500 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h3V1h-4c-3.3 0-6 2.7-6 6v1z" />
                  </svg>
                </div>
                <a href="https://facebook.com/ticketbari" target="_blank" rel="noreferrer">Facebook Page</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Secure Checkouts (3/12 Width) */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-white font-black text-xs uppercase tracking-widest">Newsletter</h3>
            <p className="text-[10px] text-slate-500 font-semibold leading-normal">
              Subscribe to get seasonal route discount notifications.
            </p>
            
            {/* Newsletter input wrapper */}
            <div className="flex bg-slate-900/60 border border-slate-800/80 focus-within:border-emerald-500/50 rounded-xl p-1 items-center w-full transition-all duration-300">
              <input 
                type="email" 
                placeholder="Enter email"
                className="bg-transparent text-xs px-3 py-1.5 focus:outline-none w-full text-white placeholder:text-slate-600 font-semibold"
              />
              <button className="p-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 active:scale-95 transition-all shadow-xs">
                <Send className="w-3 h-3" />
              </button>
            </div>

            {/* Premium Stripe Payment badge */}
            <div className="pt-1">
              <div className="inline-flex items-center space-x-3 bg-slate-900/30 border border-slate-900 rounded-xl px-3.5 py-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <div className="flex flex-col">
                  <span className="text-[9px] font-black uppercase tracking-wider text-white leading-none">Stripe Secured</span>
                  <span className="text-[7px] text-slate-500 font-bold uppercase tracking-widest leading-none mt-1">PCI-DSS Compliant</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar Container */}
        <div className="border-t border-slate-900/60 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-500 font-bold uppercase tracking-wider">
          <p>&copy; 2026 TicketBari. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-slate-300 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors duration-200">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}