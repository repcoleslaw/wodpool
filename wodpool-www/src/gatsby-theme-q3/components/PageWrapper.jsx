import React from 'react';
import { Box } from '@material-ui/core';
import PageWrapper from 'gatsby-theme-q3/src/components/PageWrapper';
import { Header, Footer } from '../../components';

// eslint-disable-next-line
const CustomPageWrapper = ({ children, ...props }) => (
  <PageWrapper {...props}>
    <main>
      <Header />
      <Box component="article" minHeight="45vh">
        {children}
      </Box>
      <Footer />
    </main>
  </PageWrapper>
);

export default CustomPageWrapper;
