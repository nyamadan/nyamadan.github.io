module.exports = {
  stories: ["../src/stories/*.stories.@(ts|tsx|js|jsx|mdx)"],
  addons: [
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
};
