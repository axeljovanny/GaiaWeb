/**
 * @type {import('gatsby').GatsbyConfig}
 */

const siteUrl = process.env.URL || `https://gaiaevolutionspaandsalon.com`


module.exports = {
  siteMetadata: {
    title: `Gaia Evolution | Organic Spa & Salon in Illinois`,
    description: `Experience organic beauty at Gaia Evolution Spa in Illinois. Our holistic approach rejuvenates your skin, body, and soul. Join us on a journey to well-being!`,
    siteUrl: `https://gaiaevolutionspaandsalon.com/`,
    author: `@ldstudio`,
    image: `/gatsby-icon.png`,
  },
  plugins: ["gatsby-plugin-styled-components","gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": `images`,
        "path": `${__dirname}/src/images`
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://gaiaevolutionspaandsalon.com/',
        sitemap: 'https://gaiaevolutionspaandsalon.com/sitemap-index.xml',
        policy: [{userAgent: '*', allow: '/'}],
      }
    },

    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
    {
      resolve: 'gatsby-source-google-spreadsheets',
      options: {
        spreadsheetId: '1J1mOfNo2aM6GeUlZaw0bJwVnG3bkRGKAi_xFslILvWY',
        worksheetTitle: 'Services',
        credentials: process.env.GOOGLE_SHEETS_CREDENTIALS
          ? JSON.parse(process.env.GOOGLE_SHEETS_CREDENTIALS)
          : require('./secret.json'),
        filterNode: () => true,
        mapNode: node => node
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/admin', '/confirmed'],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GATSBY_GA_TRACKING_ID || "G-Z5TEGPK2P1",
          process.env.GATSBY_GA_ADS_ID || "AW-11407137706",
        ],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    
  ]
};