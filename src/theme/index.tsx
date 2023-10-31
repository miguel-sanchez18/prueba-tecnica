import { ReactNode } from 'react';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { createTheme, ThemeOptions, ThemeProvider, Theme } from '@mui/material/styles';

import Config from './config';
import Palette from './palette';
import Typography from './typography';

import componentStyleOverrides from './compStyleOverride';
import customShadows from './shadows';

// types
import { CustomShadowProps } from '../types/theme';
import { TypographyOptions } from '@mui/material/styles/createTypography';

interface Props {
  children: ReactNode;
}

export default function ThemeCustomization({ children }: Props) {
  const { borderRadius, fontFamily, navType, outlinedFilled, presetColor, rtlLayout } = Config;

  const theme: Theme = Palette(navType, presetColor);
  const themeTypography: TypographyOptions = Typography(theme, borderRadius, fontFamily);
  const themeCustomShadows: CustomShadowProps = customShadows(navType, theme);
  const themeOptions: ThemeOptions = {
    direction: rtlLayout ? 'rtl' : 'ltr',
    palette: theme.palette,
    mixins: {
      toolbar: {
        minHeight: '48px',
        padding: '16px',
        '@media (min-width: 600px)': {
          minHeight: '48px'
        }
      }
    },
    typography: themeTypography,
    customShadows: themeCustomShadows
  };

  const themes: Theme = createTheme(themeOptions);
  themes.components = componentStyleOverrides(themes, borderRadius, outlinedFilled);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
