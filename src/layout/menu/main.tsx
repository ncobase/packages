import { Anchor, Center, Group, Menu } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import { useStyles } from '@/layout/menu/main.styles';
import { useListMenus } from '@/pages/system/menu/menu.service';
import { MainMenuProps } from '@/pages/system/menu/menu.types';

export const MainMenu = () => {
  const { t } = useTranslation();
  const { classes } = useStyles();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isActive = (to: string) => pathname.startsWith(to);

  const renderMenuItems = (menuItems: MainMenuProps[]) =>
    menuItems.map(item => <Menu.Item key={item.label}>{t(item.label)}</Menu.Item>);

  const renderLink = ({ id, path, label, children, hidden }: MainMenuProps) => {
    if (hidden) return null;

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      navigate(path);
    };

    if (children && children.length > 0) {
      const menuItems = renderMenuItems(children!);
      return (
        <Menu key={id || label} trigger='hover' transitionProps={{ duration: 0 }} withinPortal>
          <Menu.Target>
            <Anchor className={classes.link} onClick={handleClick}>
              <Center>
                <span className={classes.linkLabel}>{t(label)}</span>
                <IconChevronDown size='0.9rem' />
              </Center>
            </Anchor>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Anchor
        key={id || label}
        title={t(label) as string}
        className={`${classes.link} ${isActive(path) ? classes.linkActive : ''}`}
        onClick={handleClick}
      >
        {t(label)}
      </Anchor>
    );
  };

  // TODO: add useMenuTree method
  const { menus } = useListMenus({ type: 'main' });
  if (!menus) return null;

  return (
    <Group spacing={5} className={classes.links}>
      {menus.map(renderLink)}
    </Group>
  );
};
