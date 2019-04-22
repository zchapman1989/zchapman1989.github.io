module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Source Sans Pro`,
            subsets: [`sans-serif`],
            variants: [`400`, `700`]
          },        
        ],
      },
    }
  ]
}
