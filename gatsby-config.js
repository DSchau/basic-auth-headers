require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `basic-auth-headers`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-gatsby-cloud',
      options: {
        headers: {
          "/*": [
            `Basic-Auth: ${process.env.BASIC_AUTH_USER}:${process.env.BASIC_AUTH_PASSWORD}`
          ]
        },
      }
    }
  ],
}
