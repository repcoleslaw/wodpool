import React from 'react';
import { Box } from '@material-ui/core';
import PageWrapper from 'gatsby-theme-q3/src/components/PageWrapper';
import { Header, Footer } from '../../components';

// eslint-disable-next-line
const CustomPageWrapper = ({ children, ...props }) => (
  <PageWrapper {...props}>
    <Header />
    <Box minHeight="45vh">{children}</Box>
    <Footer />
  </PageWrapper>
);

export default CustomPageWrapper;
