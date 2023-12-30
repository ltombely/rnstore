import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
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
}
