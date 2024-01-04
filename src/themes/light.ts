export default {
  title: 'light',

  colors: {
    primary: '#42c3c5', // RCyan
    secondary: '#4CAF50', // Green
    background: '#FFFFFF', // White
    accent: '#FFC107', // Amber
    highlight: '#F06292', // Pink

    text: '#333333', // Black
    success: '#8BC34A', // Green 500
    warn: '#FFC107', // Amber 500
    error: '#FF5252', // Red 500
    info: '#2196F3', // Blue 500
    neutral: '#9E9E9E', // Gray 500
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

export type TTheme = {
  title: string;

  colors: {
    primary: string;
    secondary: string;
    background: string;
    accent: string;
    highlight: string;

    text: string;
    success: string;
    warn: string;
    error: string;
    info: string;
    neutral: string;
    disabled: string
    selected: string
  };

  spacing: {
    xsm: string;
    sm: string;
    md: string;
    lg: string;
    xlg: string;
  };

  fontSize: {
    xsm: string;
    sm: string;
    md: string;
    lg: string;
    xlg: string;
  };
}