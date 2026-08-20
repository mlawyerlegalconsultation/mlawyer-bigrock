import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaChevronRight } from 'react-icons/fa';

/**
 * Modern, accessible breadcrumbs component
 * @param {Array<{ label: string, path?: string }>} items
 * @param {string} className
 */
const Breadcrumbs = ({ items = [], className = '' }) => {
  if (!items || items.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium overflow-x-auto py-2 select-none ${className}`}
    >
      <ol className="inline-flex items-center space-x-1 sm:space-x-2">
        {/* Home Item */}
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-teal-400 transition-colors"
          >
            <FaHome className="text-xs shrink-0" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="inline-flex items-center">
              <FaChevronRight className="text-[10px] text-gray-400 dark:text-gray-600 mx-1 sm:mx-1.5 shrink-0" />
              {isLast || (!item.path && !item.onClick) ? (
                <span
                  aria-current={isLast ? 'page' : undefined}
                  className="text-primary dark:text-teal-400 font-semibold truncate max-w-[200px] sm:max-w-xs"
                >
                  {item.label}
                </span>
              ) : item.onClick ? (
                <button
                  type="button"
                  onClick={item.onClick}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-teal-400 transition-colors truncate max-w-[180px] sm:max-w-xs cursor-pointer inline-flex items-center bg-transparent border-0 p-0 font-medium text-xs sm:text-sm"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  to={item.path}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-teal-400 transition-colors truncate max-w-[180px] sm:max-w-xs"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
