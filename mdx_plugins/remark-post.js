/* eslint-disable @typescript-eslint/no-var-requires */
const find = require("unist-util-find");
const flatFilter = require("unist-util-flat-filter");

function remarkPost() {
  return (tree) => {
    const allocId = (() => {
      /**
       * @type {Set<string>}
       */
      const ids = new Set();

      return (text) => {
        if (!ids.has(text)) {
          ids.add(text);
          return text;
        }

        for (let cnt = 1; ; cnt += 1) {
          const id = `${text}-${cnt}`;
          if (!ids.has(id)) {
            ids.add(id);
            return id;
          }

          cnt += 1;
        }
      };
    })();

    const paragraph = find(tree, (x) => x.type === "paragraph");
    const paragraphText = paragraph
      ? flatFilter(paragraph, (x) => x.type === "text")
      : null;
    const description = paragraphText
      ? paragraphText.children.map((x) => x.value).join("")
      : "";

    const heading = flatFilter(tree, (node) => node.type === "heading");
    const outline = heading
      ? heading.children.map((node) => {
          const level = node.depth;
          const texts = flatFilter(node, (x) => x.type === "text");
          if (!texts) {
            return {
              level,
              text: "",
              id: allocId("-"),
            };
          }

          const text = texts.children.map((y) => y.value).join("");
          const id = allocId(text);

          const { children } = node;
          // eslint-disable-next-line no-param-reassign
          node.children = [
            {
              type: "link",
              url: `#${id}`,
              title: null,
              children,
            },
          ];

          return {
            id,
            level,
            text,
          };
        })
      : [];

    tree.children.push({
      type: "export",
      value: `export const summary = ${JSON.stringify({
        description,
        outline,
      })}`,
    });
  };
}

module.exports = remarkPost;
