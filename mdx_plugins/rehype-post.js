/* eslint-disable @typescript-eslint/no-var-requires */
const flatFilter = require("unist-util-flat-filter");

function rehypePost() {
  return (tree) => {
    const elements = flatFilter(tree, (node) => {
      if (node.type !== "element") {
        return false;
      }

      const m = /h\d+/i.test(node.tagName);
      if (!m) {
        return false;
      }

      return true;
    });

    if (elements) {
      elements.children.forEach((node) => {
        const a = node.children?.[0];

        /**
         * @type {string?}
         */
        const href = a?.properties?.href;
        if (href?.[0] === "#") {
          const id = href.slice(1);
          // eslint-disable-next-line no-param-reassign
          node.properties = { ...node.properties, id };
        }
      });
    }
  };
}

module.exports = rehypePost;
