import * as THREE from 'three';

export default function createRenderer(domContainer: HTMLElement) {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(domContainer.clientWidth, domContainer.clientHeight);
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.shadowMap.enabled = true;
  domContainer.appendChild(renderer.domElement);

  return renderer;
}