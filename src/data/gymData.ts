import { Program, Trainer, ClassSession, Testimonial, PricingPlan } from '../types';

export const GYM_INFO = {
  name: 'DEMO',
  tagline: 'PREMIUM FITNESS STUDIO',
  city: 'Bengaluru',
  location: 'Indiranagar & Koramangala, Bengaluru',
  address: 'No. 842, 100 Feet Road, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038',
  phone: '+91 98765 43210',
  whatsapp: '+91 98765 43210',
  email: 'hello@demofitness.in',
  hours: {
    weekdays: '6:00 AM – 10:00 PM',
    weekends: '7:00 AM – 8:00 PM',
    note: 'Classes start at 6 AM, last class at 7 PM'
  }
};

export const CITIES = [
  'Bengaluru (Indiranagar)',
  'Bengaluru (Koramangala)',
  'Mumbai (Bandra West)',
  'Delhi NCR (CyberCity)',
  'Hyderabad (Jubilee Hills)'
];

export const PROGRAMS: Program[] = [
  {
    id: 'strength',
    title: 'Strength Training',
    category: 'Hypertrophy & Power',
    description: 'Master Olympic barbell lifts, compound movements, and progressive overload with calibrated competition plates and Eleiko power racks.',
    difficulty: 'All Levels',
    duration: '60 mins',
    caloriesBurned: '450-650 kcal',
    iconName: 'Dumbbell',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    highlights: ['Barbell squat & deadlift clinics', 'Targeted muscle hypertrophy splits', 'Biomechanical posture correction']
  },
  {
    id: 'hiit',
    title: 'Cardio & HIIT',
    category: 'Metabolic Conditioning',
    description: 'High-octane interval conditioning featuring assault bikes, SkiErgs, battle ropes, and heart-rate telemetry for max caloric afterburn.',
    difficulty: 'Intermediate',
    duration: '45 mins',
    caloriesBurned: '600-850 kcal',
    iconName: 'Zap',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    highlights: ['EPOC afterburn activation', 'Sprint turf intervals & plyometrics', 'Real-time live heart-rate monitoring']
  },
  {
    id: 'yoga',
    title: 'Yoga & Flexibility',
    category: 'Mobility & Recovery',
    description: 'Dynamic Vinyasa flows combined with deep myofascial release, hip openers, and breathwork to unlock range of motion and prevent injury.',
    difficulty: 'Beginner',
    duration: '50 mins',
    caloriesBurned: '250-380 kcal',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80',
    highlights: ['Active mobility & joint decompress', 'Vinyasa flow with somatic breathwork', 'Post-workout nervous system calm']
  },
  {
    id: 'personal',
    title: 'Personal Training',
    category: '1-on-1 Bespoke',
    description: 'Dedicated elite coaching with custom periodized programming, 3D body composition analysis, weekly nutrition audits, and VIP recovery.',
    difficulty: 'All Levels',
    duration: '60 mins',
    caloriesBurned: '500-750 kcal',
    iconName: 'UserCheck',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80',
    highlights: ['Bespoke monthly nutrition macro plan', 'InBody 570 bioimpedance scans', 'Direct WhatsApp coach access']
  },
  {
    id: 'group',
    title: 'Group Fitness',
    category: 'Community Workouts',
    description: 'Electric team workouts with curated acoustic beats, timed circuit stations, and an infectious collective energy that pushes your limits.',
    difficulty: 'All Levels',
    duration: '55 mins',
    caloriesBurned: '500-700 kcal',
    iconName: 'Users',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80',
    highlights: ['Team challenges and partner circuits', 'State-of-the-art acoustic soundstage', 'High-energy, zero judgment vibe']
  },
  {
    id: 'boxing',
    title: 'Boxing & Combat',
    category: 'Functional Strike',
    description: 'Authentic pugilist conditioning: heavy bag combinations, slip drills, hand-eye speed drills, and explosive rotational core power.',
    difficulty: 'Intermediate',
    duration: '50 mins',
    caloriesBurned: '650-900 kcal',
    iconName: 'Flame',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=800&q=80',
    highlights: ['Heavy bag power combos & footwork', 'Speed bag & double-end bag rhythm', 'Zero contact, maximum sweat conditioning']
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: 'vikram',
    name: 'Vikram Rao',
    certification: 'CSCS® • K11 Master Coach • Ex-National Athlete',
    specialty: 'Head Strength & Conditioning Coach',
    experience: '11+ Years Coaching',
    bio: 'Former national sprinter turned master strength specialist. Vikram has coached over 500+ athletes and executives in biomechanics, barbell efficiency, and safe progressive overload.',
    photo: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80',
    socialHandle: '@coach.vikramrao',
    tags: ['Powerlifting', 'Olympic Barbell', 'Injury Rehab']
  },
  {
    id: 'ananya',
    name: 'Ananya Sharma',
    certification: 'ACE Certified • CrossFit L2 • Precision Nutrition Pn1',
    specialty: 'High-Intensity & Athletic Conditioning',
    experience: '8+ Years Coaching',
    bio: 'Ananya combines high-energy functional movements with metabolic conditioning science. Her sessions focus on mental grit, cardiovascular endurance, and sustainable athletic leanness.',
    photo: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80',
    socialHandle: '@ananya.fitlife',
    tags: ['HIIT Specialist', 'Endurance', 'Mobility']
  },
  {
    id: 'arjun',
    name: 'Arjun Nair',
    certification: 'ACSM Certified • State Boxing Champion • FMS L1',
    specialty: 'Functional Boxing & Hypertrophy Coach',
    experience: '9+ Years Coaching',
    bio: 'Pugilist champion known for sharp technical cueing and intense rotational power circuits. Arjun instills disciplined hand-speed, core resilience, and championship mental focus in every trainee.',
    photo: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80',
    socialHandle: '@arjun.boxinglab',
    tags: ['Boxing Conditioning', 'Rotational Power', 'Core Strength']
  }
];

