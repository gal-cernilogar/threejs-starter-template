import Renderer from './renderer';
import Camera from './camera';
import Scene from './scene';
import Controls from './tools/controls'
import Clock from './tools/clock'
import Stats from './tools/stats'

export default class ThreeApp {
  private renderer;
  private camera;
  private scene;
  private clock;
  private controls;

  private stats;

  constructor(domContainer: HTMLElement) {
    this.renderer = new Renderer(domContainer);
    this.camera = new Camera(domContainer);
    this.scene = new Scene();
    this.controls = new Controls(this.camera, this.renderer.domElement);
    this.clock = new Clock();

    this.stats = new Stats();
    domContainer.appendChild(this.stats.dom)
  }

  update() {
    const dt = this.clock.getDelta();

    this.scene.update(dt);
    this.controls.update();
    this.renderer.render(this.scene, this.camera);

    this.stats.update()
  }

  run() {
    this.renderer.setAnimationLoop(this.update.bind(this));
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  handleResize(domContainer: Element) {
    this.camera.aspect = domContainer.clientWidth / domContainer.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(domContainer.clientWidth, domContainer.clientHeight);
    this.renderer.render(this.scene, this.camera);
  }
}
