import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const BASE_API_URL = 'https://api.mlawyer.in';

// Helper to generate or get a unique device token
const getDeviceToken = () => {
  let token = localStorage.getItem('mlawyer_device_token');
  if (!token) {
    token = 'web_' + Math.random().toString(36).substring(2) + Date.now().toString(36);
    localStorage.setItem('mlawyer_device_token', token);
  }
  return token;
};

// Helper to format phone number to 91XXXXXXXXXX
export const formatMobileNumber = (phone) => {
  const cleaned = String(phone).replace(/\D/g, '');
  if (cleaned.startsWith('91') && cleaned.length === 12) {
    return cleaned;
  }
  return `91${cleaned.slice(-10)}`;
};

/**
 * Hook to fetch advocate profile with TanStack Query
 */
export const useLawyerProfile = (userId, token) => {
  return useQuery({
    queryKey: ['lawyerProfile', userId],
    queryFn: async () => {
      if (!userId) return null;

      const headers = { 'Content-Type': 'application/json' };
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const response = await fetch(`${BASE_API_URL}/lawyer/${userId}`, {
        method: 'GET',
        headers,
      });

      const data = await response.json();

      if (response.ok && (data.statusCode === 200 || data.status === 'OK') && data.result?.lawyerDetails) {
        const details = data.result.lawyerDetails;
        localStorage.setItem('lawyer_details', JSON.stringify(details));
        if (details.approvalInfo?.approvalStatus) {
          localStorage.setItem('lawyer_approval_status', details.approvalInfo.approvalStatus);
        }
        return details;
      }
      throw new Error(data?.error?.message || data?.message || 'Failed to fetch lawyer profile.');
    },
    enabled: Boolean(userId),
    staleTime: 1000 * 60 * 3, // 3 minutes cache
    refetchOnWindowFocus: true,
  });
};

/**
 * Hook to fetch legal specializations config from https://api.mlawyer.in/config/specialization
 */
export const useSpecializationsConfig = (token) => {
  return useQuery({
    queryKey: ['configSpecialization', token],
    queryFn: async () => {
      try {
        const authToken = token || localStorage.getItem('lawyer_token');
        const headers = { 'Content-Type': 'application/json' };
        if (authToken) {
          headers['Authorization'] = `Bearer ${authToken}`;
        }
        const response = await fetch(`${BASE_API_URL}/config/specialization`, { headers });
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data?.configuration)) return data.configuration;
          if (Array.isArray(data?.result?.configuration)) return data.result.configuration;
          if (Array.isArray(data?.result)) return data.result;
          if (Array.isArray(data?.data)) return data.data;
          if (Array.isArray(data)) return data;
        }
      } catch (err) {
        console.error('Error fetching specialization config:', err);
      }
      return [];
    },
    staleTime: 1000 * 60 * 60, // 1 hour cache
  });
};

/**
 * Hook to fetch ID proof types config dynamically from https://api.mlawyer.in/config/proofType
 */
export const useProofTypesConfig = (token) => {
  return useQuery({
    queryKey: ['configProofType', token],
    queryFn: async () => {
      try {
        const authToken = token || localStorage.getItem('lawyer_token');
        const headers = { 'Content-Type': 'application/json' };
        if (authToken) {
          headers['Authorization'] = `Bearer ${authToken}`;
        }
        const response = await fetch(`${BASE_API_URL}/config/proofType`, { headers });
        if (response.ok) {
          const data = await response.json();
          let rawList = [];
          let defaultVal = '';

          if (Array.isArray(data?.configuration)) {
            rawList = data.configuration;
            defaultVal = data.defaultValue || '';
          } else if (Array.isArray(data?.result?.configuration)) {
            rawList = data.result.configuration;
            defaultVal = data.result.defaultValue || '';
          } else if (Array.isArray(data?.result?.proofType)) {
            rawList = data.result.proofType;
            defaultVal = data.result.defaultValue || '';
          } else if (Array.isArray(data?.result?.proofTypes)) {
            rawList = data.result.proofTypes;
            defaultVal = data.result.defaultValue || '';
          } else if (Array.isArray(data?.result)) {
            rawList = data.result;
          } else if (Array.isArray(data?.data)) {
            rawList = data.data;
            defaultVal = data.defaultValue || data.dataDefault || '';
          } else if (Array.isArray(data?.proofType)) {
            rawList = data.proofType;
            defaultVal = data.defaultValue || '';
          } else if (Array.isArray(data?.proofTypes)) {
            rawList = data.proofTypes;
            defaultVal = data.defaultValue || '';
          } else if (Array.isArray(data)) {
            rawList = data;
          }

          if (rawList.length > 0) {
            return {
              options: rawList,
              defaultValue: defaultVal || (typeof rawList[0] === 'object' ? (rawList[0]?.value || rawList[0]?.id || rawList[0]?.name || '') : rawList[0]) || '',
            };
          }
        }
      } catch (err) {
        console.error('Error fetching proofType config:', err);
      }
      return {
        options: [],
        defaultValue: '',
      };
    },
    staleTime: 1000 * 60 * 60, // 1 hour cache
  });
};

