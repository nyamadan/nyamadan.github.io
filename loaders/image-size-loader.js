/* eslint-disable @typescript-eslint/no-var-requires */
const { promisify } = require("util");
const sizeOf = promisify(require("image-size"));
/* eslint-enable @typescript-eslint/no-var-requires */

function loader(source) {
  const callback = this.async();

  const { resourcePath } = this;

  sizeOf(resourcePath)
    .then(({ width, height }) => {
      const result = `${source}
module.exports = Object.assign(module.exports, {
  src: module.exports,
  width: ${width || 0},
  height: ${height || 0}
});
`;
      callback(null, result);
    })
    .catch((err) => {
      callback(err);
    });
}

module.exports = loader;
