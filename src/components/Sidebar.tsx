"use client";

import { Home, User, BookOpen, Bell, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: User, label: "About", href: "#about" },
  { icon: BookOpen, label: "Academics", href: "#philosophy" },
  { icon: Bell, label: "Notices", href: "#notices" },
  { icon: Mail, label: "Contact", href: "#footer" },
];

export const Sidebar = () => {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" } // Center of viewport
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.href.substring(1));
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Optional: Update history without scrolling if desired, but keeping URL clean is preferred for "Apple-like" feel
      // window.history.replaceState(null, "", href); 
    }
  };

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
      {navItems.map((item) => {
        const isActive = activeId === item.href.substring(1);
        return (
          <a
            key={item.label}
            href={item.href}
            className={`group flex items-center gap-3 p-3 rounded-full backdrop-blur-sm border shadow-lg transition-all duration-300 hover:w-40 w-12 overflow-hidden ${
              isActive
                ? "bg-gold border-gold text-primary shadow-gold/20"
                : "bg-card/80 border-gold/20 text-cream hover:bg-card"
            }`}
            onClick={(e) => handleClick(e, item.href)}
          >
            <item.icon className={`w-6 h-6 shrink-0 ${isActive ? "text-primary" : "text-gold"}`} />
            <span
              className={`text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap ${
                isActive ? "text-primary" : "text-cream"
              }`}
            >
              {item.label}
            </span>
          </a>
        );
      })}
    </div>
  );
};
