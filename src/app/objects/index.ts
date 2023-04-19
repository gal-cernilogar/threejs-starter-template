import * as THREE from 'three';
import createCube from "./hello-cube";

export default function createObjects(scene: THREE.Scene) {
  const cube = createCube(scene);

  function update(dt: number) {
    cube.update(dt);
  }

  return { update }
}