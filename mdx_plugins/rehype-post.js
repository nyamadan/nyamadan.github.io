/* eslint-disable @typescript-eslint/no-var-requires */
const flatFilter = require("unist-util-flat-filter");
/* eslint-enable @typescript-eslint/no-var-requires */

function rehypePost() {
  return (tree) => {
    import("unist-util-visit").then(({ visit }) => {
      visit(tree, (node) => {
        if (node.type !== "element") {
          return;
        }

        /**
         * @type {string?}
         */
        const href = node?.properties?.href;
        if (href != null && /^http?s:\/\//.test(href)) {
          // eslint-disable-next-line no-param-reassign
          node.properties = {
            ...node.properties,
            target: "_blank",
            rel: "noopener noreferrer",
          };
        }
      });
    });

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
