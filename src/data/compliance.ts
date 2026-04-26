import type { Locale } from '../i18n/config';
import { t } from '../i18n/utils';

export interface ComplianceTopic {
  title: string;
  description: string;
  icon: string;
  stat?: string;
}

export const complianceTopics: ComplianceTopic[] = [
  {
    title: 'USMCA Rules of Origin',
    description:
      'Navigate Chapter 4 classification requirements to ensure your packaging qualifies for preferential tariff treatment across the U.S.-Mexico-Canada trade bloc.',
    icon: 'document',
    stat: 'Chapter 4',
  },
  {
    title: 'Regional Value Content',
    description:
      'Calculate and document RVC thresholds for your packaging materials to avoid costly tariff exposure and maintain trade compliance.',
    icon: 'calculator',
    stat: 'RVC Thresholds',
  },
  {
    title: 'Extended Producer Responsibility',
    description:
      'Meet 2026 EPR laws with packaging designs that satisfy collection, recycling, and reporting obligations in both jurisdictions.',
    icon: 'recycle',
    stat: '2026 Deadline',
  },
  {
    title: 'APR-PCR-101 Certification',
    description:
      'Source and certify packaging materials with traceable post-consumer resin content for corporate sustainability reporting.',
    icon: 'certificate',
    stat: '90%+ PCR',
  },
];

export function getComplianceTopics(locale: Locale): ComplianceTopic[] {
  return [
    {
      title: t(locale, 'complianceData.usmcaTitle'),
      description: t(locale, 'complianceData.usmcaDesc'),
      icon: 'document',
      stat: t(locale, 'complianceData.usmcaStat'),
    },
    {
      title: t(locale, 'complianceData.rvcTitle'),
      description: t(locale, 'complianceData.rvcDesc'),
      icon: 'calculator',
      stat: t(locale, 'complianceData.rvcStat'),
    },
    {
      title: t(locale, 'complianceData.eprTitle'),
      description: t(locale, 'complianceData.eprDesc'),
      icon: 'recycle',
      stat: t(locale, 'complianceData.eprStat'),
    },
    {
      title: t(locale, 'complianceData.aprTitle'),
      description: t(locale, 'complianceData.aprDesc'),
      icon: 'certificate',
      stat: t(locale, 'complianceData.aprStat'),
    },
  ];
}
