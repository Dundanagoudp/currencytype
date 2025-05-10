export interface Currency {
  name: string;
  symbol: string;
  flag: string;
  value: number;
}

export const CurrencyByRupee: Currency[] = [

  {
    name: 'Indian Rupee',
    symbol: '₹',
    flag: '🇮🇳',
    value: 1
  },
  {
    name: 'Bangladeshi Taka',
    symbol: '৳',
    flag: '🇧🇩',
    value: 1.18
  },
  {
    name: 'Sri Lankan Rupee',
    symbol: 'Rs',
    flag: '🇱🇰',
    value: 3.65
  },
  {
    name: 'US Dollar',
    symbol: '$',
    flag: '🇺🇸',
    value: 0.012
  },
  {
    name: 'Euro',
    symbol: '€',
    flag: '🇪🇺',
    value: 0.011
  },
  {
    name: 'British Pound',
    symbol: '£',
    flag: '🇬🇧',
    value: 0.0095
  },
  {
    name: 'Japanese Yen',
    symbol: '¥',
    flag: '🇯🇵',
    value: 1.77
  },
  {
    name: 'Australian Dollar',
    symbol: 'A$',
    flag: '🇦🇺',
    value: 0.018
  },
  {
    name: 'Canadian Dollar',
    symbol: 'C$',
    flag: '🇨🇦',
    value: 0.016
  },
  {
    name: 'Swiss Franc',
    symbol: 'CHF',
    flag: '🇨🇭',
    value: 0.011
  },
  {
    name: 'Chinese Yuan',
    symbol: '¥',
    flag: '🇨🇳',
    value: 0.087
  },
  {
    name: 'UAE Dirham',
    symbol: 'د.إ',
    flag: '🇦🇪',
    value: 0.044
  }
];