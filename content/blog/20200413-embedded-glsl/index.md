---
title: "GLSLをGatsbyに埋め込む"
date: "2020-04-13T00:18:28.3176487+09:00"
description: "ブログにシェーダうめこめないかなーと試してみました。"
---

[Gatsby](https://www.gatsbyjs.org/)にシェーダー埋め込みたいなと [glslCanvas](https://github.com/patriciogonzalezvivo/glslCanvas)を[gatsby-remark-component](https://github.com/hebilicious/gatsby-remark-component)で埋め込んでみた。

React コンポーネントはこんな感じ

```jsx
import React, { useEffect, useRef } from "react"

export const GlslCanvas = (props) => {
  const { width, height } = props
  const el = useRef(null)
  useEffect(() => {
    const m = require("glslCanvas")
    const sandbox = new m.default(el.current)
    const shader = el.current.textContent
    sandbox.load(shader)
  }, [])

  return (
    <canvas ref={el} width={width ?? 512} height={height ?? 512}>
      {props.children}
    </canvas>
  )
}
```

それを使う HTML をマークダウンに埋め込む。

```html
<glsl-canvas>
  #ifdef GL_ES precision mediump float; #endif uniform vec2 u_resolution;
  uniform float u_time; void main() { vec2 p = gl_FragCoord.xy /
  u_resolution.xy; vec3 color = vec3(p, 0.5 * sin(u_time) + 0.5); gl_FragColor =
  vec4(color, 1.0); }
</glsl-canvas>
```

結果はこんな感じ。

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

空行があるとパースに失敗するんだけどどうしたものかなぁ。
