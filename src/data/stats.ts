import type { Locale } from '../i18n/config';
import { t } from '../i18n/utils';

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
  prefix?: string;
}

export const trustStats: Stat[] = [
  { value: '30', suffix: '+', label: 'Years of Industrial Heritage' },
  { value: '2', label: 'Countries, One Corridor' },
  { value: '8', label: 'Specialized Solutions' },
  { value: 'ISO', label: '13485 Certified' },
];

export const nearshoreStats: Stat[] = [
  { value: '48', label: 'Hour Prototype Turnaround' },
  { value: '100', suffix: '%', label: 'USMCA-Compliant Crating' },
  { value: '2', label: 'Countries, Integrated Supply Chain' },
];

export function getTrustStats(locale: Locale): Stat[] {
  return [
    { value: '30', suffix: '+', label: t(locale, 'stats.trustYearsLabel') },
    { value: '2', label: t(locale, 'stats.trustCountriesLabel') },
    { value: '8', label: t(locale, 'stats.trustSolutionsLabel') },
    { value: 'ISO', label: t(locale, 'stats.trustIsoLabel') },
  ];
}

export function getNearshoreStats(locale: Locale): Stat[] {
  return [
    { value: '48', label: t(locale, 'stats.nearshoreProtoLabel') },
    { value: '100', suffix: '%', label: t(locale, 'stats.nearshoreComplianceLabel') },
    { value: '2', label: t(locale, 'stats.nearshoreSupplyLabel') },
  ];
}
