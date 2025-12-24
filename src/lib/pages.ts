import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const pagesDirectory = path.join(process.cwd(), 'content/pages');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getPageContent(pageName: string): Record<string, any> {
  const fullPath = path.join(pagesDirectory, `${pageName}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return {};
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data } = matter(fileContents);

  return data;
}

// Type definitions for each page
export interface HomepageContent {
  heroTitle: string;
  heroText: string;
  heroButtonPrimary: string;
  heroButtonSecondary: string;
  features: { title: string; description: string }[];
  newsLabel: string;
  newsTitle: string;
  newsSubtitle: string;
  newsButtonText: string;
  eventsLabel: string;
  eventsTitle: string;
  eventsSubtitle: string;
  eventsButtonText: string;
}

export interface ChassisPageContent {
  heroTitle: string;
  heroText: string;
  chassisLabel: string;
  chassisTitle: string;
  chassisText: string;
  infoSection1Label: string;
  infoSection1Title: string;
  infoSection1Text: string;
  infoSection1Image: string;
  infoSection2Label: string;
  infoSection2Title: string;
  infoSection2Text: string;
  infoSection2Image: string;
  ctaTitle: string;
  ctaText: string;
  ctaButtonText: string;
  faqLabel: string;
  faqTitle: string;
  faqs: { question: string; answer: string }[];
}

export interface MotorenPageContent {
  heroTitle: string;
  heroText: string;
  engineLabel: string;
  engineTitle: string;
  engineText: string;
  servicesLabel: string;
  servicesTitle: string;
  services: { title: string; description: string; icon: string }[];
  faqLabel: string;
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
}

export interface TeamPageContent {
  heroTitle: string;
  heroText: string;
  aboutLabel: string;
  aboutTitle: string;
  aboutText: string;
  aboutImage: string;
  valuesLabel: string;
  valuesTitle: string;
  valuesText: string;
  values: { title: string; description: string }[];
  galleryTitle: string;
  galleryText: string;
  galleryImages: string[];
  ctaTitle: string;
  ctaText: string;
  ctaButtonText: string;
}

export interface KontaktPageContent {
  heroTitle: string;
  heroText: string;
  companyName: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  openingHours: string;
  addressLabel: string;
  phoneLabel: string;
  emailLabel: string;
  hoursLabel: string;
  formTitle: string;
  formText: string;
  formNameLabel: string;
  formNamePlaceholder: string;
  formEmailLabel: string;
  formEmailPlaceholder: string;
  formSubjectLabel: string;
  formSubjectPlaceholder: string;
  formMessageLabel: string;
  formMessagePlaceholder: string;
  formButtonText: string;
}

export interface MotorenServicePageContent {
  heroTitle: string;
  heroText: string;
  motorsTitle: string;
  motorsText: string;
  services: { title: string; description: string }[];
  stepsLabel: string;
  stepsTitle: string;
  steps: { label: string; title: string; description: string }[];
  faqTitle: string;
  faqText: string;
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
  ctaText: string;
  ctaButtonText: string;
}

// Helper functions with proper typing
export function getHomepageContent(): HomepageContent {
  return getPageContent('homepage') as HomepageContent;
}

export function getChassisPageContent(): ChassisPageContent {
  return getPageContent('chassis') as ChassisPageContent;
}

export function getMotorenPageContent(): MotorenPageContent {
  return getPageContent('motoren') as MotorenPageContent;
}

export function getTeamPageContent(): TeamPageContent {
  return getPageContent('team') as TeamPageContent;
}

export function getKontaktPageContent(): KontaktPageContent {
  return getPageContent('kontakt') as KontaktPageContent;
}

export function getMotorenServicePageContent(): MotorenServicePageContent {
  return getPageContent('motoren-service') as MotorenServicePageContent;
}
