import THREE from 'three';
import 'style!css!./main.css';
const renderer = new THREE.WebGLRenderer();
import 'imports?THREE=three!three/examples/js/controls/DeviceOrientationControls';
// import 'imports?THREE=three!three/examples/js/controls/OrbitControls';

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

renderer.setClearColor(0xEEEEEE, 1);
renderer.clear();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);


scene.add(new THREE.GridHelper(500, 10));

camera.position.y = 5;
camera.position.x = 5;
camera.position.z = 5;

camera.lookAt(new THREE.Vector3());


const sphere = new THREE.SphereGeometry(500, 16, 8);
sphere.scale(-1, 1, 1);

scene.add(
  new THREE.Mesh(
    sphere, new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(require('file!./models/360.jpg'))
    })
  )
);

const controls = new THREE.DeviceOrientationControls(camera);
// const controls2 = new THREE.OrbitControls(camera);

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(50, 50, 50),
  new THREE.MeshBasicMaterial({
    color: 0xcccccc
  })
);


cube.position.z = -350;
cube.position.y = -250;

scene.add(new THREE.AxisHelper(100));

scene.add(cube);

scene.add(new THREE.PointLight(0xffffff));

const tick = () => {
  window.requestAnimationFrame(tick);
  // if ('ondeviceorientation' in window) {
  controls.update();
  // } else {
  // controls2.update();
  // }

  renderer.render(scene, camera);
  cube.rotateY(0.5);
};

tick();
