import * as THREE from './three.module.js'
import { OrbitControls } from './orbitcontrols.js'

const canvas = document.querySelector('#context')
const renderer = new THREE.WebGLRenderer({ canvas })

const fov = 75
const aspect = 2
const near = .1
const far = 100
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
camera.position.z = 2;

const controls = new OrbitControls(camera, canvas)
controls.target.set(0, 0, 0)
controls.update()

const scene = new THREE.Scene()

const loader = new THREE.CubeTextureLoader().setPath("media/images/background/")
const texture = loader.load([
  'galaxyPosX.png',
  'galaxyNegX.png',
  'galaxyPosY.png',
  'galaxyNegY.png',
  'galaxyPosZ.png',
  'galaxyNegZ.png',
])

scene.background = texture
controls.autoRotate = true

function resizeRendererToDisplaySize(renderer)
{
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height
  
  if (needResize)
  {
    renderer.setSize(width, height, false);
  }

  return needResize
}

function render(time)
{
  time *= 0.001;
  controls.update()
  
  if (resizeRendererToDisplaySize(renderer))
  {
    const canvas = renderer.domElement
    camera.aspect = canvas.clientWidth / canvas.clientHeight
    camera.updateProjectionMatrix()
  }


  renderer.render(scene, camera)

  requestAnimationFrame(render)
}

requestAnimationFrame(render)

console.log(renderer)
console.log(controls)
console.log(scene)
console.log(loader)