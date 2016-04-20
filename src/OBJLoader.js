import Base from './Base';
import THREE from 'three';

// this is mind blowing
import 'imports?THREE=three!three/examples/js/loaders/OBJLoader';

class OBJLoader extends Base {
  componentDidMount() {
    super.componentDidMount();
    const loader = new THREE.OBJLoader();
    loader.load(require('file!./models/lamp.obj'), res => {
      /* eslint-disable */
      res.scale.x = 0.6;
      res.scale.y = 0.6;
      res.scale.z = 0.6;
      /* eslint-enable */

      this.scene.add(res);
      this.tick = () => {
        res.rotateY(0.01);
      };
    });
    this.scene.add(new THREE.AmbientLight(0xffffff));
  }
}

export default OBJLoader;

