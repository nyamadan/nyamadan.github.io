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

    const props = `{...require(${JSON.stringify(node.properties.src)})}`;
    const lqip = `${node.properties.src}?lqip`;
    const placeholder = `require(${JSON.stringify(lqip)})`;
    const alt = JSON.stringify(node.properties.alt);
    /* eslint-disable no-param-reassign */
    node.type = "jsx";
    node.value = `<KeepAspectRatioImage ${props} alt={${alt}} placeholder={${placeholder}} />`;
    /* eslint-enable no-param-reassign */
  };

  return (tree) => {
    tree.children.unshift({
      type: "import",
      value: `import KeepAspectRatioImage from "components/KeepAspectRatioImage";`,
    });

    import("unist-util-visit").then(({ visit }) => {
      visit(tree, "element", visitor);
    });
  };
}

module.exports = rehypeImage;
