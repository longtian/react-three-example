import Base from './Base';
import THREE from 'three';

class Sprite extends Base {
  componentDidMount() {
    super.componentDidMount();
    const map = new THREE.TextureLoader().load(require('file!./models/logo.png'));
    const material = new THREE.SpriteMaterial({
      map,
      color: 0xffffff
    });
    const sprite = new THREE.Sprite(material);
    sprite.position.x = 4;
    this.scene.add(sprite);

    let i = 0;
    this.tick = () => {
      i += 0.1;
      this.camera.position.set(
        5 * Math.sin(i),
        2,
        5 * Math.cos(i)
      );
      this.camera.lookAt({
        x: 0,
        y: 0,
        z: 0
      });
    };
  }
}

export default Sprite;

