import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Progress", href: "#progress" },
    { label: "Community", href: "#community" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-emerald-500 to-teal-600" />
            <span className="font-bold text-xl tracking-tight text-gray-900">QuranLink</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-gray-600 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#get-started" className="inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-white font-medium shadow-sm hover:bg-emerald-700 transition-colors">
              Get started
            </a>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-gray-100" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="px-2 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                  {item.label}
                </a>
              ))}
              <a href="#get-started" className="px-2 py-2 rounded-md bg-emerald-600 text-white text-center">
                Get started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
