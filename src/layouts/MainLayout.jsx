import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotificationBar from '../components/NotificationBar';
import SuccessToast from '../components/SuccessToast';

const MainLayout = () => {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const [showSubmitSuccess, setShowSubmitSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const params = new URLSearchParams(search);
    if (params.get('submitted') === 'true') {
      setShowSubmitSuccess(true);
      // Remove the parameter from the URL bar after showing toast
      const newPath = pathname;
      navigate(newPath, { replace: true });
    }
  }, [search, pathname, navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <SuccessToast 
        show={showSubmitSuccess} 
        message="Your waitlist application has been submitted successfully!" 
        onClose={() => setShowSubmitSuccess(false)}
      />
      <NotificationBar />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
