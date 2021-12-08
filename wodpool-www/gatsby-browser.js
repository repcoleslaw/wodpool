/* eslint-disable import/prefer-default-export,react/jsx-filename-extension */
import React from 'react';
import { Box } from '@material-ui/core';
import { Footer, Header } from './src/components';

export const wrapPageElement = ({ element }) => (
  <>
    <Header />
    <Box minHeight="45vh">{element}</Box>
    <Footer />
  </>
);
