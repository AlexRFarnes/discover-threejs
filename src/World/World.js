import { createCamera } from "./components/camera";
import { createCube } from "./components/cube";
import { createCube2 } from "./components/cube2";
import { createScene } from "./components/scene";
import { createLights } from "./components/lights";

import { createRenderer } from "./systems/renderer";
import { Resizer } from "./systems/Resizer";

// These variables are module-scoped: we cannot access them from outside the module
let camera;
let renderer;
let scene;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);

    const cube = createCube();
    const cube2 = createCube2();
    const light = createLights();

    scene.add(cube, cube2, light);

    const resizer = new Resizer(container, camera, renderer);
  }
  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }
}

export { World };
