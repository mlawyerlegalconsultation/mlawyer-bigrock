import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

const BASE_API_URL = 'https://api.mlawyer.in';
const SESSION_TIMEOUT_MS = 15 * 60 * 1000; // 15 minutes session timeout

// Helper to check if stored session has expired
const isSessionExpired = () => {
  const expiry = localStorage.getItem('lawyer_session_expiry');
  if (!expiry) return false;
  return Date.now() >= Number(expiry);
};

// Helper to clear all auth storage keys
const clearAuthStorage = () => {
  localStorage.removeItem('lawyer_token');
  localStorage.removeItem('lawyer_refresh_token');
  localStorage.removeItem('lawyer_user_id');
  localStorage.removeItem('lawyer_role');
  localStorage.removeItem('lawyer_approval_status');
  localStorage.removeItem('lawyer_details');
  localStorage.removeItem('lawyer_session_expiry');
};

// Helper to generate or get a unique device token
const getDeviceToken = () => {
  let token = localStorage.getItem('mlawyer_device_token');
  if (!token) {
    token = 'web_' + Math.random().toString(36).substring(2) + Date.now().toString(36);
    localStorage.setItem('mlawyer_device_token', token);
  }
  return token;
};

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    if (isSessionExpired()) {
      clearAuthStorage();
      return null;
    }
    return localStorage.getItem('lawyer_token') || null;
  });
  const [refreshToken, setRefreshToken] = useState(() => {
    if (isSessionExpired()) return null;
    return localStorage.getItem('lawyer_refresh_token') || null;
  });
  const [userId, setUserId] = useState(() => {
    if (isSessionExpired()) return null;
    return localStorage.getItem('lawyer_user_id') || null;
  });
  const [role, setRole] = useState(() => {
    if (isSessionExpired()) return null;
    return localStorage.getItem('lawyer_role') || null;
  });
  const [approvalStatus, setApprovalStatus] = useState(() => {
    if (isSessionExpired()) return null;
    return localStorage.getItem('lawyer_approval_status') || null;
  });
  const [lawyerDetails, setLawyerDetails] = useState(() => {
    if (isSessionExpired()) return null;
    const saved = localStorage.getItem('lawyer_details');
    return saved ? JSON.parse(saved) : null;
  });
  const [loading, setLoading] = useState(false);

  const isAuthenticated = Boolean(token && userId);

  // Helper to format phone number to 91XXXXXXXXXX
  const formatMobileNumber = (phone) => {
    const cleaned = String(phone).replace(/\D/g, '');
    if (cleaned.startsWith('91') && cleaned.length === 12) {
      return cleaned;
    }
    return `91${cleaned.slice(-10)}`;
  };

  // Login handler
  const login = async (mobileNumber, password) => {
    setLoading(true);
    try {
      const payload = {
        mobileNumber: formatMobileNumber(mobileNumber),
        password: password.trim(),
        deviceToken: getDeviceToken(),
      };

      const response = await fetch(`${BASE_API_URL}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && (data.statusCode === 200 || data.status === 'OK') && data.result?.loginResponse) {
        const res = data.result.loginResponse;
        const newToken = res.token;
        const newRefreshToken = res.refreshToken || '';
        const newUserId = res.userId;
        const newRole = res.role || 'LAWYER';
        const newStatus = res.approvalStatus || 'PENDING';
        const expiryTime = Date.now() + SESSION_TIMEOUT_MS;

        setToken(newToken);
        setRefreshToken(newRefreshToken);
        setUserId(newUserId);
        setRole(newRole);
        setApprovalStatus(newStatus);

        localStorage.setItem('lawyer_token', newToken);
        localStorage.setItem('lawyer_refresh_token', newRefreshToken);
        localStorage.setItem('lawyer_user_id', newUserId);
        localStorage.setItem('lawyer_role', newRole);
        localStorage.setItem('lawyer_approval_status', newStatus);
        localStorage.setItem('lawyer_session_expiry', String(expiryTime));

        // Fetch lawyer details immediately
        await fetchLawyerProfile(newUserId, newToken);

        return { success: true, data: res };
      } else {
        const errorMsg = data?.error?.message || data?.error || data?.message || 'Invalid credentials. Please verify your mobile number and password.';
        return { success: false, error: typeof errorMsg === 'string' ? errorMsg : 'Invalid mobile number or password.' };
      }
    } catch (err) {
      console.error('Login error:', err);
      return { success: false, error: 'Network error occurred while connecting to the authentication server.' };
    } finally {
      setLoading(false);
    }
  };

  // Fetch Lawyer Profile
  const fetchLawyerProfile = async (uId = userId, uToken = token) => {
    if (!uId) return null;
    try {
      const headers = {
        'Content-Type': 'application/json',
      };
      if (uToken) {
        headers['Authorization'] = `Bearer ${uToken}`;
      }

      const response = await fetch(`${BASE_API_URL}/lawyer/${uId}`, {
        method: 'GET',
        headers,
      });

      const data = await response.json();
      if (response.ok && (data.statusCode === 200 || data.status === 'OK') && data.result?.lawyerDetails) {
        const details = data.result.lawyerDetails;
        setLawyerDetails(details);
        if (details.approvalInfo?.approvalStatus) {
          setApprovalStatus(details.approvalInfo.approvalStatus);
          localStorage.setItem('lawyer_approval_status', details.approvalInfo.approvalStatus);
        }
        localStorage.setItem('lawyer_details', JSON.stringify(details));
        return details;
      }
    } catch (err) {
      console.error('Error fetching lawyer profile:', err);
    }
    return null;
  };

  // Update Lawyer Profile
  const updateLawyerProfile = async (updatedData, uId = userId, uToken = token) => {
    if (!uId) return { success: false, error: 'User ID missing.' };
    setLoading(true);
    try {
      const headers = {
        'Content-Type': 'application/json',
      };
      if (uToken) {
        headers['Authorization'] = `Bearer ${uToken}`;
      }

      // Try PUT or POST to update profile endpoint
      let response = await fetch(`${BASE_API_URL}/lawyer/${uId}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(updatedData),
      });

      let data;
      try {
        data = await response.json();
      } catch {
        // Fallback to POST if PUT is not accepted
        response = await fetch(`${BASE_API_URL}/lawyer/${uId}`, {
          method: 'POST',
          headers,
          body: JSON.stringify(updatedData),
        });
        data = await response.json();
      }

      if (response.ok && (data.statusCode === 200 || data.status === 'OK') && data.result?.lawyerDetails) {
        const details = data.result.lawyerDetails;
        setLawyerDetails(details);
        localStorage.setItem('lawyer_details', JSON.stringify(details));
        return { success: true, details };
      } else {
        const errorMsg = data?.error?.message || data?.error || data?.message || 'Failed to update profile details.';
        return { success: false, error: typeof errorMsg === 'string' ? errorMsg : 'Failed to update profile.' };
      }
    } catch (err) {
      console.error('Error updating lawyer profile:', err);
      return { success: false, error: 'Network error while updating profile.' };
    } finally {
      setLoading(false);
    }
  };

  // Upload Profile Photo (PATCH API)
  const uploadProfilePhoto = async (file, uId = userId, uToken = token) => {
    if (!uId || !file) return { success: false, error: 'Missing file or user ID.' };
    try {
      const formData = new FormData();
      formData.append('Files', file);
      formData.append('file', file);
      formData.append('profile', file);

      const headers = {};
      if (uToken) {
        headers['Authorization'] = `Bearer ${uToken}`;
      }

      let response = await fetch(`${BASE_API_URL}/lawyer/upload/upload-profile/${uId}`, {
        method: 'PATCH',
        headers,
        body: formData,
      });

      let data;
      try {
        data = await response.json();
      } catch {
        // Fallback to POST if server expects POST
        response = await fetch(`${BASE_API_URL}/lawyer/upload/upload-profile/${uId}`, {
          method: 'POST',
          headers,
          body: formData,
        });
        data = await response.json();
      }

      if (response.ok && (data.statusCode === 200 || data.status === 'OK' || data.result)) {
        await fetchLawyerProfile(uId, uToken);
        return { success: true, data };
      } else {
        const errorMsg = data?.error?.message || data?.error || data?.message || 'Failed to upload profile photo.';
        return { success: false, error: typeof errorMsg === 'string' ? errorMsg : 'Failed to upload profile photo.' };
      }
    } catch (err) {
      console.error('Error uploading profile photo:', err);
      return { success: false, error: 'Network error while uploading photo.' };
    }
  };

  // Upload Document (PATCH /lawyer/upload/upload-document/{userId})
  const uploadDocument = async (documentType, file, uId = userId, uToken = token) => {
    if (!uId || !file) return { success: false, error: 'Missing document or user ID.' };
    try {
      const mapKey = (k) => {
        if (k === 'aadhaarFront' || k === 'aadharFront') return 'aadharFront';
        if (k === 'aadhaarBack' || k === 'aadharBack') return 'aadharBack';
        if (k === 'panCard') return 'panCard';
        if (k === 'checkLeaf') return 'checkLeaf';
        if (k === 'professionalCertificate') return 'professionalCertificate';
        if (k === 'proofUrl' || k === 'proof') return 'proof';
        return k;
      };

      const swaggerKey = mapKey(documentType);
      const formData = new FormData();
      formData.append(swaggerKey, file);
      formData.append('documentType', swaggerKey);

      const headers = {};
      if (uToken) {
        headers['Authorization'] = `Bearer ${uToken}`;
      }

      let response = await fetch(`${BASE_API_URL}/lawyer/upload/upload-document/${uId}`, {
        method: 'PATCH',
        headers,
        body: formData,
      });

      let data;
      try {
        data = await response.json();
      } catch {
        response = await fetch(`${BASE_API_URL}/lawyer/upload/upload-document/${uId}`, {
          method: 'POST',
          headers,
          body: formData,
        });
        data = await response.json();
      }

      if (response.ok && (data.statusCode === 200 || data.status === 'OK' || data.result)) {
        await fetchLawyerProfile(uId, uToken);
        return { success: true, data };
      } else {
        const errorMsg = data?.error?.message || data?.error || data?.message || 'Failed to upload document.';
        return { success: false, error: typeof errorMsg === 'string' ? errorMsg : 'Failed to upload document.' };
      }
    } catch (err) {
      console.error('Error uploading document:', err);
      return { success: false, error: 'Network error while uploading document.' };
    }
  };

  // Logout handler
  const logout = () => {
    setToken(null);
    setRefreshToken(null);
    setUserId(null);
    setRole(null);
    setApprovalStatus(null);
    setLawyerDetails(null);
    clearAuthStorage();
  };

  // 15-minute Session Timeout & Auto Logout
  useEffect(() => {
    if (!token || !userId) return;

    let timeoutId = null;

    const checkSessionExpiry = () => {
      const storedExpiry = localStorage.getItem('lawyer_session_expiry');
      const now = Date.now();

      if (!storedExpiry) {
        const newExpiry = now + SESSION_TIMEOUT_MS;
        localStorage.setItem('lawyer_session_expiry', String(newExpiry));
        timeoutId = setTimeout(() => {
          logout();
        }, SESSION_TIMEOUT_MS);
        return;
      }

      const expiryTime = Number(storedExpiry);
      if (isNaN(expiryTime) || now >= expiryTime) {
        logout();
      } else {
        const remainingMs = expiryTime - now;
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          logout();
        }, remainingMs);
      }
    };

    checkSessionExpiry();

    const intervalId = setInterval(checkSessionExpiry, 10000);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        checkSessionExpiry();
      }
    };

    window.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', checkSessionExpiry);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      clearInterval(intervalId);
      window.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', checkSessionExpiry);
    };
  }, [token, userId]);

  // On mount, auto-fetch profile if userId and token exist
  useEffect(() => {
    if (userId && token) {
      fetchLawyerProfile(userId, token);
    }
  }, [userId, token]);

  return (
    <AuthContext.Provider
      value={{
        token,
        refreshToken,
        userId,
        role,
        approvalStatus,
        lawyerDetails,
        isAuthenticated,
        loading,
        login,
        logout,
        fetchLawyerProfile,
        updateLawyerProfile,
        uploadProfilePhoto,
        uploadDocument,
        setLawyerDetails,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
