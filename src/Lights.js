import Base from './Base';
import THREE from 'three';

class Line extends Base {
  componentDidMount() {
    super.componentDidMount();

    const light = new THREE.PointLight(0xff0000, 10, 100);

    for (let i = 0; i < 3; i++) {
      const cube = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshStandardMaterial({
          color: 0xffffff
        })
      );
      this.scene.add(cube);
      cube.position.x = i * 2;
    }

    light.position.set(2, 2, 0);

    this.scene.add(light);
    this.scene.add(new THREE.GridHelper(10, 1));
    this.scene.add(new THREE.AmbientLight(0xffffff));
    this.scene.add(
      new THREE.PointLightHelper(light, 2)
    );


    let i = 0;

    this.tick = () => {
      i += 0.01;
      light.position.set(2 * Math.sin(i), 2 * Math.cos(i), 0);
      this.camera.lookAt(light.position);
    };
  }
}

export default Line;

