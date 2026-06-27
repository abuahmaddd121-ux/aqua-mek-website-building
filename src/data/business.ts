/**
 * Language-neutral business facts: contact info, products, prices, water analysis.
 * Edit prices / phone / products HERE — these values are shared across all 3 languages.
 * (Translatable labels live in src/i18n/content.ts.)
 */
import type { ImageMetadata } from 'astro';

import logo from '@/assets/brand/logo.png';
import bottle05 from '@/assets/products/bottle-0-5l.png';
import bottle1 from '@/assets/products/bottle-1l.png';
import bottle15 from '@/assets/products/bottle-1-5l.png';
import bottle5 from '@/assets/products/bottle-5l.png';
import bottle12 from '@/assets/products/bottle-12l.png';
import bottle19 from '@/assets/products/bottle-19l.png';
import dispenserImg from '@/assets/products/dispenser.png';

export const brand = {
  name: 'AQUA №1',
  /** Raw digits used to build tel:/wa.me/viber links */
  phoneDigits: '37433755050',
  phoneDisplay: '+374 33 75 50 50',
  email: 'oneaquawater@gmail.com',
  instagramUrl: 'https://www.instagram.com/aqua.mek/',
  instagramHandle: '@aqua.mek',
  currency: 'AMD',
} as const;

export const logoImg: ImageMetadata = logo;

export const links = {
  tel: `tel:+${brand.phoneDigits}`,
  whatsapp: `https://wa.me/${brand.phoneDigits}`,
  viber: `viber://chat?number=%2B${brand.phoneDigits}`,
  email: `mailto:${brand.email}`,
} as const;

export type ProductGroup = 'retail' | 'delivery';

export interface Product {
  id: string;
  /** e.g. "0.5 L" — language-neutral */
  size: string;
  /** price in AMD */
  price: number;
  image: ImageMetadata;
  group: ProductGroup;
  /** show the "most popular" badge */
  popular?: boolean;
}

/** Bottled water range, smallest → largest. */
export const products: Product[] = [
  { id: 'b05', size: '0.5 L', price: 80, image: bottle05, group: 'retail' },
  { id: 'b1', size: '1 L', price: 120, image: bottle1, group: 'retail' },
  { id: 'b15', size: '1.5 L', price: 150, image: bottle15, group: 'retail' },
  { id: 'b5', size: '5 L', price: 260, image: bottle5, group: 'retail' },
  { id: 'b12', size: '12 L', price: 1100, image: bottle12, group: 'delivery' },
  { id: 'b19', size: '19 L', price: 1600, image: bottle19, group: 'delivery', popular: true },
];

export const dispenserImage: ImageMetadata = dispenserImg;

/** Price of the dispenser deep-cleaning service, in AMD. */
export const dispenserCleaningPrice = 5800;
/** Minimum monthly 19 L bottles that unlock a free dispenser. */
export const freeDispenserThreshold = 8;

export type MineralUnit = 'mgdm3' | 'none' | 'mgeq';

export interface Mineral {
  key: string;
  /** Chemical formula — language-neutral */
  formula?: string;
  value: string;
  unit: MineralUnit;
}

/** Water analysis as printed on the 19 L label (mg/dm³ unless noted). */
export const minerals: Mineral[] = [
  { key: 'bicarbonate', formula: 'HCO₃⁻', value: '103.7', unit: 'mgdm3' },
  { key: 'sulfate', formula: 'SO₄²⁻', value: '10.7', unit: 'mgdm3' },
  { key: 'potassium', formula: 'K⁺', value: '1.6', unit: 'mgdm3' },
  { key: 'sodium', formula: 'Na⁺', value: '10.3', unit: 'mgdm3' },
  { key: 'magnesium', formula: 'Mg²⁺', value: '6.2', unit: 'mgdm3' },
  { key: 'calcium', formula: 'Ca²⁺', value: '23.04', unit: 'mgdm3' },
  { key: 'ph', formula: 'pH', value: '9.0', unit: 'none' },
  { key: 'mineralization', value: '162.9', unit: 'mgdm3' },
  { key: 'fluoride', formula: 'F⁻', value: '0.18', unit: 'mgdm3' },
  { key: 'hardness', value: '1.66', unit: 'mgeq' },
  { key: 'alkalinity', value: '1.7', unit: 'mgeq' },
];
