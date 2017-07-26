import React, { useEffect, useRef } from "react"
import * as twgl from "twgl.js"

const VertexShaderSource = `
attribute vec3 position;

void main()
{
  gl_Position = vec4(position, 1.0);
}
`

export const GLSLFragCanvas = (props) => {
  const el = useRef(null)

  const { width, height } = props
  const dataFragment = props["data-fragment"]

  useEffect(() => {
    const mouse = { x: 0, y: 0 }

    /**
     * @param {MouseEvent} e
     */
    const onMouseMove = (e) => {
      mouse.x = e.clientX || e.pageX
      mouse.y = e.clientY || e.pageY
    }

    /**
     * @type {HTMLCanvasElement}
     */
    const canvas = el.current;

    canvas.addEventListener("mousemove", onMouseMove, false);

    /**
     * @type {WebGL2RenderingContext | WebGLRenderingContext}
     */
    const gl = canvas.getContext("webgl2") || el.current.getContext("webgl")

    const fragmentShaderSource = decodeURIComponent(dataFragment)

    const programInfo = twgl.createProgramInfo(gl, [
      VertexShaderSource,
      fragmentShaderSource,
    ])

    if (!programInfo) {
      return
    }

    const arrays = {
      position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
    }

    const bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays)

    const realToCSSPixels = window.devicePixelRatio || 1

    function render() {
      /**
       * @type {HTMLCanvasElement}
       */
      const canvas = el.current

      const { width, height } = canvas
      const u_resolution = new Float32Array([width, height])
      const u_mouse = new Float32Array([0.0, 0.0])
      const u_time = performance.now() / 1000.0

      const rect = canvas.getBoundingClientRect()
      if (
        mouse &&
        mouse.x &&
        mouse.x >= rect.left &&
        mouse.x <= rect.right &&
        mouse.y &&
        mouse.y >= rect.top &&
        mouse.y <= rect.bottom
      ) {
        u_mouse[0] = (mouse.x - rect.left) * realToCSSPixels
        u_mouse[1] = canvas.height - (mouse.y - rect.top) * realToCSSPixels
      }

      const uniforms = { u_resolution, u_mouse, u_time }

      gl.viewport(0, 0, width, height)
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

      gl.useProgram(programInfo.program)
      twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo)
      twgl.setUniforms(programInfo, uniforms)
      twgl.drawBufferInfo(gl, bufferInfo)
    }

    function onRequestAnimationFrame() {
      if (el.current == null) {
        return
      }

      render()
      requestAnimationFrame(onRequestAnimationFrame)
    }

    requestAnimationFrame(onRequestAnimationFrame)

    return () => {
      canvas.removeEventListener("mousemove", onMouseMove);
    };
  }, [dataFragment])

  return (
    <canvas
      ref={el}
      width={width ?? 512}
      height={height ?? 512}
    ></canvas>
  )
}
