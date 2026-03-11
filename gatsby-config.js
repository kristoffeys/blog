module.exports = {
  siteMetadata: {
    title: `Kristof Feys`,
    description: `Just another developer ranting away on the world wide web.`,
    author: `Kristof Feys`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Kristof Feys",
        short_name: "Kristof Feys",
        start_url: "/",
        background_color: "#3490dc",
        theme_color: "#3490dc",
        display: "browser",
        icon: "src/images/android-chrome-512x512.png",
      },
    },
    'gatsby-plugin-postcss',
  ],
}
