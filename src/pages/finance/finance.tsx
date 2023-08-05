import React from 'react';

import { Page } from '@/layouts/main';
import { Sidebar } from '@/layouts/main/page/sidebar';

const Finance = () => {
  return (
    <Page withLayout nav={<Sidebar />}>
      Finance Home
    </Page>
  );
};

export default Finance;
