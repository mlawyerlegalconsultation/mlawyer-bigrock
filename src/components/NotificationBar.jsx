import React from 'react';
import { Link } from 'react-router-dom';
import { useRole } from '../context/RoleContext';

const NotificationBar = () => {
  const { setUserRole } = useRole();

  return (
    <div className="bg-gray-900 dark:bg-black text-white py-2 px-4 transition-colors duration-300 relative z-[60]">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
        <p className="text-sm font-medium">
          Join our network of top-tier legal professionals.
        </p>
        <Link 
          to="/lawyer" 
          onClick={() => setUserRole("lawyer")}
          className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-xs px-4 py-1.5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-sm"
        >
          I'm a Lawyer
        </Link>
      </div>
    </div>
  );
};

export default NotificationBar;
