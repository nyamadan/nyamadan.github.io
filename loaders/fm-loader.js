// eslint-disable-next-line @typescript-eslint/no-var-requires
const fm = require("front-matter");

async function loader(content) {
  const callback = this.async();

  const output = fm(content);
  const attributes = [];
  for (const [key, value] of Object.entries(output.attributes)) {
    attributes.push(`export const ${key} = ${JSON.stringify(value)}`);
  }

  const results = `${output.body}\n\n${attributes.join("\n\n")}\n`;

  return callback(null, results);
}

module.exports = loader;
