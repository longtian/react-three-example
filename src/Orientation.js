import Base from './Base';
import THREE from 'three';
import 'imports?THREE=three!three/examples/js/controls/DeviceOrientationControls';

class Line extends Base {
  componentDidMount() {
    super.componentDidMount();

    this.scene.add(
      new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshBasicMaterial({
          color: 0x777777
        })
      )
    );

    const controls = new THREE.DeviceOrientationControls(this.camera);

    this.tick = () => {
      controls.update();
    };
  }
}

export default Line;

