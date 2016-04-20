import Base from './Base';
import THREE from 'three';
import { findDOMNode } from 'react-dom';

// this is mind blowing
import 'imports?THREE=three!three/examples/js/loaders/OBJLoader';
import 'imports?THREE=three!three/examples/js/controls/OrbitControls';

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

      const controls = new THREE.OrbitControls(this.camera, findDOMNode(this));
      controls.enableZoom = true;

      this.tick = () => {
        controls.update();
      };
    });
    this.scene.add(new THREE.AmbientLight(0xffffff));
  }
}

export default OBJLoader;

