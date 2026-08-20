import React, { createContext, useContext, useState, useCallback } from 'react';
import { FaCheckCircle, FaTimesCircle, FaInfoCircle, FaExclamationTriangle, FaTimes } from 'react-icons/fa';

const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback(({ type = 'success', title, message, duration = 4000 }) => {
    const id = Date.now() + Math.random().toString(36).substring(2);
    const newToast = { id, type, title, message, duration };

    setToasts((prev) => [...prev, newToast]);

    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }
    return id;
  }, [removeToast]);

  const toast = {
    success: (message, title = 'Success') => showToast({ type: 'success', title, message }),
    error: (message, title = 'Error') => showToast({ type: 'error', title, message }),
    info: (message, title = 'Info') => showToast({ type: 'info', title, message }),
    warning: (message, title = 'Warning') => showToast({ type: 'warning', title, message }),
  };

  return (
    <ToastContext.Provider value={{ showToast, removeToast, toast }}>
      {children}

      {/* Floating Toast Notification Container */}
      <div className="fixed top-24 right-4 z-[9999] flex flex-col gap-3 max-w-sm w-full pointer-events-none px-2 sm:px-0">
        {toasts.map((t) => {
          const isSuccess = t.type === 'success';
          const isError = t.type === 'error';
          const isWarning = t.type === 'warning';
          const isInfo = t.type === 'info';

          return (
            <div
              key={t.id}
              className={`pointer-events-auto rounded-2xl p-4 shadow-2xl border backdrop-blur-xl transition-all duration-300 flex items-start gap-3.5 transform animate-fade-in ${
                isSuccess
                  ? 'bg-white/95 dark:bg-gray-900/95 border-emerald-500/40 text-gray-900 dark:text-white'
                  : isError
                  ? 'bg-white/95 dark:bg-gray-900/95 border-red-500/40 text-gray-900 dark:text-white'
                  : isWarning
                  ? 'bg-white/95 dark:bg-gray-900/95 border-amber-500/40 text-gray-900 dark:text-white'
                  : 'bg-white/95 dark:bg-gray-900/95 border-teal-500/40 text-gray-900 dark:text-white'
              }`}
            >
              {/* Icon */}
              <div
                className={`p-2 rounded-xl shrink-0 ${
                  isSuccess
                    ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400'
                    : isError
                    ? 'bg-red-100 dark:bg-red-950/80 text-red-600 dark:text-red-400'
                    : isWarning
                    ? 'bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400'
                    : 'bg-teal-100 dark:bg-teal-950/80 text-primary dark:text-teal-400'
                }`}
              >
                {isSuccess && <FaCheckCircle className="text-xl" />}
                {isError && <FaTimesCircle className="text-xl" />}
                {isWarning && <FaExclamationTriangle className="text-xl" />}
                {isInfo && <FaInfoCircle className="text-xl" />}
              </div>

              {/* Message Details */}
              <div className="flex-1 min-w-0 pr-1">
                {t.title && (
                  <h4 className="text-sm font-bold leading-tight">
                    {t.title}
                  </h4>
                )}
                <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 leading-snug break-words">
                  {t.message}
                </p>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => removeToast(t.id)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors p-1 shrink-0 cursor-pointer"
                aria-label="Dismiss toast"
              >
                <FaTimes className="text-sm" />
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
