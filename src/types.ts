export interface Program {
  id: string;
  title: string;
  category: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  duration: string;
  caloriesBurned: string;
  iconName: string;
  image: string;
  highlights: string[];
}

export interface Trainer {
  id: string;
  name: string;
  certification: string;
  specialty: string;
  experience: string;
  bio: string;
  photo: string;
  socialHandle?: string;
  tags: string[];
}

export interface ClassSession {
  id: string;
  day: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
  time: string;
  name: string;
  category: string;
  trainer: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  spotsLeft: number;
  totalSpots: number;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  city: string;
  timeframe: string;
  statBadge: string;
  quote: string;
  programUsed: string;
  rating: number;
  beforePhoto: string;
  afterPhoto: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceINR: number;
  priceUSD: number;
  billingPeriod: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
  perksBadge?: string;
}
