import React, { HtmlHTMLAttributes, memo } from 'react';

import { cn } from '@tone/utils';

const defaultStyling =
  'fixed left-0 right-0 top-0 z-[999] flex flex-shrink-0 h-14 bg-brand-800 shadow-[0_1px_2px_0_rgba(0,0,0,0.03)]';

interface IProps extends React.PropsWithChildren<HtmlHTMLAttributes<HTMLDivElement>> {}

export const ShellHeader: React.FC<IProps> = memo(({ children, className, ...rest }) => {
  if (!children) return null;
  const classes = cn(defaultStyling, className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
});
