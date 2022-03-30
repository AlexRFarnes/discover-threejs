import { Scene, Color } from "three";

function createScene() {
  const scene = new Scene();

  scene.background = new Color("#16F78B");

  return scene;
}

export { createScene };
