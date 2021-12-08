/* eslint-disable import/prefer-default-export,react/jsx-filename-extension */
import React from 'react';
import { Box } from '@material-ui/core';
import { PageWrapper } from 'gatsby-theme-q3/src/components';
import { Footer, Header } from './src/components';

export { wrapRootElement } from 'gatsby-theme-q3/gatsby-ssr';

export const wrapPageElement = ({ element }, plugin) => (
  <PageWrapper {...plugin}>
    <Header />
    <Box minHeight="45vh">{element}</Box>
    <Footer />
  </PageWrapper>
);
