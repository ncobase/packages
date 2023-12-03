import React from 'react';

import { Page } from '@/components/layout';
import { Topbar } from '@/components/layout/page/topbar';

export const Finance = () => {
  const title = 'Finance Page';

  return (
    <Page layout navbar topbar={<Topbar>Custom topbar element</Topbar>}>
      {title}
    </Page>
  );
};
