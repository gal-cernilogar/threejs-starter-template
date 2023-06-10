import * as THREE from 'three';
import Cube from "./objects/hello-cube";

export default class Scene extends THREE.Scene {
  private cube;

  constructor() {
    super();

    this.cube = new Cube();

    this.add(this.cube)
  }

  update(dt: number) {
    this.cube.update(dt);
  }
}
