/* eslint-disable @typescript-eslint/no-var-requires */
const mdx = require("@mdx-js/mdx");
const remarkMdxSummary = require("./remark-post");

describe("MDXSummary", () => {
  test("Contain jsx", async () => {
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
      remarkPlugins: [remarkMdxSummary],
      rehypePlugins: [],
    });

    const m = result.match(/export const summary = ([^;]*)/m);
    const summary = JSON.parse(m[1]);

    expect(summary).toEqual({
      description: "Body1",
      outline: [
        {
          id: "Heading1",
          level: 1,
          text: "Heading1",
        },
        {
          id: "Heading2",
          level: 1,
          text: "Heading2",
        },
      ],
    });
  });

  test("1 header, 1 body", async () => {
    const MDXContent = `
# Heading1

Body1

`;
    const result = await mdx(MDXContent, {
      remarkPlugins: [remarkMdxSummary],
      rehypePlugins: [],
    });

    const m = result.match(/export const summary = ([^;]*)/m);
    const summary = JSON.parse(m[1]);
    expect(summary).toEqual({
      description: "Body1",
      outline: [
        {
          id: "Heading1",
          level: 1,
          text: "Heading1",
        },
      ],
    });
  });

  test("2 header, 1 body", async () => {
    const MDXContent = `
# Heading1

Body1

# Heading2
`;
    const result = await mdx(MDXContent, {
      remarkPlugins: [remarkMdxSummary],
      rehypePlugins: [
        // () => (tree) => console.log(JSON.stringify(tree, null, 2)),
      ],
    });
    // console.log(JSON.stringify(result, null, 2));

    const m = result.match(/export const summary = ([^;]*)/m);
    const summary = JSON.parse(m[1]);
    expect(summary).toEqual({
      description: "Body1",
      outline: [
        {
          id: "Heading1",
          level: 1,
          text: "Heading1",
        },
        {
          id: "Heading2",
          level: 1,
          text: "Heading2",
        },
      ],
    });
  });

  test("no header, 1 body", async () => {
    const MDXContent = `
Body1
`;
    const result = await mdx(MDXContent, {
      remarkPlugins: [remarkMdxSummary],
      rehypePlugins: [],
    });

    const m = result.match(/export const summary = ([^;]*)/m);
    const summary = JSON.parse(m[1]);
    expect(summary).toEqual({
      description: "Body1",
      outline: [],
    });
  });

  test("outline", async () => {
    const MDXContent = `
# Level1
## Level2
### Level3
`;
    const result = await mdx(MDXContent, {
      remarkPlugins: [remarkMdxSummary],
      rehypePlugins: [],
    });

    const m = result.match(/export const summary = ([^;]*)/m);
    const summary = JSON.parse(m[1]);

    expect(summary).toEqual({
      description: "",
      outline: [
        { id: "Level1", level: 1, text: "Level1" },
        { id: "Level2", level: 2, text: "Level2" },
        { id: "Level3", level: 3, text: "Level3" },
      ],
    });
  });
});
