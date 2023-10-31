import { PaletteMode } from '@mui/material';

export type ConfigProps = {
  fontFamily: string;
  borderRadius: number;
  outlinedFilled: boolean;
  navType: PaletteMode;
  presetColor: string;
  locale: string;
  rtlLayout: boolean;
  container: boolean;
};

const config: ConfigProps = {
  fontFamily: `'Roboto', sans-serif`,
  borderRadius: 8,
  outlinedFilled: true,
  navType: 'light', // light, dark
  presetColor: 'default', // default, theme1, theme2, theme3, theme4, theme5, theme6
  locale: 'en',
  rtlLayout: false,
  container: false
};

export default config;
