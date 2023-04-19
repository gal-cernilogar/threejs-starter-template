import * as THREE from 'three';

export default function createCamera(domContainer: HTMLElement) {
  const camera = new THREE.PerspectiveCamera(45, domContainer.clientWidth / domContainer.clientHeight, 0.1, 1000);
  camera.position.setFromSphericalCoords(5, Math.PI / 2, 0);

  return camera;
}