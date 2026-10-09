import advocateImg from '../assets/img/advocate.png';

export const fallbackAvatars = [advocateImg];

export const dummyAdvocates = [
  {
    id: 'adv-1',
    name: 'Adv. Rajesh Raman',
    specializations: ['Civil Law', 'Property Law', 'Family Law'],
    experience: '12+ Years Exp.',
    rawExperience: 12,
    mobile: '98XXXXXX80',
    avatar: advocateImg,
    verified: true,
  },
  {
    id: 'adv-2',
    name: 'Adv. Priya Venkatesh',
    specializations: ['Corporate Law', 'Startup Legal', 'Contracts'],
    experience: '8+ Years Exp.',
    rawExperience: 8,
    mobile: '98XXXXXX45',
    avatar: advocateImg,
    verified: true,
  },
  {
    id: 'adv-3',
    name: 'Adv. Arun Kumar',
    specializations: ['Criminal Defense', 'Consumer Rights', 'Labour Law'],
    experience: '10+ Years Exp.',
    rawExperience: 10,
    mobile: '98XXXXXX92',
    avatar: advocateImg,
    verified: true,
  },
];

/**
 * Normalizes raw API response item from /lawyer/get_lawyer_mock_details
 */
export const normalizeLawyerMock = (lawyer, index = 0) => {
  const parts = [
    lawyer?.salutation,
    lawyer?.firstName,
    lawyer?.middleName,
    lawyer?.lastName,
  ].filter(Boolean);

  let rawName = parts.join(' ').trim();
  if (!rawName) rawName = `Advocate ${index + 1}`;
  const name = rawName.startsWith('Adv.') ? rawName : (lawyer?.salutation ? rawName : `Adv. ${rawName}`);

  const specializations = Array.isArray(lawyer?.specialization) && lawyer.specialization.length > 0
    ? lawyer.specialization
    : (typeof lawyer?.specialization === 'string' && lawyer.specialization ? [lawyer.specialization] : ['General Legal Practice']);

  const expNum = Number(lawyer?.experience);
  const experience = expNum > 0 ? `${expNum}+ Years Exp.` : 'Verified Advocate';

  const mobile = lawyer?.mobileNumber || '98XXXXXX80';

  return {
    id: `${lawyer?.firstName || 'adv'}-${index}`,
    name,
    specializations,
    experience,
    rawExperience: expNum || 0,
    mobile,
    avatar: advocateImg,
    fallbackAvatar: advocateImg,
    verified: true,
  };
};
