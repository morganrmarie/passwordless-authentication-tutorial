let magic

if (typeof window !== `undefined`) {
  const Magic = require("magic-sdk")
  magic = new Magic(process.env.GATSBY_MAGIC_PUBLISHABLE_API_KEY)
}

export { magic }
