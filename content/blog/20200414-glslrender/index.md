---
title: "続：GLSLをGatsbyに埋め込む"
date: "2020-04-14T00:35:35.2764194+09:00"
description: "空行をちゃんと処理できるように対応してみました"
---

空行をちゃんと処理できるように対応してみました

`glsl:render` でコードブロックを囲んでこんな感じのプラグインを間に挟みました。

```js
"use strict"
const visit = require(`unist-util-visit`)

module.exports = ({ markdownAST }, options = { width: 600, height: 300 }) => {
  visit(markdownAST, `code`, (node) => {
    const { value, lang } = node

    if (lang === `glsl:render`) {
      node.type = "html"
      node.value = `<glsl-canvas data-fragment="${encodeURIComponent(
        value
      )}"></glsl-canvas>`
    }
  })

  return markdownAST
}
```

それに合わせてコンポーネントのほうも修正

```js
import React, { useEffect, useRef } from "react"

export const GlslCanvas = (props) => {
  const { width, height } = props
  const el = useRef(null)
  useEffect(
    (...args) => {
      const m = require("glslCanvas")
      const sandbox = new m.default(el.current)
      const shader = decodeURIComponent(props["data-fragment"])
      sandbox.load(shader)
    },
    [props]
  )

  return <canvas ref={el} width={width ?? 512} height={height ?? 512}></canvas>
}
```

ちゃんとレンダリングできる。

```glsl:render
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 p = gl_FragCoord.xy / u_resolution.xy;
    vec3 color = vec3(p, 0.5 * sin(u_time) + 0.5);
    gl_FragColor = vec4(color, 1.0);
}
```

WebGL 2.0 も使えるようにしたいなぁ。
