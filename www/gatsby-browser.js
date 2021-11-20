/* eslint-disable import/prefer-default-export,react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Footer, Header } from './src/components';

export const wrapPageElement = ({ element }) => (
  <>
    <Header />
    {element}
    <Footer />
  </>
);
