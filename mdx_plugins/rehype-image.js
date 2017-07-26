/* eslint-disable @typescript-eslint/no-var-requires */
const visit = require("unist-util-visit");

function rehypeImage() {
  /**
   *
   * @param {{type: string, tagName: string, value: string, properties?: {src?: string, alt?: string}}} node
   */
  const visitor = (node) => {
    if (
      node.type !== "element" ||
      node.tagName !== "img" ||
      node.properties == null ||
      !node.properties.src
    ) {
      return;
    }

    /* eslint-disable no-param-reassign */
    node.type = "jsx";
    node.value = node.properties.alt
      ? `<img src={require("${node.properties.src}")} alt="${node.properties.alt}" />`
      : `<img src={require("${node.properties.src}")} />`;
    /* eslint-enable no-param-reassign */
  };

  return (tree) => {
    visit(tree, "element", visitor);
  };
}

module.exports = rehypeImage;
