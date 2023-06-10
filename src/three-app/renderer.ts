import * as THREE from 'three';

export default class Renderer extends THREE.WebGLRenderer {
  constructor(domContainer: HTMLElement) {
    super({ antialias: true })

    this.setPixelRatio(window.devicePixelRatio);
    this.setSize(domContainer.clientWidth, domContainer.clientHeight);
    this.outputEncoding = THREE.sRGBEncoding;
    this.shadowMap.enabled = true;
    
    domContainer.appendChild(this.domElement);
  }
}
