import { randomId } from '@mantine/hooks';
import React, { Fragment } from 'react';

import { useTheme } from '@/themes';
import { getInitials } from '@/utils';

export interface TopbarProps extends React.PropsWithChildren {
  title?: string;
  operators?: React.JSX.Element[];
  extras?: React.JSX.Element[];
}

const TopbarWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { other } = useTheme();
  return (
    <div
      className='px-4 h-12 bg-white shadow-sm align-middle items-center flex gap-4'
      style={{ height: other.layout.topbar.height }}
    >
      {children}
    </div>
  );
};

export const Topbar: React.FC<TopbarProps> = ({ title, operators = [], extras = [], children }) => {
  if (children) return <TopbarWrapper>{children}</TopbarWrapper>;
  return (
    <TopbarWrapper>
      {title && (
        <div className='font-bold text-slate-600'>
          {title}
          <span className='pl-px ml-4 w-px bg-slate-200' />
        </div>
      )}
      <div className='gap-4 flex'>
        {operators.map((element, index) => (
          <Fragment key={getInitials(title) + randomId() + '_' + index.toString()}>
            {element}
          </Fragment>
        ))}
      </div>
      <div className='grow flex justify-end items-center gap-4'>
        {extras.map((element, index) => (
          <Fragment key={getInitials(title) + randomId() + '_' + index.toString()}>
            {element}
          </Fragment>
        ))}
      </div>
    </TopbarWrapper>
  );
};
