/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gaia Evolution | Spa & Salon`,
    description: `Gaia Evolution Spa & Salon is a haven for natural beauty and wellness in Illinois, committed to promoting organic health and beauty. Our philosophy is rooted in balance and harmony with nature, a principle that permeates every aspect of our services and environment.

    At Gaia Evolution, we believe in the power of organic products and in providing spa and salon experiences that not only enhance beauty but also nurture and rejuvenate the skin, hair, and body. Our team of highly skilled professionals is dedicated to your well-being, working hand in hand with you to achieve the results you desire.
    
    From custom haircuts and styling to rejuvenating facials and relaxing massages, our service catalog is diverse and comprehensive. We also offer manicure and pedicure services that accentuate your natural elegance. Our environment is designed to provide comfort and relaxation, serving as a refuge from the stresses of daily life.
    
    At Gaia Evolution Spa & Salon, we invite you to experience organic beauty and tranquility. We hope you'll join us soon on your journey to optimal look and feel!`,
    siteUrl: `https://gaiaevolutionspaandsalon.com/`,
    author: `@ldstudio`,
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": `images`,
      "path": `${__dirname}/src/images`
    },
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
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
        "G-LSYD37FEWL", // Google Analytics / GA      
      ],
      pluginConfig: {
        // Puts tracking script in the head instead of the body
        head: true,
      },
    },
  },
]
};