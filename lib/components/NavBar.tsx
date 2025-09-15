"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "../context/LanguageContext";
import { LanguageSwitcher, CompactLanguageSwitcher } from "./LanguageSwitcher";

export const NavBar = () => {
  const [showNav, setShowNav] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const { t } = useTranslations();
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Handle navbar hide/show
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setShowNav(false); // scrolling down
      } else {
        setShowNav(true); // scrolling up
      }

      // Handle backdrop blur effect
      setScrolled(currentScrollY > 20);

      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-white shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div
                className="w-[140px] h-[50px] bg-center bg-no-repeat bg-cover transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundImage: `url('${
                    process.env.PAGES_BASE_PATH || ""
                  }/sce-accounting.jpg')`,
                }}
                aria-label="SCE Accounting Logo"
                role="img"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <Link
                href="/#services"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 font-medium transition-colors duration-300 relative group"
              >
                {t("nav.services")}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <Link
                href="/about"
                className={`px-3 py-2 font-medium transition-colors duration-300 relative group ${
                  pathname.includes("about")
                    ? "text-teal-600"
                    : "text-gray-700 hover:text-teal-600"
                }`}
              >
                {t("nav.aboutUs")}
                <span
                  className={`absolute inset-x-0 bottom-0 h-0.5 bg-teal-600 transform transition-transform duration-300 ${
                    pathname.includes("about")
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </Link>
              <Link
                href="/#contact"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 font-medium transition-colors duration-300 relative group"
              >
                {t("nav.contact")}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </div>

            {/* Language Switcher for Desktop */}
            <LanguageSwitcher variant="sliding" size="sm" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Language Switcher for Mobile */}
            <CompactLanguageSwitcher />

            <button
              id="mobile-menu-button"
              className="text-gray-700 hover:text-teal-600 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-300"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg
                className={`h-6 w-6 transition-transform duration-300 ${
                  showMobileMenu ? "rotate-90" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {showMobileMenu ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-out overflow-hidden ${
          showMobileMenu ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-t border-gray-100"
            : "bg-white border-t border-gray-200"
        }`}
      >
        <div className="px-4 py-4 space-y-2">
          <Link
            href="/#services"
            className="block px-4 py-3 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg font-medium transition-colors duration-300"
            onClick={toggleMobileMenu}
          >
            {t("nav.services")}
          </Link>
          <Link
            href="/about"
            className={`block px-4 py-3 rounded-lg font-medium transition-colors duration-300 ${
              pathname === "/about"
                ? "text-teal-600 bg-teal-50"
                : "text-gray-700 hover:text-teal-600 hover:bg-teal-50"
            }`}
            onClick={toggleMobileMenu}
          >
            {t("nav.aboutUs")}
          </Link>
          <Link
            href="/#contact"
            className="block px-4 py-3 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg font-medium transition-colors duration-300"
            onClick={toggleMobileMenu}
          >
            {t("nav.contact")}
          </Link>
        </div>
      </div>
    </nav>
  );
};
