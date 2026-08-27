import advocateImg from '../assets/img/advocate.png';

export const fallbackAvatars = [advocateImg];

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
