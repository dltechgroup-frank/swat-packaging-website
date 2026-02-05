import type { Locale } from '../i18n/config';
import { t } from '../i18n/utils';

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  image: string;
  features: string[];
  badge?: string;
  sectors: string[];
}

export const services: Service[] = [
  {
    slug: 'smart-labeling',
    title: 'Smart Labeling & Asset Tracking',
    shortDescription:
      'Integrated RFID, NFC, and QR systems for real-time visibility.',
    fullDescription:
      'Integrated RFID, NFC, and QR code systems designed for the projected $47.72B smart label market to provide real-time visibility and combat cargo theft, which saw a 29% spike in 2025.',
    icon: 'rfid',
    features: [
      'RFID tag integration for pallet-level tracking',
      'NFC-enabled authentication for high-value shipments',
      'QR code systems for consumer-facing traceability',
      'Anti-theft and anti-counterfeit solutions',
    ],
    badge: '$47.72B Market',
    sectors: ['medical', 'electronics', 'automotive'],
  },
  {
    slug: 'medical-packaging',
    title: 'Sterile Barrier Medical Packaging',
    shortDescription:
      'ISO 13485-compliant designs for North America\'s largest medical device cluster.',
    fullDescription:
      'ISO 13485-compliant designs including Tyvek porous lidding, rigid thermoformed trays, and sterile pouches for North America\'s largest medical device cluster.',
    icon: 'medical',
    features: [
      'Tyvek porous lidding systems',
      'Rigid thermoformed trays',
      'Sterile pouches and peel packages',
      'Full ISO 13485 documentation',
    ],
    badge: 'ISO 13485',
    sectors: ['medical'],
  },
  {
    slug: 'cold-chain',
    title: 'Thermal Cold Chain Labs',
    shortDescription:
      'Technical thermal testing and Temp-Safe barriers for life sciences.',
    fullDescription:
      'Technical thermal testing and "Temp-Safe" barriers to guarantee product integrity for life sciences from the "first mile to the last".',
    icon: 'coldchain',
    features: [
      'Thermal profile testing and validation',
      'Temp-Safe insulated barrier systems',
      'Cold chain monitoring integration',
      'Life sciences regulatory compliance',
    ],
    badge: 'Temp-Safe',
    sectors: ['medical', 'electronics'],
  },
  {
    slug: 'sustainability',
    title: 'Mono-Material Sustainability Systems',
    shortDescription:
      'Fiber-based alternatives achieving 30% reduction in material waste.',
    fullDescription:
      'Fiber-based and mono-material systems that replace traditional foam with alternatives like Ranpak PadPak, achieving a 30% reduction in material waste and facilitating easier waste stream management.',
    icon: 'sustainability',
    features: [
      'Ranpak PadPak foam-free alternatives',
      'Mono-material recyclable designs',
      '30% material waste reduction',
      'Simplified waste stream management',
    ],
    badge: '30% Waste Reduction',
    sectors: ['medical', 'electronics', 'automotive'],
  },
  {
    slug: 'export-crating',
    title: 'USMCA-Compliant Export Crating',
    shortDescription:
      'Engineered crating that meets Regional Value Content thresholds.',
    fullDescription:
      'Engineered heavy-duty corrugated and Impala 48x40 export pallets that meet strict Regional Value Content thresholds to ensure tariff-free movement within the trilateral trade bloc.',
    icon: 'crating',
    features: [
      'Heavy-duty corrugated solutions',
      'Impala 48x40 export pallets',
      'Regional Value Content documentation',
      'Tariff-free movement assurance',
    ],
    badge: 'USMCA',
    sectors: ['automotive', 'electronics'],
  },
  {
    slug: 'cad-optimization',
    title: 'Structural CAD Optimization',
    shortDescription:
      'Remove "unnecessary air" for 20% smaller footprints and freight savings.',
    fullDescription:
      'Advanced engineering to remove "unnecessary air" inside boxes, resulting in 20% smaller footprints and immediate freight savings for high-volume retailers.',
    icon: 'cad',
    features: [
      'Right-size packaging engineering',
      '20% average footprint reduction',
      'Freight cost optimization',
      'High-volume retail solutions',
    ],
    badge: '20% Smaller',
    sectors: ['electronics', 'automotive'],
  },
  {
    slug: 'recycled-resins',
    title: 'Certified Recycled Resins (APR-PCR-101)',
    shortDescription:
      'Traceable materials with 90%+ post-consumer resin for ESG reporting.',
    fullDescription:
      'Sourcing and supply of traceable packaging materials containing at least 90% post-consumer resin, providing the documentation required for corporate ESG reporting.',
    icon: 'recycled',
    features: [
      '90%+ post-consumer resin content',
      'APR-PCR-101 certification',
      'Full material traceability',
      'Corporate ESG reporting documentation',
    ],
    badge: 'APR-PCR-101',
    sectors: ['medical', 'electronics', 'automotive'],
  },
  {
    slug: 'automated-kitting',
    title: 'Industry 4.0 Automated Kitting',
    shortDescription:
      'AI-driven assembly and kitting services for Tijuana production lines.',
    fullDescription:
      'Specialized assembly and "kitting" services integrated with AI-driven automation and robotics to streamline production lines in Tijuana\'s eastern growth corridors.',
    icon: 'automation',
    features: [
      'AI-driven line automation',
      'Robotic kitting and assembly',
      'Production line integration',
      'Eastern corridor facility access',
    ],
    badge: 'Industry 4.0',
    sectors: ['electronics', 'automotive'],
  },
  {
    slug: 'corrugated-solutions',
    title: 'Corrugated Packaging Solutions',
    shortDescription:
      'Custom corrugated boxes engineered with A, B, C, and E flute options for optimal protection.',
    fullDescription:
      'Comprehensive corrugated packaging solutions featuring structural design expertise across all flute types (A, B, C, E) to deliver the perfect balance of protection, cost efficiency, and sustainability for cross-border shipments.',
    icon: 'corrugated',
    features: [
      'Full flute range (A, B, C, E) for varied applications',
      'Custom structural design and CAD engineering',
      'RSC, HSC, and die-cut box styles',
      'ISTA-tested designs for shipping durability',
    ],
    badge: 'Custom Design',
    sectors: ['medical', 'electronics', 'automotive', 'retail', 'pharmaceutical'],
  },
  {
    slug: 'flexible-packaging',
    title: 'Flexible Polyethylene Packaging',
    shortDescription:
      'LDPE and HDPE bags engineered for industrial protection and product integrity.',
    fullDescription:
      'Industrial-grade polyethylene packaging solutions featuring both LDPE (low-density) for flexibility and HDPE (high-density) for strength, engineered to protect components during cross-border transit and storage.',
    icon: 'flexible',
    features: [
      'LDPE bags for cushioning and flexibility',
      'HDPE bags for puncture and moisture resistance',
      'Custom sizes and printing options',
      'Anti-static and VCI options for electronics',
    ],
    badge: 'Industrial Grade',
    sectors: ['electronics', 'automotive', 'retail', 'pharmaceutical'],
  },
];

