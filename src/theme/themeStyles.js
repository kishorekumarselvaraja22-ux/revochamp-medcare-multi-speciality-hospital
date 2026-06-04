import { hexToRgb } from '../utils/helpers';

export function getThemeStyles(theme) {
  return {
    '--primary': theme?.primaryColorHex || '#0D9488',
    '--secondary': theme?.secondaryColorHex || '#0F766E',
    '--accent': theme?.accentColorHex || '#E11D48',
    '--bg': theme?.backgroundColorHex || '#FFFFFF',
    '--text': theme?.textColorHex || '#1E293B',
    '--primary-rgb': theme?.primaryColorHex ? hexToRgb(theme.primaryColorHex) : '13, 148, 136',
    '--secondary-rgb': theme?.secondaryColorHex ? hexToRgb(theme.secondaryColorHex) : '15, 118, 110',
    '--accent-rgb': theme?.accentColorHex ? hexToRgb(theme.accentColorHex) : '225, 29, 72',
    '--button-radius': theme?.buttonRadius !== undefined ? `${theme.buttonRadius}px` : '8px',
    '--card-radius': theme?.cardRadius !== undefined ? `${theme.cardRadius}px` : '12px',
  };
}