import { BASE_COLORS, COLORS } from './colors.ts';
import { generateColorVariations } from './generateColorVariations.js';

export const appColorsList = Object.fromEntries(
  COLORS.map((color) => [color, generateColorVariations(color)]),
) as Record<(typeof COLORS)[number], string[]>;

export const baseColorsList = Object.fromEntries(
  BASE_COLORS.map((color) => [color, generateColorVariations(color, { prefix: 'base' })]),
) as Record<(typeof BASE_COLORS)[number], string[]>;
