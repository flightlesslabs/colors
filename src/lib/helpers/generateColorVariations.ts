/**
 * Prefix types for color tokens.
 * - `color` → semantic tokens (e.g. --dodo-color-primary-500)
 * - `base` → raw/base tokens (e.g. --dodo-color-base-blue-500)
 */
type Prefix = 'color' | 'base';

/**
 * Returns the correct CSS variable prefix.
 *
 * @param prefix - The prefix type ('color' or 'base')
 * @returns The CSS variable prefix string
 */
function getPrefix(prefix: Prefix): string {
  return prefix === 'base' ? '--dodo-color-base' : '--dodo-color';
}

/**
 * Generates a list of CSS variable names for a given color scale.
 *
 * Always returns scale values: 50 → 900 + 950
 *
 * @param color - The color name (e.g. 'primary', 'blue', 'neutral')
 * @param options - Optional configuration
 * @param options.prefix - Token prefix type ('color' | 'base'), defaults to 'color'
 *
 * @returns Array of CSS variable names
 *
 * @example
 * generateColorVariations('primary')
 * // → ["--dodo-color-primary-50", ..., "--dodo-color-primary-950"]
 *
 * @example
 * generateColorVariations('blue', { prefix: 'base' })
 * // → ["--dodo-color-base-blue-50", ..., "--dodo-color-base-blue-950"]
 */
export function generateColorVariations(
  color: string,
  options?: {
    prefix?: Prefix;
  },
): string[] {
  const prefix = getPrefix(options?.prefix ?? 'color');

  return [
    `${prefix}-${color}-50`,
    ...Array.from({ length: 9 }, (_, i) => `${prefix}-${color}-${(i + 1) * 100}`),
    `${prefix}-${color}-950`,
  ];
}
