import Base from './Base';
import THREE from 'three';

class Line extends Base {
  componentDidMount() {
    super.componentDidMount();

    // width height depth
    const geometry = new THREE.Geometry(1, 1, 1);

    // simple shaded flat or wireframe
    const material = new THREE.LineBasicMaterial({
      color: 0x0000ff
    });

    geometry.vertices.push(
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 0, 1),
      new THREE.Vector3(0, 1, 1),
      new THREE.Vector3(1, 1, 1)
    );

    const line = new THREE.Line(geometry, material);

    this.scene.add(line);

    this.tick = () => {
      line.rotateY(0.1);
    };
  }
}

export default Line;

