import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#work" },
  // { label: "Contact", href: "/#contact" }, 
  { label: "Skills", href: "/#skills" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[#fffcf6]/95 backdrop-blur-md border-b border-[#1d2d44]/10"
          : "py-5 bg-transparent border-b border-[#1d2d44]/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-syne font-bold text-xl text-[#1d2d44] tracking-tight">
          TR<span className="text-[#66001f]">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="relative text-sm font-medium text-[#1d2d44]/70 hover:text-[#1d2d44] transition-colors duration-300 group"
            >
              {label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#66001f] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <Link
            to="/resume"
            className="ml-2 text-sm font-medium bg-[#66001f] text-[#fffcf6] px-5 py-2.5 hover:bg-[#66001f]/85 transition-colors duration-300"
          >
            View Resume
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-px bg-[#1d2d44] origin-center transition-all"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-px bg-[#1d2d44]"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-px bg-[#1d2d44] origin-center transition-all"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#fffcf6] border-t border-[#1d2d44]/10"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map(({ label, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="text-lg font-medium text-[#1d2d44] border-b border-[#1d2d44]/10 pb-4"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </motion.a>
              ))}
              <a
                href="/#resume"
                className="mt-1 text-center text-sm font-medium bg-[#66001f] text-[#fffcf6] px-5 py-3"
                onClick={() => setOpen(false)}
              >
                View Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
