/* eslint-disable @typescript-eslint/no-var-requires */
const withOptimizedImages = require("next-optimized-images");
const rehypePrism = require("@mapbox/rehype-prism");
const sharp = require("responsive-loader/sharp");
const remarkPost = require("./mdx_plugins/remark-post");
const rehypeImage = require("./mdx_plugins/rehype-image");
const rehypePost = require("./mdx_plugins/rehype-post");

function withImageSize(nextConfig = {}) {
  return {
    ...nextConfig,
    webpack(config, options) {
      config.module.rules.push({
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: [
          {
            loader: require.resolve("./loaders/image-size-loader"),
          },
        ],
      });

      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  };
}

function withMDX(nextConfig = {}) {
  const extension = /\.mdx?$/;

  return {
    ...nextConfig,
    webpack(config, options) {
      config.module.rules.push({
        test: extension,
        use: [
          options.defaultLoaders.babel,
          {
            loader: "@mdx-js/loader",
            options: {
              remarkPlugins: [remarkPost],
              rehypePlugins: [rehypePrism, rehypeImage, rehypePost],
            },
          },
          {
            loader: require.resolve("./loaders/fm-loader"),
          },
        ],
      });

      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  };
}

const host =
  process.env.NODE_ENV === "production"
    ? "nyamadan.github.io"
    : "localhost:3000";
const protocol = process.env.NODE_ENV === "production" ? "https" : "http";

const baseUrl = `${protocol}://${host}`;

module.exports = withMDX(
  withImageSize(
    withOptimizedImages({
      env: {
        host,
        protocol,
        baseUrl,
      },
      responsive: {
        adapter: sharp,
      },
      pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
      images: {
        disableStaticImages: true,
      },
    })
  )
);
