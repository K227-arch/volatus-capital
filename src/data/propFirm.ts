import { PropFirmAccount } from '../types';

export const fundingPipsAccounts: PropFirmAccount[] = [
  {
    size: 5000,
    label: '$5,000',
    price: 32,
    discountedPrice: 30.40,
    profitTargetPhase1: 400, // 8%
    profitTargetPhase2: 250, // 5%
    maxDrawdown: 500, // 10%
    dailyDrawdown: 250, // 5%
    payoutSplit: '85% to 90%',
  },
  {
    size: 10000,
    label: '$10,000',
    price: 60,
    discountedPrice: 57.00,
    profitTargetPhase1: 800,
    profitTargetPhase2: 500,
    maxDrawdown: 1000,
    dailyDrawdown: 500,
    payoutSplit: '85% to 90%',
  },
  {
    size: 25000,
    label: '$25,000',
    price: 139,
    discountedPrice: 132.05,
    profitTargetPhase1: 2000,
    profitTargetPhase2: 1250,
    maxDrawdown: 2500,
    dailyDrawdown: 1250,
    payoutSplit: '85% to 90%',
  },
  {
    size: 50000,
    label: '$50,000',
    price: 239,
    discountedPrice: 227.05,
    profitTargetPhase1: 4000,
    profitTargetPhase2: 2500,
    maxDrawdown: 5000,
    dailyDrawdown: 2500,
    payoutSplit: '85% to 90%',
  },
  {
    size: 100000,
    label: '$100,000',
    price: 399,
    discountedPrice: 379.05,
    profitTargetPhase1: 8000,
    profitTargetPhase2: 5000,
    maxDrawdown: 10000,
    dailyDrawdown: 5000,
    payoutSplit: '90% + Bi-weekly Payouts',
  },
  {
    size: 200000,
    label: '$200,000',
    price: 799,
    discountedPrice: 759.05,
    profitTargetPhase1: 16000,
    profitTargetPhase2: 10000,
    maxDrawdown: 20000,
    dailyDrawdown: 10000,
    payoutSplit: '90% + On-Demand Payouts',
  },
];

export const PROMO_CODE = 'VOLATUS';
export const PROMO_DISCOUNT = '5% OFF';
export const FUNDING_PIPS_URL = 'https://fundingpips.com/?ref=volatus';
