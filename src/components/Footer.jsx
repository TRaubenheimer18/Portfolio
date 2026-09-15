import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1d2d44] border-t border-[#fffcf6]/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <p className="font-bold text-xl text-[#fffcf6] mb-1">
              TR<span className="text-[#66001f]">.</span>
            </p>
            <p className="text-xs text-[#fffcf6]/40 tracking-wide">
              UI/UX Designer · Front-End Developer
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#a2c0dd] font-medium mb-4">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-[#fffcf6]/50 hover:text-[#fffcf6] transition-colors duration-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#a2c0dd] font-medium mb-4">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:teyanaraubenheimer18@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-[#fffcf6]/50 hover:text-[#fffcf6] transition-colors duration-300"
              >
                <Mail size={13} />
                teyanaraubenheimer18@gmail.com
              </a>
              <div className="flex gap-4 mt-1">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#fffcf6]/40 hover:text-[#fffcf6] transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub size={17} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#fffcf6]/40 hover:text-[#fffcf6] transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={17} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#fffcf6]/8 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="text-xs text-[#fffcf6]/25">
            © 2026 Teyana Raubenheimer
          </p>
          <p className="text-xs text-[#fffcf6]/20">
            Designed & Built by Teyana Raubenheimer
          </p>
        </div>
      </div>
    </footer>
  );
}
