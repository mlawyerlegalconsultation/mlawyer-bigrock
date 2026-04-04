import React, { useEffect, useState } from 'react';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';

const SuccessToast = ({ message, show, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onClose, 300); // Wait for fade out animation
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show && !isVisible) return null;

  return (
    <div 
      className={`fixed top-24 right-4 z-[100] transition-all duration-500 transform ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <div className="bg-white dark:bg-gray-800 border-l-4 border-secondary rounded-lg shadow-2xl p-4 flex items-center gap-4 min-w-[300px]">
        <div className="bg-secondary/20 p-2 rounded-full">
          <FaCheckCircle className="text-secondary text-xl" />
        </div>
        <div className="flex-grow">
          <p className="text-sm font-bold text-gray-900 dark:text-white">Success!</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">{message}</p>
        </div>
        <button 
          onClick={() => {
            setIsVisible(false);
            setTimeout(onClose, 300);
          }}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default SuccessToast;
