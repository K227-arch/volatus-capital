import { Faq, MonthlyStats } from '../types';

export const faqs: Faq[] = [
  {
    question: 'How do I get 100% Free VIP Signals Access?',
    answer: 'You can get completely free, lifetime access to the Volatus VIP Telegram Channel by registering an account with our official partner broker (such as Exness) using our link, depositing a minimum of $50, and submitting your trading account number into our verification form on this page. Our automated bot verifies your account and sends you your private invite link within seconds.',
    category: 'broker',
  },
  {
    question: 'How are the trading signals delivered?',
    answer: 'All high-probability signals are broadcast in real-time to our dedicated VIP Telegram channel and automated Telegram bot. Each setup includes exact entry price, Stop Loss (SL), Take Profit 1, 2, and 3, estimated Risk:Reward ratio, recommended lot size guidelines, and chart breakdown rationale.',
    category: 'signals',
  },
  {
    question: 'Which markets and assets do you cover?',
    answer: 'We focus primarily on the highest-yielding, most volatile institutional assets: Gold (XAUUSD), Bitcoin (BTCUSD), US Indices (NAS100 / US30), and key Forex majors (EURUSD, GBPUSD). We prioritize quality setups over quantity (typically 2 to 5 high-grade setups per day).',
    category: 'signals',
  },
  {
    question: 'Can I use the signals to pass prop firm challenges like Funding Pips?',
    answer: 'Yes! Over 65% of our VIP members actively trade prop firm evaluation accounts. Our signals adhere strictly to maximum 1% to 2% risk models, ensuring you never violate daily drawdown (5%) or maximum total drawdown (10%) rules while meeting your 8% and 5% profit targets.',
    category: 'funding',
  },
  {
    question: 'What if I already have an Exness account?',
    answer: 'If you already have an existing Exness account, you can simply open a new trading sub-account and set the partner/IB code to VOLATUS, or reach out to Exness support via Live Chat and request your partner code be assigned to our community. Once done, enter your new account number in our verification form.',
    category: 'broker',
  },
  {
    question: 'What if I do not want to change brokers?',
    answer: 'If you prefer using your current broker, you can purchase direct VIP membership with our flexible monthly ($49/mo), quarterly ($119), or annual passes. Both payment methods grant access to the exact same VIP signals, webinars, and trade breakdowns.',
    category: 'general',
  },
  {
    question: 'Do you manage investor funds or guarantee daily profits?',
    answer: 'No. Volatus Capital is strictly an educational community and signals provider. We never solicit or manage client funds, nor do we promise guaranteed returns. Trading Forex, CFDs, and cryptocurrencies involves significant financial risk. Always trade with capital you can afford to risk.',
    category: 'general',
  },
];

export const monthlyStats: MonthlyStats[] = [
  { month: 'Jan', pips: 2480, winRate: 88, signalsCount: 52, profitFactor: 3.4 },
  { month: 'Feb', pips: 2190, winRate: 85, signalsCount: 48, profitFactor: 3.1 },
  { month: 'Mar', pips: 2840, winRate: 90, signalsCount: 56, profitFactor: 3.8 },
  { month: 'Apr', pips: 1950, winRate: 84, signalsCount: 44, profitFactor: 2.9 },
  { month: 'May', pips: 2620, winRate: 89, signalsCount: 50, profitFactor: 3.5 },
  { month: 'Jun', pips: 3120, winRate: 91, signalsCount: 58, profitFactor: 4.1 },
];
