export type PageType = 
  | 'home'
  | 'about'
  | 'signals'
  | 'telegram'
  | 'advertise'
  | 'pricing'
  | 'mediakit'
  | 'blog'
  | 'contact'
  | 'broker'
  | 'funding'
  | 'academy'
  | 'performance'
  | 'reviews'
  | 'faq'
  | 'register'
  | 'login';

export type RegistrationTrack = 'signals' | 'copytrading' | 'classes' | 'investing';
export type ClassLevel = 'beginner' | 'intermediate' | 'advanced';
export type ClassDelivery = 'online' | 'physical';

export interface UserAccount {
  id: string;
  name: string;
  email: string;
  track: RegistrationTrack;
  role: 'member' | 'investor' | 'student' | 'vip';
  country?: string;
  investmentAmount?: string;
  classLevel?: ClassLevel;
  classDelivery?: ClassDelivery;
  telegramUsername?: string;
  createdAt: string;
}

export interface Signal {
  id: string;
  pair: string;
  category: 'gold' | 'crypto' | 'indices' | 'forex';
  type: 'BUY' | 'SELL';
  entryPrice: number;
  stopLoss: number;
  takeProfit1: number;
  takeProfit2: number;
  takeProfit3: number;
  currentPrice: number;
  pips: number;
  status: 'active' | 'tp1_hit' | 'tp2_hit' | 'tp3_hit' | 'closed';
  riskReward: string;
  timeframe: string;
  session: 'London' | 'New York' | 'Asian' | 'Overlap';
  timestamp: string;
  rationale: string;
  accuracyScore: number;
}

export interface BrokerPartner {
  id: string;
  name: string;
  logo: string;
  badge: string;
  rating: number;
  minDeposit: string;
  leverage: string;
  spread: string;
  affiliateUrl: string;
  description: string;
  benefits: string[];
}

export interface PropFirmAccount {
  size: number;
  label: string;
  price: number;
  discountedPrice: number;
  profitTargetPhase1: number;
  profitTargetPhase2: number;
  maxDrawdown: number;
  dailyDrawdown: number;
  payoutSplit: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  avatar: string;
  profit: string;
  rating: number;
  date: string;
  asset: string;
  text: string;
  verified: boolean;
  type: 'vip_member' | 'funded_trader';
}

export interface Faq {
  question: string;
  answer: string;
  category: 'general' | 'broker' | 'signals' | 'funding';
}

export interface MonthlyStats {
  month: string;
  pips: number;
  winRate: number;
  signalsCount: number;
  profitFactor: number;
}
