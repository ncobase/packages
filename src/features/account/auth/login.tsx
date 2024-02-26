import React from 'react';

import { Flex, Paper } from '@mantine/core';
import { useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import { Footer } from '@/components/footer/footer';
import { Page } from '@/components/layout';
import { Logo } from '@/components/logo';
import { LoginForm } from '@/features/account/auth/login_form';
import classes from '@/features/account/styles.module.css';
import { useRedirectFromUrl } from '@/router/use_redirect_from_url';

export const Login = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const redirect = useRedirectFromUrl();
  const onLogin = () => {
    queryClient.clear();
    redirect();
  };
  return (
    <Page title={t('account:login.title')} layout={false} sidebar={false}>
      <Flex justify='center' align='center' direction='column' className={classes.authWrapper}>
        <Paper p='xl' shadow='lg' w={{ base: '96%', sm: 480 }} mt='-3.5rem' radius='md'>
          <Flex justify='center' display='block' mb='xl' mt='xs'>
            <Logo type='full-mask' height='2.25rem' />
          </Flex>
          <LoginForm onSuccess={onLogin} />
        </Paper>
        <Footer />
      </Flex>
    </Page>
  );
};
