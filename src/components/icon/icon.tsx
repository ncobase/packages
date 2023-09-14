import * as Icon from '@tabler/icons-react';
import { TablerIconsProps } from '@tabler/icons-react';
import React from 'react';

import { useTheme } from '@/themes';

interface IProps extends TablerIconsProps {
  name: keyof typeof Icon;
}

export const DIcon: React.FC<IProps> = ({ name, size = 16, strokeWidth = 1.5, ...rest }) => {
  const { colors } = useTheme();
  const Component = Icon[name] as React.FC<TablerIconsProps>;
  if (!Component) {
    return null;
  }
  return <Component size={size} strokeWidth={strokeWidth} color={colors.slate[5]} {...rest} />;
};
