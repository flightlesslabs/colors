/**
 * Semantic color names (from --dodo-color-*)
 * Example: --dodo-color-primary-50 → "primary"
 */
export const COLORS = ['neutral', 'primary', 'secondary', 'safe', 'warning', 'danger'] as const;

/**
 * Base color names (from --dodo-color-base-*)
 * Example: --dodo-color-base-red-50 → "red"
 */
export const BASE_COLORS = [
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'mauve',
  'olive',
  'mist',
  'taupe',
] as const;

/**
 * Union type for semantic colors
 */
export type Color = (typeof COLORS)[number];

/**
 * Union type for base colors
 */
export type BaseColor = (typeof BASE_COLORS)[number];
