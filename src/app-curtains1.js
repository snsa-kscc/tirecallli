const vs = `
			precision mediump float;

			attribute vec3 aVertexPosition;
			attribute vec2 aTextureCoord;

			uniform mat4 uMVMatrix;
			uniform mat4 uPMatrix;

			uniform mat4 uTextureMatrix0;

			varying vec3 vVertexPosition;
			varying vec2 vTextureCoord;

			void main() {
				vec3 vertexPosition = aVertexPosition;

				gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);

				vTextureCoord = (uTextureMatrix0 * vec4(aTextureCoord, 0.0, 1.0)).xy;
				vVertexPosition = vertexPosition;
			}
			`;
const fs = `
			precision mediump float;

			varying vec3 vVertexPosition;
			varying vec2 vTextureCoord;

			uniform float uTime;

			uniform sampler2D uSampler0;

			void main() {
				vec2 textureCoord = vTextureCoord;

				textureCoord.x += sin(textureCoord.x * 50.0) * cos(textureCoord.x * 250.0) * (cos(uTime / 100.0)) / 75.0;

				gl_FragColor = texture2D(uSampler0, textureCoord);
			}
			`;
const planeElements = document.getElementsByClassName("plane");
const params = {
  vertexShader: vs,
  fragmentShader: fs,
  uniforms: {
    time: {
      name: "uTime",
      type: "1f",
      value: 0,
    },
  },
};
addEventListener("load", () => {
  const curtains = new Curtains({
    container: "canvas1",
    pixelRatio: Math.min(1.5, window.devicePixelRatio),
  });

  const plane = new Plane(curtains, planeElements[0], params);

  plane.onRender(() => {
    plane.uniforms.time.value++;
  });
});