export function getServices(locale: Locale): Service[] {
  const keys = [
    { slug: 'smart-labeling', key: 'smartLabeling', icon: 'rfid', badge: '$47.72B Market', sectors: ['medical', 'electronics', 'automotive', 'retail'], image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80' }, // Barcode scanning
    { slug: 'medical-packaging', key: 'medicalPkg', icon: 'medical', badge: 'ISO 13485', sectors: ['medical', 'pharmaceutical'], image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80' }, // Medical supplies
    { slug: 'cold-chain', key: 'coldChain', icon: 'coldchain', badge: 'Temp-Safe', sectors: ['medical', 'pharmaceutical', 'electronics'], image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=800&q=80' }, // Cold storage
    { slug: 'sustainability', key: 'sustainability', icon: 'sustainability', badge: '30% Waste Reduction', sectors: ['medical', 'electronics', 'automotive', 'retail'], image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80' }, // Recycling cardboard
    { slug: 'export-crating', key: 'exportCrating', icon: 'crating', badge: 'USMCA', sectors: ['automotive', 'electronics', 'retail'], image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80' }, // Warehouse boxes
    { slug: 'cad-optimization', key: 'cadOpt', icon: 'cad', badge: '20% Smaller', sectors: ['electronics', 'automotive', 'retail'], image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80' }, // CAD engineering
    { slug: 'recycled-resins', key: 'recycledResins', icon: 'recycled', badge: 'APR-PCR-101', sectors: ['medical', 'electronics', 'automotive', 'retail'], image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=800&q=80' }, // Recycled plastic
    { slug: 'automated-kitting', key: 'automatedKitting', icon: 'automation', badge: 'Industry 4.0', sectors: ['electronics', 'automotive'], image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&w=800&q=80' }, // Industrial automation
    { slug: 'corrugated-solutions', key: 'corrugatedSolutions', icon: 'corrugated', badge: 'Custom Design', sectors: ['medical', 'electronics', 'automotive', 'retail', 'pharmaceutical'], image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=800&q=80' }, // Cardboard boxes
    { slug: 'flexible-packaging', key: 'flexiblePkg', icon: 'flexible', badge: 'Industrial Grade', sectors: ['electronics', 'automotive', 'retail', 'pharmaceutical'], image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80' }, // Packaging materials
  ];

  return keys.map(({ slug, key, icon, badge, sectors, image }) => ({
    slug,
    title: t(locale, `svc.${key}.title`),
    shortDescription: t(locale, `svc.${key}.short`),
    fullDescription: t(locale, `svc.${key}.full`),
    icon,
    image,
    features: [
      t(locale, `svc.${key}.f1`),
      t(locale, `svc.${key}.f2`),
      t(locale, `svc.${key}.f3`),
      t(locale, `svc.${key}.f4`),
    ],
    badge,
    sectors,
  }));
}
