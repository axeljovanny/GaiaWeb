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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`
      }
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`us`],
        defaultLanguage: `us`,
        siteUrl: `https://gaiaevolutionspaandsalon.com/`,
        // if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
        trailingSlash: 'always',
        // you can pass any i18next options
        i18nextOptions: {
          interpolation: {
            escapeValue: false // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false
        },
        pages: [
          {
            matchPath: '/preview',
            languages: ['us']
          }
        ]
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
        credentials: require('./secret.json'),
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
          "G-Z5TEGPK2P1", // Google Analytics / GA      
        ],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    
  ]
};