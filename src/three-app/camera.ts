import * as THREE from 'three';

export default class Camera extends THREE.PerspectiveCamera {
  constructor(domContainer: HTMLElement) {
    super(45, domContainer.clientWidth / domContainer.clientHeight, 0.1, 1000)
    
    this.position.setFromSphericalCoords(5, Math.PI / 2, 0);
  }
}
