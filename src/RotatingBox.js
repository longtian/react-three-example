import Base from './Base';
import THREE from 'three';

class RotatingBox extends Base {
  componentDidMount() {
    super.componentDidMount();

    // width height depth
    const geometry = new THREE.BoxGeometry(1, 1, 1);

    // simple shaded flat or wireframe
    const material = new THREE.MeshBasicMaterial({
      wireframe: true
    });

    const cube = new THREE.Mesh(geometry, material);

    cube.position.y = 0.5;

    this.scene.add(cube);

    this.tick = () => {
      cube.rotation.y += 0.1;
    };
  }
}

export default RotatingBox;

