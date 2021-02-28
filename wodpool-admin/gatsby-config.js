// eslint-disable-next-line
require('dotenv').config();

const { loadContent } = require('gatsby-theme-q3/helpers');
const path = require('path');
const theme = require('./theme');

const locale = loadContent(
  path.resolve(__dirname, './locale'),
);

module.exports = (q3) => ({
  plugins: [
    {
      resolve: 'gatsby-theme-q3',
      options: {
        icon: path.join(__dirname, './static/icon.png'),
        locale,
        theme,
        ...q3,
      },
    },
  ],
});
