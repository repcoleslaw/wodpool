// eslint-disable-next-line
require('dotenv').config();

const {
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_SPACE_ID,
  DATASOURCE,
} = process.env;

const { loadContent } = require('gatsby-theme-q3/helpers');
const path = require('path');
const theme = require('./theme');

const locale = loadContent(
  path.resolve(__dirname, './locale'),
);

module.exports = {
  siteMetadata: {
    title: 'WODPool',
    description:
      'WODPool is a community that focuses on the distribution of Fitness Equipment, Health Products, and Exercise Programs.',
    siteUrl: 'https://wodpool.com',
    author: 'WODPool ',
    brand: 'WODPool ',
    appDirectory: '/app',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-q3',
      options: {
        title: 'WP',
        contentfulSpaceID: CONTENTFUL_SPACE_ID,
        contentfulAccessToken: CONTENTFUL_ACCESS_TOKEN,
        baseURL: DATASOURCE,
        netlify: true,
        icon: path.join(__dirname, './static/icon.png'),
        locale,
        theme,
      },
    },
  ],
};
