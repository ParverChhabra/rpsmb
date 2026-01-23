"use client";

import { useState, useEffect } from 'react';
import { Languages } from 'lucide-react';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export const LanguageToggle = () => {
  const [currentLang, setCurrentLang] = useState<'en' | 'pa'>('en');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add the Google Translate script
    const addScript = () => {
      if (!document.getElementById('google-translate-script')) {
        const script = document.createElement('script');
        script.id = 'google-translate-script';
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.body.appendChild(script);
      }
    };

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      if (!window.google?.translate) return;

      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,pa',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element'
      );

      setIsLoaded(true);
    };

    addScript();

    // Check for existing language cookie
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
      return null;
    };

    const langCookie = getCookie('googtrans');
    if (langCookie) {
      const lang = langCookie.split('/')[2];
      if (lang === 'pa') {
        setCurrentLang('pa');
      }
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'pa' : 'en';

    // Set language using Google Translate's cookie method
    const cookieValue = newLang === 'en' ? '/en/en' : '/en/pa';

    // Clear existing cookies first
    document.cookie = 'googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC';

    // Set cookie without domain restrictions to work on all devices
    const isSecure = window.location.protocol === 'https:';
    const securePart = isSecure ? '; Secure' : '';
    document.cookie = `googtrans=${cookieValue}; path=/; max-age=31536000${securePart}`;

    // For localhost/development without HTTPS
    if (!isSecure) {
      document.cookie = `googtrans=${cookieValue}; path=/`;
    }

    setCurrentLang(newLang);

    // Wait a bit for cookie to be set, then trigger translation
    setTimeout(() => {
      const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (selectElement) {
        selectElement.value = newLang;
        const event = new Event('change', { bubbles: true });
        selectElement.dispatchEvent(event);
      }

      // Reload page to apply translation after a short delay
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }, 100);
  };

  return (
    <>
      {/* Hidden Google Translate widget */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>

      {/* Custom language toggle button */}
      <button
        onClick={toggleLanguage}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/20 hover:bg-accent/30 text-cream transition-all duration-300 border border-gold/30 hover:border-gold/50"
        aria-label="Toggle language"
        disabled={!isLoaded}
      >
        <Languages size={18} className="text-gold" />
        <span className="text-sm font-medium">
          {currentLang === 'en' ? 'ਪੰਜਾਬੀ' : 'English'}
        </span>
      </button>
    </>
  );
};
