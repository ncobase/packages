import React from 'react';

import { DIcon } from '@/components/icon/icon';
import { Page } from '@/layouts/main';
import { Navbar } from '@/layouts/main/page/navbar';
import { Sidebar } from '@/layouts/main/page/sidebar';
import { Topbar } from '@/layouts/main/page/topbar';

export const Tenant = () => {
  const title = 'Tenant Page';

  const topBarOperators = [
    <button className='max-h-8 rounded-md px-3 py-2 hover:bg-gray-100'>
      <DIcon name='IconPlus' />
    </button>
  ];

  const topBarExtras = [
    <button className='max-h-8 rounded-md px-3 py-2 hover:bg-gray-100'>
      <DIcon name='IconFilter' />
    </button>
  ];

  return (
    <Page
      withLayout
      navbar={<Navbar />}
      topbar={<Topbar title={title} operators={topBarOperators} extras={topBarExtras} />}
      sidebar={<Sidebar />}
    >
      {title}
    </Page>
  );
};
