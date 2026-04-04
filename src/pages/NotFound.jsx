import { Link } from 'react-router-dom';
import { PiWarningCircleBold, PiHouseBold } from "react-icons/pi";
import Seo from '../components/Seo';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6 bg-white dark:bg-gray-900 transition-colors duration-300">
      <Seo
        title="Page Not Found | MLawyer"
        description="The page you are looking for does not exist."
        keywords="404, page not found"
      />
      <PiWarningCircleBold className="text-9xl text-warning mb-4" />
      <h1 className="text-6xl font-bold text-primary dark:text-white mb-2 transition-colors">404</h1>
      <h2 className="text-2xl font-semibold text-secondary mb-6">Page Not Found</h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8 transition-colors">
        Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all font-medium"
      >
        <PiHouseBold />
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
