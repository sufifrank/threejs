const canvas = document.querySelector('.webgl')

const scene = new THREE.Scene()

// ~ Red Cube ~
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)

// ~ Camera ~

const sizes = {
  width: 800,
  height: 600,
}

const { width, height } = sizes

/**
 * PerspectiveCamera params:
 * fov: manage small or large field of view
 * aspect ratio: width/height, is the size of the render ~ viewport
 */
const camera = new THREE.PerspectiveCamera(75, width / height)
camera.position.z = 3
scene.add(camera)

// ~ Renderer ~
const renderer = new THREE.WebGLRenderer({
  canvas,
})
renderer.setSize(width, height)

renderer.render(scene, camera)

console.log('Hello')