export const SCHEDULE_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as const;

export const WEEKLY_CLASSES: ClassSession[] = [
  // Monday
  { id: 'c1', day: 'Mon', time: '06:00 AM - 07:00 AM', name: 'Sunrise Barbell & Power', category: 'Strength', trainer: 'Vikram Rao', difficulty: 'Intermediate', spotsLeft: 3, totalSpots: 16 },
  { id: 'c2', day: 'Mon', time: '07:15 AM - 08:00 AM', name: 'Metabolic HIIT Ignition', category: 'Cardio & HIIT', trainer: 'Ananya Sharma', difficulty: 'All Levels', spotsLeft: 5, totalSpots: 20 },
  { id: 'c3', day: 'Mon', time: '09:00 AM - 10:00 AM', name: 'Functional Strike Boxing', category: 'Boxing', trainer: 'Arjun Nair', difficulty: 'Intermediate', spotsLeft: 2, totalSpots: 14 },
  { id: 'c4', day: 'Mon', time: '05:30 PM - 06:20 PM', name: 'Mobility & Spine Flow', category: 'Yoga', trainer: 'Pooja Iyer', difficulty: 'Beginner', spotsLeft: 8, totalSpots: 18 },
  { id: 'c5', day: 'Mon', time: '06:30 PM - 07:30 PM', name: 'Hypertrophy Upper Body Split', category: 'Strength', trainer: 'Vikram Rao', difficulty: 'Advanced', spotsLeft: 1, totalSpots: 16 },

  // Tuesday
  { id: 'c6', day: 'Tue', time: '06:00 AM - 06:50 AM', name: 'Conditioning & Turf Drills', category: 'Cardio & HIIT', trainer: 'Ananya Sharma', difficulty: 'Intermediate', spotsLeft: 4, totalSpots: 20 },
  { id: 'c7', day: 'Tue', time: '07:15 AM - 08:15 AM', name: 'Lower Body & Deadlift Clinic', category: 'Strength', trainer: 'Vikram Rao', difficulty: 'Intermediate', spotsLeft: 6, totalSpots: 16 },
  { id: 'c8', day: 'Tue', time: '09:30 AM - 10:20 AM', name: 'Dynamic Vinyasa Recovery', category: 'Yoga', trainer: 'Pooja Iyer', difficulty: 'All Levels', spotsLeft: 9, totalSpots: 18 },
  { id: 'c9', day: 'Tue', time: '06:00 PM - 07:00 PM', name: 'Heavy Bag Combat Cardio', category: 'Boxing', trainer: 'Arjun Nair', difficulty: 'All Levels', spotsLeft: 4, totalSpots: 16 },

  // Wednesday
  { id: 'c10', day: 'Wed', time: '06:00 AM - 07:00 AM', name: 'Barbell Olympic Snatch & Clean', category: 'Strength', trainer: 'Vikram Rao', difficulty: 'Advanced', spotsLeft: 2, totalSpots: 12 },
  { id: 'c11', day: 'Wed', time: '07:15 AM - 08:00 AM', name: 'Assault Bike & SkiErg Burn', category: 'Cardio & HIIT', trainer: 'Ananya Sharma', difficulty: 'Advanced', spotsLeft: 3, totalSpots: 18 },
  { id: 'c12', day: 'Wed', time: '05:30 PM - 06:30 PM', name: 'High-Volume Pull & Core', category: 'Strength', trainer: 'Vikram Rao', difficulty: 'Intermediate', spotsLeft: 5, totalSpots: 16 },
  { id: 'c13', day: 'Wed', time: '06:45 PM - 07:35 PM', name: 'Sunset Vinyasa Breathwork', category: 'Yoga', trainer: 'Pooja Iyer', difficulty: 'Beginner', spotsLeft: 7, totalSpots: 20 },

  // Thursday
  { id: 'c14', day: 'Thu', time: '06:00 AM - 06:50 AM', name: 'Tabata Heart-Rate Shred', category: 'Cardio & HIIT', trainer: 'Ananya Sharma', difficulty: 'Intermediate', spotsLeft: 6, totalSpots: 20 },
  { id: 'c15', day: 'Thu', time: '07:30 AM - 08:30 AM', name: 'Pugilist Combinations & Drills', category: 'Boxing', trainer: 'Arjun Nair', difficulty: 'Intermediate', spotsLeft: 4, totalSpots: 14 },
  { id: 'c16', day: 'Thu', time: '06:00 PM - 07:00 PM', name: 'Squat Mastery & Knee Stability', category: 'Strength', trainer: 'Vikram Rao', difficulty: 'All Levels', spotsLeft: 3, totalSpots: 16 },

  // Friday
  { id: 'c17', day: 'Fri', time: '06:00 AM - 07:00 AM', name: 'Full-Body Metabolic Gauntlet', category: 'Cardio & HIIT', trainer: 'Ananya Sharma', difficulty: 'Advanced', spotsLeft: 4, totalSpots: 20 },
  { id: 'c18', day: 'Fri', time: '08:00 AM - 09:00 AM', name: 'Joint Health & Deep Stretch', category: 'Yoga', trainer: 'Pooja Iyer', difficulty: 'All Levels', spotsLeft: 10, totalSpots: 20 },
  { id: 'c19', day: 'Fri', time: '06:00 PM - 07:00 PM', name: 'Friday Night Fight Club Conditioning', category: 'Boxing', trainer: 'Arjun Nair', difficulty: 'Intermediate', spotsLeft: 2, totalSpots: 16 },

  // Saturday
  { id: 'c20', day: 'Sat', time: '07:00 AM - 08:15 AM', name: 'Community Endurance Challenge', category: 'Group Fitness', trainer: 'Vikram & Ananya', difficulty: 'All Levels', spotsLeft: 8, totalSpots: 30 },
  { id: 'c21', day: 'Sat', time: '08:30 AM - 09:30 AM', name: 'Kettlebell & Sandbag Power', category: 'Strength', trainer: 'Vikram Rao', difficulty: 'Intermediate', spotsLeft: 5, totalSpots: 16 },
  { id: 'c22', day: 'Sat', time: '10:00 AM - 11:00 AM', name: 'Pranayama & Active Mobility', category: 'Yoga', trainer: 'Pooja Iyer', difficulty: 'Beginner', spotsLeft: 12, totalSpots: 22 },

  // Sunday
  { id: 'c23', day: 'Sun', time: '08:00 AM - 09:00 AM', name: 'Sunday Engine Reset', category: 'Cardio & HIIT', trainer: 'Ananya Sharma', difficulty: 'Beginner', spotsLeft: 7, totalSpots: 20 },
  { id: 'c24', day: 'Sun', time: '09:30 AM - 10:30 AM', name: 'Deep Fascial Release & Sound Bath', category: 'Yoga', trainer: 'Pooja Iyer', difficulty: 'All Levels', spotsLeft: 6, totalSpots: 20 }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Kabir Mehta',
    title: 'Lead Architect, Software Systems',
    city: 'Bengaluru',
    timeframe: '6 Months at DEMO',
    statBadge: 'Lost 18kg & Body Fat 29% → 14%',
    quote: 'Twelve-hour desk shifts had ruined my lumbar posture and energy levels. The coaches at DEMO customized my compound lifting and kept me accountable every single week.',
    programUsed: 'Strength Training & Personal Coaching',
    rating: 5,
    beforePhoto: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80',
    afterPhoto: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 't2',
    name: 'Priya Sen',
    title: 'Product Design Lead',
    city: 'Mumbai',
    timeframe: '5 Months at DEMO',
    statBadge: 'Deadlift 30kg → 115kg • +5kg Lean Muscle',
    quote: 'I was intimidated by free weights before stepping in. DEMO’s welcoming coaches broke down every hinge mechanic. I am leaner, stronger, and more confident than ever.',
    programUsed: 'Barbell Strength & Cardio HIIT',
    rating: 5,
    beforePhoto: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80',
    afterPhoto: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 't3',
    name: 'Rohan Kapoor',
    title: 'Founder & Angel Investor',
    city: 'Delhi NCR',
    timeframe: '8 Months at DEMO',
    statBadge: 'Gained 7.2kg Lean Mass • Resting HR 52 bpm',
    quote: 'The equipment here matches the elite gyms of New York and London. Eleiko bars, pristine turf, cold plunge recovery, and coaches who truly understand periodization.',
    programUsed: 'Elite Hypertrophy & Boxing',
    rating: 5,
    beforePhoto: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80',
    afterPhoto: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 't4',
    name: 'Divya Krishnan',
    title: 'Marathoner & Working Mother',
    city: 'Bengaluru',
    timeframe: '9 Months at DEMO',
    statBadge: 'Shaved 22 Mins Off Half-Marathon Time',
    quote: 'Rebuilt my core stability after having two children. The cross-training between high-intensity intervals and yoga gave me unbreakable endurance and zero injury flare-ups.',
    programUsed: 'HIIT & Flexibility Mobility',
    rating: 5,
    beforePhoto: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80',
    afterPhoto: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=600&q=80'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Ideal for building consistent weekly fitness habits',
    priceINR: 3999,
    priceUSD: 50,
    billingPeriod: 'per month',
    features: [
      '5 Studio Classes per week',
      'Full Gym Floor & Free Weights access',
      'Complimentary Locker & Shower facilities',
      'DEMO Training Mobile App tracking',
      'Quarterly Fitness Assessment',
      'Access during standard operating hours'
    ],
    ctaText: 'Choose Starter'
  },
  {
    id: 'premium',
    name: 'Premium',
    tagline: 'Our signature, all-access studio experience',
    priceINR: 7499,
    priceUSD: 100,
    billingPeriod: 'per month',
    popular: true,
    perksBadge: 'MOST POPULAR',
    features: [
      'UNLIMITED Studio Classes (All 6 disciplines)',
      'Priority Booking for peak slots (6 AM & 7 PM)',
      '24/7 RFID Floor Access to all equipment',
      'Infrared Sauna & Steam recovery suite access',
      '2 Free Guest Passes every month',
      'Monthly InBody 570 Composition Scans',
      'Exclusive access to Saturday Run & Fight Clubs'
    ],
    ctaText: 'Join Premium'
  },
  {
    id: 'elite',
    name: 'Elite',
    tagline: 'Dedicated 1-on-1 mentorship for peak athletic goals',
    priceINR: 11999,
    priceUSD: 150,
    billingPeriod: 'per month',
    features: [
      'All Premium Unlimited features included',
      '4 Monthly 1-on-1 Personal Coaching sessions',
      'Bespoke Macro & Nutrition blueprint',
      'Bi-weekly biomechanical movement screening',
      'Complimentary pre/post workout shake at Fuel Bar',
      'Direct WhatsApp access to Head Coach',
      'Complimentary gym duffel & apparel kit'
    ],
    ctaText: 'Get Elite Access'
  },
  {
    id: 'annual',
    name: 'Annual Pass',
    tagline: 'Commit to transformation & save up to 35%',
    priceINR: 4999,
    priceUSD: 65,
    billingPeriod: 'per mo (billed ₹59,999/yr)',
    perksBadge: 'SAVE 35%',
    features: [
      'All Unlimited Premium benefits for 365 days',
      'Up to 60 days hassle-free membership freeze',
      '2 Free 1-on-1 Personal Training sessions',
      'Full Nutrition consultation & meal prep guide',
      'VIP invitation to athletic retreats & workshops',
      'Free Locker reservation for the full year'
    ],
    ctaText: 'Claim Annual Plan'
  }
];
