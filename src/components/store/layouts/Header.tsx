"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import HeaderWhite from "./HeaderWhite";
import HeaderTransparent from "./HeaderTransparent";

export default function Header() {
  // Sticky Navbar
  const [sticky, setSticky] = useState(false);

  const handleStickyNavbar = () => {
    if (window.scrollY >= 60) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const path = usePathname();

  useEffect(() => {
    if (path != "/") {
      setSticky(true);
    } else {
      window.addEventListener("scroll", handleStickyNavbar);
    }
  }, [path, sticky]);

  if (sticky) {
    return <HeaderWhite sticky={sticky} />;
  }

  return <HeaderTransparent sticky={sticky} />;
}