/**
 * Hook to fetch list of States dynamically from https://api.mlawyer.in/dropDown/state
 */
export const useStatesList = (token) => {
  return useQuery({
    queryKey: ['dropDownState', token],
    queryFn: async () => {
      try {
        const authToken = token || localStorage.getItem('lawyer_token');
        const headers = { 'Content-Type': 'application/json' };
        if (authToken) {
          headers['Authorization'] = `Bearer ${authToken}`;
        }
        const response = await fetch(`${BASE_API_URL}/dropDown/state`, { headers });
        if (response.ok) {
          const data = await response.json();
          const list = data?.result?.stateResponse?.stateList
            || data?.stateResponse?.stateList
            || data?.result?.stateList
            || data?.stateList
            || (Array.isArray(data?.result) ? data.result : [])
            || (Array.isArray(data) ? data : []);
          if (Array.isArray(list)) return list;
        }
      } catch (err) {
        console.error('Error fetching states dropdown list:', err);
      }
      return [];
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 hours cache
  });
};

/**
 * Hook to fetch list of Districts dynamically for a selected state from https://api.mlawyer.in/dropDown/state?stateCode=${stateCode}
 */
export const useDistrictsList = (stateCode, token) => {
  return useQuery({
    queryKey: ['dropDownDistrict', stateCode, token],
    queryFn: async () => {
      if (!stateCode) return [];
      try {
        const authToken = token || localStorage.getItem('lawyer_token');
        const headers = { 'Content-Type': 'application/json' };
        if (authToken) {
          headers['Authorization'] = `Bearer ${authToken}`;
        }
        const response = await fetch(`${BASE_API_URL}/dropDown/state?stateCode=${encodeURIComponent(stateCode)}`, { headers });
        if (response.ok) {
          const data = await response.json();
          const list = data?.result?.stateResponse?.districtList
            || data?.stateResponse?.districtList
            || data?.result?.districtList
            || data?.districtList
            || (Array.isArray(data?.result) ? data.result : [])
            || (Array.isArray(data) ? data : []);
          if (Array.isArray(list)) return list;
        }
      } catch (err) {
        console.error(`Error fetching districts for stateCode ${stateCode}:`, err);
      }
      return [];
    },
    enabled: Boolean(stateCode),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours cache
  });
};

/**
 * Hook for advocate login mutation
 */
export const useLoginMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ mobileNumber, password }) => {
      const payload = {
        mobileNumber: formatMobileNumber(mobileNumber),
        password: password.trim(),
        deviceToken: getDeviceToken(),
      };

      const response = await fetch(`${BASE_API_URL}/user/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && (data.statusCode === 200 || data.status === 'OK') && data.result?.loginResponse) {
        return data.result.loginResponse;
      }
      const errorMsg = data?.error?.message || data?.error || data?.message || 'Invalid credentials. Please try again.';
      throw new Error(typeof errorMsg === 'string' ? errorMsg : 'Authentication failed.');
    },
    onSuccess: (data) => {
      if (data?.userId) {
        queryClient.invalidateQueries({ queryKey: ['lawyerProfile', data.userId] });
      }
    },
  });
};

/**
 * Hook for profile update mutation
 */
export const useUpdateProfileMutation = (userId, token) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (updatedData) => {
      if (!userId) throw new Error('User ID is missing.');

      const headers = { 'Content-Type': 'application/json' };
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      let response = await fetch(`${BASE_API_URL}/lawyer/${userId}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(updatedData),
      });

      let data;
      try {
        data = await response.json();
      } catch {
        response = await fetch(`${BASE_API_URL}/lawyer/${userId}`, {
          method: 'POST',
          headers,
          body: JSON.stringify(updatedData),
        });
        data = await response.json();
      }

      if (response.ok && (data.statusCode === 200 || data.status === 'OK') && data.result?.lawyerDetails) {
        return data.result.lawyerDetails;
      }
      const errorMsg = data?.error?.message || data?.error || data?.message || 'Failed to update profile.';
      throw new Error(typeof errorMsg === 'string' ? errorMsg : 'Profile update failed.');
    },
    onSuccess: (details) => {
      if (userId) {
        queryClient.setQueryData(['lawyerProfile', userId], details);
        queryClient.invalidateQueries({ queryKey: ['lawyerProfile', userId] });
      }
      localStorage.setItem('lawyer_details', JSON.stringify(details));
    },
  });
};

