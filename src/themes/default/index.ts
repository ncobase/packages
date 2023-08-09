import { MantineThemeOverride } from '@mantine/core';

type Layout = Record<string, any>;
interface ThemeOverride extends MantineThemeOverride {
  layout: Layout;
}

import { colors } from '@/themes/default/colors';
import { globalStyles } from '@/themes/default/global';
import { other } from '@/themes/default/other';
import { spacing } from '@/themes/default/spacing';
import { typography } from '@/themes/default/typography';

// ref: https://github.com/mantinedev/mantine/blob/master/src/mantine-styles/src/theme/default-theme.ts
export default {
  globalStyles,
  primaryColor: 'brand',
  dateFormat: 'YYYY-MM-DD',
  ...typography,
  colors,
  defaultRadius: 'sm',
  datesLocale: 'zh',
  spacing,
  other
} as Partial<ThemeOverride>;
