/* eslint-disable @typescript-eslint/no-var-requires */
const mdx = require("@mdx-js/mdx");
const rehypePost = require("./rehype-post");
const remarkPost = require("./remark-post");

describe("rehype-custom-heading", () => {
  test("rehype-custom-heading", async () => {
    const MDXContent = `
# Heading1

Body1

From <Color bgBlack white bold> MDX! </Color>

<Box marginTop={1}>
  <Color bgCyan white bold>
    I'm a cyan box!
  </Color>
</Box>

# Heading2

Body2

`;
    const result = await mdx(MDXContent, {
      remarkPlugins: [remarkPost],
      rehypePlugins: [rehypePost],
    });

    expect(result).toEqual(expect.stringContaining('"id": "Heading1"'));
    expect(result).toEqual(expect.stringContaining('"id": "Heading2"'));
  });
});
