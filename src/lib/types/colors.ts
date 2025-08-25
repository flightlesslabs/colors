/** Component Color*/
export type ComponentColorPriority = 'primary' | 'secondary' | 'neutral';
export const componentColorPriorityArray: ComponentColorPriority[] = [
  'primary',
  'secondary',
  'neutral',
];

export type ComponentColorSeverity = 'safe' | 'warning' | 'danger';
export const componentColorSeverityArray: ComponentColorSeverity[] = ['safe', 'warning', 'danger'];

export type ComponentColor = ComponentColorPriority | ComponentColorSeverity;
export const componentColorArray: ComponentColor[] = [
  ...componentColorPriorityArray,
  ...componentColorSeverityArray,
];
