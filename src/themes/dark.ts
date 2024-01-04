import { DefaultTheme } from 'styled-components';
import { TTheme } from './light';

export default {
  title: 'dark',

  colors: {
    primary: '#15b7b9', // Dark Cyan
    secondary: '#8BC34A', // Light Green
    background: '#303030', // Dark Background
    accent: '#FF9800', // Orange
    highlight: '#EC407A', // Dark Pink

    text: '#EEEEEE', // Light Gray
    success: '#4CAF50', // Green 500
    warn: '#FFC107', // Amber 500
    error: '#FF5252', // Red 500
    info: '#2196F3', // Blue 500
    neutral: '#B0BEC5', // Blue Gray 500
    disabled: '#CCCCCC', // Light Gray
    selected: 'rgba(255, 255, 255, 0.7)', // Low Opacity White
  },
  spacing: {
    xsm: '4px', // Extra Small
    sm: '8px', // Small
    md: '16px', // Medium
    lg: '24px', // Large
    xlg: '32px', // Extra Large
  },

  fontSize: {
    xsm: '12px', // Extra Small
    sm: '14px', // Small
    md: '16px', // Medium
    lg: '18px', // Large
    xlg: '24px', // Extra Large
  },
} as TTheme
