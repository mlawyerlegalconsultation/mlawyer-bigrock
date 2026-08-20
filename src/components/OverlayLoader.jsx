import React from 'react';
import { Loader2 } from 'lucide-react';
import { FaGavel, FaShieldAlt } from 'react-icons/fa';

const OverlayLoader = ({
  show,
  title = 'Processing...',
  subtitle = 'Please wait while we connect with the server.',
}) => {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[9990] bg-slate-900/50 dark:bg-black/65 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="bg-white/95 dark:bg-gray-900/95 border border-teal-100 dark:border-gray-700/80 rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl space-y-5 transform animate-pop-in">
        {/* Animated Glow & Spinner */}
        <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 bg-primary/20 dark:bg-teal-400/20 rounded-full blur-xl animate-pulse" />
          <div className="w-16 h-16 rounded-2xl bg-teal-50 dark:bg-gray-800 border border-teal-200/60 dark:border-gray-700 flex items-center justify-center text-primary dark:text-teal-400 shadow-inner">
            <FaGavel className="text-2xl animate-bounce" />
          </div>
          <Loader2 className="absolute inset-0 w-20 h-20 text-secondary animate-spin" />
        </div>

        {/* Text */}
        <div className="space-y-1.5">
          <h3 className="text-lg font-extrabold text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Security / Verified Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 dark:bg-gray-800/80 border border-teal-100 dark:border-gray-700 text-primary dark:text-teal-400 text-[11px] font-semibold">
          <FaShieldAlt className="text-xs" />
          <span>Secure Legal API</span>
        </div>
      </div>
    </div>
  );
};

export default OverlayLoader;
