import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

const Breadcrumb = ({ items }) => {
    return (
        <nav className="flex px-6 py-4 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800" aria-label="Breadcrumb">
            <ol className="container mx-auto flex items-center space-x-2 md:space-x-4">
                <li className="inline-flex items-center">
                    <Link
                        to="/"
                        className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors"
                    >
                        Home
                    </Link>
                </li>
                {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                        <FaChevronRight className="w-3 h-3 text-gray-400 mx-1" />
                        {item.link ? (
                            <Link
                                to={item.link}
                                className="ml-1 text-sm font-medium text-gray-700 hover:text-primary md:ml-2 dark:text-gray-400 dark:hover:text-white transition-colors"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span className="ml-1 text-sm font-medium text-primary md:ml-2 dark:text-secondary">
                                {item.label}
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
