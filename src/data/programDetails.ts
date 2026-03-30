export interface ProgramDetailInfo {
  id: string;
  title: string;
  category: string;
  heroImage: string;
  overview: string;
  eligibility: string[];
  stepsToApply: string[];
}

export const programsInfo: Record<string, ProgramDetailInfo> = {
  'rental-assistance': {
    id: 'rental-assistance',
    title: 'Rental Assistance (Section 8)',
    category: 'Housing Assistance',
    heroImage: '/programs-bg.png',
    overview: 'The Section 8 Housing Choice Voucher program connects low-income families, the elderly, and people with disabilities with safe, affordable housing in the private market. SDHC pays a portion of the rent directly to the landlord.',
    eligibility: [
      'Household income must be at or below 50% of the Area Median Income (AMI)',
      'At least one family member must be a U.S. citizen or eligible immigrant',
      'Pass a criminal background check',
      'Meet local preference requirements (e.g., currently living/working in San Diego)'
    ],
    stepsToApply: [
      'Submit a pre-application to the SDHC waitlist online',
      'Keep your contact information updated while on the waitlist',
      'When your name is reached, attend an eligibility interview',
      'Submit verifications of income, assets, and family composition',
      'Attend a mandatory voucher briefing once approved'
    ]
  },
  'section-8': {
    id: 'section-8',
    title: 'Section 8 Vouchers',
    category: 'Housing Assistance',
    heroImage: '/programs-bg.png',
    overview: 'This is the federal government’s major program for assisting very low-income families to afford decent, safe, and sanitary housing. Vouchers are administered locally by SDHC.',
    eligibility: [
      'Income must not exceed 50% of AMI',
      'Must meet HUD definition of a family',
      'No previous evictions for drug-related criminal activity in the past 3 years',
      'Must pass local SDHC screening criteria'
    ],
    stepsToApply: [
      'Join the SDHC waitlist via the online portal',
      'Wait for notification of selection (wait times vary significantly)',
      'Complete the full packet with documentation',
      'Attend a briefing session to receive the voucher',
      'Locate a unit where the landlord accepts the voucher'
    ]
  },
  'emergency-housing': {
    id: 'emergency-housing',
    title: 'Emergency Housing Solutions',
    category: 'Housing Assistance',
    heroImage: '/programs-bg.png',
    overview: 'SDHC offers emergency programs designed to prevent homelessness and assist those currently unhoused to find rapid rehousing and supportive shelter environments.',
    eligibility: [
      'Currently experiencing homelessness or at imminent risk of losing housing',
      'Household income limits depend on the specific funding source',
      'Must engage with case management services'
    ],
    stepsToApply: [
      'Contact the Regional Task Force on Homelessness (RTFH) for intake',
      'Complete a VI-SPDAT assessment',
      'Work with an assigned intake coordinator',
      'Identify short-term stabilization housing or shelter'
    ]
  },
  'first-time-homebuyers': {
    id: 'first-time-homebuyers',
    title: 'First-Time Homebuyers',
    category: 'Programs',
    heroImage: '/homebuyers.png',
    overview: 'Achieve the dream of homeownership. SDHC provides deferred-payment loans, homeownership grants, and mortgage credit certificates to help first-time homebuyers with down payments and closing costs.',
    eligibility: [
      'Must be a first-time homebuyer (no home ownership in the past 3 years)',
      'Household income cannot exceed 80% of AMI',
      'Minimum credit score of 660',
      'Must contribute a minimum of 1% to 3% of the purchase price',
      'Home being purchased must be located in the City of San Diego'
    ],
    stepsToApply: [
      'Complete an SDHC-approved homebuyer education course',
      'Get pre-qualified for a first trust deed loan from an approved participating lender',
      'Work with your lender and a real estate agent to find an eligible property',
      'Your lender will submit the SDHC loan application on your behalf'
    ]
  },
  'veterans-housing': {
    id: 'veterans-housing',
    title: 'Veterans Housing (VASH)',
    category: 'Programs',
    heroImage: '/veterans.png',
    overview: 'SDHC partners with the VA San Diego Healthcare System to provide rental assistance and supportive services to Veterans experiencing homelessness through the HUD-VASH program.',
    eligibility: [
      'Must be an eligible Veteran eligible for VA health care services',
      'Currently experiencing homelessness',
      'Income must be at or below 50% of the AMI',
      'Must agree to participate in VA case management'
    ],
    stepsToApply: [
      'Contact the VA San Diego Healthcare System Homeless Program',
      'Complete clinical assessment with a VA social worker',
      'Receive a referral from the VA to SDHC',
      'Complete the SDHC housing application with your case worker'
    ]
  },
  'senior-housing': {
    id: 'senior-housing',
    title: 'Senior Affordable Housing',
    category: 'Programs',
    heroImage: '/senior.png',
    overview: 'SDHC owns and manages numerous affordable housing properties explicitly designated for senior citizens, providing safe, independent living communities.',
    eligibility: [
      'Head of household or spouse must be at least 62 years of age',
      'Household income must be at or below 80% AMI (some properties require 60% or 50% AMI)',
      'Must pass credit and criminal background checks',
      'Must qualify for independent living'
    ],
    stepsToApply: [
      'Check the SDHC property portfolio for open waitlists',
      'Submit a property-specific application when the waitlist opens',
      'Attend a property management interview when selected',
      'Complete move-in certification process'
    ]
  }
};
