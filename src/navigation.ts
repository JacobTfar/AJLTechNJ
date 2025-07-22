import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Services',
      links: [
        { text: 'Tech Support', href: getPermalink('/services/tech-support') },
        { text: 'Security Systems', href: getPermalink('/services/security') },
        { text: 'Network Setup', href: getPermalink('/services/networking') },
        { text: 'Device Repairs', href: getPermalink('/services/repairs') },
        { text: 'Custom Imaging', href: getPermalink('/services/imaging') },
      ],
    },
    {
      text: 'Pricing',
      links: [
        { text: 'Service Pricing', href: getPermalink('/pricing') },
        { text: 'Subscription Plans', href: getPermalink('/subscription') },
      ],
    },
    {
      text: 'About',
      links: [
        { text: 'Our Story', href: getPermalink('/about') },
        { text: 'Meet the Team', href: getPermalink('/team') },
      ],
    },
    {
      text: 'Resources',
      links: [
        { text: 'FAQ', href: getPermalink('/faq') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'Terms of Service', href: getPermalink('/terms') },
      ],
    },
  ],
  actions: [
    { text: 'Request Service', href: getPermalink('/contact'), target: '_self' },
  ],
};



export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Tech Support', href: getPermalink('/services/tech-support') },
        { text: 'Security Systems', href: getPermalink('/services/security') },
        { text: 'Network Setup', href: getPermalink('/services/networking') },
        { text: 'Device Repairs', href: getPermalink('/services/repairs') },
        { text: 'PC Imaging', href: getPermalink('/services/imaging') },
        { text: 'All Services', href: getPermalink('/services') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Meet the Team', href: getPermalink('/team') },
        { text: 'Pricing', href: getPermalink('/pricing') },
        { text: 'Subscriptions', href: getPermalink('/subscription') },
        { text: 'Contact Us', href: getPermalink('/contact') },
        { text: 'Service Areas', href: getPermalink('/about#service-areas') },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'FAQ', href: getPermalink('/faq') },
        { text: 'Blog & Tips', href: getBlogPermalink() },
        { text: 'Emergency Support', href: getPermalink('/contact#emergency') },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Get Help', href: getPermalink('/contact') },
        { text: 'Remote Support', href: getPermalink('/services/tech-support#remote') },
        { text: 'Schedule Service', href: getPermalink('/contact#schedule') },
        { text: 'Warranty Info', href: getPermalink('/faq#warranty') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms of Service', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Email AJL Tech NJ', icon: 'tabler:mail', href: 'mailto:info@ajltechnj.com' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
  ],
  footNote: `
    <span class="font-semibold">AJL Tech NJ</span> · Professional Technology Services for North Jersey · 
    <a class="text-blue-600 underline dark:text-blue-400" href="mailto:info@ajltechnj.com">info@ajltechnj.com</a> · 
    All rights reserved © ${new Date().getFullYear()}.
  `,
};
