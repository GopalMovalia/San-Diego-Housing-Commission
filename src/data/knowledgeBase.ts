// Searchable knowledge base for the SDHC AI assistant
export interface SearchResult {
  title: string;
  summary: string;
  link: string;
  category: string;
}

export const knowledgeBase: SearchResult[] = [
  {
    title: 'Housing Choice Vouchers (Section 8)',
    summary: 'Federal rental assistance program for low-income families. Covers the difference between 30% of your income and the fair market rent. Apply through the SDHC waitlist.',
    link: '/housing-assistance/section-8',
    category: 'Rental Assistance',
  },
  {
    title: 'Emergency Rental Assistance',
    summary: 'Short-term aid for households facing eviction or utility shutoffs. Funds available through the COVID-19 relief program for eligible San Diego County residents.',
    link: '/housing-assistance/emergency-housing',
    category: 'Emergency Help',
  },
  {
    title: 'First-Time Homebuyer Program',
    summary: 'Down payment assistance loans up to 22% of the purchase price for eligible first-time buyers. Income limits apply. Requires 660+ credit score and homebuyer education.',
    link: '/programs/first-time-homebuyers',
    category: 'Homeownership',
  },
  {
    title: 'Veterans Housing Assistance (VASH)',
    summary: 'The HUD-VASH program combines housing vouchers from SDHC with supportive services from the VA San Diego Healthcare System for Veterans experiencing homelessness.',
    link: '/programs/veterans-housing',
    category: 'Veterans',
  },
  {
    title: 'Senior Affordable Housing',
    summary: 'SDHC maintains a portfolio of affordable senior housing communities across San Diego County. Priority given to residents 62+ with income at or below 30-60% AMI.',
    link: '/programs/senior-housing',
    category: 'Senior Housing',
  },
  {
    title: 'How to Apply for Rental Assistance',
    summary: 'To apply: 1) Check if the waitlist is open at sdhc.org. 2) Submit a pre-application online. 3) Gather proof of income, ID, and Social Security cards. 4) Attend a briefing when selected.',
    link: '/contact',
    category: 'Application Process',
  },
  {
    title: 'Income Eligibility Limits',
    summary: 'Eligibility is based on Area Median Income (AMI). Most programs serve households earning 30–80% AMI. For a family of 4, 80% AMI is approximately $92,050 in San Diego County.',
    link: '/programs',
    category: 'Eligibility',
  },
  {
    title: 'Required Documents',
    summary: 'You\'ll typically need: Government-issued photo ID, Social Security cards for all household members, birth certificates, proof of income (pay stubs, tax returns, award letters), and current rental agreement.',
    link: '/contact',
    category: 'Documentation',
  },
  {
    title: 'Landlord Partners Program',
    summary: 'SDHC works with private landlords who accept Housing Choice Vouchers. Benefits include reliable rent payments, free property inspections, and a damage mitigation fund.',
    link: '/programs',
    category: 'Landlords',
  },
  {
    title: 'About the San Diego Housing Commission',
    summary: 'SDHC was established in 1979 and serves as San Diego\'s local housing authority. It operates under a Board of Commissioners appointed by the Mayor and City Council.',
    link: '/about',
    category: 'About SDHC',
  },
  {
    title: 'WCAG 2.1 Accessibility Compliance',
    summary: 'The SDHC website fully complies with Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. Translation services are available via Google Translate for all languages.',
    link: '/',
    category: 'Accessibility',
  },
  {
    title: 'Contact & Office Location',
    summary: 'SDHC main office: 1122 Broadway, Suite 300, San Diego, CA 92101. Phone: (619) 231-9400. Hours: Monday–Friday, 8:00 AM – 5:00 PM Pacific Time.',
    link: '/contact',
    category: 'Contact',
  },
  {
    title: 'Section 3 Business Opportunities',
    summary: 'SDHC prioritizes contracting with Section 3 certified businesses. Under HUD Section 3 regulations, low-income residents and businesses receive priority for employment and contracting.',
    link: '/about',
    category: 'Business',
  },
  {
    title: 'Current Waitlist Status',
    summary: 'The SDHC Housing Choice Voucher waitlist opens periodically. Sign up for notifications at sdhc.org. When open, pre-applications accepted online only. Waitlist can range from 2–8 years.',
    link: '/housing-assistance/section-8',
    category: 'Waitlist',
  },
  {
    title: 'Tenant Rights & Responsibilities',
    summary: 'As an SDHC voucher holder, you have the right to choose any landlord who passes inspections. You must pay rent on time, maintain the unit, and report income changes within 10 days.',
    link: '/housing-assistance/section-8',
    category: 'Tenant Rights',
  },
];

export function searchKnowledge(query: string): SearchResult[] {
  if (!query.trim()) return [];
  const lower = query.toLowerCase();
  const tokens = lower.split(/\s+/).filter(t => t.length > 2);

  const scored = knowledgeBase.map(item => {
    const text = `${item.title} ${item.summary} ${item.category}`.toLowerCase();
    let score = 0;
    for (const token of tokens) {
      if (text.includes(token)) score += 1;
      if (item.title.toLowerCase().includes(token)) score += 2;
      if (item.category.toLowerCase().includes(token)) score += 1;
    }
    // Exact phrase bonus
    if (text.includes(lower)) score += 5;
    return { item, score };
  });

  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(s => s.item);
}
