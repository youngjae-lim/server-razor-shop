module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      // secret: env("ADMIN_JWT_SECRET", 'f63c7c2d28f5b39721e246b1ca9da84f'),
      secret: `${process.env.ADMIN_JWT_SECRET}`,
    },
  },
});
