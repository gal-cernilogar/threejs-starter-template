import * as THREE from 'three';

export default class Cube extends THREE.Object3D {
  private geometry;
  private material;
  private mesh;

  constructor() {
    super()

    this.geometry = new THREE.BoxGeometry(1, 1, 1);
    this.material = new THREE.MeshBasicMaterial({ wireframe: true });
    this.mesh = new THREE.Mesh(this.geometry, this.material);

    this.add(this.mesh)
  }

  update(dt: number) {
    this.mesh.rotation.y += 0.1 * dt;
  }
}
