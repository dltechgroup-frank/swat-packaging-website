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
