import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaUserTie,
  FaPhoneAlt,
  FaEnvelope,
  FaGavel,
  FaBalanceScale,
  FaFileContract,
  FaUpload,
  FaCamera,
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
  FaStar,
  FaEdit,
  FaSave,
  FaSignOutAlt,
  FaSpinner,
  FaArrowRight,
  FaPlus,
  FaTimes,
  FaIdCard,
  FaMapMarkerAlt,
  FaBuilding,
  FaGraduationCap,
  FaBriefcase,
  FaEye,
  FaGooglePlay,
  FaApple,
  FaShieldAlt,
  FaSyncAlt,
  FaUniversity,
  FaCreditCard,
} from 'react-icons/fa';
import { MdVerified, MdErrorOutline, MdCheckCircleOutline } from 'react-icons/md';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import {
  useLawyerProfile,
  useUpdateProfileMutation,
  useUploadProfilePhotoMutation,
  useUploadDocumentMutation,
  useUpdateAccountDetailsMutation,
  useLawyerAccountDetails,
  useSpecializationsConfig,
  useProofTypesConfig,
  useStatesList,
  useDistrictsList,
} from '../../hooks/useLawyerApi';
import OverlayLoader from '../../components/OverlayLoader';
import Seo from '../../components/Seo';
import PopIn from '../../components/animations/PopIn';
import Breadcrumbs from '../../components/Breadcrumbs';

const BASE_API_URL = 'https://api.mlawyer.in';

