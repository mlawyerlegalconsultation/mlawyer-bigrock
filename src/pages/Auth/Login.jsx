import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  FaPhoneAlt,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowRight,
  FaSpinner,
  FaGavel,
  FaBalanceScale,
  FaShieldAlt,
  FaUserPlus,
  FaGooglePlay,
  FaApple,
  FaCheckCircle,
  FaUserTie
} from 'react-icons/fa';
import { MdSecurity, MdVerified, MdErrorOutline } from 'react-icons/md';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import OverlayLoader from '../../components/OverlayLoader';
import Seo from '../../components/Seo';
import PopIn from '../../components/animations/PopIn';

// Floating decorative icon component
const FloatingIcon = ({ Icon, className, delay = 0, duration = 6, color = 'primary' }) => (
  <div
    className={`absolute pointer-events-none ${color === 'primary' ? 'text-primary/25 dark:text-teal-400/15' : 'text-secondary/35 dark:text-secondary/25'} ${className}`}
    style={{
      animation: `float ${duration}s ease-in-out infinite`,
      animationDelay: `${delay}s`,
    }}
  >
    <Icon />
  </div>
);

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isAuthenticated } = useAuth();
  const { toast } = useToast();

  // View state: 'select' (default with only the 2 buttons) or 'login' (form)
  const [view, setView] = useState(() => {
    const params = new URLSearchParams(location.search);
    return params.get('mode') === 'login' ? 'login' : 'select';
  });

  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  // If already logged in, redirect to profile
  useEffect(() => {
    window.scrollTo(0, 0);
    if (isAuthenticated) {
      navigate('/profile-advocate', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  // Clean phone number to 10 digits
  const handlePhoneChange = (e) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 10);
    setMobileNumber(val);
    setErrorMessage('');
  };

  // Submit login form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!mobileNumber || mobileNumber.length !== 10) {
      const err = 'Please enter a valid 10-digit mobile number.';
      setErrorMessage(err);
      toast.error(err, 'Validation Error');
      return;
    }

    if (!password) {
      const err = 'Please enter your account password.';
      setErrorMessage(err);
      toast.error(err, 'Validation Error');
      return;
    }

    setIsSubmitting(true);
    const result = await login(mobileNumber, password);

    if (result.success) {
      setLoginSuccess(true);
      toast.success('Login successful! Redirecting to your dashboard...', 'Welcome Back');
      setTimeout(() => {
        navigate('/profile-advocate', { replace: true });
      }, 1000);
    } else {
      setIsSubmitting(false);
      const err = result.error || 'Login failed. Please check your credentials.';
      setErrorMessage(err);
      toast.error(err, 'Authentication Failed');
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-teal-100/60 via-slate-50 to-teal-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-12 md:py-20 transition-colors duration-300">
      {/* Background Blur Overlay Loader during API submission */}
      <OverlayLoader
        show={isSubmitting}
        title="Signing into Advocate Portal"
        subtitle="Connecting to secure MLawyer authentication server..."
      />

      <Seo
        title="Advocate Portal | MLawyer Digital Legal Platform"
        description="Access MLawyer Advocate Portal. Register as an Advocate or Login with your phone number and password."
        canonical="/login"
      />

      {/* Floating Animated Legal Background Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <FloatingIcon Icon={() => <FaGavel className="text-4xl" />} className="top-[8%] left-[8%]" delay={0} duration={6} color="primary" />
        <FloatingIcon Icon={() => <FaBalanceScale className="text-5xl" />} className="top-[18%] right-[10%]" delay={1.5} duration={7} color="secondary" />
        <FloatingIcon Icon={() => <MdSecurity className="text-5xl" />} className="top-[55%] left-[6%]" delay={2.8} duration={8} color="primary" />
        <FloatingIcon Icon={() => <MdVerified className="text-4xl" />} className="top-[65%] right-[8%]" delay={0.8} duration={6.5} color="secondary" />
        <FloatingIcon Icon={() => <FaShieldAlt className="text-4xl" />} className="bottom-[8%] left-[18%]" delay={2.1} duration={7.5} color="primary" />
        <FloatingIcon Icon={() => <FaUserTie className="text-4xl" />} className="bottom-[12%] right-[16%]" delay={1.2} duration={6.8} color="secondary" />
      </div>

      {/* Soft Glow Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-16 left-1/4 w-80 h-80 bg-teal-400/20 dark:bg-teal-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-amber-400/20 dark:bg-amber-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        {/* Header Title */}
        <div className="text-center mb-8 md:mb-10">
          <PopIn>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Advocate <span className="text-secondary">{view === 'login' ? 'Login' : 'Portal'}</span>
            </h1>
            <p className="mt-2.5 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
              {view === 'login'
                ? 'Enter your registered phone number and password to access your practice dashboard.'
                : 'Join India’s premier verified digital legal network or sign in to your legal practice.'}
            </p>
          </PopIn>
        </div>

        {/* 2-Column Grid: Download Card (Left) & Actions/Login Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: Download MLawyer Pro App Card */}
          <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-teal-50 via-teal-100/50 to-emerald-50/40 dark:from-gray-900 dark:via-gray-850 dark:to-gray-900 border border-teal-200/80 dark:border-gray-700 shadow-xl relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-5 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/15 text-primary dark:text-teal-400 font-bold text-xs">
                <FaShieldAlt className="text-secondary" />
                <span>MLawyer Pro for Advocates</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white leading-tight">
                  Practicing Advocate on the go? Download <span className="text-secondary">MLawyer Pro</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                  Connect with verified clients, manage bookings, and receive instant fee settlements wherever you practice across India.
                </p>
              </div>

              {/* Feature Highlights */}
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700 dark:text-gray-200 font-medium">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 text-xs">
                    <FaCheckCircle />
                  </div>
                  <span>Instant client consultation call alerts</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700 dark:text-gray-200 font-medium">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 text-xs">
                    <FaCheckCircle />
                  </div>
                  <span>Direct bank account fee settlements</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700 dark:text-gray-200 font-medium">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 text-xs">
                    <FaCheckCircle />
                  </div>
                  <span>Verified digital State Bar practitioner profile</span>
                </div>
              </div>
            </div>

            {/* App Store / Play Store Buttons */}
            <div className="pt-6 relative z-10">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                Download Free Pro App:
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.mlawyer.lawyer&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 px-4 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 group"
                >
                  <FaGooglePlay className="text-2xl text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-semibold tracking-wider text-gray-300 leading-tight">GET IT ON</div>
                    <div className="text-sm font-bold leading-tight">Google Play</div>
                  </div>
                </a>

                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 px-4 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 group"
                >
                  <FaApple className="text-2xl text-white shrink-0 group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-semibold tracking-wider text-gray-300 leading-tight">Download on the</div>
                    <div className="text-sm font-bold leading-tight">App Store</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Option Buttons / Login Form Card */}
          <div className="lg:col-span-6 bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-teal-100 dark:border-gray-700 relative backdrop-blur-xl flex flex-col justify-center">
            {view === 'select' ? (
              /* First: Show ONLY the two main buttons */
              <div className="space-y-5 py-2">
                <div className="text-center pb-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                    Start Creating Your Legal Profile!
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Please select whether you want to register as a new advocate or log in.
                  </p>
                </div>

                {/* Button 1: Register As Advocate */}
                <Link
                  to="/register-advocate"
                  className="w-full py-5 px-6 rounded-2xl bg-secondary hover:bg-secondary/90 text-white font-extrabold text-base sm:text-lg flex items-center justify-between shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center text-xl">
                      <FaUserPlus />
                    </div>
                    <div className="text-left">
                      <div className="leading-tight">Register As Advocate</div>
                      <div className="text-xs text-white/80 font-normal">New legal practitioner onboarding</div>
                    </div>
                  </div>
                  <FaArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Button 2: Login */}
                <button
                  type="button"
                  onClick={() => setView('login')}
                  className="w-full py-5 px-6 rounded-2xl bg-primary hover:bg-primary/95 text-white font-extrabold text-base sm:text-lg flex items-center justify-between shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center text-xl">
                      <FaUserTie />
                    </div>
                    <div className="text-left">
                      <div className="leading-tight">Login</div>
                      <div className="text-xs text-white/80 font-normal">Existing advocate account sign in</div>
                    </div>
                  </div>
                  <FaArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ) : loginSuccess ? (
              /* Success State */
              <div className="text-center py-8 px-4 space-y-5 animate-fade-in">
                <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <FaCheckCircle className="text-5xl animate-bounce" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
                    Login Successful!
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm sm:text-base">
                    Redirecting to your Advocate Profile Dashboard...
                  </p>
                </div>
                <div className="flex justify-center pt-2">
                  <FaSpinner className="animate-spin text-2xl text-secondary" />
                </div>
              </div>
            ) : (
              /* Main Login Form (shown after user clicks Login) */
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-gray-100 dark:border-gray-700/80 pb-4 flex items-center justify-between">
                  <div>
                    <button
                      type="button"
                      onClick={() => setView('select')}
                      className="inline-flex items-center gap-1.5 text-xs text-primary dark:text-teal-400 font-bold hover:underline mb-1 cursor-pointer"
                    >
                      <span>← Back to Options</span>
                    </button>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                      Advocate Login
                    </h2>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-gray-700 flex items-center justify-center text-primary dark:text-teal-400">
                    <FaShieldAlt className="text-xl" />
                  </div>
                </div>

                {/* Error Message Alert */}
                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm flex items-start gap-3">
                    <MdErrorOutline className="text-xl shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Phone Number Field */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <div className="absolute left-0 top-0 bottom-0 pl-3.5 pr-2.5 flex items-center gap-1.5 border-r border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold text-sm bg-gray-50 dark:bg-gray-800 rounded-l-xl select-none">
                      <span className="text-base leading-none">🇮🇳</span>
                      <span>+91</span>
                    </div>
                    <input
                      type="tel"
                      value={mobileNumber}
                      onChange={handlePhoneChange}
                      placeholder="Enter phone number"
                      maxLength={10}
                      required
                      autoFocus
                      className="w-full pl-24 pr-10 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                    />
                    <div className="absolute right-3 text-gray-400">
                      <FaPhoneAlt className="text-sm" />
                    </div>
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setErrorMessage('');
                      }}
                      placeholder="Enter your password"
                      required
                      className="w-full pl-4 pr-12 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors p-1 cursor-pointer"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <FaEyeSlash className="text-base" /> : <FaEye className="text-base" />}
                    </button>
                  </div>
                </div>

                {/* Remember Me Checkbox */}
                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-secondary focus:ring-secondary/40 dark:bg-gray-900 cursor-pointer accent-secondary shrink-0"
                    />
                    <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                      Remember my credentials
                    </span>
                  </label>
                </div>

                {/* Login Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary hover:bg-primary/95 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none text-base"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin text-lg" />
                      <span>Logging In...</span>
                    </>
                  ) : (
                    <>
                      <span>Login</span>
                      <FaArrowRight className="text-sm" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Floating animation keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-12px) rotate(4deg); }
          50% { transform: translateY(-6px) rotate(-3deg); }
          75% { transform: translateY(-16px) rotate(2deg); }
        }
      `}</style>
    </div>
  );
};

export default Login;
