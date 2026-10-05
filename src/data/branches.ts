export type Branch = {
  id: 'jeddah' | 'riyadh';
  city: string;
  cityAr: string;
  region: string;
  regionAr: string;
  badge: string;
  badgeAr: string;
  role: string;
  roleAr: string;
  address: string;
  addressAr: string;
  phone: string;
  mapUrl: string;
  embedUrl: string;
  coords: { lat: number; lng: number; label: string };
};

const createBranch = (branch: Omit<Branch, 'mapUrl' | 'embedUrl'>, query: string): Branch => ({
  ...branch,
  mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`,
  embedUrl: `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`,
});

export const branches: Branch[] = [
  createBranch({
    id: 'jeddah',
    city: 'Jeddah',
    cityAr: 'جدة',
    region: 'Western Region',
    regionAr: 'المنطقة الغربية',
    badge: 'Head Office',
    badgeAr: 'المقر الرئيسي',
    role: 'Executive headquarters & Western Region contracting management',
    roleAr: 'المقر الرئيسي وإدارة مشروعات المقاولات بالمنطقة الغربية',
    address: 'Al Rawdah District, Al Madinah Road, Jeddah, Saudi Arabia',
    addressAr: 'حي الروضة، طريق المدينة، جدة، المملكة العربية السعودية',
    phone: '+966 12 606 0000',
    coords: { lat: 21.5433, lng: 39.1728, label: '21°32\'N 39°10\'E' },
  }, 'Al Rawdah District Al Madinah Road Jeddah Saudi Arabia'),
  createBranch({
    id: 'riyadh',
    city: 'Riyadh',
    cityAr: 'الرياض',
    region: 'Central Region',
    regionAr: 'المنطقة الوسطى',
    badge: 'Capital Branch',
    badgeAr: 'فرع العاصمة',
    role: 'Central Region branch & major infrastructure operations',
    roleAr: 'فرع المنطقة الوسطى وإدارة المشاريع الإنشائية الكبرى',
    address: '7095 King Faisal Bin Abdul Aziz Road, Al Murabba District, 4th Floor, Riyadh, Saudi Arabia',
    addressAr: '7095 طريق الملك فيصل بن عبدالعزيز، حي المربع، الدور الرابع، الرياض، المملكة العربية السعودية',
    phone: '+966 11 405 0000',
    coords: { lat: 24.7136, lng: 46.6753, label: '24°42\'N 46°40\'E' },
  }, '7095 King Faisal Bin Abdul Aziz Road Al Murabba Riyadh Saudi Arabia'),
];
