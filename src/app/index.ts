import createRenderer from './renderer';
import createCamera from './camera';
import createScene from './scene';
import createObjects from './objects';
import { createOrbitControls, createClock } from './utilities';

export default function createApp(domContainer: HTMLElement) {
  const renderer = createRenderer(domContainer);
  const camera = createCamera(domContainer);
  const scene = createScene();
  const objects = createObjects(scene);

  const clock = createClock();
  const controls = createOrbitControls(camera, renderer);

  function run() {
    renderer.setAnimationLoop(update);
  }

  function update() {
    const dt = clock.getDelta();
    objects.update(dt);
    controls.update();
    renderer.render(scene, camera);
  }

  function stop() {
    renderer.setAnimationLoop(null);
  }

  function handleAppResize(domContainer: Element) {
    camera.aspect = domContainer.clientWidth / domContainer.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(domContainer.clientWidth, domContainer.clientHeight);
    renderer.render(scene, camera);
  }

  return { run, update, stop, handleAppResize }
}