/**
 * Hook for profile photo upload mutation (PATCH /lawyer/upload/upload-profile/{userId})
 */
export const useUploadProfilePhotoMutation = (userId, token) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (file) => {
      if (!userId || !file) throw new Error('Missing file or user ID.');

      const formData = new FormData();
      formData.append('Files', file);
      formData.append('file', file);
      formData.append('profile', file);

      const headers = {};
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      let response = await fetch(`${BASE_API_URL}/lawyer/upload/upload-profile/${userId}`, {
        method: 'PATCH',
        headers,
        body: formData,
      });

      let data;
      try {
        data = await response.json();
      } catch {
        response = await fetch(`${BASE_API_URL}/lawyer/upload/upload-profile/${userId}`, {
          method: 'POST',
          headers,
          body: formData,
        });
        data = await response.json();
      }

      if (response.ok && (data.statusCode === 200 || data.status === 'OK' || data.result)) {
        return data;
      }
      const errorMsg = data?.error?.message || data?.error || data?.message || 'Failed to upload photo.';
      throw new Error(typeof errorMsg === 'string' ? errorMsg : 'Photo upload failed.');
    },
    onSuccess: () => {
      if (userId) {
        queryClient.invalidateQueries({ queryKey: ['lawyerProfile', userId] });
      }
    },
  });
};

// Helper to map document keys to Swagger parameter names
const mapDocKeyToSwaggerField = (key) => {
  switch (key) {
    case 'aadhaarFront':
    case 'aadharFront':
      return 'aadharFront';
    case 'aadhaarBack':
    case 'aadharBack':
      return 'aadharBack';
    case 'panCard':
      return 'panCard';
    case 'checkLeaf':
      return 'checkLeaf';
    case 'professionalCertificate':
      return 'professionalCertificate';
    case 'proofUrl':
    case 'proof':
      return 'proof';
    default:
      return key;
  }
};

/**
 * Hook for document upload mutation (PATCH /lawyer/upload/upload-document/{userId})
 */
export const useUploadDocumentMutation = (userId, token) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ documentType, file }) => {
      if (!userId || !file) throw new Error('Missing document file or user ID.');

      const swaggerField = mapDocKeyToSwaggerField(documentType);
      const formData = new FormData();
      formData.append(swaggerField, file);

      // Also append documentType for backward-compatibility
      formData.append('documentType', swaggerField);

      const headers = {};
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      let response = await fetch(`${BASE_API_URL}/lawyer/upload/upload-document/${userId}`, {
        method: 'PATCH',
        headers,
        body: formData,
      });

      let data;
      try {
        data = await response.json();
      } catch {
        response = await fetch(`${BASE_API_URL}/lawyer/upload/upload-document/${userId}`, {
          method: 'POST',
          headers,
          body: formData,
        });
        data = await response.json();
      }

      if (response.ok && (data.statusCode === 200 || data.status === 'OK' || data.result)) {
        return data;
      }
      const errorMsg = data?.error?.message || data?.error || data?.message || 'Failed to upload document.';
      throw new Error(typeof errorMsg === 'string' ? errorMsg : 'Document upload failed.');
    },
    onSuccess: () => {
      if (userId) {
        queryClient.invalidateQueries({ queryKey: ['lawyerProfile', userId] });
      }
    },
  });
};