// Indian PAN validation regex: 5 uppercase letters, 4 digits, 1 uppercase letter
const PAN_REGEX = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
// Indian Pincode validation regex: 6 digits
const PINCODE_REGEX = /^[1-9][0-9]{5}$/;
// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Helper to format profile photo URL (GET /lawyer/file/file-profile/{fileName})
const getProfilePhotoUrl = (path) => {
  if (!path) return null;
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  // Extract clean filename e.g. "b9f4568d-2a8a-40ed-a820-9cf66c8566aa.jpg" from "/file-profile/..."
  const fileName = path.replace(/^\/?(lawyer\/file\/file-profile\/|file-profile\/|file\/)/, '').replace(/^\//, '');
  return `${BASE_API_URL}/lawyer/file/file-profile/${fileName}`;
};

const ProfileAdvocate = () => {
  const navigate = useNavigate();
  const {
    userId,
    token,
    role,
    lawyerDetails: authLawyerDetails,
    approvalStatus: authApprovalStatus,
    isAuthenticated,
    logout,
  } = useAuth();
  const { toast } = useToast();

  // TanStack Query: Fetch advocate profile with automatic cache and refetching
  const {
    data: queryLawyerData,
    isLoading: isProfileLoading,
    isFetching: isProfileFetching,
    refetch: refetchProfile,
  } = useLawyerProfile(userId, token);

  // Active lawyer details from TanStack query or auth fallback
  const lawyerDetails = queryLawyerData || authLawyerDetails;
  const currentStatus = lawyerDetails?.approvalInfo?.approvalStatus || authApprovalStatus || 'PENDING';
  const isApproved = currentStatus === 'APPROVED';

  // TanStack Query Mutations
  const updateProfileMutation = useUpdateProfileMutation(userId, token);
  const uploadPhotoMutation = useUploadProfilePhotoMutation(userId, token);
  const uploadDocMutation = useUploadDocumentMutation(userId, token);
  const updateAccountMutation = useUpdateAccountDetailsMutation(userId, token);
  const { data: existingAccountDetails } = useLawyerAccountDetails(userId, token);

  // Profile Form State
  const [profileForm, setProfileForm] = useState({
    salutation: 'Mr.',
    firstName: '',
    middleName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    barCouncilId: '',
    enrollmentNo: '',
    experience: 3,
    qualification: '',
    aboutAs: '',
    address1: '',
    address2: '',
    city: '',
    stateCode: '',
    districtCode: '',
    pincode: '',
    panCardNumber: '',
    proofType: '',
    specialization: [],
    available: true,
  });

  // TanStack Query: Specializations Config API (GET /config/specialization)
  const { data: dynamicSpecializations = [] } = useSpecializationsConfig(token);

  // TanStack Query: ID Proof Types Config API (GET /config/proofType)
  const { data: proofTypeConfig, isLoading: isProofTypeLoading } = useProofTypesConfig(token);
  const proofTypeOptions = proofTypeConfig?.options || [];

  // TanStack Query: States & Districts Dynamic Dropdown APIs (GET /dropDown/state)
  const { data: stateList = [], isLoading: isStatesLoading } = useStatesList(token);
  const { data: districtList = [], isLoading: isDistrictsLoading } = useDistrictsList(profileForm.stateCode, token);

  const [activeTab, setActiveTab] = useState('profile'); // 'profile', 'documents', 'bankDetails', 'account'
  const [saveSuccess, setSaveSuccess] = useState('');
  const [saveError, setSaveError] = useState('');

  // Bank & Account Details State
  const [bankForm, setBankForm] = useState({
    bankName: '',
    branchName: '',
    accountHolderName: '',
    accountNumber: '',
    confirmAccountNumber: '',
    ifsc: '',
    accountType: 'SAVINGS',
    primary: true,
  });
  const [bankSaveSuccess, setBankSaveSuccess] = useState('');
  const [bankSaveError, setBankSaveError] = useState('');

  // Sync loaded bank account details
  useEffect(() => {
    const bank = existingAccountDetails || lawyerDetails?.bankDetails;
    if (bank) {
      setBankForm((prev) => ({
        bankName: bank.bankName || prev.bankName || '',
        branchName: bank.branchName || prev.branchName || '',
        accountHolderName: bank.accountHolderName || prev.accountHolderName || '',
        accountNumber: bank.accountNumber || prev.accountNumber || '',
        confirmAccountNumber: bank.accountNumber || prev.confirmAccountNumber || '',
        ifsc: bank.ifsc || prev.ifsc || '',
        accountType: bank.accountType || prev.accountType || 'SAVINGS',
        primary: bank.primary ?? true,
      }));
    }
  }, [existingAccountDetails, lawyerDetails]);

  // Photo upload states
  const [photoMessage, setPhotoMessage] = useState({ type: '', text: '' });
  const [localAvatarUrl, setLocalAvatarUrl] = useState(null);
  const avatarInputRef = useRef(null);

  const avatarUrl = localAvatarUrl || getProfilePhotoUrl(lawyerDetails?.profileUrl);

  // Document upload states
  const [uploadingDocKey, setUploadingDocKey] = useState(null);
  const [docMessage, setDocMessage] = useState({ type: '', text: '' });
  const [previewModalUrl, setPreviewModalUrl] = useState(null);

  // Auto-select proofType default value from API when available if empty
  useEffect(() => {
    if (!profileForm.proofType && proofTypeConfig?.defaultValue) {
      setProfileForm((prev) => ({
        ...prev,
        proofType: prev.proofType || proofTypeConfig.defaultValue,
      }));
    }
  }, [proofTypeConfig, profileForm.proofType]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle browser back button: intercept popstate, perform logout, and redirect to /login
  useEffect(() => {
    // Push a dummy history state so browser back button triggers popstate within our app
    window.history.pushState({ page: 'profile-advocate' }, '', window.location.href);

    const handlePopState = (e) => {
      logout();
      toast.info('You have been signed out.', 'Signed Out');
      navigate('/login', { replace: true });
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [logout, navigate, toast]);

  // Handle Breadcrumb "Login" click -> logout current user and navigate to login
  const handleLoginBreadcrumbClick = () => {
    logout();
    toast.info('You have been signed out.', 'Signed Out');
    navigate('/login', { replace: true });
  };

  // Sync loaded lawyer data into form
  const syncFormData = (data) => {
    if (!data) return;
    const expVal = Number(data.experience);
    setProfileForm({
      salutation: data.salutation || 'Mr.',
      firstName: data.firstName || '',
      middleName: data.middleName || '',
      lastName: data.lastName || '',
      mobileNumber: data.mobileNumber || '',
      email: data.email || '',
      barCouncilId: data.barCouncilId || '',
      enrollmentNo: data.enrollmentNo || '',
      experience: !isNaN(expVal) && expVal >= 3 ? expVal : 3,
      qualification: data.qualification || '',
      aboutAs: data.aboutAs || '',
      address1: data.address1 || '',
      address2: data.address2 || '',
      city: data.city || '',
      stateCode: data.stateCode || '',
      districtCode: data.districtCode || '',
      pincode: data.pincode || '',
      panCardNumber: (data.panCardNumber || '').toUpperCase(),
      proofType: data.proofType || proofTypeConfig?.defaultValue || '',
      specialization: Array.isArray(data.specialization) ? data.specialization : [],
      available: data.available ?? true,
    });
  };

  const hasInitialSyncRef = useRef(false);

  // Sync loaded lawyer data into form on initial load
  useEffect(() => {
    if (!hasInitialSyncRef.current) {
      if (queryLawyerData) {
        syncFormData(queryLawyerData);
        hasInitialSyncRef.current = true;
      } else if (authLawyerDetails) {
        syncFormData(authLawyerDetails);
        hasInitialSyncRef.current = true;
      }
    }
  }, [queryLawyerData, authLawyerDetails]);

  // Handle standard input change with live formatting
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    let cleanValue = value;
    if (name === 'panCardNumber') {
      cleanValue = value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 10);
    } else if (name === 'pincode') {
      cleanValue = value.replace(/\D/g, '').slice(0, 6);
    }

    setProfileForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : cleanValue,
    }));
    setSaveSuccess('');
    setSaveError('');
  };

  // Handle State selection change -> resets districtCode
  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setProfileForm((prev) => ({
      ...prev,
      stateCode: selectedState,
      districtCode: '',
    }));
    setSaveSuccess('');
    setSaveError('');
  };

  // Manual refetch handler with toast
  const handleManualRefetch = async () => {
    toast.info('Fetching latest profile data from MLawyer servers...', 'Syncing');
    const res = await refetchProfile();
    if (res.data) {
      syncFormData(res.data);
      toast.success('Advocate profile refreshed successfully!', 'Synced');
    } else if (res.error) {
      toast.error('Could not refresh profile. Please check connection.', 'Sync Error');
    }
  };

  // Specialization toggle
  const toggleSpecialization = (spec) => {
    setProfileForm((prev) => {
      const exists = prev.specialization.includes(spec);
      return {
        ...prev,
        specialization: exists
          ? prev.specialization.filter((s) => s !== spec)
          : [...prev.specialization, spec],
      };
    });
  };

  // Remove specialization badge
  const handleRemoveSpecialization = (spec) => {
    setProfileForm((prev) => ({
      ...prev,
      specialization: prev.specialization.filter((s) => s !== spec),
    }));
  };

  // Form validation helper
  const validateProfileForm = () => {
    if (!avatarUrl && !lawyerDetails?.profileUrl) {
      return 'Profile picture is required. Please upload your profile photo.';
    }
    if (!profileForm.firstName.trim()) {
      return 'First Name is required.';
    }
    if (!profileForm.lastName.trim()) {
      return 'Last Name is required.';
    }
    if (!profileForm.email.trim() || !EMAIL_REGEX.test(profileForm.email.trim())) {
      return 'Valid Email Address is required.';
    }
    if (!profileForm.barCouncilId.trim()) {
      return 'Bar Council ID is required.';
    }
    if (!profileForm.enrollmentNo.trim()) {
      return 'Enrollment Number is required.';
    }
    const exp = Number(profileForm.experience);
    if (isNaN(exp) || exp < 3) {
      return 'Minimum legal experience required is 3 years.';
    }
    if (!profileForm.qualification.trim()) {
      return 'Primary Law Degree / Qualification is required.';
    }
    if (!profileForm.specialization || profileForm.specialization.length === 0) {
      return 'Please select at least one Legal Specialization practice area.';
    }
    if (!profileForm.address1.trim()) {
      return 'Address Line 1 is required.';
    }
    if (!profileForm.stateCode || !String(profileForm.stateCode).trim()) {
      return 'State is required.';
    }
    if (!profileForm.districtCode || !String(profileForm.districtCode).trim()) {
      return 'District is required.';
    }
    if (!profileForm.city.trim()) {
      return 'City is required.';
    }
    if (!profileForm.pincode.trim()) {
      return 'Postal Pincode is required.';
    }
    if (!PINCODE_REGEX.test(profileForm.pincode.trim())) {
      return 'Please enter a valid 6-digit Indian Postal Pincode (e.g. 628501).';
    }
    const pan = (profileForm.panCardNumber || '').trim().toUpperCase();
    if (!pan) {
      return 'PAN Card Number is required.';
    }
    if (!PAN_REGEX.test(pan)) {
      return 'Invalid PAN Card Number format. Indian PAN must be 10 characters (e.g. ABCDE1234F).';
    }
    if (!profileForm.proofType) {
      return 'ID Proof Type is required.';
    }
    return null;
  };

  // Helper to build profile payload for API update
  const buildProfilePayload = () => {
    const todayDate = new Date().toISOString().split('T')[0];
    return {
      salutation: profileForm.salutation,
      firstName: profileForm.firstName.trim(),
      middleName: profileForm.middleName.trim(),
      lastName: profileForm.lastName.trim(),
      mobileNumber: profileForm.mobileNumber,
      email: profileForm.email.trim(),
      barCouncilId: profileForm.barCouncilId.trim().toUpperCase(),
      enrollmentNo: (profileForm.enrollmentNo || '').trim().toUpperCase(),
      experience: Math.max(3, Number(profileForm.experience) || 3),
      qualification: profileForm.qualification.trim(),
      aboutAs: profileForm.aboutAs.trim(),
      address1: profileForm.address1.trim(),
      address2: profileForm.address2.trim(),
      city: profileForm.city.trim(),
      stateCode: profileForm.stateCode || null,
      districtCode: profileForm.districtCode || null,
      cityCode: null,
      pincode: profileForm.pincode.trim(),
      panCardNumber: profileForm.panCardNumber.trim().toUpperCase(),
      proofType: profileForm.proofType,
      specialization: profileForm.specialization,
      date: todayDate,
      userStatus: lawyerDetails?.userStatus || null,
      approvedById: lawyerDetails?.approvedById || null,
      approvedByName: lawyerDetails?.approvedByName || null,
    };
  };

  // Save profile changes via TanStack Query mutation
  const handleSaveProfile = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (isApproved) {
      toast.info('Your profile is verified and approved. Credentials are locked against edits.', 'Profile Locked');
      return;
    }
    setSaveSuccess('');
    setSaveError('');

    const validationError = validateProfileForm();
    if (validationError) {
      setSaveError(validationError);
      toast.error(validationError, 'Validation Error');
      if (!avatarUrl && !lawyerDetails?.profileUrl) {
        window.scrollTo({ top: 120, behavior: 'smooth' });
      }
      return;
    }

    try {
      const payload = buildProfilePayload();
      const updatedDetails = await updateProfileMutation.mutateAsync(payload);
      if (updatedDetails) {
        syncFormData(updatedDetails);
      }
      setSaveSuccess('Your Advocate profile has been updated successfully!');
      toast.success('Your Advocate profile changes have been saved!', 'Profile Updated');
      setTimeout(() => setSaveSuccess(''), 4000);
    } catch (err) {
      const errorMsg = err.message || 'Failed to update profile.';
      setSaveError(errorMsg);
      toast.error(errorMsg, 'Update Failed');
    }
  };

  // Next button click from Profile tab to Verification Documents tab (auto-saves form data)
  const handleNextToDocuments = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (isApproved) {
      setActiveTab('documents');
      window.scrollTo({ top: 380, behavior: 'smooth' });
      return;
    }
    setSaveError('');

    const validationError = validateProfileForm();
    if (validationError) {
      setSaveError(validationError);
      toast.error(validationError, 'Validation Error');
      if (!avatarUrl && !lawyerDetails?.profileUrl) {
        window.scrollTo({ top: 120, behavior: 'smooth' });
      }
      return;
    }

    try {
      const payload = buildProfilePayload();
      const updatedDetails = await updateProfileMutation.mutateAsync(payload);
      if (updatedDetails) {
        syncFormData(updatedDetails);
      }
      setActiveTab('documents');
      window.scrollTo({ top: 380, behavior: 'smooth' });
      toast.success('Profile saved successfully! Proceeding to Verification Documents.', 'Saved');
    } catch (err) {
      const errorMsg = err.message || 'Failed to update profile before proceeding.';
      setSaveError(errorMsg);
      toast.error(errorMsg, 'Update Failed');
    }
  };

  // Avatar upload handler via TanStack Query mutation
  const handleAvatarFileSelect = async (e) => {
    if (isApproved) {
      toast.info('Profile photo is locked after verification.', 'Locked');
      return;
    }
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      const err = 'Please select a valid image file (JPG, PNG, WebP).';
      setPhotoMessage({ type: 'error', text: err });
      toast.error(err, 'Invalid Image');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      const err = 'Image size should be less than 5MB.';
      setPhotoMessage({ type: 'error', text: err });
      toast.error(err, 'File Too Large');
      return;
    }

    setPhotoMessage({ type: '', text: '' });

    try {
      const previewUrl = URL.createObjectURL(file);
      setLocalAvatarUrl(previewUrl);
      await uploadPhotoMutation.mutateAsync(file);
      setPhotoMessage({ type: 'success', text: 'Profile photo updated successfully!' });
      toast.success('Your advocate profile photo has been updated!', 'Photo Uploaded');
      setSaveError('');
      setTimeout(() => setPhotoMessage({ type: '', text: '' }), 3500);
    } catch (err) {
      setLocalAvatarUrl(null);
      const errorMsg = err.message || 'Failed to upload photo.';
      setPhotoMessage({ type: 'error', text: errorMsg });
      toast.error(errorMsg, 'Upload Failed');
    }
  };

  // Document upload handler via TanStack Query mutation
  const handleDocumentFileSelect = async (docKey, e) => {
    if (isApproved) {
      toast.info('Verification documents are locked after approval.', 'Locked');
      return;
    }
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      const err = 'File size should be less than 10MB.';
      setDocMessage({ type: 'error', text: err });
      toast.error(err, 'File Too Large');
      return;
    }

    setUploadingDocKey(docKey);
    setDocMessage({ type: '', text: '' });

    try {
      await uploadDocMutation.mutateAsync({ documentType: docKey, file });
      const label = getDocumentLabel(docKey);
      setDocMessage({ type: 'success', text: `${label} uploaded successfully!` });
      toast.success(`${label} has been uploaded for verification!`, 'Document Uploaded');
      setTimeout(() => setDocMessage({ type: '', text: '' }), 4000);
    } catch (err) {
      const errorMsg = err.message || 'Failed to upload document.';
      setDocMessage({ type: 'error', text: errorMsg });
      toast.error(errorMsg, 'Upload Failed');
    } finally {
      setUploadingDocKey(null);
    }
  };

  // Handle bank input change with numeric/IFSC formatting
  const handleBankInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    let cleanVal = value;
    if (name === 'accountNumber' || name === 'confirmAccountNumber') {
      cleanVal = value.replace(/\D/g, '').slice(0, 18);
    } else if (name === 'ifsc') {
      cleanVal = value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 11);
    }
    setBankForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : cleanVal,
    }));
    setBankSaveSuccess('');
    setBankSaveError('');
  };

  // Validate bank details form
  const validateBankForm = () => {
    if (!bankForm.accountHolderName.trim()) {
      return 'Account Holder Name is required.';
    }
    if (!bankForm.bankName.trim()) {
      return 'Bank Name is required.';
    }
    if (!bankForm.branchName.trim()) {
      return 'Branch Name is required.';
    }
    if (!bankForm.accountNumber.trim()) {
      return 'Bank Account Number is required.';
    }
    if (bankForm.accountNumber.trim().length < 9) {
      return 'Bank Account Number must be at least 9 digits.';
    }
    if (!bankForm.confirmAccountNumber.trim()) {
      return 'Please confirm your Bank Account Number.';
    }
    if (bankForm.accountNumber.trim() !== bankForm.confirmAccountNumber.trim()) {
      return 'Bank Account Number and Confirm Account Number do not match.';
    }
    if (!bankForm.ifsc.trim()) {
      return 'IFSC Code is required.';
    }
    if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(bankForm.ifsc.trim().toUpperCase())) {
      return 'Invalid IFSC Code format. Indian IFSC must be 11 characters (e.g. SBIN0001234, HDFC0000001).';
    }
    return null;
  };

  // Save bank details handler (Save and Finish -> moves to Account & Pro App tab)
  const handleSaveBankDetails = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setBankSaveSuccess('');
    setBankSaveError('');

    const validationError = validateBankForm();
    if (validationError) {
      setBankSaveError(validationError);
      toast.error(validationError, 'Bank Details Error');
      return;
    }

    const payload = {
      bankName: bankForm.bankName.trim(),
      branchName: bankForm.branchName.trim(),
      accountHolderName: bankForm.accountHolderName.trim(),
      accountNumber: bankForm.accountNumber.trim(),
      ifsc: bankForm.ifsc.trim().toUpperCase(),
      accountType: bankForm.accountType || 'SAVINGS',
      primary: bankForm.primary ?? true,
    };

    try {
      await updateAccountMutation.mutateAsync(payload);
      setBankSaveSuccess('Bank account details saved successfully!');
      toast.success('Your settlement bank account details have been saved!', 'Account Details Saved');

      setTimeout(() => {
        setActiveTab('account');
        window.scrollTo({ top: 380, behavior: 'smooth' });
      }, 500);
    } catch (err) {
      const errorMsg = err.message || 'Failed to save bank account details.';
      setBankSaveError(errorMsg);
      toast.error(errorMsg, 'Save Failed');
    }
  };

  // Next button click from Documents tab to Account Details tab
  const handleSaveDocumentsAndNext = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (isApproved) {
      setActiveTab('bankDetails');
      window.scrollTo({ top: 380, behavior: 'smooth' });
      return;
    }

    try {
      const payload = buildProfilePayload();
      await updateProfileMutation.mutateAsync(payload);
    } catch {
      // Non-blocking if profile update was already performed
    }

    setActiveTab('bankDetails');
    window.scrollTo({ top: 380, behavior: 'smooth' });
    toast.info('Proceeding to Bank & Account Details.', 'Step 3 of 4');
  };

  const getDocumentLabel = (key) => {
    const labels = {
      aadhaarFront: 'Aadhaar Card (Front)',
      aadhaarBack: 'Aadhaar Card (Back)',
      panCard: 'PAN Card',
      checkLeaf: 'Bank Cheque Leaf / Proof',
      professionalCertificate: 'Bar Council Certificate',
      proofUrl: 'Address / ID Proof',
    };
    return labels[key] || key;
  };

  const getDocumentDescription = (key) => {
    const descriptions = {
      aadhaarFront: 'Front side showing legal name, photo, and 12-digit Aadhaar number.',
      aadhaarBack: 'Back side showing registered residential address.',
      panCard: 'Official Income Tax Department PAN Card copy.',
      checkLeaf: 'Cancelled cheque leaf or passbook for verified consultation fee payouts.',
      professionalCertificate: 'Certificate of Practice / State Bar Council Enrollment Certificate.',
      proofUrl: 'Utility bill, postpaid bill, or secondary government identity proof.',
    };
    return descriptions[key] || '';
  };

  // Helper to format full image URL for documents
  const getFullMediaUrl = (path) => {
    if (!path) return null;
    if (path.startsWith('http://') || path.startsWith('https://')) {
      return path;
    }
    if (path.startsWith('/file/') || path.startsWith('file/')) {
      const clean = path.startsWith('/') ? path : `/${path}`;
      return `${BASE_API_URL}/lawyer${clean}`;
    }
    return `${BASE_API_URL}${path.startsWith('/') ? '' : '/'}${path}`;
  };

  // Logout handler
  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  // If user is not authenticated and query finished loading
  if (!isAuthenticated && !isProfileLoading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-gray-950 flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-teal-100 dark:border-gray-700 text-center space-y-6">
          <div className="w-16 h-16 bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 rounded-2xl flex items-center justify-center mx-auto text-2xl">
            <FaGavel />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Advocate Portal Access
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              Please sign in with your registered phone number to manage your advocate profile, consultations, and legal documents.
            </p>
          </div>
          <div className="space-y-3">
            <Link
              to="/login"
              className="w-full py-3.5 px-4 bg-primary text-white font-bold rounded-xl shadow-md hover:bg-primary/95 transition-all flex items-center justify-center gap-2"
            >
              <FaUserTie />
              <span>Advocate Login</span>
            </Link>
            <Link
              to="/register-advocate"
              className="w-full py-3.5 px-4 bg-teal-50 dark:bg-gray-700 text-primary dark:text-teal-300 font-semibold rounded-xl hover:bg-teal-100 dark:hover:bg-gray-600 transition-all flex items-center justify-center gap-2"
            >
              <span>Register as New Advocate</span>
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const docs = lawyerDetails?.documentUrl || {};

  // Compute loader message
  const isAnyLoading =
    isProfileLoading ||
    updateProfileMutation.isPending ||
    uploadPhotoMutation.isPending ||
    uploadDocMutation.isPending ||
    updateAccountMutation.isPending;

  let loaderTitle = 'Processing...';
  let loaderSubtitle = 'Please wait while we connect with MLawyer servers.';

  if (isProfileLoading) {
    loaderTitle = 'Loading Advocate Profile';
    loaderSubtitle = 'Retrieving your verified advocate profile and credentials...';
  } else if (updateProfileMutation.isPending) {
    loaderTitle = 'Saving Profile Changes';
    loaderSubtitle = 'Synchronizing advocate credentials with MLawyer servers...';
  } else if (uploadPhotoMutation.isPending) {
    loaderTitle = 'Uploading Profile Photo';
    loaderSubtitle = 'Processing and updating your advocate avatar image...';
  } else if (uploadDocMutation.isPending) {
    loaderTitle = `Uploading ${getDocumentLabel(uploadingDocKey)}`;
    loaderSubtitle = 'Submitting KYC document to verification server...';
  } else if (updateAccountMutation.isPending) {
    loaderTitle = 'Saving Bank Account Details';
    loaderSubtitle = 'Connecting to MLawyer secure financial gateway...';
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950 py-8 sm:py-12 transition-colors duration-300 relative">
      {/* Background Blur Overlay Loader for all API actions */}
      <OverlayLoader
        show={isAnyLoading}
        title={loaderTitle}
        subtitle={loaderSubtitle}
      />

      <Seo
        title={`${profileForm.firstName ? `${profileForm.firstName}'s Advocate Profile` : 'Advocate Profile'} | MLawyer Portal`}
        description="Manage your MLawyer Advocate profile, verify Bar Council credentials, upload KYC documents, and monitor consultation metrics."
        canonical="/profile-advocate"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-6">
        {/* Breadcrumb Navigation */}
        <div className="flex justify-start">
          <Breadcrumbs
            items={[
              { label: 'Login', onClick: handleLoginBreadcrumbClick },
              { label: 'Advocate Profile' },
            ]}
          />
        </div>

        {/* Top Header Card */}
        <div className="relative rounded-3xl bg-gradient-to-r from-primary via-teal-900 to-primary text-white shadow-2xl p-6 sm:p-8 md:p-10 overflow-hidden">
          {/* Decorative glow and circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 text-center md:text-left">
            {/* Avatar with Upload button */}
            {/* Avatar / Profile Picture Upload */}
            <div className="relative shrink-0 flex flex-col items-center">
              <div className="relative group">
                <div className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-white/10 border-2 shadow-xl flex items-center justify-center transition-all ${!avatarUrl ? 'border-amber-400 ring-4 ring-amber-400/40' : 'border-white/20'
                  }`}>
                  {avatarUrl ? (
                    <img
                      src={avatarUrl}
                      alt={profileForm.firstName || 'Advocate'}
                      className="w-full h-full rounded-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-teal-800 text-teal-200">
                      <FaUserTie className="text-4xl sm:text-5xl" />
                    </div>
                  )}
                </div>

                {/* Upload Overlay Button / Verified Badge */}
                {isApproved ? (
                  <div
                    className="absolute bottom-1 right-1 p-2 rounded-xl bg-emerald-500 text-white shadow-lg flex items-center justify-center text-sm"
                    title="Verified Profile Photo"
                  >
                    <MdVerified className="text-base" />
                  </div>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => avatarInputRef.current?.click()}
                      disabled={uploadPhotoMutation.isPending}
                      className="absolute bottom-1 right-1 p-2.5 rounded-xl bg-secondary text-white shadow-lg hover:scale-110 active:scale-95 transition-all cursor-pointer disabled:opacity-70"
                      title="Upload Profile Photo (Mandatory)"
                      aria-label="Upload Profile Photo (Mandatory)"
                    >
                      {uploadPhotoMutation.isPending ? (
                        <FaSpinner className="animate-spin text-sm" />
                      ) : (
                        <FaCamera className="text-sm" />
                      )}
                    </button>
                    <input
                      ref={avatarInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarFileSelect}
                      className="hidden"
                    />
                  </>
                )}
              </div>

              {/* Status indicator below avatar */}
              {!isApproved && (
                <div className="mt-2">
                  {avatarUrl ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-200 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                      <MdVerified className="text-xs text-emerald-400" />
                      <span>Photo Uploaded</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-200 bg-amber-950/70 px-2.5 py-0.5 rounded-full border border-amber-500/50">
                      <span>Profile Picture</span>
                      <span className="text-red-400 font-extrabold">*</span>
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Advocate Core Details */}
            <div className="flex-1 space-y-3">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                {/* Approval Status Badge */}
                {currentStatus === 'APPROVED' ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    <FaCheckCircle className="text-emerald-400" />
                    <span>Verified Advocate</span>
                  </span>
                ) : currentStatus === 'REJECTED' ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-500/20 text-red-300 border border-red-500/30">
                    <FaTimesCircle className="text-red-400" />
                    <span>Approval Rejected</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    <FaClock className="text-amber-400" />
                    <span>Verification In Progress</span>
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                {profileForm.salutation} {profileForm.firstName} {profileForm.middleName} {profileForm.lastName}
              </h1>

              {/* Bar Council & Credentials Summary */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs sm:text-sm text-teal-100/90 font-medium">
                {profileForm.barCouncilId && (
                  <div className="flex items-center gap-1.5">
                    <FaGavel className="text-secondary" />
                    <span>Bar ID: <strong className="text-white">{profileForm.barCouncilId}</strong></span>
                  </div>
                )}
                {profileForm.enrollmentNo && (
                  <div className="flex items-center gap-1.5">
                    <FaIdCard className="text-secondary" />
                    <span>Enrollment: <strong className="text-white">{profileForm.enrollmentNo}</strong></span>
                  </div>
                )}
                <div className="flex items-center gap-1.5">
                  <FaPhoneAlt className="text-secondary text-xs" />
                  <span>+91 {profileForm.mobileNumber}</span>
                </div>
                {profileForm.email && (
                  <div className="flex items-center gap-1.5">
                    <FaEnvelope className="text-secondary text-xs" />
                    <span>{profileForm.email}</span>
                  </div>
                )}
              </div>

              {/* Photo Upload Message */}
              {photoMessage.text && (
                <div
                  className={`mt-2 text-xs font-semibold px-3 py-1.5 rounded-lg inline-block ${photoMessage.type === 'error'
                    ? 'bg-red-500/20 text-red-200 border border-red-500/30'
                    : 'bg-emerald-500/20 text-emerald-200 border border-emerald-500/30'
                    }`}
                >
                  {photoMessage.text}
                </div>
              )}
            </div>

            {/* Header Actions: Refresh & Logout */}
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-2.5">
              <button
                type="button"
                onClick={handleManualRefetch}
                disabled={isProfileFetching}
                className="px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all font-semibold text-xs sm:text-sm flex items-center gap-2 cursor-pointer disabled:opacity-60"
                title="Refetch profile from server"
              >
                <FaSyncAlt className={`text-secondary text-xs ${isProfileFetching ? 'animate-spin' : ''}`} />
                <span>{isProfileFetching ? 'Syncing...' : 'Refresh'}</span>
              </button>

              <button
                type="button"
                onClick={handleLogout}
                className="px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-red-500/20 text-white hover:text-red-200 border border-white/15 hover:border-red-500/30 transition-all font-semibold text-xs sm:text-sm flex items-center gap-2 cursor-pointer"
              >
                <FaSignOutAlt />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 dark:border-gray-700/80 gap-2 sm:gap-6 overflow-x-auto select-none">
          <button
            type="button"
            onClick={() => setActiveTab('profile')}
            className={`pb-4 px-2 sm:px-4 font-bold text-sm sm:text-base border-b-2 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${activeTab === 'profile'
              ? 'border-secondary text-primary dark:text-teal-400'
              : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
          >
            <FaUserTie className="text-sm" />
            <span>Profile & Credentials</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('documents')}
            className={`pb-4 px-2 sm:px-4 font-bold text-sm sm:text-base border-b-2 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${activeTab === 'documents'
              ? 'border-secondary text-primary dark:text-teal-400'
              : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
          >
            <FaFileContract className="text-sm" />
            <span>KYC & Verification Documents</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('bankDetails')}
            className={`pb-4 px-2 sm:px-4 font-bold text-sm sm:text-base border-b-2 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${activeTab === 'bankDetails'
              ? 'border-secondary text-primary dark:text-teal-400'
              : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
          >
            <FaUniversity className="text-sm" />
            <span>Account Details</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('account')}
            className={`pb-4 px-2 sm:px-4 font-bold text-sm sm:text-base border-b-2 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${activeTab === 'account'
              ? 'border-secondary text-primary dark:text-teal-400'
              : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
          >
            <FaShieldAlt className="text-sm" />
            <span>Account & Pro App</span>
          </button>
        </div>

        {/* Tab 1: Profile & Credentials Edit Form */}
        {activeTab === 'profile' && (
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-10 shadow-xl border border-teal-100 dark:border-gray-700">
            {/* Verified & Approved Notice */}
            {isApproved && (
              <div className="mb-8 p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 flex items-start sm:items-center gap-3.5 shadow-xs">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 text-2xl">
                  <FaShieldAlt />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-bold text-sm sm:text-base text-emerald-950 dark:text-emerald-100 flex items-center gap-2">
                    <MdVerified className="text-emerald-500 text-lg" />
                    <span>Verified Advocate Profile</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-300 leading-relaxed">
                    Your profile and Bar Council credentials have been verified and approved by MLawyer Compliance. To maintain legal compliance, verified advocate credentials are locked against direct edits.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleNextToDocuments} className="space-y-8">
              {/* Feedback messages */}
              {saveSuccess && (
                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-sm flex items-center gap-3">
                  <MdCheckCircleOutline className="text-2xl shrink-0" />
                  <span className="font-semibold">{saveSuccess}</span>
                </div>
              )}
              {saveError && (
                <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm flex items-center gap-3">
                  <MdErrorOutline className="text-2xl shrink-0" />
                  <span className="font-semibold">{saveError}</span>
                </div>
              )}

              <fieldset disabled={isApproved} className="space-y-8 disabled:opacity-95">
                {/* Section 1: Personal Details */}
                <div className="space-y-4">
                  <div className="border-b border-gray-100 dark:border-gray-700/80 pb-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <FaUserTie className="text-secondary" />
                      <span>Personal Details</span>
                    </h3>
                  </div>

                  {/* Mandatory Profile Picture Field Card */}
                  <div className="p-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50/70 dark:bg-gray-900/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className={`relative w-14 h-14 rounded-full overflow-hidden bg-teal-800 text-teal-200 shrink-0 border-2 shadow-md flex items-center justify-center ${avatarUrl ? 'border-emerald-500' : 'border-amber-400 ring-2 ring-amber-400/40'
                        }`}>
                        {avatarUrl ? (
                          <img
                            src={avatarUrl}
                            alt="Profile"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        ) : (
                          <FaUserTie className="text-2xl" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <label className="block text-xs font-bold text-gray-900 dark:text-white">
                            Profile Picture <span className="text-red-500">*</span>
                          </label>
                          {avatarUrl ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                              <FaCheckCircle className="text-[9px]" /> Uploaded
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-700">
                              Mandatory *
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                          {avatarUrl
                            ? 'Profile picture is uploaded and active on your advocate profile.'
                            : 'Clear portrait photo is required for your advocate profile (JPG, PNG, WebP up to 5MB).'}
                        </p>
                      </div>
                    </div>

                    {!isApproved && (
                      <button
                        type="button"
                        onClick={() => avatarInputRef.current?.click()}
                        disabled={uploadPhotoMutation.isPending}
                        className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer disabled:opacity-60 shrink-0"
                      >
                        {uploadPhotoMutation.isPending ? (
                          <>
                            <FaSpinner className="animate-spin text-xs" />
                            <span>Uploading...</span>
                          </>
                        ) : (
                          <>
                            <FaCamera className="text-xs" />
                            <span>{avatarUrl ? 'Change Photo' : 'Upload Profile Photo *'}</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                    {/* Salutation */}
                    <div className="sm:col-span-3">
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                        Salutation <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="salutation"
                        value={profileForm.salutation}
                        onChange={handleInputChange}
                        disabled={isApproved}
                        className="w-full px-3.5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-secondary/50 disabled:bg-gray-100 dark:disabled:bg-gray-800/60 disabled:cursor-not-allowed disabled:text-gray-700 dark:disabled:text-gray-300"
                      >
                        <option value="Mr.">Mr.</option>
                        <option value="Ms.">Ms.</option>
                        <option value="Mrs.">Mrs.</option>
                        <option value="Dr.">Dr.</option>
                        <option value="Adv.">Adv.</option>
                      </select>
                    </div>

                    {/* First Name */}
                    <div className="sm:col-span-3">
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={profileForm.firstName}
                        onChange={handleInputChange}
                        disabled={isApproved}
                        required
                        placeholder="e.g. Abi"
                        className="w-full px-3.5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-secondary/50 disabled:bg-gray-100 dark:disabled:bg-gray-800/60 disabled:cursor-not-allowed disabled:text-gray-700 dark:disabled:text-gray-300"
                      />
                    </div>

                    {/* Middle Name */}
                    <div className="sm:col-span-3">
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                        Middle Name (Optional)
                      </label>
                      <input
                        type="text"
                        name="middleName"
                        value={profileForm.middleName}
                        onChange={handleInputChange}
                        disabled={isApproved}
                        placeholder="e.g. Kumar"
                        className="w-full px-3.5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-secondary/50 disabled:bg-gray-100 dark:disabled:bg-gray-800/60 disabled:cursor-not-allowed disabled:text-gray-700 dark:disabled:text-gray-300"
                      />
                    </div>

                    {/* Last Name */}
                    <div className="sm:col-span-3">
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={profileForm.lastName}
                        onChange={handleInputChange}
                        disabled={isApproved}
                        required
                        placeholder="e.g. Nandhan"
                        className="w-full px-3.5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-secondary/50 disabled:bg-gray-100 dark:disabled:bg-gray-800/60 disabled:cursor-not-allowed disabled:text-gray-700 dark:disabled:text-gray-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {/* Mobile Number */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                        Registered Mobile Number (Verified)
                      </label>
                      <div className="relative flex items-center">
                        <input
                          type="text"
                          name="mobileNumber"
                          value={profileForm.mobileNumber}
                          disabled
                          className="w-full px-3.5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900/60 text-gray-600 dark:text-gray-400 text-sm cursor-not-allowed"
                        />
                        <span className="absolute right-3 text-emerald-500 text-xs font-bold flex items-center gap-1">
                          <MdVerified /> Verified
                        </span>
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={profileForm.email}
                        onChange={handleInputChange}
                        disabled={isApproved}
                        required
                        placeholder="advocate@example.com"
                        className="w-full px-3.5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-secondary/50 disabled:bg-gray-100 dark:disabled:bg-gray-800/60 disabled:cursor-not-allowed disabled:text-gray-700 dark:disabled:text-gray-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Professional Qualifications */}
                <div className="space-y-4 pt-4">
                  <div className="border-b border-gray-100 dark:border-gray-700/80 pb-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <FaGavel className="text-secondary" />
                      <span>Professional Legal Credentials</span>
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Bar Council ID / Name */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                        Bar Council ID <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="barCouncilId"
                        value={profileForm.barCouncilId}
                        onChange={handleInputChange}
                        disabled={isApproved}
                        required
                        className="w-full px-3.5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-secondary/50 uppercase disabled:bg-gray-100 dark:disabled:bg-gray-800/60 disabled:cursor-not-allowed disabled:text-gray-700 dark:disabled:text-gray-300"
                      />
                    </div>

                    {/* Enrollment Number */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                        Enrollment Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="enrollmentNo"
                        value={profileForm.enrollmentNo}
                        onChange={handleInputChange}
                        disabled={isApproved}
                        required
                        className="w-full px-3.5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-secondary/50 uppercase font-mono disabled:bg-gray-100 dark:disabled:bg-gray-800/60 disabled:cursor-not-allowed disabled:text-gray-700 dark:disabled:text-gray-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {/* Legal Experience (Years) */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300">
                          Experience (Years) <span className="text-red-500">*</span>
                        </label>
                        <span className="text-[11px] font-bold text-secondary">
                          minimum 3 yrs exp. required
                        </span>
                      </div>
                      <input
                        type="number"
                        name="experience"
                        min={3}
                        max={60}
                        value={profileForm.experience}
                        onChange={handleInputChange}
                        disabled={isApproved}
                        required
                        className="w-full px-3.5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-secondary/50 disabled:bg-gray-100 dark:disabled:bg-gray-800/60 disabled:cursor-not-allowed disabled:text-gray-700 dark:disabled:text-gray-300"
                      />
                    </div>

                    {/* Qualification */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                        Degree / Qualification <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="qualification"
                        value={profileForm.qualification}
                        onChange={handleInputChange}
                        disabled={isApproved}
                        required
                        placeholder="e.g. BBA, LLB, LLM"
                        className="w-full px-3.5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-secondary/50 disabled:bg-gray-100 dark:disabled:bg-gray-800/60 disabled:cursor-not-allowed disabled:text-gray-700 dark:disabled:text-gray-300"
                      />
                    </div>
                  </div>

                  {/* Specializations Multi-select */}
                  <div className="pt-2">
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Legal Specializations & Practice Areas <span className="text-red-500">*</span>
                    </label>

                    {/* Selected Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {profileForm.specialization.map((spec) => (
                        <span
                          key={spec}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary text-white text-xs font-semibold shadow-xs"
                        >
                          <span>{spec}</span>
                          {!isApproved && (
                            <button
                              type="button"
                              onClick={() => handleRemoveSpecialization(spec)}
                              className="text-white/80 hover:text-white hover:bg-black/20 rounded-full p-0.5 cursor-pointer"
                            >
                              <FaTimes className="text-[10px]" />
                            </button>
                          )}
                        </span>
                      ))}
                      {profileForm.specialization.length === 0 && (
                        <span className="text-xs text-red-500 font-medium">Please select at least 1 specialization.</span>
                      )}
                    </div>

                    {/* Suggested Badges (Hidden when approved to maintain locked state) */}
                    {!isApproved && (
                      <div className="p-3 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-700/60">
                        <p className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                          Click to add / toggle practice areas:
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {dynamicSpecializations.map((spec) => {
                            const isSelected = profileForm.specialization.includes(spec);
                            return (
                              <button
                                key={spec}
                                type="button"
                                onClick={() => toggleSpecialization(spec)}
                                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${isSelected
                                  ? 'bg-secondary text-white font-bold shadow-xs'
                                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-secondary hover:text-primary dark:hover:text-teal-400'
                                  }`}
                              >
                                {isSelected ? '✓ ' : '+ '}
                                {spec}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* About Me */}
                  <div className="pt-2">
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                      Professional Summary / Bio (Shown to Clients) (Optional)
                    </label>
                    <textarea
                      rows={4}
                      name="aboutAs"
                      value={profileForm.aboutAs}
                      onChange={handleInputChange}
                      disabled={isApproved}
                      placeholder="Briefly describe your legal career, court experience, and areas of expertise..."
                      className="w-full px-3.5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-secondary/50 resize-none disabled:bg-gray-100 dark:disabled:bg-gray-800/60 disabled:cursor-not-allowed disabled:text-gray-700 dark:disabled:text-gray-300"
                    />
                  </div>
                </div>

                {/* Section 3: Office Address & Contact Information */}
                <div className="space-y-4 pt-4">
                  <div className="border-b border-gray-100 dark:border-gray-700/80 pb-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <FaBuilding className="text-secondary" />
                      <span>Office Address & Practice Location</span>
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Address Line 1 */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                        Address Line 1 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="address1"
                        value={profileForm.address1}
                        onChange={handleInputChange}
                        disabled={isApproved}
                        required
                        placeholder="Chamber No, Street, Court Complex"
                        className="w-full px-3.5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-secondary/50 disabled:bg-gray-100 dark:disabled:bg-gray-800/60 disabled:cursor-not-allowed disabled:text-gray-700 dark:disabled:text-gray-300"
                      />
                    </div>

                    {/* Address Line 2 */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                        Address Line 2 (Optional)
                      </label>
                      <input
                        type="text"
                        name="address2"
                        value={profileForm.address2}
                        onChange={handleInputChange}
                        disabled={isApproved}
                        placeholder="Area, Landmark"
                        className="w-full px-3.5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-secondary/50 disabled:bg-gray-100 dark:disabled:bg-gray-800/60 disabled:cursor-not-allowed disabled:text-gray-700 dark:disabled:text-gray-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* State Dropdown */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                        State <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="stateCode"
                        value={profileForm.stateCode}
                        onChange={handleStateChange}
                        disabled={isApproved}
                        required
                        className="w-full px-3.5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-secondary/50 disabled:bg-gray-100 dark:disabled:bg-gray-800/60 disabled:cursor-not-allowed disabled:text-gray-700 dark:disabled:text-gray-300"
                      >
                        <option value="">{isStatesLoading ? 'Loading States...' : 'Select State'}</option>
                        {stateList.map((st) => (
                          <option key={st.stateCode} value={st.stateCode}>
                            {st.stateName}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* District Dropdown */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                        District <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="districtCode"
                        value={profileForm.districtCode}
                        onChange={handleInputChange}
                        disabled={isApproved || !profileForm.stateCode || isDistrictsLoading}
                        required
                        className="w-full px-3.5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-secondary/50 disabled:opacity-60 disabled:cursor-not-allowed disabled:bg-gray-100 dark:disabled:bg-gray-800/60 disabled:text-gray-700 dark:disabled:text-gray-300"
                      >
                        {!profileForm.stateCode ? (
                          <option value="">Select State first</option>
                        ) : isDistrictsLoading ? (
                          <option value="">Loading Districts...</option>
                        ) : districtList.length === 0 ? (
                          <option value="">No districts found</option>
                        ) : (
                          <>
                            <option value="">Select District</option>
                            {districtList.map((dt) => (
                              <option key={dt.districtCode} value={dt.districtCode}>
                                {dt.districtName}
                              </option>
                            ))}
                          </>
                        )}
                      </select>
                    </div>

                    {/* City Input (Separate input) */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                        City / Town <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={profileForm.city}
                        onChange={handleInputChange}
                        disabled={isApproved}
                        required
                        placeholder="e.g. Chennai / Tirunelveli"
                        className="w-full px-3.5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-secondary/50 disabled:bg-gray-100 dark:disabled:bg-gray-800/60 disabled:cursor-not-allowed disabled:text-gray-700 dark:disabled:text-gray-300"
                      />
                    </div>

                    {/* Postal Pincode */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                        Postal Pincode <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        value={profileForm.pincode}
                        onChange={handleInputChange}
                        disabled={isApproved}
                        required
                        placeholder="e.g. 628501"
                        maxLength={6}
                        className="w-full px-3.5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-secondary/50 disabled:bg-gray-100 dark:disabled:bg-gray-800/60 disabled:cursor-not-allowed disabled:text-gray-700 dark:disabled:text-gray-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 4: PAN & Tax Verification */}
                <div className="space-y-4 pt-4">
                  <div className="border-b border-gray-100 dark:border-gray-700/80 pb-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <FaIdCard className="text-secondary" />
                      <span>PAN & Identity Proof Details</span>
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* PAN Card Number */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300">
                          PAN Card Number <span className="text-red-500">*</span>
                        </label>
                        {profileForm.panCardNumber.length === 10 && (
                          <span className={`text-[10px] font-bold flex items-center gap-1 ${PAN_REGEX.test(profileForm.panCardNumber)
                            ? 'text-emerald-600 dark:text-emerald-400'
                            : 'text-red-500'
                            }`}>
                            {PAN_REGEX.test(profileForm.panCardNumber) ? '✓ Valid PAN' : '✗ Invalid PAN Format'}
                          </span>
                        )}
                      </div>
                      <input
                        type="text"
                        name="panCardNumber"
                        value={profileForm.panCardNumber}
                        onChange={handleInputChange}
                        disabled={isApproved}
                        required
                        placeholder="e.g. ABCDE1234F"
                        maxLength={10}
                        className="w-full px-3.5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-secondary/50 uppercase font-mono tracking-wider disabled:bg-gray-100 dark:disabled:bg-gray-800/60 disabled:cursor-not-allowed disabled:text-gray-700 dark:disabled:text-gray-300"
                      />
                      <p className="text-[10px] text-gray-400 mt-1">
                        Indian PAN: 5 letters, 4 numbers, 1 letter (e.g. ABCDE1234F)
                      </p>
                    </div>

                    {/* Proof Type */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                        ID Proof type <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="proofType"
                        value={profileForm.proofType}
                        onChange={handleInputChange}
                        disabled={isApproved}
                        required
                        className="w-full px-3.5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-secondary/50 disabled:bg-gray-100 dark:disabled:bg-gray-800/60 disabled:cursor-not-allowed disabled:text-gray-700 dark:disabled:text-gray-300"
                      >
                        {proofTypeOptions.length === 0 ? (
                          <option value="">
                            {isProofTypeLoading ? 'Loading proof types...' : 'Select ID Proof type'}
                          </option>
                        ) : (
                          <>
                            <option value="">Select ID Proof type</option>
                            {proofTypeOptions.map((pt, idx) => {
                              const val = typeof pt === 'object' && pt !== null
                                ? (pt.value ?? pt.id ?? pt.key ?? pt.proofType ?? pt.name ?? pt.label ?? idx)
                                : pt;
                              const label = typeof pt === 'object' && pt !== null
                                ? (pt.label ?? pt.name ?? pt.proofType ?? pt.value ?? pt.key ?? String(val))
                                : pt;
                              return (
                                <option key={String(val) + '_' + idx} value={val}>
                                  {label}
                                </option>
                              );
                            })}
                          </>
                        )}
                      </select>
                    </div>
                  </div>
                </div>
              </fieldset>

              {/* Next / Proceed Button */}
              <div className="pt-6 border-t border-gray-100 dark:border-gray-700/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                {isApproved ? (
                  <>
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 dark:text-emerald-300">
                      <MdVerified className="text-base text-emerald-500" />
                      <span>Advocate credentials are verified and locked.</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveTab('documents');
                        window.scrollTo({ top: 380, behavior: 'smooth' });
                      }}
                      className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/95 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-base"
                    >
                      <span>View Verification Documents</span>
                      <FaArrowRight className="text-sm" />
                    </button>
                  </>
                ) : (
                  <>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Step 1 of 2: Fill in your credentials and proceed to review/upload verification documents.
                    </p>
                    <button
                      type="submit"
                      disabled={updateProfileMutation.isPending}
                      className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/95 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 text-base"
                    >
                      {updateProfileMutation.isPending ? (
                        <>
                          <FaSpinner className="animate-spin text-lg" />
                          <span>Saving & Proceeding...</span>
                        </>
                      ) : (
                        <>
                          <span>Next</span>
                          <FaArrowRight className="text-sm" />
                        </>
                      )}
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>
        )}

        {/* Tab 2: KYC & Verification Documents */}
        {activeTab === 'documents' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 shadow-xl border border-teal-100 dark:border-gray-700">
              {/* Verified & Approved Notice */}
              {isApproved && (
                <div className="mb-6 p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 flex items-start sm:items-center gap-3.5 shadow-xs">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 text-2xl">
                    <FaShieldAlt />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-sm sm:text-base text-emerald-950 dark:text-emerald-100 flex items-center gap-2">
                      <MdVerified className="text-emerald-500 text-lg" />
                      <span>Documents Verified & Approved</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-300 leading-relaxed">
                      All Bar Council and KYC identification documents have been verified and approved by MLawyer Compliance. Document replacement is locked.
                    </p>
                  </div>
                </div>
              )}

              <div className="border-b border-gray-100 dark:border-gray-700/80 pb-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <FaFileContract className="text-secondary" />
                    <span>Advocate KYC & Legal Credential Documents</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {isApproved
                      ? 'View your verified Bar Council credentials and identity proof documents.'
                      : 'Upload clear scanned copies or photos of your identification and Bar Council credentials for fast-track verification.'}
                  </p>
                </div>
              </div>

              {/* Save Profile Feedback message */}
              {saveSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-sm flex items-center gap-3 font-semibold">
                  <MdCheckCircleOutline className="text-2xl shrink-0" />
                  <span>{saveSuccess}</span>
                </div>
              )}
              {saveError && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm flex items-center gap-3 font-semibold">
                  <MdErrorOutline className="text-2xl shrink-0" />
                  <span>{saveError}</span>
                </div>
              )}

              {/* Document message */}
              {docMessage.text && (
                <div
                  className={`mb-6 p-4 rounded-xl text-sm flex items-center gap-3 font-semibold ${docMessage.type === 'error'
                    ? 'bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300'
                    : 'bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300'
                    }`}
                >
                  {docMessage.type === 'error' ? <MdErrorOutline className="text-xl" /> : <MdCheckCircleOutline className="text-xl" />}
                  <span>{docMessage.text}</span>
                </div>
              )}

              {/* Document Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { key: 'professionalCertificate', label: 'Bar Council Certificate', required: true },
                  { key: 'panCard', label: 'PAN Card', required: true },
                  { key: 'aadhaarFront', label: 'Aadhaar Card (Front)', required: true },
                  { key: 'aadhaarBack', label: 'Aadhaar Card (Back)', required: true },
                  { key: 'checkLeaf', label: 'Bank Cheque Leaf / Passbook', required: false },
                  { key: 'proofUrl', label: `ID Proof (${profileForm.proofType || 'Proof'})`, required: false },
                ].map((doc) => {
                  let rawUrl = docs[doc.key];
                  if (!rawUrl && doc.key === 'aadhaarFront') rawUrl = docs['aadharFront'];
                  if (!rawUrl && doc.key === 'aadhaarBack') rawUrl = docs['aadharBack'];
                  if (!rawUrl && doc.key === 'proofUrl') rawUrl = docs['proof'];
                  const fullUrl = getFullMediaUrl(rawUrl);
                  const isUploaded = Boolean(rawUrl);
                  const isCurrentUploading = uploadingDocKey === doc.key;

                  return (
                    <div
                      key={doc.key}
                      className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/50 p-5 flex flex-col justify-between hover:border-teal-300 dark:hover:border-teal-700 transition-all shadow-xs"
                    >
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h4 className="font-bold text-sm text-gray-900 dark:text-white">
                              {doc.label} {doc.required && <span className="text-red-500">*</span>}
                            </h4>
                            <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                              {getDocumentDescription(doc.key)}
                            </p>
                          </div>
                          {isUploaded ? (
                            <span className="shrink-0 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 flex items-center gap-1 border border-emerald-200 dark:border-emerald-800">
                              <FaCheckCircle className="text-[9px]" /> Uploaded
                            </span>
                          ) : (
                            <span className="shrink-0 px-2 py-0.5 rounded-full text-[10px] font-bold bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                              Pending
                            </span>
                          )}
                        </div>

                        {/* Thumbnail / Status View */}
                        <div className="h-32 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/80 flex items-center justify-center overflow-hidden relative group">
                          {isUploaded ? (
                            <>
                              <img
                                src={fullUrl}
                                alt={doc.label}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                }}
                              />
                              <button
                                type="button"
                                onClick={() => setPreviewModalUrl(fullUrl)}
                                className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-1 text-xs font-semibold cursor-pointer"
                              >
                                <FaEye /> View Document
                              </button>
                            </>
                          ) : (
                            <div className="text-center p-3 text-gray-400">
                              <FaFileContract className="text-3xl mx-auto mb-1 opacity-50" />
                              <span className="text-xs">No file uploaded</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700/80 flex items-center gap-2">
                        {isApproved ? (
                          <>
                            <div className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-xs">
                              <FaShieldAlt className="text-emerald-500 text-xs" />
                              <span>Verified & Locked</span>
                            </div>
                            {isUploaded && (
                              <button
                                type="button"
                                onClick={() => setPreviewModalUrl(fullUrl)}
                                className="py-2.5 px-3 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer transition-all"
                              >
                                <FaEye /> View
                              </button>
                            )}
                          </>
                        ) : (
                          <label className="flex-1 py-2 px-3 rounded-xl bg-primary hover:bg-primary/90 text-white text-xs font-bold text-center cursor-pointer transition-all flex items-center justify-center gap-1.5 shadow-xs">
                            {isCurrentUploading ? (
                              <>
                                <FaSpinner className="animate-spin" />
                                <span>Uploading...</span>
                              </>
                            ) : (
                              <>
                                <FaUpload className="text-[11px]" />
                                <span>{isUploaded ? 'Replace Document' : 'Upload Document'}</span>
                              </>
                            )}
                            <input
                              type="file"
                              accept="image/*,application/pdf"
                              disabled={isCurrentUploading}
                              onChange={(e) => handleDocumentFileSelect(doc.key, e)}
                              className="hidden"
                            />
                          </label>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Navigation & Save Profile Changes Button */}
              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('profile');
                    window.scrollTo({ top: 380, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-6 py-3.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  <span>← Back to Profile & Credentials</span>
                </button>

                {isApproved ? (
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab('bankDetails');
                      window.scrollTo({ top: 380, behavior: 'smooth' });
                    }}
                    className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/95 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-base"
                  >
                    <span>Proceed to Account Details</span>
                    <FaArrowRight className="text-sm" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSaveDocumentsAndNext}
                    disabled={updateProfileMutation.isPending}
                    className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/95 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 text-base"
                  >
                    {updateProfileMutation.isPending ? (
                      <>
                        <FaSpinner className="animate-spin text-lg" />
                        <span>Saving & Proceeding...</span>
                      </>
                    ) : (
                      <>
                        <span>Save and Next</span>
                        <FaArrowRight className="text-sm" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Bank & Account Details */}
        {activeTab === 'bankDetails' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-10 shadow-xl border border-teal-100 dark:border-gray-700">
              {/* Header Title & Subtitle */}
              <div className="border-b border-gray-100 dark:border-gray-700/80 pb-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-secondary mb-1">
                    <FaShieldAlt className="text-sm" />
                    <span>Step 3 of 4 · Financial Settlements</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white flex items-center gap-2.5">
                    <FaUniversity className="text-secondary" />
                    <span>Advocate Bank Account & Settlement Details</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-2xl">
                    Provide your verified Indian bank account details. Consultation fees (70%) are securely transferred directly to this account within 24–48 hours after completed sessions.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-bold shrink-0 self-start md:self-auto shadow-xs">
                  <FaShieldAlt className="text-emerald-500 text-sm" />
                  <span>256-Bit Bank Grade Encryption</span>
                </div>
              </div>

              {/* Feedback messages */}
              {bankSaveSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-sm flex items-center gap-3 font-semibold">
                  <MdCheckCircleOutline className="text-2xl shrink-0" />
                  <span>{bankSaveSuccess}</span>
                </div>
              )}
              {bankSaveError && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm flex items-center gap-3 font-semibold">
                  <MdErrorOutline className="text-2xl shrink-0" />
                  <span>{bankSaveError}</span>
                </div>
              )}

              {/* Live Interactive Bank Card Preview */}
              <div className="mb-8">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-950 via-teal-900 to-slate-900 text-white p-6 sm:p-7 shadow-xl border border-teal-500/20 max-w-md mx-auto sm:mx-0">
                  <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-secondary/15 blur-2xl pointer-events-none" />
                  <div className="absolute right-6 top-6 text-2xl font-black italic tracking-wider text-white/20 select-none">
                    MLAWYER PAYOUT
                  </div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-9 rounded-md bg-gradient-to-tr from-amber-300 to-amber-100 shadow-sm flex items-center justify-center">
                      <div className="w-9 h-7 border border-amber-900/30 rounded flex flex-col justify-around py-1 px-1.5 opacity-80">
                        <div className="h-0.5 bg-amber-900/40 rounded" />
                        <div className="h-0.5 bg-amber-900/40 rounded" />
                        <div className="h-0.5 bg-amber-900/40 rounded" />
                      </div>
                    </div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 text-teal-200">
                      {bankForm.accountType === 'CURRENT' ? 'Current Account' : 'Savings Account'}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-teal-300/80">
                        Account Number
                      </div>
                      <div className="font-mono text-lg sm:text-xl font-bold tracking-widest text-white">
                        {bankForm.accountNumber
                          ? bankForm.accountNumber.replace(/(\d{4})/g, '$1 ').trim()
                          : '•••• •••• •••• ••••'}
                      </div>
                    </div>

                    <div className="flex items-end justify-between pt-1">
                      <div>
                        <div className="text-[10px] uppercase font-bold tracking-wider text-teal-300/80">
                          Account Holder
                        </div>
                        <div className="text-sm sm:text-base font-bold tracking-wide uppercase truncate max-w-[200px]">
                          {bankForm.accountHolderName || 'Advocate Legal Name'}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] uppercase font-bold tracking-wider text-teal-300/80">
                          IFSC Code
                        </div>
                        <div className="font-mono text-sm font-bold tracking-wider text-amber-300">
                          {bankForm.ifsc || '•••••••••••'}
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-teal-200/80">
                      <span>{bankForm.bankName || 'Bank Name Not Specified'}</span>
                      <span>{bankForm.branchName ? `${bankForm.branchName} Branch` : 'Branch'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bank Account Form Fields */}
              <form onSubmit={handleSaveBankDetails} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Account Holder Name */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                      Account Holder Legal Name (as per Bank Records) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="accountHolderName"
                      value={bankForm.accountHolderName}
                      onChange={handleBankInputChange}
                      placeholder="e.g. Adv. Rajesh Kumar"
                      required
                      className="w-full px-3.5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-secondary/50"
                    />
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">
                      Must match the legal name on your PAN and Bar Council certificate for automated fee settlements.
                    </p>
                  </div>

                  {/* Bank Name */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                      Bank Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="bankName"
                      value={bankForm.bankName}
                      onChange={handleBankInputChange}
                      placeholder="e.g. State Bank of India, HDFC Bank, ICICI Bank"
                      required
                      className="w-full px-3.5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-secondary/50"
                    />
                  </div>

                  {/* Branch Name */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                      Branch Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="branchName"
                      value={bankForm.branchName}
                      onChange={handleBankInputChange}
                      placeholder="e.g. High Court Branch / Fort Branch"
                      required
                      className="w-full px-3.5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-secondary/50"
                    />
                  </div>

                  {/* Bank Account Number */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                      Bank Account Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      name="accountNumber"
                      value={bankForm.accountNumber}
                      onChange={handleBankInputChange}
                      placeholder="e.g. 50100234567890"
                      required
                      className="w-full px-3.5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm font-mono focus:outline-hidden focus:ring-2 focus:ring-secondary/50"
                    />
                  </div>

                  {/* Confirm Bank Account Number */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300">
                        Confirm Bank Account Number <span className="text-red-500">*</span>
                      </label>
                      {bankForm.confirmAccountNumber && (
                        bankForm.accountNumber === bankForm.confirmAccountNumber ? (
                          <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                            <FaCheckCircle className="text-[10px]" /> Numbers Match
                          </span>
                        ) : (
                          <span className="text-[11px] font-bold text-red-500">
                            Numbers do not match
                          </span>
                        )
                      )}
                    </div>
                    <input
                      type="text"
                      inputMode="numeric"
                      name="confirmAccountNumber"
                      value={bankForm.confirmAccountNumber}
                      onChange={handleBankInputChange}
                      placeholder="Re-enter bank account number"
                      required
                      className={`w-full px-3.5 py-3 rounded-xl border text-sm font-mono focus:outline-hidden focus:ring-2 focus:ring-secondary/50 bg-white dark:bg-gray-900 text-gray-900 dark:text-white ${bankForm.confirmAccountNumber && bankForm.accountNumber !== bankForm.confirmAccountNumber
                        ? 'border-red-400 dark:border-red-600'
                        : 'border-gray-200 dark:border-gray-700'
                        }`}
                    />
                  </div>

                  {/* IFSC Code */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                      IFSC Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="ifsc"
                      value={bankForm.ifsc}
                      onChange={handleBankInputChange}
                      placeholder="e.g. SBIN0001234 or HDFC0000001"
                      maxLength={11}
                      required
                      className="w-full px-3.5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm font-mono uppercase focus:outline-hidden focus:ring-2 focus:ring-secondary/50"
                    />
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">
                      11 characters alphanumeric code printed on your cheque leaf or bank passbook.
                    </p>
                  </div>

                  {/* Account Type */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                      Account Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="accountType"
                      value={bankForm.accountType}
                      onChange={handleBankInputChange}
                      required
                      className="w-full px-3.5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-secondary/50"
                    >
                      <option value="SAVINGS">Savings Account (SAVINGS)</option>
                      <option value="CURRENT">Current Account (CURRENT)</option>
                    </select>
                  </div>

                  {/* Primary Payout Toggle */}
                  <div className="sm:col-span-2 pt-2">
                    <label className="inline-flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="primary"
                        checked={bankForm.primary}
                        onChange={handleBankInputChange}
                        className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-secondary"
                      />
                      <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Set as Primary Bank Account for consultation fee payouts
                      </span>
                    </label>
                  </div>
                </div>

                {/* Navigation and Save and Finish Action Buttons */}
                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab('documents');
                      window.scrollTo({ top: 380, behavior: 'smooth' });
                    }}
                    className="w-full sm:w-auto px-6 py-3.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
                  >
                    <span>← Back to KYC Documents</span>
                  </button>

                  <button
                    type="submit"
                    disabled={updateAccountMutation.isPending}
                    className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/95 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 text-base"
                  >
                    {updateAccountMutation.isPending ? (
                      <>
                        <FaSpinner className="animate-spin text-lg" />
                        <span>Saving & Finishing...</span>
                      </>
                    ) : (
                      <>
                        <span>Save and Finish</span>
                        <FaArrowRight className="text-sm" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Tab 4: Account & Mobile Pro App */}
        {activeTab === 'account' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Download MLawyer Pro App */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 shadow-xl border border-teal-100 dark:border-gray-700 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/60 text-primary dark:text-teal-400 flex items-center justify-center text-2xl">
                  <FaGavel />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  MLawyer Pro Advocate App
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Download the MLawyer Pro Advocate application on your Android or iOS device to receive instant incoming client audio & video consultation requests.
                </p>
                <ul className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 space-y-2 pt-2">
                  <li className="flex items-center gap-2">
                    <MdCheckCircleOutline className="text-emerald-500 shrink-0" />
                    <span>Instant push notifications for client bookings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MdCheckCircleOutline className="text-emerald-500 shrink-0" />
                    <span>Direct in-app secure video/audio consultation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MdCheckCircleOutline className="text-emerald-500 shrink-0" />
                    <span>Direct bank account fee settlements</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.mlawyer.lawyer&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 px-4 py-2.5 bg-black text-white rounded-xl hover:bg-gray-800 transition-all shadow-md group"
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
                  className="flex-1 flex items-center justify-center gap-3 px-4 py-2.5 bg-black text-white rounded-xl hover:bg-gray-800 transition-all shadow-md group"
                >
                  <FaApple className="text-2xl text-white shrink-0 group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-semibold tracking-wider text-gray-300 leading-tight">Download on the</div>
                    <div className="text-sm font-bold leading-tight">App Store</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Account Details & Security */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 shadow-xl border border-teal-100 dark:border-gray-700 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-secondary flex items-center justify-center text-2xl">
                  <FaShieldAlt />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Account Status & Security
                </h3>

                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-4 border border-gray-100 dark:border-gray-700/60 space-y-2.5 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Account ID:</span>
                    <span className="font-mono text-gray-900 dark:text-white font-semibold">{userId || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Role:</span>
                    <span className="font-semibold text-secondary">{role || 'LAWYER'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Verification Status:</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">{currentStatus}</span>
                  </div>
                  {bankForm.bankName && (
                    <div className="flex justify-between pt-2 border-t border-gray-200 dark:border-gray-700/80">
                      <span className="text-gray-500 dark:text-gray-400">Payout Bank:</span>
                      <span className="font-semibold text-gray-900 dark:text-white truncate max-w-[170px]">
                        {bankForm.bankName} {bankForm.accountNumber ? `(••••${bankForm.accountNumber.slice(-4)})` : ''}
                      </span>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('bankDetails');
                    window.scrollTo({ top: 380, behavior: 'smooth' });
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-primary dark:text-teal-300 border border-teal-200 dark:border-teal-800 font-bold hover:bg-teal-100 dark:hover:bg-teal-900/50 transition-all flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm"
                >
                  <FaUniversity className="text-sm" />
                  <span>Manage Bank Account Details</span>
                </button>

                <p className="text-xs text-center text-gray-500 dark:text-gray-400 pt-1">
                  If you have any queries, email to{' '}
                  <a
                    href="mailto:support@mlawyer.in"
                    className="font-semibold text-primary dark:text-teal-400 hover:underline inline-flex items-center gap-1 align-baseline"
                  >
                    <FaEnvelope className="text-[10px] shrink-0" />
                    <span>support@mlawyer.in</span>
                  </a>
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-700/80">
                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full py-3.5 px-4 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 font-bold hover:bg-red-600 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  <FaSignOutAlt />
                  <span>Log Out of Advocate Portal</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Document Preview Modal */}
      {previewModalUrl && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setPreviewModalUrl(null)}
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-2xl p-4 max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-base text-gray-900 dark:text-white">
                Document Preview
              </h3>
              <button
                type="button"
                onClick={() => setPreviewModalUrl(null)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1"
              >
                <FaTimes className="text-lg" />
              </button>
            </div>
            <div className="flex-1 overflow-auto py-4 flex items-center justify-center">
              <img
                src={previewModalUrl}
                alt="Document Preview"
                className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-md"
              />
            </div>
            <div className="pt-3 border-t border-gray-200 dark:border-gray-700 flex justify-end">
              <a
                href={previewModalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-xl hover:bg-primary/90"
              >
                Open in Full Tab
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileAdvocate;
