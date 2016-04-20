console.clear();

import React from 'react';
import { render } from 'react-dom';
import THREE from 'three';

const ASPECT = 1;

class App extends React.Component {
  componentDidMount() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, ASPECT, 0.1, 100);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(300, 300);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({
      wireframe: true
    });
    const cube = new THREE.Mesh(geometry, material);

    camera.position.z = 5;

    document.body.appendChild(renderer.domElement);

    window.camera = camera;

    cube.rotateX(0.2);

    const draw = () => {
      requestAnimationFrame(draw);
      renderer.render(scene, camera);

      cube.rotateY(0.1);
    };

    const axisHelper = new THREE.AxisHelper(5);

    scene.add(cube);
    scene.add(axisHelper);

    draw();
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

App.displayName = 'App';


const element = document.createElement('div');

document.body.appendChild(element);

render(<App />, element);
