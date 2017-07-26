"use strict"
const visit = require(`unist-util-visit`)

module.exports = ({ markdownAST }, options = { width: 600, height: 300 }) => {
  visit(markdownAST, `code`, (node) => {
    const { value, lang } = node

    if (lang === `glsl:render`) {
      node.type = "html"
      node.value = `<glsl-frag-canvas data-fragment="${encodeURIComponent(
        value
      )}"></glsl-frag-canvas>`
    }
  })

  return markdownAST
}
