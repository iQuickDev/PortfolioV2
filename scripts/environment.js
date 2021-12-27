import * as THREE from "https://unpkg.com/three@0.125.1/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.125.1/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";

const canvas = document.querySelector('#context')
const renderer = new THREE.WebGLRenderer({ canvas })


const fov = 65
const aspect = 2
const near = .1
const far = 10000
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
camera.position.z = 3500;

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

//controls.autoRotate = true

const light = new THREE.AmbientLight( 0xFFFFFF, 1.5 ); // soft white light
scene.add( light );

let glbLoader = new GLTFLoader()


glbLoader.load("media/3d-models/earth.glb", (gltf) => {scene.add(gltf.scene); gltf.scene.position.set(-2500, 1000, 500); (setInterval(() => {gltf.scene.rotation.y += 0.01}, 50))})
glbLoader.load("media/3d-models/mars.glb", (gltf) => { scene.add(gltf.scene); gltf.scene.position.set(-2500, -1000, 500); (setInterval(() => {gltf.scene.rotation.y += 0.01}, 50))})
glbLoader.load("media/3d-models/saturn.glb", (gltf) => {scene.add(gltf.scene); gltf.scene.position.set(2500, 1000, 500); (setInterval(() => {gltf.scene.rotation.y += 0.01}, 50))})
glbLoader.load("media/3d-models/neptune.glb", (gltf) => {scene.add(gltf.scene); gltf.scene.position.set(2500, -1000, 500); (setInterval(() => {gltf.scene.rotation.y += 0.01}, 50))})

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
console.log(scene.background)
console.log(loader)