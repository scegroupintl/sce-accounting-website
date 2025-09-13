"use client";
import React from "react";
import { useLanguage } from "../context/LanguageContext";

interface LanguageSwitcherProps {
  className?: string;
  variant?: "button" | "toggle";
  size?: "sm" | "md" | "lg";
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = "",
  variant = "toggle",
  size = "md",
}) => {
  const { language, toggleLanguage, setLanguage } = useLanguage();

  const sizeClasses = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-2",
    lg: "text-base px-4 py-2",
  };

  if (variant === "button") {
    return (
      <div className={`flex gap-1 ${className}`}>
        <button
          onClick={() => setLanguage("en")}
          className={`${
            sizeClasses[size]
          } rounded-md font-medium transition-all duration-200 ${
            language === "en"
              ? "bg-teal-600 text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          aria-label="Switch to English"
        >
          EN
        </button>
        <button
          onClick={() => setLanguage("es")}
          className={`${
            sizeClasses[size]
          } rounded-md font-medium transition-all duration-200 ${
            language === "es"
              ? "bg-teal-600 text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          aria-label="Cambiar a Español"
        >
          ES
        </button>
      </div>
    );
  }

  // Toggle variant (default)
  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center gap-2 ${sizeClasses[size]} bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-200 font-medium text-gray-700 hover:text-gray-900 ${className}`}
      aria-label={language === "en" ? "Switch to Spanish" : "Cambiar a Inglés"}
    >
      <div className="flex items-center gap-1">
        <span className="text-lg">🌐</span>
        <span className="font-semibold uppercase">{language}</span>
      </div>
      <svg
        className="w-4 h-4 transition-transform duration-200"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 9l4-4 4 4m0 6l-4 4-4-4"
        />
      </svg>
    </button>
  );
};

// Alternative compact version for mobile
export const CompactLanguageSwitcher: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className={`inline-flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-200 text-gray-700 hover:text-gray-900 ${className}`}
      aria-label={language === "en" ? "Switch to Spanish" : "Cambiar a Inglés"}
    >
      <span className="text-sm font-bold uppercase">{language}</span>
    </button>
  );
};

export default LanguageSwitcher;
