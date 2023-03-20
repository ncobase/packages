import { Flex, Paper } from '@mantine/core';
import { useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { useTranslation } from 'react-i18next';

import Logo from '@/components/logo';
import { Page } from '@/layout';
import { useStyles } from '@/pages/account/account.styles';
import { LoginForm } from '@/pages/account/login_form';
import { useRedirectFromUrl } from '@/router/use_redirect_from_url';

const Login = () => {
  const { t } = useTranslation();
  const { classes } = useStyles();
  const queryClient = useQueryClient();
  const redirect = useRedirectFromUrl();
  const onLogin = () => {
    queryClient.clear();
    redirect();
  };
  return (
    <Page title={t('account:login.title')}>
      <Flex justify='center' align='center' className={classes.authWrapper}>
        <Paper p='xl' shadow='md' w={{ base: '96%', sm: 480 }} mt='-3.5rem'>
          <Flex justify='center' display='block' mb='xl' mt='xs'>
            <Logo type='full-mask' height='2.25rem' />
          </Flex>
          <LoginForm onSuccess={onLogin} />
        </Paper>
      </Flex>
    </Page>
  );
};

export default Login;
