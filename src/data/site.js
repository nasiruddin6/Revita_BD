export const site = {
  name: 'REVITA Bangladesh',
  shortName: 'REVITA',
  tagline: 'Revolution in every voice',
  intro:
    'প্রতিটি কণ্ঠে বিপ্লব — ন্যায়বিচার, মর্যাদা ও কমিউনিটির ক্ষমতায়নে কাজ করা একটি যুব-নেতৃত্বাধীন সামাজিক সংগঠন।',
  introEn:
    'A youth-led social organization working for justice, dignity, and community power.',
  contact: {
    address: 'Tejgaon, Dhaka, Bangladesh - 1215',
    phone: '+880 1985-731155',
    email: 'revitabangladesh.info@gmail.com',
  },
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Activities', to: '/activities' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Team', to: '/team' },
  { label: 'News', to: '/news' },
  { label: 'Notice', to: '/notice' },
  { label: 'Contact', to: '/contact' },
]

export const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Team', to: '/team' },
  { label: 'News', to: '/news' },
  { label: 'Notice', to: '/notice' },
  { label: 'Contact', to: '/contact' },
]

export const socialLinks = [
  { name: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
  { name: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { name: 'YouTube', href: 'https://youtube.com', icon: 'youtube' },
  { name: 'X', href: 'https://x.com', icon: 'x' },
]

export function telHref(phone) {
  return `tel:${phone.replace(/[^\d+]/g, '')}`
}
