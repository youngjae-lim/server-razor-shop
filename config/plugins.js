if (process.env.NODE_ENV === "production") {
  module.exports = ({ env }) => ({
    // ...
    upload: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_KEY,
        api_secret: process.env.CLOUDINARY_SECRET,
      },
    },
    // ...
  });
} else {
  module.exports = ({ env }) => ({
    // ...
    upload: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
    },
    // ...
  });
}
