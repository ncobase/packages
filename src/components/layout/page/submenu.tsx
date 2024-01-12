import React from 'react';

import { IconPlus } from '@tabler/icons-react';

import { usePageContext } from '@/components/layout';
import { useTheme } from '@/themes';

interface SubmenuProps extends React.PropsWithChildren {}

export const Submenu: React.FC<SubmenuProps> = () => {
  const { other } = useTheme();

  const { layout, topbar } = usePageContext();

  return (
    <div
      className='fixed z-20 w-44 h-full max-w-sm/2 p-5 bg-white shadow-sm overflow-auto text-xs text-slate-600 font-medium'
      style={{
        width: other.layout.submenu.width,
        top: layout ? other.layout.header.height : 0,
        marginTop: topbar ? other.layout.topbar.height : 0
      }}
    >
      <div className='text-slate-600 font-bold border-b pb-2 border-dashed border-slate-200'>
        <span>模型</span>
        <IconPlus className='float-right text-blue-600 cursor-pointer' size='16' />
      </div>
      <div className='px-3 py-2 my-3 bg-slate-100 cursor-pointer rounded'>
        <span className='text-blue-600'>用户</span>
      </div>
      <div className='px-3 py-2 my-3 hover:bg-slate-100 cursor-pointer rounded'>
        <span>权限</span>
      </div>
      <div className='px-3 py-2 my-3 hover:bg-slate-100 cursor-pointer rounded'>
        <span>角色</span>
      </div>
      <div className='px-3 py-2 my-3 hover:bg-slate-100 cursor-pointer rounded'>
        <span>站点</span>
      </div>
      <div className='text-slate-600 font-bold border-b pb-2 border-dashed border-slate-200'>
        <span>组件</span>
        <IconPlus className='float-right text-blue-600 cursor-pointer' size='16' />
      </div>
      <div className='px-3 py-2 my-3 hover:bg-slate-100 cursor-pointer rounded'>
        <span>元素</span>
      </div>
      <div className='px-3 py-2 my-3 hover:bg-slate-100 cursor-pointer rounded'>
        <span>布局</span>
      </div>
      <div className='px-3 py-2 my-3 hover:bg-slate-100 cursor-pointer rounded'>
        <span>模板</span>
      </div>
      <div className='text-slate-600 font-bold border-b pb-2 border-dashed border-slate-200'>
        <span>效率</span>
        <IconPlus className='float-right text-blue-600 cursor-pointer' size='16' />
      </div>
      <div className='px-3 py-2 my-3 hover:bg-slate-100 cursor-pointer rounded'>
        <span>流程</span>
      </div>
      <div className='px-3 py-2 my-3 hover:bg-slate-100 cursor-pointer rounded'>
        <span>大小</span>
      </div>
    </div>
  );
};
