import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaUserTie,
  FaPhoneAlt,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaCheckCircle,
  FaSms,
  FaArrowRight,
  FaSpinner,
  FaGooglePlay,
  FaApple,
  FaGavel,
  FaFileContract,
  FaHandshake,
  FaShieldAlt,
  FaBalanceScale
} from 'react-icons/fa';
import { MdCheckCircleOutline, MdErrorOutline, MdVerified, MdSecurity } from 'react-icons/md';
import PopIn from '../../components/animations/PopIn';
import Seo from '../../components/Seo';
import Breadcrumbs from '../../components/Breadcrumbs';

// Floating icon component
const FloatingIcon = ({ Icon, className, delay = 0, duration = 6, color = 'primary' }) => (
  <div
    className={`absolute pointer-events-none ${color === 'primary' ? 'text-primary/30 dark:text-white/10' : 'text-secondary/40 dark:text-secondary/30'} ${className}`}
    style={{
      animation: `float ${duration}s ease-in-out infinite`,
      animationDelay: `${delay}s`
    }}
  >
    <Icon />
  </div>
);

const RegisterAdvocate = () => {
  const [salutations, setSalutations] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchSalutations = async () => {
      try {
        const response = await fetch('https://api.mlawyer.in/config/salutationList');
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data?.configuration) && data.configuration.length > 0) {
            setSalutations(data.configuration);
            const defaultSal = data.defaultValue || data.configuration[0];
            setFormData((prev) => ({
              ...prev,
              salutation: prev.salutation || defaultSal,
            }));
          }
        }
      } catch (err) {
        console.error('Failed to fetch salutation list:', err);
      }
    };

    fetchSalutations();
  }, []);

  // Form State
  const [formData, setFormData] = useState({
    salutation: '',
    firstName: '',
    middleName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // UI / Interactive States
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  // OTP Verification States
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpSending, setIsOtpSending] = useState(false);
  const [isOtpVerifying, setIsOtpVerifying] = useState(false);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [otpTimer, setOtpTimer] = useState(0);
  const [otpError, setOtpError] = useState('');
  const [otpSuccess, setOtpSuccess] = useState('');

  // Form Submission States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false);

  // Countdown timer for Resend OTP
  useEffect(() => {
    let interval = null;
    if (otpTimer > 0) {
      interval = setInterval(() => {
        setOtpTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [otpTimer]);

  const cleanPhone = (val) => {
    return val.replace(/\D/g, '').slice(0, 10);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'mobileNumber') {
      const cleaned = cleanPhone(value);
      setFormData((prev) => ({ ...prev, [name]: cleaned }));
      // If user edits phone after sending/verifying, reset OTP verification status
      if (isPhoneVerified || isOtpSent) {
        setIsPhoneVerified(false);
        setIsOtpSent(false);
        setOtp('');
        setOtpError('');
        setOtpSuccess('');
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    setFormError('');
  };

  // Helper to format payload mobileNumber with 91 prefix
  const getFullMobileNumber = (phone) => {
    const raw = phone.trim();
    if (raw.startsWith('91') && raw.length === 12) {
      return raw;
    }
    return `91${raw}`;
  };

  // Send OTP handler
  const handleSendOtp = async (e) => {
    if (e) e.preventDefault();
    if (formData.mobileNumber.length !== 10) {
      setOtpError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsOtpSending(true);
    setOtpError('');
    setOtpSuccess('');

    try {
      const payload = {
        mobileNumber: getFullMobileNumber(formData.mobileNumber),
      };

      const response = await fetch('https://api.mlawyer.in/whatsapp/otp_generate/lawyer_register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && (data.statusCode === 200 || data.status === 'OK')) {
        setIsOtpSent(true);
        setOtpTimer(45); // 45 seconds cooldown
        setOtpSuccess('OTP sent successfully to your mobile number via SMS!');
      } else {
        const errorMsg = data?.error?.message || data?.error || data?.message || 'Failed to send OTP. Please try again.';
        setOtpError(typeof errorMsg === 'string' ? errorMsg : 'Failed to send OTP. Please verify number.');
      }
    } catch (err) {
      console.error('Error sending OTP:', err);
      setOtpError('Network error while sending OTP. Please check your connection.');
    } finally {
      setIsOtpSending(false);
    }
  };

  // Verify OTP handler
  const handleVerifyOtp = async (e) => {
    if (e) e.preventDefault();
    if (!otp || otp.trim().length < 4) {
      setOtpError('Please enter the OTP received via SMS.');
      return;
    }

    setIsOtpVerifying(true);
    setOtpError('');
    setOtpSuccess('');

    try {
      const payload = {
        mobileNumber: getFullMobileNumber(formData.mobileNumber),
        otp: otp.trim(),
      };

      const response = await fetch('https://api.mlawyer.in/whatsapp/verify/register_lawyer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && (data.statusCode === 200 || data.status === 'OK')) {
        setIsPhoneVerified(true);
        setOtpSuccess('Phone number verified successfully!');
        setOtpError('');
      } else {
        const errorMsg = data?.error?.message || data?.error || data?.message || 'Invalid or expired OTP. Please try again.';
        setOtpError(typeof errorMsg === 'string' ? errorMsg : 'Invalid OTP. Please try again.');
      }
    } catch (err) {
      console.error('Error verifying OTP:', err);
      setOtpError('Network error while verifying OTP. Please try again.');
    } finally {
      setIsOtpVerifying(false);
    }
  };

  // Submit Registration Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');

    // Validation
    if (!formData.firstName.trim()) {
      setFormError('First Name is required.');
      return;
    }
    if (!formData.lastName.trim()) {
      setFormError('Last Name is required.');
      return;
    }
    if (!formData.mobileNumber || formData.mobileNumber.length !== 10) {
      setFormError('Please provide a valid 10-digit mobile number.');
      return;
    }
    if (!isPhoneVerified) {
      setFormError('Please verify your mobile number via SMS OTP before registering.');
      return;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      setFormError('Please enter a valid email address.');
      return;
    }
    if (!formData.password) {
      setFormError('Password is required.');
      return;
    }
    if (formData.password.length < 8) {
      setFormError('Password must be at least 8 characters long.');
      return;
    }
    if (!/[a-zA-Z]/.test(formData.password)) {
      setFormError('Password must include at least one letter.');
      return;
    }
    if (!/[^a-zA-Z0-9]/.test(formData.password)) {
      setFormError('Password must include at least one symbol (e.g. @, #, $, !).');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setFormError('Passwords do not match.');
      return;
    }
    if (!agreeTerms) {
      setFormError("Please agree to MLawyer's Terms & Conditions and Privacy Policy.");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        firstName: formData.firstName.trim(),
        middleName: formData.middleName.trim(),
        lastName: formData.lastName.trim(),
        mobileNumber: getFullMobileNumber(formData.mobileNumber),
        email: formData.email.trim(),
        role: 'LAWYER',
        password: formData.password,
        salutation: formData.salutation || '',
      };

      const response = await fetch('https://api.mlawyer.in/user/create_user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && (data.statusCode === 201 || data.status === 'CREATED' || data.result)) {
        setIsRegistrationSuccess(true);
      } else {
        const errorMsg = data?.error?.message || data?.error || data?.message || 'Registration failed. Please check your details and try again.';
        setFormError(typeof errorMsg === 'string' ? errorMsg : 'Unable to complete registration. User may already exist.');
      }
    } catch (err) {
      console.error('Error submitting registration:', err);
      setFormError('Network error. Unable to connect to server. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-teal-100/60 via-slate-50 to-teal-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-12 md:py-20 transition-colors duration-300">
      <Seo
        title="Advocate Registration | Join MLawyer Legal Network"
        description="Register as an Advocate on MLawyer. Join thousands of verified legal professionals, expand your practice, and connect with clients across India."
        keywords="register advocate, lawyer sign up, legal consultant registration, join MLawyer, advocate onboard, online law practice"
      />

      {/* Floating Icons Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left side icons */}
        <FloatingIcon Icon={() => <MdVerified className="text-5xl" />} className="top-[10%] left-[5%]" delay={0} duration={7} color="secondary" />
        <FloatingIcon Icon={() => <FaGavel className="text-4xl" />} className="top-[30%] left-[6%]" delay={1.5} duration={8} color="primary" />
        <FloatingIcon Icon={() => <FaPhoneAlt className="text-3xl" />} className="top-[55%] left-[4%]" delay={0.5} duration={6} color="secondary" />
        <FloatingIcon Icon={() => <FaFileContract className="text-4xl" />} className="top-[75%] left-[7%]" delay={2} duration={7} color="primary" />
        <FloatingIcon Icon={() => <FaHandshake className="text-5xl" />} className="top-[45%] left-[10%]" delay={3} duration={9} color="secondary" />
        
        {/* Right side icons */}
        <FloatingIcon Icon={() => <FaBalanceScale className="text-5xl" />} className="top-[12%] right-[5%]" delay={1} duration={8} color="primary" />
        <FloatingIcon Icon={() => <FaShieldAlt className="text-4xl" />} className="top-[32%] right-[7%]" delay={2.5} duration={7} color="secondary" />
        <FloatingIcon Icon={() => <FaCheckCircle className="text-3xl" />} className="top-[58%] right-[5%]" delay={0.8} duration={6} color="primary" />
        <FloatingIcon Icon={() => <FaUserTie className="text-4xl" />} className="top-[78%] right-[8%]" delay={1.8} duration={8} color="secondary" />
        <FloatingIcon Icon={() => <MdSecurity className="text-5xl" />} className="top-[48%] right-[11%]" delay={3.5} duration={9} color="primary" />

        {/* Top & Bottom scattered icons */}
        <FloatingIcon Icon={() => <MdVerified className="text-3xl" />} className="top-[5%] left-[20%]" delay={2.2} duration={7} color="secondary" />
        <FloatingIcon Icon={() => <FaGavel className="text-3xl" />} className="top-[6%] right-[20%]" delay={1.2} duration={6} color="primary" />
        <FloatingIcon Icon={() => <FaBalanceScale className="text-3xl" />} className="bottom-[8%] left-[15%]" delay={0.3} duration={8} color="secondary" />
        <FloatingIcon Icon={() => <FaShieldAlt className="text-3xl" />} className="bottom-[10%] right-[18%]" delay={2.8} duration={7} color="primary" />
      </div>

      {/* Background Soft Glow Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-300/30 dark:bg-teal-700/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400/20 dark:bg-amber-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10">
        {/* Breadcrumb Navigation */}
        <div className="mb-4 flex justify-center sm:justify-start">
          <Breadcrumbs
            items={[
              { label: 'Login', path: '/login' },
              { label: 'Register as Advocate' },
            ]}
          />
        </div>

        {/* Header Badge & Title */}
        <div className="text-center mb-8 md:mb-12">
          <PopIn>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Register as an <span className="text-secondary">Advocate</span>
            </h1>
            <p className="mt-3 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
              Join India's premier digital legal network. Provide verified consultations, manage clients smoothly, and grow your legal practice.
            </p>
          </PopIn>
        </div>

        {/* Form Card Container */}
        <div>
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-10 shadow-2xl border border-teal-100 dark:border-gray-700 relative">


            {isRegistrationSuccess ? (
              /* Success State */
              <div className="text-center py-8 px-4 space-y-6">
                <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <FaCheckCircle className="text-5xl animate-bounce" />
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
                    Account Created Successfully!
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm sm:text-base max-w-md mx-auto">
                    Welcome to MLawyer, <span className="font-semibold text-primary dark:text-teal-400">{formData.salutation} {formData.firstName} {formData.lastName}</span>. Your registration has been submitted successfully.
                  </p>
                </div>

                <div className="bg-teal-50/70 dark:bg-gray-900/60 border border-teal-100 dark:border-gray-700 rounded-2xl p-5 text-left max-w-md mx-auto space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Registered Mobile:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">+91 {formData.mobileNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Registered Email:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{formData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Account Role:</span>
                    <span className="font-semibold text-secondary">LAWYER (Advocate)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Mobile OTP Status:</span>
                    <span className="font-semibold text-emerald-600 flex items-center gap-1">
                      <MdCheckCircleOutline /> Verified
                    </span>
                  </div>
                </div>

                {/* Download MLawyer Pro App Box */}
                <div className="p-6 rounded-2xl bg-gradient-to-r from-teal-50 via-teal-100/40 to-teal-50 dark:from-gray-900/90 dark:via-gray-800 dark:to-gray-900/90 border border-teal-200 dark:border-gray-700 max-w-md mx-auto space-y-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                      Download <span className="text-secondary">MLawyer Pro</span> app
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">
                      Complete your profile, upload your Bar Council credentials, and start receiving client consultations.
                    </p>
                  </div>

                  {/* Play Store & App Store Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    {/* Google Play */}
                    <a
                      href="https://play.google.com/store/apps/details?id=com.mlawyer.lawyer&hl=en_IN"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-3 px-5 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 group"
                    >
                      <FaGooglePlay className="text-2xl text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" />
                      <div className="text-left">
                        <div className="text-[10px] uppercase font-semibold tracking-wider text-gray-300 leading-tight">GET IT ON</div>
                        <div className="text-sm font-bold leading-tight">Google Play</div>
                      </div>
                    </a>

                    {/* App Store */}
                    <a
                      href="https://apps.apple.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-3 px-5 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 group"
                    >
                      <FaApple className="text-2xl text-white shrink-0 group-hover:scale-110 transition-transform" />
                      <div className="text-left">
                        <div className="text-[10px] uppercase font-semibold tracking-wider text-gray-300 leading-tight">Download on the</div>
                        <div className="text-sm font-bold leading-tight">App Store</div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/lawyer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-secondary hover:underline"
                  >
                    <span>View Advocate Guide & FAQ</span>
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </div>
            ) : (
              /* Main Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-gray-100 dark:border-gray-700/80 pb-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Advocate Registration
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Please provide your official legal practitioner details.
                  </p>
                </div>

                {/* Top Error Alert */}
                {formError && (
                  <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm flex items-start gap-3">
                    <MdErrorOutline className="text-xl shrink-0 mt-0.5" />
                    <span>{formError}</span>
                  </div>
                )}

                {/* Name Row (Salutation, First Name, Middle Name, Last Name) */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                    {/* Salutation */}
                    <div className="sm:col-span-3">
                      <select
                        name="salutation"
                        value={formData.salutation}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                      >
                        {salutations.map((sal) => (
                          <option key={sal} value={sal}>
                            {sal}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* First Name */}
                    <div className="sm:col-span-3">
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="First Name *"
                        required
                        className="w-full px-3.5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                      />
                    </div>

                    {/* Middle Name */}
                    <div className="sm:col-span-3">
                      <input
                        type="text"
                        name="middleName"
                        value={formData.middleName}
                        onChange={handleInputChange}
                        placeholder="Middle Name"
                        className="w-full px-3.5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                      />
                    </div>

                    {/* Last Name */}
                    <div className="sm:col-span-3">
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Last Name *"
                        required
                        className="w-full px-3.5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Mobile Number & SMS OTP Verification */}
                <div className="p-4 sm:p-5 rounded-2xl bg-teal-50/50 dark:bg-gray-900/50 border border-teal-100 dark:border-gray-700 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <label className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5">
                      <FaSms className="text-teal-600 dark:text-teal-400 text-base" />
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    {isPhoneVerified ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                        <MdCheckCircleOutline className="text-sm" /> Verified
                      </span>
                    ) : (
                      <span className="text-[11px] text-gray-500 dark:text-gray-400">
                        OTP will be sent via SMS
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                    {/* Country Code Prefix */}
                    <div className="flex items-center shrink-0">
                      <div className="flex items-center gap-1.5 px-3 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-semibold">
                        <span>🇮🇳</span>
                        <span>+91</span>
                      </div>
                    </div>

                    {/* Phone input */}
                    <div className="relative flex-1">
                      <input
                        type="tel"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleInputChange}
                        placeholder="Enter 10-digit mobile number"
                        maxLength={10}
                        disabled={isPhoneVerified}
                        className={`w-full pl-3.5 pr-10 py-3 rounded-xl border bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-hidden transition-colors ${isPhoneVerified
                          ? 'border-emerald-500/60 bg-emerald-50/20 text-emerald-900 dark:text-emerald-300 font-semibold'
                          : 'border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-secondary/50 focus:border-secondary'
                          }`}
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                        <FaPhoneAlt className="text-xs" />
                      </div>
                    </div>

                    {/* Send OTP / Change Button: Visible when 10 digits entered */}
                    {formData.mobileNumber.length === 10 && !isPhoneVerified && (
                      <button
                        type="button"
                        onClick={handleSendOtp}
                        disabled={isOtpSending || otpTimer > 0}
                        className="px-4 py-3 bg-secondary hover:bg-secondary/90 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isOtpSending ? (
                          <>
                            <FaSpinner className="animate-spin text-xs" />
                            <span>Sending...</span>
                          </>
                        ) : otpTimer > 0 ? (
                          <span>Resend in {otpTimer}s</span>
                        ) : isOtpSent ? (
                          <span>Resend OTP</span>
                        ) : (
                          <>
                            <FaSms className="text-base" />
                            <span>Send OTP</span>
                          </>
                        )}
                      </button>
                    )}

                    {/* Change number if already verified */}
                    {isPhoneVerified && (
                      <button
                        type="button"
                        onClick={() => {
                          setIsPhoneVerified(false);
                          setIsOtpSent(false);
                          setOtp('');
                          setOtpSuccess('');
                          setOtpError('');
                        }}
                        className="px-3 py-3 text-xs font-semibold text-secondary hover:underline cursor-pointer shrink-0"
                      >
                        Change Number
                      </button>
                    )}
                  </div>

                  {/* OTP Input & Verification Row (Shown when OTP is sent & not yet verified) */}
                  {isOtpSent && !isPhoneVerified && (
                    <div className="pt-3 border-t border-teal-100/80 dark:border-gray-700/60 mt-3 space-y-2">
                      <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                        <span>Enter SMS OTP</span>
                        {otpTimer > 0 && (
                          <span className="text-secondary font-medium">Resend in {otpTimer}s</span>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                          placeholder="Enter 6-digit OTP"
                          maxLength={6}
                          className="flex-1 px-3.5 py-2.5 rounded-xl border border-teal-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm font-mono tracking-widest text-center focus:outline-hidden focus:ring-2 focus:ring-emerald-500/50"
                        />
                        <button
                          type="button"
                          onClick={handleVerifyOtp}
                          disabled={isOtpVerifying || !otp}
                          className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isOtpVerifying ? (
                            <>
                              <FaSpinner className="animate-spin text-xs" />
                              <span>Verifying...</span>
                            </>
                          ) : (
                            <>
                              <FaCheckCircle className="text-xs" />
                              <span>Verify OTP</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* OTP Success / Error feedback */}
                  {otpSuccess && (
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                      <MdCheckCircleOutline /> {otpSuccess}
                    </p>
                  )}
                  {otpError && (
                    <p className="text-xs text-red-600 dark:text-red-400 font-medium flex items-center gap-1">
                      <MdErrorOutline /> {otpError}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                    Official Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="advocate@example.com"
                      required
                      className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                    />
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                      <FaEnvelope className="text-sm" />
                    </div>
                  </div>
                </div>

                {/* Password and Confirm Password */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Password */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                      Create Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="At least 8 characters"
                        required
                        className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                      />
                      <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                        <FaLock className="text-sm" />
                      </div>
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors p-1"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? <FaEyeSlash className="text-sm" /> : <FaEye className="text-sm" />}
                      </button>
                    </div>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">
                      Min. 8 characters including a letter and a symbol.
                    </p>
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                      Confirm Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Re-enter password"
                        required
                        className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                      />
                      <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                        <FaLock className="text-sm" />
                      </div>
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors p-1"
                        aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                      >
                        {showConfirmPassword ? <FaEyeSlash className="text-sm" /> : <FaEye className="text-sm" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Terms Agreement Checkbox */}
                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    name="agreeTerms"
                    checked={agreeTerms}
                    onChange={(e) => {
                      setAgreeTerms(e.target.checked);
                      setFormError('');
                    }}
                    required
                    className="mt-0.5 w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-secondary focus:ring-secondary/40 dark:bg-gray-900 cursor-pointer accent-secondary shrink-0"
                  />
                  <label htmlFor="agreeTerms" className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-snug cursor-pointer select-none">
                    By clicking Register Advocate, you agree to MLawyer's{' '}
                    <Link to="/terms-and-conditions" target="_blank" className="text-secondary hover:underline font-semibold">
                      Terms & Conditions
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy-policy" target="_blank" className="text-secondary hover:underline font-semibold">
                      Privacy Policy
                    </Link>
                    .
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary hover:bg-primary/95 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none text-base"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin text-lg" />
                      <span>Creating Advocate Account...</span>
                    </>
                  ) : (
                    <>
                      <span>Register Advocate</span>
                      <FaArrowRight className="text-sm" />
                    </>
                  )}
                </button>

                {/* Footer Info */}
                <div className="text-center pt-2">
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    Already registered as an advocate?{' '}
                    <Link to="/login" className="text-secondary font-bold hover:underline">
                      Log in to Advocate Portal
                    </Link>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Floating animation keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-15px) rotate(5deg);
          }
          50% {
            transform: translateY(-8px) rotate(-3deg);
          }
          75% {
            transform: translateY(-20px) rotate(3deg);
          }
        }
      `}</style>
    </div>
  );
};

export default RegisterAdvocate;
