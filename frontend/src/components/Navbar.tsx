"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  Search,
  ShoppingBag,
  Menu,
  X,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const { totalItemCount, setIsCartOpen } = useCart();

  const [activeStudent, setActiveStudent] = useState<{ name: string; avatarInitials: string } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll);

    // Check active student session
    const checkSession = () => {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem("lawkaksha_active_student");
        if (saved) {
          try {
            const parsed = JSON.parse(saved);
            if (parsed && parsed.name) {
              setActiveStudent({
                name: parsed.name,
                avatarInitials: parsed.avatarInitials || parsed.name.slice(0, 2).toUpperCase(),
              });
              return;
            }
          } catch (e) {}
        }
        setActiveStudent(null);
      }
    };

    checkSession();
    window.addEventListener("storage", checkSession);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("storage", checkSession);
    };
  }, []);

  const navLinks = [
    { label: "Home", href: "/", active: pathname === "/" },
    { label: "Books", href: "/courses", active: pathname === "/courses" },
    { label: "Notes", href: "/student", active: pathname === "/student" },
    { label: "Resources", href: "/courses#resources", active: false },
    { label: "About", href: "/about", active: pathname === "/about" },
    { label: "Contact", href: "/contact", active: pathname === "/contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-white/95 backdrop-blur-md shadow-[0_2px_16px_rgba(0,0,0,0.06)] border-b border-slate-200/80"
            : "py-4 bg-white border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Exact Brand Logo matching SVG */}
          <Link href="/" className="flex items-center transition-opacity hover:opacity-90">
            <div className="relative h-11 w-36 sm:h-12 sm:w-40 flex items-center">
              <Image
                src="/assets/logo law kaskah .png"
                alt="The Law कक्षा Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Center Navigation Links matching SVG exactly */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-[15px] font-medium text-[#334155]">
            {navLinks.map((link) => {
              const isActive = link.active;
              return (
                <div key={link.label} className="relative py-1 flex flex-col items-center">
                  <Link
                    href={link.href}
                    className={`transition-colors duration-150 ${
                      isActive
                        ? "text-[#005FD8] font-semibold"
                        : "text-[#334155] hover:text-[#005FD8]"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#005FD8] rounded-full" />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action Icons: Search, Cart & Log In Pill Button */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search Icon Trigger */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-full text-[#1E293B] hover:text-[#005FD8] hover:bg-slate-100/80 transition-colors cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-5 h-5 stroke-[2]" />
            </button>

            {/* Shopping Cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 rounded-full text-[#1E293B] hover:text-[#005FD8] hover:bg-slate-100/80 transition-colors relative cursor-pointer"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-5 h-5 stroke-[2]" />
              {totalItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#005FD8] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                  {totalItemCount}
                </span>
              )}
            </button>

            {/* Exact "Log In" Pill Button matching SVG */}
            {activeStudent ? (
              <Link
                href="/student"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl border border-[#005FD8] bg-blue-50/50 text-[#005FD8] text-sm font-semibold hover:bg-blue-100/60 transition-all duration-200 active:scale-95"
              >
                <div className="w-5 h-5 rounded-full bg-[#005FD8] text-white flex items-center justify-center font-bold text-[10px]">
                  {activeStudent.avatarInitials}
                </div>
                <span className="truncate max-w-[80px]">{activeStudent.name.split(" ")[0]}</span>
              </Link>
            ) : (
              <Link
                href="/student"
                className="inline-flex items-center justify-center px-6 py-2 rounded-xl border border-[#005FD8] text-[#005FD8] hover:bg-[#005FD8] hover:text-white text-sm font-semibold transition-all duration-200 active:scale-95"
              >
                Log In
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar Dropdown Overlay */}
        {searchOpen && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-2 animate-in slide-in-from-top-2 duration-200">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-4 h-4 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Bare Acts, Chapters, CA Inter & Final Modules..."
                className="w-full pl-11 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#005FD8] focus:bg-white transition"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        )}

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                  link.active
                    ? "bg-blue-50 text-[#005FD8] font-semibold"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
              <Link
                href="/student"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-xl border border-[#005FD8] text-[#005FD8] text-sm font-semibold hover:bg-blue-50 transition"
              >
                Log In to Student Portal
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
