"use client";
import React from "react";
import { useLanguage } from "../context/LanguageContext";

interface LanguageSwitcherProps {
  className?: string;
  variant?: "button" | "toggle" | "sliding";
  size?: "sm" | "md" | "lg";
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = "",
  variant = "sliding",
  size = "md",
}) => {
  const { language, toggleLanguage, setLanguage } = useLanguage();

  const sizeClasses = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-2",
    lg: "text-base px-4 py-2",
  };

  // Sliding toggle variant (new default)
  if (variant === "sliding") {
    const containerSizes = {
      sm: "w-20 h-8",
      md: "w-24 h-10",
      lg: "w-28 h-12",
    };

    const textSizes = {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    };

    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {/* Language icon */}
        <div className="flex items-center justify-center">
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
          </svg>
        </div>

        <div className={`relative ${containerSizes[size]}`}>
          {/* Background container */}
          <div className="w-full h-full bg-gray-200 rounded-full p-1 shadow-inner transition-all duration-300 hover:bg-gray-250">
            {/* Sliding indicator */}
            <div
              className={`absolute top-1 h-[calc(100%-8px)] bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full shadow-lg transition-all duration-300 ease-in-out ${
                language === "en"
                  ? "left-1 w-[calc(50%-4px)]"
                  : "left-[calc(50%+2px)] w-[calc(50%-4px)]"
              }`}
            />

            {/* Language buttons */}
            <div className="relative z-10 flex w-full h-full">
              <button
                onClick={() => setLanguage("en")}
                className={`flex-1 flex items-center justify-center font-semibold transition-all duration-300 ${
                  textSizes[size]
                } ${
                  language === "en"
                    ? "text-white"
                    : "text-gray-600 hover:text-emerald-800 cursor-pointer"
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("es")}
                className={`flex-1 flex items-center justify-center font-semibold transition-all duration-300 ${
                  textSizes[size]
                } ${
                  language === "es"
                    ? "text-white"
                    : "text-gray-600 hover:text-emerald-800 cursor-pointer"
                }`}
                aria-label="Cambiar a Español"
              >
                ES
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

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

  // Original toggle variant
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

// Alternative compact version for mobile with sliding design
export const CompactLanguageSwitcher: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      {/* Compact language icon */}
      <div className="flex items-center justify-center">
        <svg
          className="w-3.5 h-3.5 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      </div>

      <div className="relative w-14 h-7">
        {/* Background container */}
        <div className="w-full h-full bg-gray-200 rounded-full p-0.5 shadow-inner">
          {/* Sliding indicator */}
          <div
            className={`absolute top-0.5 h-[calc(100%-4px)] bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full shadow-md transition-all duration-300 ease-in-out ${
              language === "en"
                ? "left-0.5 w-[calc(50%-2px)]"
                : "left-[calc(50%+1px)] w-[calc(50%-2px)]"
            }`}
          />

          {/* Language buttons */}
          <div className="relative z-10 flex w-full h-full">
            <button
              onClick={() => setLanguage("en")}
              className={`flex-1 flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                language === "en"
                  ? "text-white"
                  : "text-gray-600 cursor-pointer"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("es")}
              className={`flex-1 flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                language === "es"
                  ? "text-white"
                  : "text-gray-600 cursor-pointer"
              }`}
              aria-label="Cambiar a Español"
            >
              ES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
