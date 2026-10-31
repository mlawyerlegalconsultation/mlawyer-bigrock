import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, Shield, Sliders, X, Check } from 'lucide-react';

const STORAGE_KEY = 'mlawyer_cookie_consent';
const PREFS_KEY = 'mlawyer_cookie_preferences';
const DATE_KEY = 'mlawyer_cookie_consent_date';

/**
 * Applies cookie and tracker consent across Google Analytics and Meta Pixel.
 */
export const applyCookieConsent = (preferences) => {
  const { analytics = false, marketing = false } = preferences || {};

  if (typeof window !== 'undefined') {
    // 1. Google Analytics opt-in/opt-out
    if (!analytics) {
      window['ga-disable-G-J8TV4B778J'] = true;
    } else {
      window['ga-disable-G-J8TV4B778J'] = false;
    }

    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: analytics ? 'granted' : 'denied',
        ad_storage: marketing ? 'granted' : 'denied',
        ad_user_data: marketing ? 'granted' : 'denied',
        ad_personalization: marketing ? 'granted' : 'denied'
      });
    }

    // 2. Meta (Facebook) Pixel consent
    if (typeof window.fbq === 'function') {
      if (marketing) {
        window.fbq('consent', 'grant');
      } else {
        window.fbq('consent', 'revoke');
      }
    }
  }
};

/**
 * Trigger helper to open the cookie preferences modal from anywhere (e.g. Footer).
 */
export const openCookiePreferences = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('mlawyer:open-cookie-preferences'));
  }
};

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: true,
    marketing: true
  });

  // Check saved preferences on mount
  useEffect(() => {
    try {
      const savedConsent = localStorage.getItem(STORAGE_KEY);
      const savedPrefs = localStorage.getItem(PREFS_KEY);

      if (savedPrefs) {
        const parsed = JSON.parse(savedPrefs);
        setPreferences(parsed);
        applyCookieConsent(parsed);
      }

      // If no consent recorded yet, show the banner after a gentle delay
      if (!savedConsent) {
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 800);
        return () => clearTimeout(timer);
      }
    } catch {
      // Fallback in case of private browsing or localStorage error
      setIsVisible(true);
    }
  }, []);

  // Listen for custom event to re-open preferences modal (e.g., from Footer)
  useEffect(() => {
    const handleOpen = () => {
      setShowPreferences(true);
      setIsVisible(true);
    };

    window.addEventListener('mlawyer:open-cookie-preferences', handleOpen);
    return () => window.removeEventListener('mlawyer:open-cookie-preferences', handleOpen);
  }, []);

  const saveConsent = (type, prefs) => {
    try {
      localStorage.setItem(STORAGE_KEY, type);
      localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
      localStorage.setItem(DATE_KEY, new Date().toISOString());
    } catch (e) {
      console.warn('Unable to save cookie preferences to localStorage', e);
    }

    applyCookieConsent(prefs);
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleAcceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true };
    setPreferences(allAccepted);
    saveConsent('all', allAccepted);
  };

  const handleRejectNonEssential = () => {
    const essentialOnly = { necessary: true, analytics: false, marketing: false };
    setPreferences(essentialOnly);
    saveConsent('essential', essentialOnly);
  };

  const handleSaveCustom = () => {
    saveConsent('custom', preferences);
  };

  if (!isVisible) return null;

  return (
    <aside 
      aria-label="Cookie Consent Banner" 
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-xl z-[999] animate-fade-in-up"
    >
      <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border border-primary/20 dark:border-gray-700 shadow-2xl rounded-2xl p-5 md:p-6 text-gray-800 dark:text-gray-200 transition-all duration-300">
        
        {/* Simple Banner View */}
        {!showPreferences ? (
          <div>
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-secondary shrink-0">
                  <Cookie className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base md:text-lg text-gray-900 dark:text-white leading-tight">
                    We Value Your Privacy
                  </h3>
                  <span className="text-xs text-primary/80 dark:text-secondary font-medium">Cookie & Privacy Notice</span>
                </div>
              </div>
              <button
                type="button"
                onClick={handleRejectNonEssential}
                aria-label="Close cookie banner and use essential cookies only"
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              We use cookies and similar technologies (such as Google Analytics and Meta Pixel) to ensure website security, analyze site traffic, and personalize your experience. You can choose to accept all, keep essential only, or manage your preferences. Read our{' '}
              <Link 
                to="/privacy-policy" 
                className="text-primary dark:text-secondary underline hover:opacity-80 font-medium"
              >
                Privacy Policy
              </Link>.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pt-2 border-t border-gray-100 dark:border-gray-800">
              <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-secondary rounded-lg transition-colors"
              >
                <Sliders className="w-3.5 h-3.5" />
                Customize
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleRejectNonEssential}
                  className="flex-1 sm:flex-none px-4 py-2 text-xs font-semibold rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 transition-colors"
                >
                  Essential Only
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="flex-1 sm:flex-none px-5 py-2 text-xs font-semibold rounded-xl bg-primary hover:bg-primary/90 text-white shadow-md shadow-primary/20 dark:shadow-none transition-colors"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Detailed Preferences Modal View */
          <div>
            <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary dark:text-secondary" />
                <h3 className="font-bold text-base md:text-lg text-gray-900 dark:text-white">
                  Cookie Preferences
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowPreferences(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors p-1"
                aria-label="Back to summary"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
              Choose which cookies you allow us to use. Essential cookies are required for basic navigation and cannot be switched off.
            </p>

            <div className="space-y-3 mb-5 max-h-60 overflow-y-auto pr-1">
              {/* Essential */}
              <div className="flex items-start justify-between gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700">
                <div className="flex-1 text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-gray-900 dark:text-white mb-0.5">
                    <span>Strictly Necessary</span>
                    <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">
                      Required
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Required for core security, session authentication tokens, and user preferences.
                  </p>
                </div>
                <div className="text-primary dark:text-secondary shrink-0 pt-0.5">
                  <Check className="w-5 h-5" />
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-start justify-between gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700">
                <div className="flex-1 text-xs">
                  <p className="font-bold text-gray-900 dark:text-white mb-0.5">
                    Analytics & Performance
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Google Analytics (GA4) helps us understand how visitors interact with pages so we can improve platform speed and usability.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-0.5">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-gray-300 dark:bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:width-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>

              {/* Marketing */}
              <div className="flex items-start justify-between gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700">
                <div className="flex-1 text-xs">
                  <p className="font-bold text-gray-900 dark:text-white mb-0.5">
                    Marketing & Personalization
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Meta (Facebook) Pixel enables relevant announcements and helps measure the effectiveness of our campaigns.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-0.5">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-gray-300 dark:bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>

            <div className="flex items-center justify-between gap-2 pt-3 border-t border-gray-100 dark:border-gray-800">
              <button
                type="button"
                onClick={() => setShowPreferences(false)}
                className="px-3 py-2 text-xs font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Back
              </button>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleRejectNonEssential}
                  className="px-3.5 py-2 text-xs font-semibold rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 transition-colors"
                >
                  Reject All
                </button>
                <button
                  type="button"
                  onClick={handleSaveCustom}
                  className="px-4 py-2 text-xs font-semibold rounded-xl bg-primary hover:bg-primary/90 text-white shadow-md shadow-primary/20 dark:shadow-none transition-colors"
                >
                  Save Choices
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </aside>
  );
};

export default CookieConsent;
