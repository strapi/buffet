const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Buffet.js — React Components Library built with styled-components',
    description:
      'Buffet is an open-source React components system based on styled-components, made for creating better user experiences in application interfaces.',
    author: '@strapijs',
    image: '/images/cover-buffet.png', // Path to your image you placed in the 'static' folder
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-54313258-11',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,

        exclude: [],
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public|dist|.storybook)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: 'gatsby-plugin-alias-imports',
    //   options: {
    //     alias: {
    //       react: path.resolve(__dirname, 'node_modules/react'),
    //       'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
    //     },
    //     extensions: [],
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
