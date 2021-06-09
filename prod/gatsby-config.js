require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: "prod"
  },
  plugins: ["gatsby-plugin-sass"]
}
