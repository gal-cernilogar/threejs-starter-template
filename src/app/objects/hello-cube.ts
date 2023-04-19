import * as THREE from 'three';

export default function createCube(scene: THREE.Scene) {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ wireframe: true });
  const mesh = new THREE.Mesh(geometry, material);

  scene.add(mesh)

  function update(dt: number) {
    mesh.rotation.y += 0.1 * dt;
  }

  return { mesh, update };
}